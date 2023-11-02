import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Walk in Grace CM',
  description: 'Save the disabled and Orphans',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  )
}
