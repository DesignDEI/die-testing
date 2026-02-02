import React from "react"; // ← THIS LINE WAS MISSING
import { cn } from "../../lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-4",
        className
      )}
      {...props}
    />
  );
}
