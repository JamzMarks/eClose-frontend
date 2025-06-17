'use client'
import Image from "next/image"
import Link from "next/link"
import AuthBtns from "./AuthBtn"
import { useSession } from "next-auth/react"

export const NavBtn = () => {
      const { data: session } = useSession();

    return (
        <div className="flex items-center">
          {session?.user ? (
            <Link href="/profile">
              <Image
                src={session.user.image ?? '/avatar-placeholder.png'}
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full border border-neutral-700"
              />
            </Link>
          ) : (
            <AuthBtns />
          )}
        </div>
    )
}