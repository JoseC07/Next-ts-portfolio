"use client"
import { Button } from "@/components/ui/button";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Explore() {

  const scrollToBottom = () => {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });
};

    return (
    <div className="fixed mb-5 bottom-0 opacity-85 z-10">
      <Button onClick={scrollToBottom} >Explore!</Button>
      </div>
    )
  }