import { OAuthOptions } from "../components/OAuthOptions";
import Link from "next/link";
import Image from "next/image";
import { SigninForm } from "./components/SigninForm";

export default function SigninPage() {
  return (
    <section className="grid grid-cols-1  md:grid-cols-2  md:min-h-screen">
      {/* banner */}
      <div className="bg-amber-500 hidden md:block">
        <div className="flex items-center justify-center h-full">
          <p className="text-white text-2xl font-bold">Welcome Back!</p>
        </div>
      </div>

      {/* Coluna da direita (formulário) */}
      <div className="flex items-center justify-center px-6 py-12 sm:px-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 text-center">
            <Image
              className="mx-auto h-10 w-auto"
              src="/logo/test.svg"
              alt="Your Company"
              width={40}
              height={40}
            />
            <h1 className="mt-10 text-center font-light text-2xl/9 tracking-tight text-gray-900">
             Sign in to your account
            </h1>
          </div>

          <SigninForm />

          <div className="flex mt-4 justify-between text-sm text-gray-500">
            <p>
              Not a member?{" "}
              <Link
                href="/signup"
                className="font-semibold text-amber-600 hover:text-amber-500"
              >
                Sign up
              </Link>
            </p>
            <a
              href="#"
              className="font-semibold text-amber-600 hover:text-amber-500"
            >
              Forgot your account?
            </a>
          </div>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-500 text-sm">or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <OAuthOptions />
        </div>
      </div>
    </section>
  );
}
