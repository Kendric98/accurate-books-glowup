
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  ...props
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 animate-on-scroll",
        className
      )}
      {...props}
    >
      {icon && <div className="mb-4 text-accurate-purple-600">{icon}</div>}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
