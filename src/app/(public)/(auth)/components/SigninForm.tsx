"use client";
import { useForm } from "react-hook-form";
import { FormInput } from "./FormInput";
import { UserSigninDto } from "@/types/user/auth/auth.dto";
import { UserSignin } from "@/api/auth/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";



export const SigninForm = () => {
  const router = useRouter();


  const [error, setError] = useState(null)
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<UserSigninDto>();

  const onSubmit = (data: UserSigninDto) => {
    setError(null);
    UserSignin(data)
    .then((ret) => {
      if(ret?.error){
        throw new Error(ret.message)
      }
      console.log(ret)
      reset();
    })
    .catch((error: any) => {
      setError(error);
    })
    .finally(() => {
      router.push("/feed");
    })
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} method="POST">
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
        }}
        />
        <FormInput
        errors={errors}
        register={register}
        inputProps={{
          type: "password",
          id: "password",
          name: "password",
          label: "password",
        }}
        validation={{
          required: "This is required.",
        }}
        />
      {error && (
        <p className="text-red-500">
          {typeof error === "string" ? error : ''}
        </p>
      )}
      <div>
        <button
          type="submit"
          className="flex cursor-pointer w-full justify-center rounded-md bg-amber-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-amber-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default SigninForm;
