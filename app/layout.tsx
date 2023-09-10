import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/navbar';
import { ThemeProvider } from '@/components/theme-provider';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

const description =
  'Saad Farhan is an Experienced app developer with coding skills & passion for staying current in the industry.';

export const metadata: Metadata = {
  metadataBase: new URL('https://saadfarhan.vercel.app'),
  title: {
    default: 'Saad Farhan',
    template: '%s | Saad Farhan',
  },
  description,
  openGraph: {
    title: 'Saad Farhan',
    description:
      'Saad Farhan is an Experienced app developer with coding skills & passion for staying current in the industry.',
    url: 'https://saadfarhan.vercel.app',
    siteName: 'Saad Farhan',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'Saad Farhan',
    card: 'summary_large_image',
  },
  verification: {
    google: 'zHB4gjR-LZ7okfLYgT9olSwGCyo9geeG3Ky4RUpnr1k',
    yandex: '30dab239bbb58d8f',
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <div className="py-10">{children}</div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
