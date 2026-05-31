import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import TopMarquee from '@/components/TopMarquee'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'BCM BuildMart — Premium Building Materials Supplier in Jaipur',
  description:
    'BCM BuildMart is Jaipur\'s most trusted building material supplier. Bajri, Rodi, Cement, TMT Steel, Sand & Tata Truck delivery across Rajasthan. Founded by Vijendra Kumawat.',
  keywords:
    'building materials jaipur, bajri supplier jaipur, rodi supplier, cement jaipur, TMT steel, construction materials rajasthan, BCM BuildMart, Vijendra Kumawat',
  openGraph: {
    title: 'BCM BuildMart — Building Rajasthan with Quality Materials',
    description:
      'Premium building material supplier in Jaipur. Bajri, Rodi, Cement, TMT Steel with Tata Truck delivery.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* Animated top marquee strip */}
        <TopMarquee />

        {/* Sticky navigation */}
        <Navbar />

        {/* Page content */}
        <main>{children}</main>

        {/* Site footer */}
        <Footer />

        {/* Floating WhatsApp CTA */}
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
