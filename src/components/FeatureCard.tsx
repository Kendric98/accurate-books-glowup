
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
  variant?: "default" | "sunset" | "blue";
}

export function FeatureCard({
  title,
  description,
  icon,
  variant = "default",
  className,
  ...props
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 animate-on-scroll",
        {
          "bg-white": variant === "default",
          "bg-gradient-to-r from-accurate-yellow-50 to-accurate-orange-50 border-accurate-orange-200": variant === "sunset",
          "bg-gradient-to-r from-accurate-blue-50 to-accurate-purple-50 border-accurate-blue-200": variant === "blue",
        },
        className
      )}
      {...props}
    >
      {icon && (
        <div className={cn(
          "mb-4",
          {
            "text-accurate-purple-600": variant === "default" || variant === "blue",
            "text-accurate-orange-500": variant === "sunset",
          }
        )}>
          {icon}
        </div>
      )}
      <h3 className={cn(
        "text-xl font-bold mb-2",
        {
          "text-foreground": variant === "default",
          "text-accurate-orange-600": variant === "sunset",
          "text-accurate-blue-700": variant === "blue",
        }
      )}>
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
