// app/layout.tsx
import '../styles/globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TUGAS TJK - XI TJKT 1',
  description: 'Upload file tugas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body className={`${inter.className} bg-gradient-to-tr from-sky-100 via-white to-indigo-100 min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
