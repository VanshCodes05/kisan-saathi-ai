import type { Metadata } from 'next'
import { Geist, Geist_Mono, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const _playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const _plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

export const metadata: Metadata = {
  title: 'KISAN SAATHI AI - Graph-e-thon 3.0',
  description: 'Empowering Indian farmers with AI-driven agricultural solutions',
  generator: 'v0.app',
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
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${_playfairDisplay.variable} ${_plusJakartaSans.variable}`}>
      <body className="font-jakarta antialiased bg-white text-gray-900">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
