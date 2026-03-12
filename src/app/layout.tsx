import './globals.css'
import { BackgroundAtmosphere } from '@/components/BackgroundAtmosphere'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wendy Nieto - Estratega de Plataformas',
  description: 'Ayudo a restaurantes, hoteles, cocinas ocultas y e-commerces a multiplicar sus ingresos.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="relative">
        <BackgroundAtmosphere />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
