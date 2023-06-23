import '/styles/index.css'

import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '../../prismicio'
import { Analytics } from '@vercel/analytics/react';

import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

export const metadata = {
  title: 'UNSW Adventure Society',
  description: 'Alpaca my bags.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme='light'>
      <body className='bg-stone-100'>
        <Navigation />
        <main className="min-h-screen flex flex-col items-center justify-center">
          {children}
          <Analytics />
        </main>
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  )
}
