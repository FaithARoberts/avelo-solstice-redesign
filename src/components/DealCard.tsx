import { Plane, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface DealCardProps {
  origin: string;
  destination: string;
  duration: string;
  dateRange: string;
  originalPrice: number;
  currentPrice: number;
}

const DealCard = ({
  origin,
  destination,
  duration,
  dateRange,
  originalPrice,
  currentPrice,
}: DealCardProps) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/flights");
  };

  return (
    <div className="bg-[#C9B8D4] rounded-2xl p-6 space-y-4">
      {/* Flight Route with Price */}
      <div className="flex items-start justify-between gap-4">
        {/* Flight Route Visual */}
        <div className="flex items-center flex-1">
          {/* Origin */}
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 bg-black rounded-full mb-1" />
            <span className="text-2xl font-heading font-semibold text-black">
              {origin}
            </span>
          </div>

          {/* Flight Path */}
          <div className="flex-1 mx-2 relative">
            <svg
              className="w-full h-16"
              viewBox="0 0 200 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 10 50 Q 100 10 190 50"
                stroke="black"
                strokeWidth="2"
                fill="none"
              />
            </svg>
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <Plane className="w-6 h-6 text-black -rotate-45" />
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
              <p className="text-sm font-body font-semibold text-black whitespace-nowrap">
                {duration}
              </p>
              <p className="text-xs font-body text-black whitespace-nowrap">
                {dateRange}
              </p>
            </div>
          </div>

          {/* Destination */}
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 bg-black rounded-full mb-1" />
            <span className="text-2xl font-heading font-semibold text-black">
              {destination}
            </span>
          </div>
        </div>

        {/* Price Section - now in flow, not absolute */}
        <div className="flex flex-col items-end shrink-0">
          <span className="text-lg font-body text-[#A70101] line-through">
            ${originalPrice}
          </span>
          <ArrowDown className="w-4 h-4 text-black" />
          <span className="text-3xl font-heading font-bold text-black">
            ${currentPrice}
          </span>
        </div>
      </div>

      {/* Book Now Button */}
      <Button
        onClick={handleBookNow}
        className="w-full h-14 bg-avelo-yellow hover:bg-avelo-yellow/90 text-black text-xl font-heading font-semibold rounded-2xl"
      >
        Book Now
      </Button>
    </div>
  );
};

export default DealCard;
