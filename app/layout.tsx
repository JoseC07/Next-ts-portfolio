import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Intro from "@/components/Intro/Intro";
import ExploreBtn from "@/components/Button/ExploreBtn";
import Header from "@/components/Header/Header";
import CardBtn from "@/components/Button/CardBtn";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jose Caudilo, Software Engineer",
  description: "Designed for innovation, created and built on grit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <section className="flex flex-col pt-10 justify-center items-center bg-black relative min-h-screen z-10">
          <Intro></Intro>
          <ExploreBtn></ExploreBtn>
        </section>
        <section className="flex flex-col pt-4 items-center bg-gray-200 relative min-h-screen z-20">
          <Header></Header>
          {children}
          <CardBtn></CardBtn>
        </section>
        
      </body>
    </html>
  );
}
