import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SearchBar from '@/components/SearchBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Frontend Test | Mercado Libre',
  description: 'Test práctico para aspirantes al área de frontend de Mercado Libre.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SearchBar />
        {children}
      </body>
    </html>
  )
}
