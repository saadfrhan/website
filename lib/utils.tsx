import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { P } from '@/components/ui/p';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function TooltipWrapper({
	label,
	children,
}: {
	label: string;
	children: React.ReactNode;
}) {
	return (
		<Tooltip>
			<TooltipTrigger asChild>{children}</TooltipTrigger>
			<TooltipContent>
				<P>{label}</P>
			</TooltipContent>
		</Tooltip>
	);
}


}