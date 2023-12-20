export default function Anchor({
	children,
	className,
	href
}: {
	children: React.ReactNode,
	className?: string,
	href: string
}) {
	return (
		<a
			href={href}
			rel="noreferer noopener"
			target="_blank"
			className={className}
		>
			{children}
		</a>
	)
}