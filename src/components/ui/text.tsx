import { cn } from "@/lib/utils";

type TextVariant = "body" | "body-sm" | "caption";
type TextTone = "default" | "muted";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: TextVariant;
  tone?: TextTone;
}

export function Text({
  variant = "body",
  tone = "default",
  className,
  ...props
}: TextProps) {
  return (
    <p
      className={cn(
        "font-sans",
        {
          "text-body": variant === "body",
          "text-body-sm": variant === "body-sm",
          "text-caption": variant === "caption",
          "text-muted-foreground": tone === "muted",
        },
        className
      )}
      {...props}
    />
  );
}
