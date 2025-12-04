import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Plane } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { useBooking } from "@/contexts/BookingContext";
import SeatMap from "@/components/SeatMap";

const SeatSelection = () => {
  const navigate = useNavigate();
  const { currentBooking, setCurrentBooking } = useBooking();
  const [selectedSeat, setSelectedSeat] = useState<string | null>(
    currentBooking?.selectedSeat || null
  );

  const origin = currentBooking?.origin || { code: "ATL", city: "Atlanta" };
  const destination = currentBooking?.destination || { code: "ALB", city: "Albany" };

  const handleSeatSelect = (seat: string) => {
    setSelectedSeat(seat);
  };

  const handleContinue = () => {
    if (selectedSeat) {
      setCurrentBooking({
        ...currentBooking,
        selectedSeat,
      });
      navigate("/review");
    }
  };

  const getSeatPrice = (seat: string) => {
    const row = parseInt(seat.slice(0, -1));
    if (row <= 5) return 45; // Preferred seating
    if (row >= 10 && row <= 11) return 35; // Exit row
    return 0; // Standard
  };

  const seatPrice = selectedSeat ? getSeatPrice(selectedSeat) : 0;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-avelo-purple-dark border-b border-avelo-purple p-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="hover:scale-110 transition-transform">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-xl font-heading font-semibold text-white">Select Seat</h1>
          <button
            onClick={() => navigate("/review")}
            className="text-sm font-body text-avelo-yellow hover:text-avelo-yellow/80"
          >
            Skip
          </button>
        </div>
      </header>

      <main className="flex-1 bg-avelo-purple-dark pb-24">
        <div className="max-w-md mx-auto px-4 py-6">
          {/* Flight Info */}
          <div className="flex items-center justify-center gap-3 mb-6 text-white">
            <span className="text-xl font-heading">{origin.code}</span>
            <Plane className="w-5 h-5" />
            <span className="text-xl font-heading">{destination.code}</span>
          </div>

          {/* Legend */}
          <div className="flex justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-avelo-yellow rounded" />
              <span className="text-sm text-white font-body">Preferred +$45</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-avelo-card-light rounded" />
              <span className="text-sm text-white font-body">Standard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-avelo-text-medium rounded" />
              <span className="text-sm text-white font-body">Taken</span>
            </div>
          </div>

          {/* Seat Map */}
          <div className="bg-white rounded-2xl p-4 mb-6">
            <SeatMap
              selectedSeat={selectedSeat}
              onSeatSelect={handleSeatSelect}
            />
          </div>

          {/* Selected Seat Info */}
          {selectedSeat && (
            <div className="bg-avelo-card-light rounded-2xl p-4 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-avelo-text-medium font-body">Selected Seat</p>
                  <p className="text-2xl font-heading font-semibold text-avelo-text-dark">
                    {selectedSeat}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-avelo-text-medium font-body">Price</p>
                  <p className="text-2xl font-heading font-semibold text-avelo-purple">
                    {seatPrice > 0 ? `+$${seatPrice}` : "Free"}
                  </p>
                </div>
              </div>
            </div>
          )}

          <Button
            onClick={handleContinue}
            disabled={!selectedSeat}
            className="w-full bg-avelo-yellow hover:bg-avelo-yellow/90 text-avelo-purple font-heading text-xl h-14 rounded-2xl disabled:opacity-50"
          >
            Continue with {selectedSeat || "No Seat"}
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default SeatSelection;
