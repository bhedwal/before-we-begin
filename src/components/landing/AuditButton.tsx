import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function requestAudit(context?: string) {
  toast.success("Audit request received", {
    description: context
      ? `${context} — we'll be in touch within one business day.`
      : "We'll be in touch within one business day.",
  });
}

export function AuditButton({
  label = "Request Your Automation Audit",
  context,
  size = "md",
  variant = "primary",
  className,
}: {
  label?: string;
  context?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "outline";
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => requestAudit(context)}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:brightness-110"
          : "border border-border text-foreground hover:border-primary hover:text-primary",
        size === "sm" && "h-9 px-4 text-sm",
        size === "md" && "h-11 px-5 text-sm",
        size === "lg" && "h-14 px-8 text-base",
        className,
      )}
    >
      {label}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
    </button>
  );
}
