export function H2(props: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
      {props.children}
    </h2>
  );
}
