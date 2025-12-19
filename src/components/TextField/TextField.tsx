import type { FieldError } from "react-hook-form";
import EyeIcon from "../../assets/mdi--show-outline.svg";
import ClosedEye from "../../assets/mdi--hide-outline.svg";
import { useState } from "react";

const TextField = ({
  classNames,
  type = "text",
  label,
  placeholder,
  error,
  disabled,
  ...props
}: {
  classNames?: { container?: string; label?: string; input?: string };
  type: "password" | "text";
  placeholder?: string;
  label?: string;
  error: FieldError | undefined;
  disabled?: boolean;
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordVisible = type === "password" && showPassword;
  return (
    <div className={`flex flex-col gap-1 ${classNames?.container}`}>
      <label
        className={`font-semibold text-sm ${label ? "block" : "hidden"} ${
          error ? "block text-red-500" : ""
        } ${classNames?.label}`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          disabled={disabled}
          placeholder={placeholder}
          type={isPasswordVisible ? "text" : type}
          className={` w-full
            disabled:bg-gray-100 disabled:cursor-not-allowed  outline-gray-300
            ${
              error
                ? "focus-visible:outline-red-500  outline-red-500  "
                : "focus-visible:outline-gray-300  outline-gray-300 "
            } block py-2 px-2 rounded-md focus-visible:outline-3 outline-2 ${
            classNames?.input
          }`}
          {...props}
        />
        <img
          onClick={() => setShowPassword((prev) => !prev)}
          src={showPassword ? ClosedEye : EyeIcon}
          alt="eye icon"
          className={`absolute shadow-gray-400  cursor-pointer top-1/2 -translate-y-1/2 end-3 ${
            type === "password" ? "block " : "hidden"
          }`}
        />
      </div>
      <p className={`text-sm ${error ? "block text-red-500" : "hidden"}`}>
        {error?.message}
      </p>
    </div>
  );
};

export default TextField;
