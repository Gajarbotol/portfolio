import '@/styles/unique-portfolio.css'
import localFont from 'next/font/local'
import type { Metadata } from 'next'

const spaceMono = localFont({
  src: [
    {
      path: '../public/fonts/SpaceMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/SpaceMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'John Doe - Creative Developer',
  description: 'Portfolio of John Doe, a creative developer crafting digital experiences.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={spaceMono.className}>{children}</body>
    </html>
  )
}
