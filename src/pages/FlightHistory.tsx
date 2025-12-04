import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import FlightCard from "@/components/FlightCard";
import { useAuth } from "@/contexts/AuthContext";
import { useBooking } from "@/contexts/BookingContext";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FlightHistory = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const { getUserBookings } = useBooking();

  const bookings = isAuthenticated && user ? getUserBookings(user.id) : [];

  // Convert bookings to FlightCard format
  const flights = bookings.map((booking) => ({
    origin: booking.origin.code,
    destination: booking.destination.code,
    date: booking.departureDate.toUpperCase(),
    time: booking.selectedFlight.time,
    confirmationCode: booking.confirmationCode,
    status: booking.status as "confirmed" | "booked",
  }));

  return (
    <div className="min-h-screen bg-avelo-purple-dark flex flex-col">
      <PageHeader />

      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-[40px] font-heading font-semibold text-white mb-7">Flight History</h1>

        <div className="space-y-4 max-w-md mx-auto">
          {flights.length > 0 ? (
            flights.map((flight, index) => <FlightCard key={index} {...flight} />)
          ) : (
            <div className="text-center py-8">
              <p className="text-white/80 font-body mb-4">No flight history yet</p>
              <Button
                onClick={() => navigate("/book")}
                className="bg-avelo-yellow text-avelo-purple font-heading rounded-2xl"
              >
                Book Your First Flight
              </Button>
            </div>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default FlightHistory;
