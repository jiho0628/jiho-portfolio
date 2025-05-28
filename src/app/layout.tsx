import './globals.css'
import { ReactNode } from 'react'
import BouncingBackGround from '@/components/BouncingBackGround';

export const metadata = {
  title: "JIHO RYUU | PORTFOLIO",
  description: "jiho's portfolio",
  icons: {
    icon: '/favicon.ico', // ←ここ！
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <div id="background-layer" className="fixed inset-0 pointer-events-none" />
        <BouncingBackGround />
        {children}
      </body>
    </html>
  )
}