import './globals.css'
import type { Metadata } from 'next'
import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono(
  { subsets:  ['latin']}
)


export const metadata: Metadata = {
  title: 'Emanuel Gustafzon Software Developer Gothenburg Sweden',
  description: 'Welcome to my portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoMono.className}>{children}</body>
    </html>
  )
}
