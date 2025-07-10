"use client";
import { ErrorMessage } from "@hookform/error-message";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { UserSignupDto } from "@/types/user/auth/auth.dto";
import { FormInput } from "../../components/FormInput";
import { UserSignUp } from "@/app/api/auth/auth";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";


export const SignupForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [erro, setError] = useState<any | null>(null)
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm<UserSignupDto>();
  
  
  const togglePassword = () => {
    setShowPassword(prev => !prev)
  }

  const password = useWatch({ control, name: "password", defaultValue: "" });

  const validations = {
    minLength: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[\W_]/.test(password),
  };
  const passwordValidation = {
  required: "Password is required.",
  validate: {
    minLength: (v: string) => v.length >= 8 || "Minimum 8 characters.",
    uppercase: (v: string) => /[A-Z]/.test(v) || "Uppercase letter required.",
    lowercase: (v: string) => /[a-z]/.test(v) || "Lowercase letter required.",
    number: (v: string) => /\d/.test(v) || "Number required.",
    special: (v: string) => /[\W_]/.test(v) || "Special character required.",
  },
};

  const onSubmit = async (data: UserSignupDto) => {
  try {
    const ret = await UserSignUp(data); // Assincrono
    console.log('Cadastro realizado com sucesso:', ret);

    await signIn('credentials', {
      email: data.email,
      password: data.password,
      // callbackUrl: '/feed'
    });
    router.push("/feed");
  } catch (error: any) {
    console.error('Erro ao cadastrar:', error);
    setError(error?.message || 'Erro desconhecido');
  } finally {
    reset();
  }
};

  
  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>

      {/* <FormInput
          errors={errors}
          register={register}
          inputProps={{
            type: "name",
            id: "name",
            name: "name",
            label: "full name",
          }}
          validation={{
            required: "This is required.",
          }}
        /> */}
      <FormInput
          errors={errors}
          register={register}
          inputProps={{
            type: "email",
            id: "email",
            name: "email",
            label: "email",
          }}
          validation={{
            required: "This is required.",
            pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'Insert a valid email'
            }
          }}
        />
      <FormInput
          errors={errors}
          register={register}
          inputProps={{
            type: "username",
            id: "username",
            name: "username",
            label: "username",
          }}
          validation={{
            required: "This is required.",
          }}
        />
      <div>
         <FormInput
            errors={errors}
            register={register}
            inputProps={{
              type: "password",
              id: "password",
              name: "password",
              label: "password",
            }}
            validation={passwordValidation}
          />
        <ul className="text-sm space-y-1 mt-2">
          <li className={validations.minLength ? "text-green-600" : "text-gray-500"}>
            {validations.minLength ? "✔" : "✖"} Pelo menos 8 caracteres
          </li>
          <li className={validations.uppercase ? "text-green-600" : "text-gray-500"}>
            {validations.uppercase ? "✔" : "✖"} Letra maiúscula
          </li>
          <li className={validations.lowercase ? "text-green-600" : "text-gray-500"}>
            {validations.lowercase ? "✔" : "✖"} Letra minúscula
          </li>
          <li className={validations.number ? "text-green-600" : "text-gray-500"}>
            {validations.number ? "✔" : "✖"} Número
          </li>
          <li className={validations.special ? "text-green-600" : "text-gray-500"}>
            {validations.special ? "✔" : "✖"} Caractere especial
          </li>
        </ul>
      </div>

      <div>
        <button
          type="submit"
          className="flex cursor-pointer w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default SignupForm;
