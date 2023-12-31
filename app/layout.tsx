import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { GeistSans } from 'geist/font/sans';
// import Navbar from '@/components/layout/navbar';

const description =
  'Application developer with coding skills & passion for staying current in the industry.';

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
      'Application developer with coding skills & passion for staying current in the industry.',
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
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <body
          className={`${GeistSans.className} container min-[1400px]:max-w-[1200px] max-md:p-0 antialiased flex flex-col md:flex-row mx-auto`}
        >
          <main className="flex-auto flex space-y-3 pb-8 px-4 md:px-0 relative">
            {/* <Navbar /> */}
            {children}
          </main>
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
