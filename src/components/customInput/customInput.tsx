import { HTMLProps } from "react";
import { UseFormRegister } from "react-hook-form";
import CustomLabel from "../customLabel/customLabel";
const CustomInput = ({
  register,
  inputLabel,
  errorMessage,
  inputName,
  styleLabel,
  className,
  placeHolder,
  stylePlaceHolder,
  styleError,
  styleInputField,
  required = true,
  type="text",
  disabled
}: ICustomInputProps): ReturnType<React.FC> => {
  return (
    <div className={className}>
      <CustomLabel
        inputLabel={inputLabel}
        styleLabel={styleLabel}
        required={required}
      />
      <input
        {...register(inputName)}
        className={`w-full h-12 p-3 hover:bg-neutral-light focus:outline-none focus:bg-neutral-light ring-2 ring-white ${styleInputField}  placeholder:text-placeholder ${stylePlaceHolder}`}
        placeholder={placeHolder}
        type={type}
        disabled={disabled}
      
      />
      <p className={`text-danger ${styleError}`}>
        {errorMessage && `⚠ ${errorMessage}`}
      </p>
    </div>
  );
};

interface ICustomInputProps{
  inputLabel: string;
  inputName: string;
  errorMessage?: string;
  register: UseFormRegister<any>;
  className?: HTMLProps<HTMLElement>["className"];
  styleLabel?: HTMLProps<HTMLElement>["className"];
  stylePlaceHolder?: HTMLProps<HTMLElement>["className"];
  styleError?: HTMLProps<HTMLElement>["className"];
  placeHolder?: string;
  styleInputField?:  HTMLProps<HTMLElement>["className"];
  type?: React.HTMLInputTypeAttribute
  height?: string;
  width?: string;
  required?: boolean;
  disabled?:boolean
} 
export default CustomInput;
