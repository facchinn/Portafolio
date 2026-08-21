import type { Metadata } from 'next'
import './globals.css'
import './project3d.css'

export const metadata: Metadata = {
  title: 'Nazareno Facchin | Full Stack Developer',
  description:
    'Portfolio de Nazareno Facchin, desarrollador Full Stack especializado en React, Next.js, Node.js, TypeScript y bases de datos.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
