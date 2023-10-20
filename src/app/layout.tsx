import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'
import './globals.css'

const roboto = Roboto_Mono({weight: ['400', '600', '700'], subsets: ['latin']})

export const metadata: Metadata = {
  title: 'AI App | Landing',
  description: 'AI Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon" />
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
