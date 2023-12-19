// styles
import './globals.css'

// const
import { montserrat } from '../constants'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
