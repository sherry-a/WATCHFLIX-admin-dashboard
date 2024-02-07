import { ButtonHTMLAttributes, HTMLProps } from "react";
import { ReactComponent as Spinner } from "@/assets/spinner/spinner.svg";
const CustomLoadingButton = ({
  type,
  disabled,
  size = "small",
  title,
  className,
  spinner = "right",
  isLoading = false,
}: ICustomButtonProps): ReturnType<React.FC> => {
  return (
    <button
      disabled={disabled || isLoading}
      type={type}
      className={`text-black mt-2 p-3 h-[40px] flex items-center justify-between ${className} ${buttonSizes[size]}`}
    >
      <Spinner
        className="animate-spin  h-[26px]"
        style={{
          order: spinnerOrder[spinner],
          display: isLoading ? "block" : "none",
        }}
      />
      <div className={isLoading ? "mx-0" : "mx-auto"}>{title}</div>
    </button>
  );
};

const spinnerOrder = {
  left: 0,
  right: 1,
};

const buttonSizes = {
  small: "w-[115px]",
  medium: "w-[130px]",
  large: "w-[150px]",
  fullWidth: "w-full",
  halfWidth: "w-1/2",
};

interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large" | "fullWidth" | "halfWidth";
  className?: HTMLProps<HTMLElement>["className"];
  title: string;
  spinner?: "left" | "right";
  isLoading?: boolean;
}
export default CustomLoadingButton;
