import Link from "next/link";
import { Footer } from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col items-center justify-center px-6 text-center">
        {/* <h1 className="text-9xl font-light text-amber-600 mb-6 select-none"> */}
          <h1 className="text-9xl font-light text-teste mb-6 select-none">
          404
        </h1>
        <div className="text-xl md:text-3xl">
          <h2 className="font-semibold">OOPS...</h2>
          <p className="text-gray-600 mb-8 wrap">
            A página que você estava buscando não foi encontrada.
          </p>
        </div>

        <Link
          href="/"
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-4xl shadow-md transition"
        >
          Voltar para a página inicial
        </Link>
      </main>
      <Footer />
    </div>
  );
}
