import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar, User, ArrowLeftRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Book = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState<"roundTrip" | "oneWay" | "multiCity">("roundTrip");
  const [shopWithMiles, setShopWithMiles] = useState(true);
  const [excludeBasic, setExcludeBasic] = useState(false);
  const [lowestFares, setLowestFares] = useState(true);

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
              <div className="flex-1">
                <div className="text-2xl font-heading font-semibold">ATL</div>
                <div className="text-sm text-avelo-text-medium">Atlanta,GA</div>
              </div>
              <ArrowLeftRight className="w-6 h-6 text-avelo-purple" />
              <div className="flex-1 text-right">
                <div className="text-2xl font-heading font-semibold">ALB</div>
                <div className="text-sm text-avelo-text-medium">Albany,Ny</div>
              </div>
            </div>
            
            <div className="border-t border-border pt-3">
              <div className="flex items-center gap-3 py-2">
                <Calendar className="w-5 h-5 text-avelo-text-medium" />
                <span className="text-base font-body">Tue,Oct 28 - Thu, Oct 30</span>
              </div>
            </div>
            
            <div className="border-t border-border pt-3">
              <div className="flex items-center gap-3 py-2">
                <User className="w-5 h-5 text-avelo-text-medium" />
                <span className="text-base font-body">1 Passenger</span>
              </div>
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
            onClick={() => navigate("/flights")}
            className="w-full bg-avelo-yellow hover:bg-avelo-yellow/90 text-black font-heading text-xl py-6 rounded-2xl h-auto"
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
