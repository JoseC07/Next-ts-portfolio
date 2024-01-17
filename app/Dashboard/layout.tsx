import type { Metadata } from 'next'

import  Header  from "../../components/Header/Header"

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
    
   

      <body >
        
        
        <Header></Header>

        {children}
        
      </body>
  
  )
}
