import { cn } from "@/lib/utils";

export function H1(
	{children, ...props}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
) {
  return (
    <h1 className={cn("scroll-m-20 font-open-sans text-4xl tracking-tight lg:text-5xl", props.className)} {...props}>
      {children}
    </h1>
  )
}
