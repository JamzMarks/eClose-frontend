import Link from "next/link"

export const AuthBtns = () => {
    return (
        <div className="flex items-center space-x-3 ml-4">
          <Link href="/signin" className="text-sm hover:underline">
            Login
          </Link>
          <Link
            href="/signup"
            className="text-sm bg-[#e17100] hover:bg-[#d46500] text-black px-4 py-2 rounded-md font-semibold transition"
          >
            Sign Up
          </Link>
        </div>
    )
}

export default AuthBtns;