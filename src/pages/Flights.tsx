import { ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import BottomNav from "@/components/BottomNav";

const flights = [
  { time: "5:24PM", arrivalTime: "8:46PM", duration: "4h 33m", stops: "1Stop (PHL)", price: "$1,317" },
  { time: "3:28AM", arrivalTime: "2:18PM", duration: "5h 17m", stops: "1Stop (DCA)", price: "$1,317" },
  { time: "5:24PM", arrivalTime: "8:46PM", duration: "4h 33m", stops: "1Stop (PHL)", price: "$1,319" },
];

const Flights = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-background border-b border-border p-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-heading font-semibold">ATL - ALB</h1>
          <button className="text-base font-body text-avelo-purple">Sort</button>
        </div>
      </header>
      
      <div className="bg-background border-b border-border overflow-x-auto">
        <div className="max-w-md mx-auto flex gap-2 p-2">
          {["Sun,Oct 26", "Mon,Oct 27", "Tue, Oct 28", "Wed,Oct 29", "Thur,Oct 30", "Fri, Oc"].map((date, idx) => (
            <button
              key={date}
              className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm whitespace-nowrap ${
                idx === 2 
                  ? "bg-avelo-purple text-white" 
                  : "bg-muted text-avelo-text-dark"
              }`}
            >
              <div>{date}</div>
              <div className="font-semibold" style={{ color: idx === 2 ? "#FECE00" : "inherit" }}>
                ${idx === 2 ? "1,300" : idx === 1 ? "1,500" : "1,345"}
              </div>
            </button>
          ))}
        </div>
      </div>
      
      <main className="flex-1 bg-avelo-purple-dark pb-24">
        <div className="max-w-md mx-auto px-4 py-6">
          <p className="text-white text-sm mb-4">ATL - ALB - ALB - ATL</p>
          <h2 className="text-3xl font-heading font-semibold text-white mb-6">
            Choose Departure
          </h2>
          
          <div className="space-y-4">
            {flights.map((flight, idx) => (
              <div 
                key={idx}
                onClick={() => navigate("/review")}
                className="bg-avelo-card-light rounded-2xl p-5 cursor-pointer hover:bg-opacity-95 transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm font-body">ATL</span>
                      <span className="text-sm font-body">ALB</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-heading font-semibold">{flight.time}</span>
                      <ArrowRight className="w-5 h-5" />
                      <span className="text-2xl font-heading font-semibold">{flight.arrivalTime}</span>
                    </div>
                    <div className="text-sm text-avelo-text-medium mt-1">{flight.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-avelo-text-medium mb-1">Round trip</div>
                    <div className="text-sm text-avelo-text-medium">from</div>
                    <div className="text-2xl font-heading font-semibold text-avelo-yellow">
                      {flight.price}
                    </div>
                    <ChevronRight className="w-5 h-5 ml-auto mt-1 text-avelo-text-medium" />
                  </div>
                </div>
                
                <div className="text-sm text-avelo-text-medium mb-1">{flight.stops}</div>
                <div className="text-sm text-avelo-text-medium mb-2">
                  Operated by PSA Airlines as Avelo Connect
                </div>
                
                <div className="flex gap-4 text-sm text-avelo-text-medium border-t border-border pt-2">
                  <button className="hover:text-avelo-purple">Details</button>
                  <span>|</span>
                  <button className="hover:text-avelo-purple">Seats</button>
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
