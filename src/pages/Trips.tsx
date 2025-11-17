import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import TabSwitcher from "@/components/TabSwitcher";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Trips = () => {
  const [activeTab, setActiveTab] = useState("your-flight");
  const navigate = useNavigate();

  const tabs = [
    { id: "your-flight", label: "Your Flight" },
    { id: "upcoming-flight", label: "Upcoming Flight" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHeader />
      
      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-[40px] font-heading font-semibold text-avelo-purple mb-7">
          My Trips
        </h1>
        
        <div className="max-w-md mx-auto space-y-7">
          <TabSwitcher
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
          
          <Button
            onClick={() => navigate("/flight-status")}
            className="w-full h-12 bg-avelo-yellow text-avelo-purple font-heading text-xl rounded-2xl hover:bg-avelo-yellow/90"
          >
            View Flight Status
          </Button>
          
          <p className="text-base font-body text-avelo-text-light text-center">
            Need to check-in? Flights you've already booked!
          </p>
          
          <Button
            onClick={() => navigate("/flight-history")}
            className="w-full h-12 bg-avelo-yellow text-avelo-purple font-heading text-xl rounded-2xl hover:bg-avelo-yellow/90"
          >
            View Flight History
          </Button>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Trips;
