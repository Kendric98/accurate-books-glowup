
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  avatarUrl?: string;
  variant?: "default" | "sunset" | "blue";
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
  avatarUrl,
  variant = "default",
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "rounded-xl p-6 shadow-sm border animate-on-scroll",
        {
          "bg-white border-gray-100": variant === "default",
          "bg-gradient-to-r from-accurate-yellow-50 to-accurate-orange-50 border-accurate-orange-200": variant === "sunset",
          "bg-gradient-to-r from-accurate-blue-50 to-accurate-purple-50 border-accurate-blue-200": variant === "blue",
        },
        className
      )}
      {...props}
    >
      <div className={cn(
        "mb-4",
        {
          "text-accurate-purple-600": variant === "default" || variant === "blue",
          "text-accurate-orange-500": variant === "sunset",
        }
      )}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-8 h-8 opacity-80"
        >
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      </div>
      <p className={cn(
        "mb-6 italic",
        {
          "text-gray-700": variant === "default" || variant === "blue",
          "text-accurate-orange-800": variant === "sunset",
        }
      )}>
        {quote}
      </p>
      <div className="flex items-center">
        {avatarUrl && (
          <img
            src={avatarUrl}
            alt={name}
            className="w-10 h-10 rounded-full mr-3 object-cover"
          />
        )}
        {!avatarUrl && (
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center mr-3",
            {
              "bg-gray-200": variant === "default",
              "bg-accurate-yellow-200": variant === "sunset",
              "bg-accurate-blue-100": variant === "blue",
            }
          )}>
            <span className={cn(
              "font-medium",
              {
                "text-gray-600": variant === "default",
                "text-accurate-orange-800": variant === "sunset",
                "text-accurate-blue-700": variant === "blue",
              }
            )}>
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <h4 className={cn(
            "font-bold",
            {
              "text-foreground": variant === "default",
              "text-accurate-orange-700": variant === "sunset",
              "text-accurate-blue-700": variant === "blue",
            }
          )}>
            {name}
          </h4>
          <p className="text-sm text-gray-600">
            {role && <span>{role}</span>}
            {role && company && <span> • </span>}
            {company && <span>{company}</span>}
          </p>
        </div>
      </div>
    </div>
  );
}
