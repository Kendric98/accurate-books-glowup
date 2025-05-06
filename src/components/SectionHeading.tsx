
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  variant?: "default" | "sunset" | "blue";
}

export function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  variant = "default",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12",
        {
          "text-center": alignment === "center",
          "text-left": alignment === "left",
          "text-right": alignment === "right",
        },
        className
      )}
      {...props}
    >
      <h2 className={cn(
        "text-3xl md:text-4xl font-bold mb-4 text-balance",
        {
          "text-foreground": variant === "default",
          "brand-gradient-text": variant === "blue",
          "brand-gradient-text-sunset": variant === "sunset",
        }
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg max-w-3xl mx-auto text-balance",
          {
            "text-gray-600": variant === "default" || variant === "blue",
            "text-accurate-orange-700": variant === "sunset",
          }
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
