import './globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wendy Nieto - Estratega de Plataformas',
  description: 'Ayudo a restaurantes, hoteles, cocinas ocultas y e-commerces a multiplicar sus ingresos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
