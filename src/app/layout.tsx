import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'Tailwind Demo',
  description: 'Tailwind CSS v3.4.1 layout example',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}