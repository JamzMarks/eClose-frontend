import Link from "next/link";
import { OAuthOptions } from "../components/OAuthOptions";
import Image from "next/image";
import { SignupForm } from "./components/SignupForm";

export default function SignupPage() {
  return (
    // <section className="grid min-h-full justify-center grid-cols-2 h-screen">
    <section className="grid grid-cols-1 md:grid-cols-2  md:min-h-screen">
      {/* banner */}
      <div className="bg-amber-500 hidden md:block">
        <div className="flex items-center justify-center h-full">
          <p className="text-white text-2xl font-bold">Welcome Back!</p>
        </div>
      </div>

      {/* Coluna da direita (formulário) */}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm self-center px-3 py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            className="mx-auto h-10 w-auto"
            src="/logo/test.svg"
            alt="Your Company"
            width={40}
            height={40}
          />
          <h1 className="mt-10 text-center font-light text-2xl/9 tracking-tight text-gray-900">
            Create an account!
          </h1>
        </div>
        <SignupForm />
        <div className="flex mt-2 justify-between">
          <p className="text-center text-sm/6 text-gray-500">
            Already have an account?
            <Link
              href="/signin"
              className="font-semibold text-amber-600 hover:text-amber-500 ml-0.5"
            >
              Sign in
            </Link>
          </p>
        </div>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <OAuthOptions />
      </div>
    </section>
  );
}
