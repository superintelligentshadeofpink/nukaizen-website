import './globals.css'

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
        url: '/og-image.jpg', // Add your Open Graph image
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
    images: ['/og-image.jpg'], // Add your Twitter card image
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
      <head>
        {/* Google Fonts are loaded in globals.css */}
        {/* Add Google Analytics here when ready */}
        {/* Example:
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'YOUR-GA-ID');
          `}
        </Script>
        */}
      </head>
      <body 
        className="antialiased"
        style={{
          backgroundImage: 'url("/images/background.png")',
          backgroundPosition: 'center top -200px',
          backgroundRepeat: 'repeat-y',
          backgroundAttachment: 'fixed',
          backgroundColor: '#dcf1fd',
        }}
      >
        {children}
      </body>
    </html>
  )
}
