import { cn } from "@/lib/utils"

export default function P(
	{ children, ...props }: React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
) {
  return (
    <p className={cn("leading-7 font-roboto text-foreground [&:not(:first-child)]:mt-6", props.className)}>
      {children}
    </p>
  )
}
