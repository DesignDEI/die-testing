import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel;
}

export function Heading({
  level,
  className,
  ...props
}: HeadingProps) {
  const Tag = `h${level}` as const;

  return (
    <Tag
      className={cn(
        "font-sans",
        {
          "text-h1": level === 1,
          "text-h2": level === 2,
          "text-h3": level === 3,
          "text-h4": level === 4,
          "text-h5": level === 5,
          "text-h6": level === 6,
        },
        className
      )}
      {...props}
    />
  );
}
