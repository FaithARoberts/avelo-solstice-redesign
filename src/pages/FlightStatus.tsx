import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import StatusBadge from "@/components/StatusBadge";
import { Plane } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FlightStatus = () => {
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-avelo-purple-dark flex flex-col">
      <PageHeader />
      
      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-[40px] font-heading font-semibold text-white mb-7">
          Flight Status
        </h1>
        
        <div className="max-w-md mx-auto space-y-7">
          {!showResults ? (
            // Search Form
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="space-y-2">
                <Label htmlFor="flightNumber" className="text-small font-body text-white font-medium">
                  Flight number
                </Label>
                <Input
                  id="flightNumber"
                  type="text"
                  placeholder="AV 123"
                  className="h-11 bg-avelo-yellow border-none rounded-2xl text-base font-body text-avelo-text-dark focus-visible:ring-2 focus-visible:ring-avelo-purple placeholder:text-avelo-text-dark/60"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="date" className="text-small font-body text-white font-medium">
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  className="h-11 bg-avelo-yellow border-none rounded-2xl text-base font-body text-avelo-text-dark focus-visible:ring-2 focus-visible:ring-avelo-purple"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-avelo-purple text-white font-heading text-xl rounded-2xl hover:bg-avelo-purple/90"
              >
                Submit Flight Status
              </Button>
            </form>
          ) : (
            // Results View
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-heading font-semibold text-white">
                  AV 123
                </h2>
                <StatusBadge status="on-time" />
              </div>
              
              <div className="bg-white rounded-2xl p-[18px] border border-border space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xl font-heading text-avelo-purple">ONT</p>
                    <p className="text-small font-body text-avelo-text-medium">Ontario, CA</p>
                    <p className="text-base font-body text-avelo-text-dark">12:00 PM</p>
                  </div>
                  
                  <Plane className="w-6 h-6 text-avelo-purple" />
                  
                  <div className="text-right">
                    <p className="text-xl font-heading text-avelo-purple">DAL</p>
                    <p className="text-small font-body text-avelo-text-medium">Dallas, TX</p>
                    <p className="text-base font-body text-avelo-text-dark">3:00 PM</p>
                  </div>
                </div>
                
                <p className="text-small font-body text-avelo-text-medium">
                  JAN 23, 2025 • Gate 14 • Terminal 2
                </p>
              </div>
              
              <div className="space-y-3">
                <Button 
                  onClick={() => navigate("/flight-status-details")}
                  className="w-full h-12 bg-avelo-yellow text-avelo-purple font-heading text-xl rounded-2xl hover:bg-avelo-yellow/90"
                >
                  Flight Details
                </Button>
                
                <Button className="w-full h-12 bg-avelo-yellow text-avelo-purple font-heading text-xl rounded-2xl hover:bg-avelo-yellow/90">
                  Get Directions
                </Button>
                
                <Button className="w-full h-12 bg-avelo-yellow text-avelo-purple font-heading text-xl rounded-2xl hover:bg-avelo-yellow/90">
                  Track Bags
                </Button>
                
                <Button className="w-full h-12 bg-avelo-yellow text-avelo-purple font-heading text-xl rounded-2xl hover:bg-avelo-yellow/90">
                  Notify me of updates
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default FlightStatus;
