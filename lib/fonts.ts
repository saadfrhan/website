import {Roboto} from 'next/font/google';
import { Open_Sans } from 'next/font/google';

export const roboto = Roboto({
	adjustFontFallback: true,
	display: 'swap',
	fallback: ["sans-serif"],
	preload: true,
	weight: ["300"],
	variable: '--font-roboto',
	subsets: ["latin"]
});

export const openSans = Open_Sans({
	adjustFontFallback: true,
	display: 'swap',
	fallback: ["sans-serif"],
	preload: true,
	weight: ["700"],
	variable: '--font-open-sans',
	subsets: ["latin"]
});
