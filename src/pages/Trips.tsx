import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import TabSwitcher from "@/components/TabSwitcher";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useBooking } from "@/contexts/BookingContext";
import { Plane } from "lucide-react";

const Trips = () => {
  const [activeTab, setActiveTab] = useState("your-flight");
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const { getUserBookings } = useBooking();

  const tabs = [
    { id: "your-flight", label: "Your Flight" },
    { id: "upcoming-flight", label: "Upcoming Flight" },
  ];

  const bookings = isAuthenticated && user ? getUserBookings(user.id) : [];
  const upcomingBookings = bookings.filter(
    (b) => b.status === "booked" || b.status === "confirmed"
  );

  return (
    <div className="min-h-screen bg-avelo-purple-dark flex flex-col">
      <PageHeader />

      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-[40px] font-heading font-semibold text-white mb-7">My Trips</h1>

        <div className="max-w-md mx-auto space-y-7">
          <TabSwitcher tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

          {activeTab === "your-flight" && (
            <>
              {upcomingBookings.length > 0 ? (
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="bg-avelo-card-light rounded-2xl p-5 cursor-pointer hover:bg-avelo-card-light/80 transition-colors"
                      onClick={() => navigate("/boarding-pass", { state: { booking } })}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-sm text-avelo-text-medium">
                            {booking.departureDate}
                          </div>
                          <div className="text-xs text-avelo-text-medium mt-1">
                            Confirmation: {booking.confirmationCode}
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-body rounded-full capitalize">
                          {booking.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="text-left">
                          <div className="text-2xl font-heading font-semibold">
                            {booking.origin.code}
                          </div>
                          <div className="text-sm text-avelo-text-medium">
                            {booking.origin.city}
                          </div>
                        </div>
                        <Plane className="w-6 h-6 text-avelo-purple rotate-90" />
                        <div className="text-right">
                          <div className="text-2xl font-heading font-semibold">
                            {booking.destination.code}
                          </div>
                          <div className="text-sm text-avelo-text-medium">
                            {booking.destination.city}
                          </div>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-border flex justify-between items-center">
                        <span className="text-sm text-avelo-text-medium">
                          {booking.selectedFlight.time} • {booking.passengers} passenger
                          {booking.passengers > 1 ? "s" : ""}
                        </span>
                        <span className="font-heading font-semibold text-avelo-purple">
                          ${booking.totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-white/80 font-body mb-4">No upcoming trips</p>
                  <Button
                    onClick={() => navigate("/book")}
                    className="bg-avelo-yellow text-avelo-purple font-heading rounded-2xl"
                  >
                    Book a Flight
                  </Button>
                </div>
              )}
            </>
          )}

          {activeTab === "upcoming-flight" && (
            <>
              <Button
                onClick={() => navigate("/flight-status")}
                className="w-full h-12 bg-avelo-yellow text-avelo-purple font-heading text-xl rounded-2xl hover:bg-avelo-yellow/90"
              >
                View Flight Status
              </Button>

              <p className="text-base font-body text-white text-center">
                Need to check-in? Flights you've already booked!
              </p>

              <Button
                onClick={() => navigate("/flight-history")}
                className="w-full h-12 bg-avelo-yellow text-avelo-purple font-heading text-xl rounded-2xl hover:bg-avelo-yellow/90"
              >
                View Flight History
              </Button>
            </>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Trips;
