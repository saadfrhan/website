import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/layout/navbar';
import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { formatDistance } from 'date-fns';
import { getLatestCommitDate } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

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
          className={`${inter.className} antialiased max-w-2xl flex flex-col md:flex-row mx-auto`}
        >
          <main className="flex-auto min-w-0 flex flex-col space-y-3 pb-8 px-4 md:px-0">
            <Navbar />
            {children}
          </main>
          <div className="fixed max-sm:bottom-2 max-sm:right-2 bottom-5 right-5 text-xs font-medium text-neutral-400 dark:text-neutral-500">
            Last updated {formatDistance(new Date(await getLatestCommitDate()), new Date(),
              { addSuffix: true }
            )

            }
          </div>
          <Analytics />
        </body>
      </ThemeProvider>
    </html>
  );
}
