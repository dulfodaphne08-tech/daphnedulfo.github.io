import './globals.css'
import { ReactLenis } from 'lenis/react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Daphne Dulfo | Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReactLenis root options={{ lerp: 0.05, smoothWheel: true }}>
          <Cursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ReactLenis>
      </body>
    </html>
  )
}