import type { Metadata } from 'next'
import { Inter, Montserrat, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MATMAZEL - Official Hair & Make Up Studio | Women Hair Studio in İzmit',
  description: 'Premium Hair & Make Up Studio in İzmit. Professional hair styling, coloring, cuts, bridal hair, and professional makeup services for women.',
  keywords: 'women hair studio, İzmit, hair salon, makeup studio, bridal hair, professional makeup, MATMAZEL',
  openGraph: {
    title: 'MATMAZEL - Official Hair & Make Up Studio',
    description: 'Premium Hair & Make Up Studio in İzmit',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${inter.variable} ${montserrat.variable} ${poppins.variable}`}>
      <body className="font-body">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

