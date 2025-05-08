import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
}
export function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return <div className={cn("mb-4 mt-10", {
    "text-center": alignment === "center",
    "text-left": alignment === "left",
    "text-right": alignment === "right"
  }, className)} {...props}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance px-[2px] mx-0 my-[50px] py-0">{title}</h2>
      {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto text-balance my-0">
          {subtitle}
        </p>}
    </div>;
}