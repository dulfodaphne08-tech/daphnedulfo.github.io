import './globals.css'
import { ReactLenis } from 'lenis/react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Playfair_Display, Montserrat, Anton } from 'next/font/google'

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '600', '700', '900'], variable: '--font-playfair' })
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-montserrat' })
const anton = Anton({ subsets: ['latin'], weight: '400', variable: '--font-anton' })

export const metadata = {
  title: 'Daphne Dulfo | Portfolio',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} ${anton.variable} font-sans bg-[#f4f4f5]`}>
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