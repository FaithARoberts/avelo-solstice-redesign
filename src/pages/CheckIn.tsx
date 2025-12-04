import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useBooking } from "@/contexts/BookingContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const CheckIn = () => {
  const navigate = useNavigate();
  const { bookings, updateBookingStatus } = useBooking();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [confirmationCode, setConfirmationCode] = useState("");
  const [lastName, setLastName] = useState(user?.name.split(" ").pop() || "");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!confirmationCode.trim()) {
      setError("Please enter your confirmation code");
      return;
    }

    if (!lastName.trim()) {
      setError("Please enter your last name");
      return;
    }

    // Find booking by confirmation code
    const booking = bookings.find(
      (b) => b.confirmationCode.toUpperCase() === confirmationCode.toUpperCase()
    );

    if (!booking) {
      setError("Booking not found. Please check your confirmation code.");
      toast({
        title: "Booking Not Found",
        description: "We couldn't find a booking with that confirmation code.",
        variant: "destructive",
      });
      return;
    }

    if (booking.status === "checked-in") {
      toast({
        title: "Already Checked In",
        description: "You have already checked in for this flight.",
      });
      navigate("/boarding-pass", { state: { booking } });
      return;
    }

    // Update booking status
    updateBookingStatus(booking.id, "checked-in");

    toast({
      title: "Check-In Complete!",
      description: "Your boarding pass is ready.",
    });

    navigate("/boarding-pass", { state: { booking: { ...booking, status: "checked-in" } } });
  };

  return (
    <div className="min-h-screen bg-avelo-purple-dark flex flex-col">
      <PageHeader />
      
      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-[40px] font-heading font-semibold text-white mb-7">
          Check In
        </h1>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl p-[18px] space-y-7 border-[4px] border-avelo-purple">
            <div className="space-y-2">
              <Label htmlFor="confirmation" className="text-small font-body text-avelo-text-medium font-medium">
                Confirmation Code
              </Label>
              <Input
                id="confirmation"
                type="text"
                placeholder="ABC123"
                value={confirmationCode}
                onChange={(e) => setConfirmationCode(e.target.value.toUpperCase())}
                className="h-11 bg-avelo-yellow border-none rounded-2xl text-base font-body text-avelo-text-dark placeholder:text-avelo-text-dark/60 focus-visible:ring-2 focus-visible:ring-avelo-purple uppercase"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastname" className="text-small font-body text-avelo-text-medium font-medium">
                Last Name
              </Label>
              <Input
                id="lastname"
                type="text"
                placeholder="Smith"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="h-11 bg-avelo-yellow border-none rounded-2xl text-base font-body text-avelo-text-dark placeholder:text-avelo-text-dark/60 focus-visible:ring-2 focus-visible:ring-avelo-purple"
              />
            </div>

            {error && (
              <p className="text-sm text-avelo-error text-center font-body">{error}</p>
            )}

            <Button
              type="submit"
              className="w-full h-12 bg-avelo-purple text-white font-heading text-xl rounded-2xl hover:bg-avelo-purple/90"
            >
              Continue
            </Button>

            <p className="text-tiny font-body text-avelo-text-medium text-center leading-relaxed">
              CONFIRMATION CODE CAN BE FOUND IN YOUR EMAIL
            </p>
          </div>
        </form>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default CheckIn;
