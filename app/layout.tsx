import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/layout/navbar'
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Saad Farhan',
  description: 'Saad Farhan is an Experienced app developer with coding skills & passion for staying current in the industry.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className='space-y-4'>
        <Navbar />
        <div className='py-10'>
        {children}
        </div>
        </div>
      </ThemeProvider>
      </body>
    </html>
  )
}
