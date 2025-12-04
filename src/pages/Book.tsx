import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, User, ArrowLeftRight, ChevronDown, ChevronUp } from "lucide-react";
import { format } from "date-fns";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import CitySearchInput from "@/components/CitySearchInput";
import { useBooking } from "@/contexts/BookingContext";
import { cn } from "@/lib/utils";

const Book = () => {
  const navigate = useNavigate();
  const { setCurrentBooking } = useBooking();
  const [tripType, setTripType] = useState<"roundTrip" | "oneWay" | "multiCity">("roundTrip");
  const [shopWithMiles, setShopWithMiles] = useState(true);
  const [excludeBasic, setExcludeBasic] = useState(false);
  const [lowestFares, setLowestFares] = useState(true);
  const [origin, setOrigin] = useState({ code: "ATL", city: "Atlanta, GA" });
  const [destination, setDestination] = useState({ code: "ALB", city: "Albany, NY" });
  const [departureDate, setDepartureDate] = useState<Date>(new Date(2025, 9, 28));
  const [returnDate, setReturnDate] = useState<Date>(new Date(2025, 9, 30));
  const [passengers, setPassengers] = useState(1);
  const [showPassengerPicker, setShowPassengerPicker] = useState(false);

  const handleSwapDestinations = () => {
    const temp = origin;
    setOrigin(destination);
    setDestination(temp);
  };

  const handleFindFlight = () => {
    setCurrentBooking({
      origin,
      destination,
      departureDate: format(departureDate, "MMM dd, yyyy"),
      returnDate: tripType === "roundTrip" ? format(returnDate, "MMM dd, yyyy") : undefined,
      passengers,
      tripType,
    });
    navigate("/flights");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHeader />

      <main className="flex-1 bg-avelo-purple-dark pb-24">
        <div className="max-w-md mx-auto px-4 py-8">
          <h1 className="text-4xl font-heading font-semibold text-white text-center mb-8">
            Book
          </h1>

          <div className="flex gap-2 mb-6">
            <Button
              onClick={() => setTripType("roundTrip")}
              className={`flex-1 rounded-2xl font-heading text-base py-6 h-auto ${
                tripType === "roundTrip"
                  ? "bg-avelo-card-light text-avelo-text-dark hover:bg-avelo-card-light/90"
                  : "bg-avelo-card-light/30 text-white hover:bg-avelo-card-light/40"
              }`}
            >
              Round Trip
            </Button>
            <Button
              onClick={() => setTripType("oneWay")}
              className={`flex-1 rounded-2xl font-heading text-base py-6 h-auto ${
                tripType === "oneWay"
                  ? "bg-avelo-card-light text-avelo-text-dark hover:bg-avelo-card-light/90"
                  : "bg-avelo-card-light/30 text-white hover:bg-avelo-card-light/40"
              }`}
            >
              One Way
            </Button>
            <Button
              onClick={() => setTripType("multiCity")}
              className={`flex-1 rounded-2xl font-heading text-base py-6 h-auto ${
                tripType === "multiCity"
                  ? "bg-avelo-card-light text-avelo-text-dark hover:bg-avelo-card-light/90"
                  : "bg-avelo-card-light/30 text-white hover:bg-avelo-card-light/40"
              }`}
            >
              Multi-City
            </Button>
          </div>

          <div className="bg-avelo-card-light rounded-2xl p-4 space-y-3 mb-6">
            <div className="flex items-center gap-4">
              <CitySearchInput
                value={origin}
                onChange={setOrigin}
                placeholder="Search origin city..."
                className="flex-1"
              />
              <ArrowLeftRight
                className="w-6 h-6 text-avelo-purple cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                onClick={handleSwapDestinations}
              />
              <CitySearchInput
                value={destination}
                onChange={setDestination}
                placeholder="Search destination city..."
                className="flex-1 text-right"
              />
            </div>

            <div className="border-t border-border pt-3">
              <Popover>
                <PopoverTrigger asChild>
                  <button className="flex items-center gap-3 py-2 w-full text-left hover:opacity-80 transition-opacity">
                    <Calendar className="w-5 h-5 text-avelo-text-medium" />
                    <span className="text-base font-body">
                      {format(departureDate, "EEE, MMM dd")}
                      {tripType === "roundTrip" && ` - ${format(returnDate, "EEE, MMM dd")}`}
                    </span>
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-white" align="start">
                  <div className="p-3">
                    <p className="text-sm font-body text-avelo-text-medium mb-2">
                      {tripType === "roundTrip" ? "Select departure date" : "Select date"}
                    </p>
                    <CalendarComponent
                      mode="single"
                      selected={departureDate}
                      onSelect={(date) => date && setDepartureDate(date)}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                    {tripType === "roundTrip" && (
                      <>
                        <p className="text-sm font-body text-avelo-text-medium mb-2 mt-4">
                          Select return date
                        </p>
                        <CalendarComponent
                          mode="single"
                          selected={returnDate}
                          onSelect={(date) => date && setReturnDate(date)}
                          disabled={(date) => date < departureDate}
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </>
                    )}
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <div className="border-t border-border pt-3 relative">
              <button
                onClick={() => setShowPassengerPicker(!showPassengerPicker)}
                className="flex items-center justify-between gap-3 py-2 w-full text-left hover:opacity-80 transition-opacity"
              >
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-avelo-text-medium" />
                  <span className="text-base font-body">
                    {passengers} Passenger{passengers > 1 ? "s" : ""}
                  </span>
                </div>
                {showPassengerPicker ? (
                  <ChevronUp className="w-5 h-5 text-avelo-text-medium" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-avelo-text-medium" />
                )}
              </button>

              {showPassengerPicker && (
                <div className="absolute left-0 right-0 top-full mt-2 bg-white rounded-2xl shadow-lg border border-border z-50 p-4">
                  <div className="flex items-center justify-between">
                    <span className="font-body">Number of passengers</span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setPassengers(Math.max(1, passengers - 1))}
                        className="w-8 h-8 rounded-full bg-avelo-card-light flex items-center justify-center font-heading text-lg hover:bg-avelo-purple hover:text-white transition-colors"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-heading text-lg">{passengers}</span>
                      <button
                        onClick={() => setPassengers(Math.min(9, passengers + 1))}
                        className="w-8 h-8 rounded-full bg-avelo-card-light flex items-center justify-center font-heading text-lg hover:bg-avelo-purple hover:text-white transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-between">
              <span className="text-white font-body">Shop With Miles</span>
              <Switch
                checked={shopWithMiles}
                onCheckedChange={setShopWithMiles}
                className="data-[state=checked]:bg-avelo-purple"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white font-body">Exclude Basic</span>
              <Switch
                checked={excludeBasic}
                onCheckedChange={setExcludeBasic}
                className="data-[state=checked]:bg-avelo-purple"
              />
            </div>

            <div className="flex items-center justify-between">
              <span className="text-white font-body">Include Lowest Fares</span>
              <Switch
                checked={lowestFares}
                onCheckedChange={setLowestFares}
                className="data-[state=checked]:bg-avelo-purple"
              />
            </div>
          </div>

          <Button
            onClick={handleFindFlight}
            className="w-full bg-avelo-yellow hover:bg-avelo-yellow/90 text-avelo-purple font-heading text-xl h-12 rounded-2xl"
          >
            Find Flight
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Book;
