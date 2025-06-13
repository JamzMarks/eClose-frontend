export const OAuthOptions = () => {
    return (
        <div className="flex flex-col gap-4 w-full max-w-sm mx-auto mt-6">
            <button className="flex cursor-pointer items-center justify-center gap-2 border border-gray-300 rounded-xl px-4 py-2 hover:bg-gray-100 transition">
                <img src="/google-icon.svg" alt="Google" className="w-5 h-5" />
                <span>Continue with Google</span>
            </button>

            {/* Add more providers as needed */}
        </div>

    )
}