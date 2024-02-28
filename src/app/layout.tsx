import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.scss'

const inter = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Audiophile Ecommerce',
  description: 'Next.JS solution for Audiophile Ecommerce',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
