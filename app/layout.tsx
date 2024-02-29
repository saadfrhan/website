import './globals.css';
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { Navbar } from '@/components/navbar';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata: Metadata = {
	metadataBase: new URL('https://saadfarhan.vercel.app'),
	title: {
		default: 'Saad Farhan',
		template: '%s | Saad Farhan',
	},
	description: 'Fullstack developer',
	openGraph: {
		title: 'Saad Farhan',
		description: 'Fullstack developer',
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
		google: 'eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw',
		yandex: '14d2e73487fa6c71',
	},
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
		>
			<body className={`antialiased dark max-w-7xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto ${GeistSans.className}`}>
				<main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
					<Navbar />
					{children}
					<Analytics />
					<SpeedInsights />
				</main>
			</body>
		</html>
	);
}