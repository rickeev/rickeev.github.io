import Navbar from "@/components/Navbar";
import Body from "@/components/Body";
import Footer from "@/components/Footer";

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function IndexPage() {
  return (
    // <main className={inter.className}>
    <main>
      <Navbar />
      <Body />
      <Footer />
    </main>
  );
}
