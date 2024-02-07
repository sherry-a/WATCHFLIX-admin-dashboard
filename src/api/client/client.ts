import { TOKEN_KEY } from '@/constants';
import axios, { AxiosResponse } from 'axios';
import { IAxiosOnErrorResponse } from '@/utility/types/axios/axios';
const client = axios.create({
  baseURL: 'http://localhost:9000',
  headers: {
    Authorization: 'Bearer ' + window.localStorage.getItem(TOKEN_KEY),
  },
});

export function setAuthHeader(token: string) {
  client.defaults.headers['Authorization'] = `Bearer ${token}`;
}

const onSuccess = function (response: AxiosResponse<any, any>) {
  console.debug('Request Successful!', response);
  return response.data;
};

const onError = function (error: any): Promise<IAxiosOnErrorResponse> {
  console.error('Request Failed:', error.config);
  if (error.response) {
    // Request was made but server responded with something
    // other than 2xx
    console.error('Status:', error.response.status);
    console.error('Data:', error.response.data);
    console.error('Headers:', error.response.headers);
    if (error.response.data.status === 401) {
      window.localStorage.removeItem(TOKEN_KEY);
      window.location.reload();
    }
  } else {
    // Something else happened while setting up the request
    // triggered the error
    console.error('Error Message:', error.message);
  }

  return Promise.reject({
    errMsg: !error?.response
      ? 'Network Issue!'
      : error?.response?.data?.message || error?.response?.data?.error,
    status: error?.response?.status || 'not status',
  });
};
client.interceptors.response.use(onSuccess, onError);

export default client;
