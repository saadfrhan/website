import { cn } from 'lib/utils';

export function H1(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >
) {
  return (
    <h1
      className={cn(
        'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
        props.className
      )}
      {...props}
    >
      {props.children}
    </h1>
  );
}
