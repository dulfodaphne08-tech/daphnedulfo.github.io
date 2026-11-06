import type { Metadata } from 'next'
import Cursor from './components/Cursor'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.css'

export const metadata: Metadata = {
  title: 'Daphne Dulfo | Portfolio',
  description: 'Portfolio of Daphne Dulfo, an aspiring IT professional.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Cursor />
      </body>
    </html>
  )
}
