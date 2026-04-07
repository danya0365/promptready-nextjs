import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
}

const variants = {
  primary: "btn-game",
  secondary:
    "bg-surface-elevated text-text-primary font-semibold rounded-full border border-border hover:border-primary/40 transition-all duration-200 cursor-pointer",
  outline:
    "bg-transparent text-primary font-semibold rounded-full border-2 border-primary/40 hover:bg-primary/10 transition-all duration-200 cursor-pointer",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  className = "",
}: ButtonProps) {
  const classes = `${variants[variant]} ${variant !== "primary" ? sizes[size] : ""} inline-flex items-center gap-2 ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
