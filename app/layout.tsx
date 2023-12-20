import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import Navbar from './componentss/navbar/Navbar'
import './globals.css'
import ClientOnly from './componentss/ClientOnly'
import Modal from './componentss/modals/Modal'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal />
        <Navbar />  
        </ClientOnly>
      {children}
      </body>
    </html>
  )
}
