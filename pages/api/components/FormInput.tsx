import { FC, ForwardedRef, forwardRef } from "react";
import { ChangeHandler, FieldError } from "react-hook-form";
interface FormInputProps {
  label: string;
  error?: FieldError;
  value?: string;
  onChange?: ChangeHandler;
  onBlur?: ChangeHandler;
  name?: string;
  className?: string;
}

const FormInput: FC<FormInputProps> = forwardRef(
  (
    { label, name, className, error, onChange, onBlur, value, ...rest }: FormInputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <div className="px-6 2xl:text-[18px] text-10 py-1">
        <label htmlFor={name} className="text-white">
          {label}
        </label>
        <input
          ref={ref}
          onBlur={onBlur}
          onChange={onChange}
          value={value}
          name={name}
          className={className}
          {...rest} 
        />
        {error && <p className="text-red-500">{error.message}</p>}
      </div>
    );
  }
);
export default FormInput;
