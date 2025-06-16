import { Footer } from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar></Navbar>
    <main className='max-w-[1240px] mx-auto'>
      {children}
    </main>
    <Footer></Footer>
    </>
  );
}