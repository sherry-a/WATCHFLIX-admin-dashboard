
import client from "../client/client"
export const signInUser=({email,password}:IUserSignIn)=>{
    return client.post('/users/signin',{
        email,
        password
    })
}
interface IUserSignIn{
    email:string
    password: string
}