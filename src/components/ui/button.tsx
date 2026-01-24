export function Button({
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-body font-medium transition-colors
        bg-primary text-primary-foreground hover:opacity-90 ${className}`}
      {...props}
    />
  );
}
