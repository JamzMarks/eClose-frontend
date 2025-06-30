import { BottomFooter } from "./components/BottomFooter";
import { UpperFooter } from "./components/UpperFooter";

export const Footer = () => {
  return (
    <footer className="bg-[#121212] text-gray-300">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 lg:py-10">
        <UpperFooter />
        <hr className="my-6 border-gray-400" />
        <BottomFooter />
      </div>
    </footer>
  );
};

