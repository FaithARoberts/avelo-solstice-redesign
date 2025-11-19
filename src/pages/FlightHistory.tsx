import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import FlightCard from "@/components/FlightCard";

const FlightHistory = () => {
  const flights = [
    {
      origin: "ONT",
      destination: "DAL",
      date: "JAN 23, 2025",
      time: "12:00 PM",
      confirmationCode: "ABC123",
      status: "confirmed" as const,
    },
    {
      origin: "DAL",
      destination: "ONT",
      date: "JAN 30, 2025",
      time: "3:00 PM",
      confirmationCode: "XYZ789",
      status: "booked" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-avelo-purple-dark flex flex-col">
      <PageHeader />
      
      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-[40px] font-heading font-semibold text-white mb-7">
          Flight History
        </h1>
        
        <div className="space-y-4 max-w-md mx-auto">
          {flights.map((flight, index) => (
            <FlightCard key={index} {...flight} />
          ))}
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default FlightHistory;
