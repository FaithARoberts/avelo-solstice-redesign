import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  status: "on-time" | "delayed" | "cancelled";
  className?: string;
}

const StatusBadge = ({ status, className }: StatusBadgeProps) => {
  const variants = {
    "on-time": "bg-[#00A651] text-white",
    delayed: "bg-avelo-error text-white",
    cancelled: "bg-gray-500 text-white",
  };

  const labels = {
    "on-time": "On-time",
    delayed: "Delayed",
    cancelled: "Cancelled",
  };

  return (
    <span
      className={cn(
        "inline-block px-2 py-1 rounded text-[13px] font-body font-semibold",
        variants[status],
        className
      )}
    >
      {labels[status]}
    </span>
  );
};

export default StatusBadge;
