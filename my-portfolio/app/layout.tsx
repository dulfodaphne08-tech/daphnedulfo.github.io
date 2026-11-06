import './globals.css'
import { ReactLenis } from 'lenis/react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Daphne Dulfo | BSIT Student Portfolio',
  description: 'Professional Portfolio of Daphne Dulfo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* We add 'as any' to bypass a known React 19 type conflict with Lenis */}
        <ReactLenis root options={{ lerp: 0.05, smoothWheel: true } as any}>
          <Cursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ReactLenis>
      </body>
    </html>
  )
}