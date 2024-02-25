import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/global/navbar";
import { Nunito_Sans, Raleway } from 'next/font/google'

const raleway = Raleway({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-raleway',
})

const nunitosans = Nunito_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-nunitosans',
	weight: '400'
})

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Sanity Next.js Portfolio Site",
	metadataBase: new URL("https://sanity-nextjs-site.vercel.app"),
	description: "A personal portfolio site built with Sanity and Next.js",
	openGraph: {
		images:
			"https://res.cloudinary.com/victoreke/image/upload/v1689893059/docs/og.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`antialiased ${raleway.variable} ${nunitosans.variable} max-w-[94rem] py-16 max-[810px]:p-0 flex flex-col md:flex-row mx-auto max-[768px]:mx-0`}
			>
				<main className="flex-auto min-w-0 flex min-[810px]:px-10 flex-col min-[810px]:space-y-3 px-0">
					<Navbar />
					{children}
				</main>
			</body>
		</html>
	);
}