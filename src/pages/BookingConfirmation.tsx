import { useNavigate, useLocation } from "react-router-dom";
import { CheckCircle, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";
import type { Booking } from "@/contexts/BookingContext";

const BookingConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const booking = location.state?.booking as Booking | undefined;

  if (!booking) {
    return (
      <div className="min-h-screen bg-avelo-purple-dark flex flex-col items-center justify-center p-4">
        <p className="text-white text-lg mb-4">No booking found</p>
        <Button
          onClick={() => navigate("/book")}
          className="bg-avelo-yellow text-avelo-purple font-heading rounded-2xl"
        >
          Book a Flight
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-avelo-purple-dark flex flex-col">
      <main className="flex-1 pb-24 px-4 pt-12">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-heading font-semibold text-white mb-2">
              Booking Confirmed!
            </h1>
            <p className="text-white/80 font-body">
              Your flight has been successfully booked
            </p>
          </div>

          <div className="bg-avelo-card-light rounded-2xl p-6 mb-6">
            <div className="text-sm text-avelo-text-medium mb-2">Confirmation Code</div>
            <div className="text-3xl font-heading font-bold text-avelo-purple mb-6">
              {booking.confirmationCode}
            </div>

            <div className="flex items-center justify-between mb-4">
              <div className="text-left">
                <div className="text-2xl font-heading font-semibold">{booking.origin.code}</div>
                <div className="text-sm text-avelo-text-medium">{booking.origin.city}</div>
              </div>
              <Plane className="w-8 h-8 text-avelo-purple rotate-90" />
              <div className="text-right">
                <div className="text-2xl font-heading font-semibold">{booking.destination.code}</div>
                <div className="text-sm text-avelo-text-medium">{booking.destination.city}</div>
              </div>
            </div>

            <div className="border-t border-border pt-4 space-y-2 text-left">
              <div className="flex justify-between text-sm">
                <span className="text-avelo-text-medium">Departure</span>
                <span className="font-body">{booking.departureDate}</span>
              </div>
              {booking.returnDate && (
                <div className="flex justify-between text-sm">
                  <span className="text-avelo-text-medium">Return</span>
                  <span className="font-body">{booking.returnDate}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span className="text-avelo-text-medium">Passengers</span>
                <span className="font-body">{booking.passengers}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-avelo-text-medium">Flight Time</span>
                <span className="font-body">{booking.selectedFlight.time}</span>
              </div>
            </div>

            <div className="border-t border-border pt-4 mt-4">
              <div className="flex justify-between font-heading font-semibold text-lg">
                <span>Total Paid</span>
                <span className="text-avelo-purple">${booking.totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Button
              onClick={() => navigate("/trips")}
              className="w-full bg-avelo-yellow text-avelo-purple font-heading text-xl h-12 rounded-2xl hover:bg-avelo-yellow/90"
            >
              View My Trips
            </Button>
            <Button
              onClick={() => navigate("/book")}
              variant="outline"
              className="w-full border-white text-white font-heading text-xl h-12 rounded-2xl hover:bg-white/10"
            >
              Book Another Flight
            </Button>
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default BookingConfirmation;
