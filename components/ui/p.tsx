import { cn } from '@/lib/utils';

export function P(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >
) {
  return (
    <p className={cn('leading-7 [&:not(:first-child)]:mt-6', props.className)}>
      {props.children}
    </p>
  );
}
