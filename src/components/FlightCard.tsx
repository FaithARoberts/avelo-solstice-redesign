import { Plane } from "lucide-react";
import { cn } from "@/lib/utils";

interface FlightCardProps {
  origin: string;
  destination: string;
  date: string;
  time: string;
  confirmationCode: string;
  status: "confirmed" | "booked";
  variant?: "yellow" | "white";
}

const FlightCard = ({
  origin,
  destination,
  date,
  time,
  confirmationCode,
  status,
  variant = "yellow",
}: FlightCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl p-[18px] space-y-4",
        variant === "yellow" ? "bg-avelo-yellow" : "bg-white border border-border"
      )}
    >
      <div className="flex items-center justify-center gap-2">
        <span className="text-2xl font-heading font-semibold text-avelo-purple">
          {origin}
        </span>
        <Plane className="w-5 h-5 text-avelo-purple" />
        <span className="text-2xl font-heading font-semibold text-avelo-purple">
          {destination}
        </span>
      </div>
      
      <div className="text-center space-y-1">
        <p className="text-base font-body text-avelo-text-dark">
          {date} at {time}
        </p>
        <p className="text-sm font-body text-avelo-text-light">
          Confirmation Code: {confirmationCode}
        </p>
      </div>
      
      <div className="flex gap-2">
        <div
          className={cn(
            "flex-1 h-2 rounded-full",
            status === "confirmed" ? "bg-[#00A651]" : "bg-avelo-purple"
          )}
        />
        <span className="text-xs font-body text-avelo-text-light uppercase">
          {status}
        </span>
      </div>
    </div>
  );
};

export default FlightCard;
