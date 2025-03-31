import type { Metadata } from 'next'
import './globals.css'
import { icons } from 'react-icons'

export const metadata: Metadata = {
  title: 'S&Y Consulting',
  description: 'Strategic Solutions for Local Excellence',
  generator: 'v0.dev',
  icons: {
    icon: '/favicon.ico',
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
