import { openSans, roboto } from '@/lib/fonts'
import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: 'Saad Farhan',
  description: 'Passionate developer 🚀 | Open source contributor 💻 | JavaScript enthusiast 🌐 | Lifelong learner 📚 | Let&#39;s innovate together! 🤝',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${openSans.variable}`}>
      <body>
			{children}
			<Analytics />
			</body>
    </html>
  )
}
