import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { format, addDays } from "date-fns";
import BottomNav from "@/components/BottomNav";
import { useBooking } from "@/contexts/BookingContext";

const generateFlights = (origin: string, destination: string) => {
  const basePrices = [1117, 1217, 1319, 1450, 1089];
  const times = ["5:24PM", "3:28AM", "8:15AM", "11:45AM", "2:30PM"];
  const durations = ["4h 33m", "5h 17m", "3h 45m", "6h 12m", "4h 05m"];
  const stops = ["1 Stop (PHL)", "1 Stop (DCA)", "Nonstop", "1 Stop (CLT)", "Nonstop"];

  return times.slice(0, 3).map((time, idx) => {
    const hours = parseInt(time.split(":")[0]);
    const durationHours = parseInt(durations[idx].split("h")[0]);
    const arrivalHour = (hours + durationHours) % 12 || 12;
    const arrivalPeriod = (hours + durationHours) >= 12 ? "PM" : "AM";

    return {
      time,
      arrivalTime: `${arrivalHour}:${Math.floor(Math.random() * 60).toString().padStart(2, "0")}${arrivalPeriod}`,
      duration: durations[idx],
      stops: stops[idx],
      price: basePrices[idx] + Math.floor(Math.random() * 100),
    };
  });
};

const Flights = () => {
  const navigate = useNavigate();
  const { currentBooking, setCurrentBooking } = useBooking();

  const origin = currentBooking?.origin || { code: "ATL", city: "Atlanta, GA" };
  const destination = currentBooking?.destination || { code: "ALB", city: "Albany, NY" };
  const departureDate = currentBooking?.departureDate || "Oct 28, 2025";

  const flights = generateFlights(origin.code, destination.code);

  const baseDate = new Date(2025, 9, 26);
  const dates = Array.from({ length: 6 }, (_, i) => ({
    date: addDays(baseDate, i),
    price: 1300 + Math.floor(Math.random() * 300),
  }));

  const handleSelectFlight = (flight: typeof flights[0]) => {
    setCurrentBooking({
      ...currentBooking,
      selectedFlight: {
        ...flight,
        price: flight.price,
      },
    });
    navigate("/review");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-avelo-purple-dark border-b border-avelo-purple p-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="hover:scale-110 transition-transform">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-xl font-heading font-semibold text-white">
            {origin.code} - {destination.code}
          </h1>
          <button className="text-base font-body text-avelo-yellow hover:text-avelo-yellow/80">
            Sort
          </button>
        </div>
      </header>

      <div className="bg-avelo-purple-dark border-b border-avelo-purple overflow-x-auto">
        <div className="max-w-md mx-auto flex gap-2 p-2">
          {dates.map((item, idx) => (
            <button
              key={idx}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all active:scale-95 ${
                idx === 2
                  ? "bg-avelo-yellow text-avelo-purple font-semibold"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              <div>{format(item.date, "EEE, MMM dd")}</div>
              <div className="font-semibold">${item.price.toLocaleString()}</div>
            </button>
          ))}
        </div>
      </div>

      <main className="flex-1 bg-avelo-purple-dark pb-24">
        <div className="max-w-md mx-auto px-4 py-6">
          <p className="text-white text-sm mb-4">
            {origin.code} - {destination.code}
            {currentBooking?.tripType === "roundTrip" && ` - ${destination.code} - ${origin.code}`}
          </p>
          <h2 className="text-3xl font-heading font-semibold text-white mb-6">
            Choose Departure
          </h2>

          <div className="space-y-4">
            {flights.map((flight, idx) => (
              <div
                key={idx}
                onClick={() => handleSelectFlight(flight)}
                className="bg-avelo-card-light rounded-2xl p-5 cursor-pointer hover:bg-avelo-card-light/95 active:scale-[0.99] transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm font-body">{origin.code}</span>
                      <span className="text-sm font-body">{destination.code}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-heading font-semibold">{flight.time}</span>
                      <ArrowRight className="w-5 h-5" />
                      <span className="text-2xl font-heading font-semibold">{flight.arrivalTime}</span>
                    </div>
                    <div className="text-sm text-avelo-text-medium mt-1">{flight.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-avelo-text-medium mb-1">
                      {currentBooking?.tripType === "roundTrip" ? "Round trip" : "One way"}
                    </div>
                    <div className="text-sm text-avelo-text-medium">from</div>
                    <div className="text-2xl font-heading font-semibold text-avelo-yellow">
                      ${flight.price.toLocaleString()}
                    </div>
                    <ChevronRight className="w-5 h-5 ml-auto mt-1 text-avelo-text-medium" />
                  </div>
                </div>

                <div className="text-sm text-avelo-text-medium mb-1">{flight.stops}</div>
                <div className="text-sm text-avelo-text-medium mb-2">
                  Operated by PSA Airlines as Avelo Connect
                </div>

                <div className="flex gap-4 text-sm text-avelo-text-medium border-t border-border pt-3 mt-2">
                  <button className="hover:text-avelo-purple transition-colors active:scale-95">
                    Details
                  </button>
                  <span>|</span>
                  <button className="hover:text-avelo-purple transition-colors active:scale-95">
                    Seats
                  </button>
                </div>

                <div className="text-xs text-avelo-text-medium mt-2 flex items-center">
                  Change terminals. The class of service you searched ma...
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Flights;
