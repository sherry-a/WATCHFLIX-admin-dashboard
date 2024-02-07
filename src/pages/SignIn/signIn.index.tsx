import CustomForm from "@/components/customForm/customForm";
const SignIn=():ReturnType<React.FC>=>{
    return (
      <div className="flex justify-center items-center w-full h-full">
        <CustomForm className="h-3/4 w-2/3 xs:w-11/12 sm:w-11/12 md:w-4/5 md:max-w-[450px] lg:w-[550px] lg:max-w-none p-7 rounded-xl"/>
      </div>
    );
}
export default SignIn;