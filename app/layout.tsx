import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jose Caudilo, Software Engineer',
  description: 'Designed for innovation, created and built on grit.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    
    <html lang="en">
      <body className={inter.className} >
        {children} 
      </body>
    </html>
  
  )
}
