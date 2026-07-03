import './globals.css'
import AmbientBackground from '@/components/AmbientBackground'
import ScrollProgress from '@/components/ScrollProgress'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Nukaizen | Enterprise IT Solutions for Small Businesses',
  description: 'Expert IT consulting, development, AI automation, and fractional CTO services. 50+ years combined experience helping Australian businesses leverage cutting-edge technology.',
  keywords: 'IT consulting, AI automation, web development, fractional CTO, IoT, embedded systems, Australia, Newcastle',
  authors: [{ name: 'Nukaizen' }],
  creator: 'Nukaizen',
  publisher: 'Nukaizen',
  metadataBase: new URL('https://nukaizen.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nukaizen | Enterprise IT Solutions for Small Businesses',
    description: 'Expert IT consulting and development services with 50+ years combined experience',
    url: 'https://nukaizen.com',
    siteName: 'Nukaizen',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nukaizen - Your Complete IT Solution Provider',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nukaizen | Enterprise IT Solutions',
    description: 'Expert IT consulting and development services',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body className="antialiased">
        <AmbientBackground />
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
