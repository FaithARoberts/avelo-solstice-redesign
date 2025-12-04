import { ArrowLeft, Plane, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import airplaneInterior from "@/assets/airplane-interior.jpg";
import { useBooking } from "@/contexts/BookingContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Review = () => {
  const navigate = useNavigate();
  const { currentBooking, saveBooking } = useBooking();
  const { user, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const [isCostSummaryOpen, setIsCostSummaryOpen] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const origin = currentBooking?.origin || { code: "ATL", city: "Atlanta, GA" };
  const destination = currentBooking?.destination || { code: "ALB", city: "Albany, NY" };
  const selectedFlight = currentBooking?.selectedFlight;
  const totalPrice = selectedFlight?.price || 1136.37;
  const taxes = totalPrice * 0.11;
  const baseFare = totalPrice - taxes;

  const handleConfirmBooking = async () => {
    if (!isAuthenticated || !user) {
      toast({
        title: "Login Required",
        description: "Please log in to complete your booking",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    if (!selectedFlight) {
      toast({
        title: "No flight selected",
        description: "Please select a flight first",
        variant: "destructive",
      });
      navigate("/flights");
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const booking = saveBooking(user.id);

    if (booking) {
      toast({
        title: "Booking Confirmed!",
        description: `Confirmation code: ${booking.confirmationCode}`,
      });
      navigate("/booking-confirmation", { state: { booking } });
    } else {
      toast({
        title: "Booking failed",
        description: "Please try again",
        variant: "destructive",
      });
    }

    setIsProcessing(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-avelo-purple-dark border-b border-avelo-purple p-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="hover:scale-110 transition-transform">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-lg font-heading font-semibold text-white">Review and pay</h1>
          <button
            onClick={() => navigate("/book")}
            className="text-sm font-body text-avelo-yellow hover:text-avelo-yellow/80"
          >
            New search
          </button>
        </div>
      </header>

      <main className="flex-1 bg-avelo-purple-dark pb-24">
        <div className="max-w-md mx-auto px-4 py-6">
          <h2 className="text-3xl font-heading font-semibold text-white mb-6">Your trip</h2>

          <div className="flex gap-2 mb-6">
            <Button className="flex-1 bg-avelo-card-light text-avelo-text-dark hover:bg-avelo-card-light/90 rounded-2xl h-auto py-3 font-heading border-b-4 border-avelo-purple">
              {origin.code} - {destination.code}
            </Button>
            {currentBooking?.tripType === "roundTrip" && (
              <Button className="flex-1 bg-avelo-card-light/30 text-white hover:bg-avelo-card-light/40 rounded-2xl h-auto py-3 font-heading">
                {destination.code} - {origin.code}
              </Button>
            )}
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-avelo-card-light rounded-2xl p-5">
              <div className="text-sm text-avelo-text-medium mb-3">
                {currentBooking?.departureDate || "Tuesday, October 28, 2025"}
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-lg font-heading font-semibold">
                    {selectedFlight?.time || "5:24PM"}
                  </div>
                  <div className="text-2xl font-heading font-bold">{origin.code}</div>
                  <div className="text-sm text-avelo-text-medium">{origin.city}</div>
                </div>

                <div className="text-center flex-1 px-4">
                  <div className="text-sm text-avelo-text-medium mb-1">
                    {selectedFlight?.duration || "1h 23m"}
                  </div>
                  <Plane className="w-8 h-8 mx-auto rotate-90 text-avelo-text-dark" />
                </div>

                <div className="text-right">
                  <div className="text-lg font-heading font-semibold">
                    {selectedFlight?.arrivalTime || "6:47PM"}
                  </div>
                  <div className="text-2xl font-heading font-bold">{destination.code}</div>
                  <div className="text-sm text-avelo-text-medium">{destination.city}</div>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-border pt-3">
                <div className="text-sm text-avelo-text-dark">AA 5067 - Main Cabin</div>
                <ChevronDown className="w-5 h-5 text-avelo-text-medium" />
              </div>
            </div>
          </div>

          <div className="bg-avelo-card-light rounded-2xl p-5 mb-6">
            <div className="flex justify-between font-heading font-semibold text-xl">
              <span>Total amount due</span>
              <span className="text-avelo-purple">${totalPrice.toFixed(2)}</span>
            </div>
          </div>

          <Collapsible open={isCostSummaryOpen} onOpenChange={setIsCostSummaryOpen}>
            <div className="bg-avelo-card-light rounded-2xl p-5 mb-6">
              <CollapsibleTrigger className="w-full hover:opacity-80 transition-opacity">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-heading font-semibold">Cost Summary</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-avelo-text-medium transition-transform duration-200 ${
                      isCostSummaryOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent>
                <div className="space-y-2 text-sm mt-4">
                  <div className="flex justify-between">
                    <span>Main x {currentBooking?.passengers || 1}</span>
                    <span className="font-semibold">${baseFare.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-avelo-text-medium">
                    <span>Taxes and carrier imposed fees</span>
                    <span>${taxes.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t border-border pt-2 mt-2">
                    <span>Total fare</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </CollapsibleContent>
            </div>
          </Collapsible>

          <Button
            onClick={handleConfirmBooking}
            disabled={isProcessing}
            className="w-full bg-avelo-yellow hover:bg-avelo-yellow/90 text-avelo-purple font-heading text-xl h-14 rounded-2xl mb-6 disabled:opacity-50"
          >
            {isProcessing ? "Processing..." : "Confirm and Pay"}
          </Button>

          <div className="relative rounded-2xl overflow-hidden mb-6">
            <img
              src={airplaneInterior}
              alt="Airplane interior"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black/60 via-black/30 to-black/20">
              <h2 className="text-white font-heading text-2xl font-semibold text-center px-4 drop-shadow-lg">
                Enjoy Convenient Air Travel with Us
              </h2>
            </div>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Review;
