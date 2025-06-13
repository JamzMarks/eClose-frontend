import Link from "next/link";
import { OAuthOptions } from "../components/OAuthOptions";
import SignupForm from "../components/SignupForm";
import Image from "next/image";

export default function SignupPage() {
  return (
    <section className="grid min-h-full justify-center grid-cols-2 h-screen">
      <div className="bg-amber-500 min-h-full">
          <p>hello</p>
      </div>
      

      <div className="sm:mx-auto sm:w-full sm:max-w-sm self-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image className="mx-auto h-10 w-auto" src="/logo/test.svg" alt="Your Company" width={40} height={40} />
        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
          Create an account!
        </h2>
      </div>
        <SignupForm/>
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
        {/* <div className=" text-sm">
          <a
            href="#"
            className="font-semibold text-amber-600 hover:text-amber-500"
          >
            Forgot your account?
          </a>
        </div> */}
      </div>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-gray-500 text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <OAuthOptions></OAuthOptions>
      </div>
    </section>
  );
}
