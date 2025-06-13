import { ErrorMessage } from "@hookform/error-message"
import { FieldErrors, Path, RegisterOptions, UseFormRegister } from "react-hook-form"

interface InputProps<T> extends React.InputHTMLAttributes<HTMLInputElement> {
    name: Path<T>;
    label: string;
}   

interface FormInputProps<T extends Record<string, any>> {
  errors: FieldErrors<T>;
  register: UseFormRegister<T>;
  inputProps: InputProps<T>;
  validation?: RegisterOptions<T>;
}

export const FormInput = <T extends Record<string, any>>({errors, register, inputProps, validation}: FormInputProps<T>) => {
    return(
         <div className="relative mt-2">
            <input
            {...register(inputProps.name, validation)}
            {...inputProps}
            name={inputProps.name}
            placeholder={inputProps.placeholder ? inputProps.placeholder : ''}
            className="peer block w-full appearance-none rounded-md bg-white px-3 pt-5 pb-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder-transparent focus:outline-2 focus:outline-amber-600"
            />
            <label
            htmlFor={inputProps.name}
            className="capitalize absolute text-m text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-amber-600 peer-focus:dark:text-amber-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
                {inputProps.label}
            </label>
            <ErrorMessage
                errors={errors}
                name={inputProps.name as any}
                render={({ message }) => (
                    <p className="text-sm text-red-500 mt-1">{message}</p>
                )}
            />
        </div>
    )
}