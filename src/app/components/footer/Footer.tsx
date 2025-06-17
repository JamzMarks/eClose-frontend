import Link from "next/link";
import Image from "next/image";
import { Socials } from "./components/socials";
import { ROUTES } from "@/constants/routes";

export const Footer = () => {
  return (
    <footer className="bg-white text-sm">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href={ROUTES.HOME} className="flex items-center">
              <Image
                src={"logo/test.svg"}
                alt="logo"
                width={100}
                height={100}
              ></Image>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Resources
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link href="https://flowbite.com/" className="hover:underline">
                    Flowbite
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://tailwindcss.com/"
                    className="hover:underline"
                  >
                    Tailwind CSS
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Follow us
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://github.com/themesberg/flowbite"
                    className="hover:underline "
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://discord.gg/4eeurUVvTy"
                    className="hover:underline"
                  >
                    Discord
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-xs text-gray-500 sm:text-center ">
            © 2024{" "}
            <Link href={ROUTES.HOME} className="hover:underline">
              eClose™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Socials path="a" title="github"></Socials>
            <Socials path="a" title="github"></Socials>
            <Socials path="a" title="github"></Socials>
            <Socials path="a" title="github"></Socials>
          </div>
        </div>
      </div>
    </footer>
  );
};
