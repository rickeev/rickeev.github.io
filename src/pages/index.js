import Header from "@/components/Header";
import Body from "@/components/Body";
import Footer from "@/components/Footer";

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function IndexPage() {
  return (
    // <main className={inter.className}>
    <main>
      <Header />
      <Body />
      <Footer />
    </main>
  );
}
