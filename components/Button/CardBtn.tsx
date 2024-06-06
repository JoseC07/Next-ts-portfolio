"use client"
import { Button } from "@/components/ui/button";
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Card() {
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

return (
<div className="mb-5 bottom-0 opacity-85 z-20">
  <Button onClick={scrollToTop}>Back to Card</Button>
</div>
)
}