"use client";
import { useForm } from "react-hook-form";
import { FormInput } from "./FormInput";
import { UserSigninDto } from "@/types/user/auth/auth.dto";
import { UserSignin } from "@/app/api/auth/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";



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

  const onSubmit = async (data: UserSigninDto) => {
    setError(null);
    UserSignin(data)
    .then((ret) => {
      if(ret?.error){
        throw new Error(ret.message)
      }
      router.push("/feed");
      reset();
    })
    .catch((error: any) => {
      setError(error);
    })
    .finally(() => {
      
    })
    //  const res = await signIn("credentials", {
    //   redirect: false,
    //   email: data.email,
    //   password: data.password,
    // });

    // if (res?.error) {
    //   // setError(true);
    // } else {
    //   reset(); // limpa os campos
    //   window.location.href = "/feed"; // redireciona
    // }
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
