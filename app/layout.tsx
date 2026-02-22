import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'English Academy | Clases de Inglés Personalizadas en Ecuador',
  description:
    'Clases personalizadas de inglés para adolescentes y adultos. Presencial en Quito o virtual en todo Ecuador. Agenda tu diagnostico gratuito.',
  /*
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/book-open-thin.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },*/
}

export const viewport: Viewport = {
  themeColor: '#2a9d8f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html  lang="es"  suppressHydrationWarning className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body suppressHydrationWarning className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
