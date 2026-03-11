import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import { Layout } from '@/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wendy Nieto - TechConsult',
  description: 'Consultoría tecnológica y desarrollo de software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
