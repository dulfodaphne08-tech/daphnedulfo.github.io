import './globals.css'
import { ReactLenis } from 'lenis/react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Plus_Jakarta_Sans, Anton } from 'next/font/google'

// Premium aesthetic font
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })
// Bold impact font for the giant name
const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' })

export const metadata = {
  title: 'Daphne Dulfo | Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${jakarta.className} ${anton.variable}`}>
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