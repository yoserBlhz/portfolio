import React from 'react';
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Benlehzil Yosr Portfolio',
  description: 'Software Developer Portfolio with Cybersecurity Theme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="scan-line"></div>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  )
} 