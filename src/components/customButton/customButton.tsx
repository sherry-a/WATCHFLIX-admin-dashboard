import { ButtonHTMLAttributes, HTMLProps } from "react";

const CustomButton = ({
  type,
  disabled,
  size = "medium",
  title,
  className
}: ICustomButtonProps): ReturnType<React.FC> => {
  return (
    <button
      disabled={disabled}
      type={type}
      className={` text-black mt-2 h-[40px] ${className} ${buttonSizes[size]}`}
    >
      {title}
    </button>
  );
};
const buttonSizes = {
  small: "w-[80px]",
  medium: "w-[100px]",
  large: "w-[120px]",
  fullWidth: "w-full",
  halfWidth: "w-1/2",
};

interface ICustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large" | "fullWidth" | "halfWidth";
  className?: HTMLProps<HTMLElement>["className"];
  title: string
}
export default CustomButton;
