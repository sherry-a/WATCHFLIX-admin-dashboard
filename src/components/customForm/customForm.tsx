import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CustomInput from "../customInput/customInput";
import CustomButton from "../customButton/customButton";
import CustomLoadingButton from "../customLoadingButton/customLoadingButton";
import { HTMLProps } from "react";
import { useMutation } from "@tanstack/react-query";
import { signInUser } from "@/api/user/user";
const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
type FormData = yup.InferType<typeof schema>;
const CustomForm = ({
  width,
  height,
  className,
}: ICustomFormProps): ReturnType<React.FC> => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const {isLoading,mutateAsync:userLoginMutation}=useMutation(signInUser);
  const onSubmit = async(data: FormData) =>{
    const {user,token}=await userLoginMutation(data)
    console.log(user);
    console.log(token);
  }
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col items-center bg-primary-dark ${className}`}
      style={{ height, width }}
    >
      <h2 className="mb-8 text-4xl font-bold text-white">Sign In</h2>
      <CustomInput
        type="email"
        inputLabel="Email"
        inputName="email"
        placeHolder="Enter Email"
        register={register}
        errorMessage={errors.email?.message}
        className="w-full mb-2"
        styleLabel="text-lg text-white font-semibold"
        styleInputField="h-[55px]"
      />
      <CustomInput
        type="password"
        inputLabel="Password"
        inputName="password"
        placeHolder="Enter Password"
        register={register}
        errorMessage={errors.password?.message}
        className="w-full"
        styleLabel="text-lg text-white font-semibold"
        styleInputField="h-[55px] hover:bg-neutral-light"

      />
      <div className="flex self-end mt-3">
        <CustomButton
          title="Cancel"
          type="reset"
          className="h-[45px] mr-2 bg-neutral-light bg-opacity-50 text-lg text-neutral-lighter text-opacity-80 rounded-xl"
        />
        <CustomLoadingButton
          isLoading={isLoading}
          title="Submit"
          type="submit"
          className="h-[45px] bg-primary bg-opacity-70 text-lg text-white rounded-lg font-semibold"
          size="large"
        />
      </div>
    </form>
  );
};
type ICustomFormProps = {
  width?: string;
  height?: string;
  className?: HTMLProps<HTMLElement>["className"];
};
export default CustomForm;
