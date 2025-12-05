import { useLocation } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import QRCode from "react-qr-code";
import { format } from "date-fns";
import { useAuth } from "@/contexts/AuthContext";
import { Booking } from "@/contexts/BookingContext";
import { toast } from "sonner";

const BoardingPass = () => {
  const location = useLocation();
  const { user } = useAuth();
  const booking = location.state?.booking as Booking | undefined;

  // Use booking data or fallback to defaults
  const passengerName = user?.name || "John Smith";
  const origin = booking?.origin?.code || "ONT";
  const destination = booking?.destination?.code || "DAL";
  const flightDate = booking?.departureDate 
    ? format(new Date(booking.departureDate), "MMM dd, yyyy")
    : "JAN 23, 2025";
  const seat = booking?.selectedSeat || "21F";
  const gate = Math.floor(Math.random() * 30) + 1;
  const confirmationCode = booking?.confirmationCode || "ABC123";
  const boardingTime = booking?.selectedFlight?.time 
    ? booking.selectedFlight.time.replace(/(\d+):(\d+)(AM|PM)/, (_, h, m, p) => {
        const hour = parseInt(h) - 1;
        return `${hour || 12}:${m} ${p}`;
      })
    : "11:30 AM";

  const qrValue = `${confirmationCode}-${origin}-${destination}-${booking?.departureDate || "20250123"}`;

  return (
    <div className="min-h-screen bg-avelo-purple-dark flex flex-col">
      <PageHeader />
      
      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-[40px] font-heading font-semibold text-white mb-7">
          🎫 Boarding Pass
        </h1>
        
        <div className="max-w-md mx-auto space-y-4">
          {/* Boarding Pass Card */}
          <div className="bg-avelo-purple rounded-2xl p-[18px] text-white space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-center">
              {passengerName}
            </h2>
            
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl font-heading">{origin}</span>
              <Plane className="w-5 h-5" />
              <span className="text-xl font-heading">{destination}</span>
            </div>
            
            <p className="text-center text-base font-body uppercase">{flightDate}</p>
            
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center">
                <p className="text-[13px] opacity-80">Seat</p>
                <p className="text-xl font-heading">{seat}</p>
              </div>
              <div className="text-center">
                <p className="text-[13px] opacity-80">Gate</p>
                <p className="text-xl font-heading">{gate}</p>
              </div>
              <div className="text-center">
                <p className="text-[13px] opacity-80">Boarding</p>
                <p className="text-xl font-heading">{boardingTime}</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg flex justify-center">
              <QRCode value={qrValue} size={150} />
            </div>
            
            <p className="text-center text-[13px]">
              Confirmation: {confirmationCode}
            </p>
          </div>
          
          {/* Action Buttons */}
          <Button 
            className="w-full h-12 bg-avelo-yellow text-avelo-purple font-heading text-xl rounded-2xl hover:bg-avelo-yellow/90"
            onClick={() => toast.success("Boarding pass added to Apple Wallet!")}
          >
            Add to Apple Wallet
          </Button>
          
          <Button 
            variant="outline"
            className="w-full h-12 bg-transparent border-2 border-avelo-yellow text-avelo-yellow font-heading text-xl rounded-2xl hover:bg-avelo-yellow/10"
          >
            Download Boarding Pass
          </Button>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default BoardingPass;
