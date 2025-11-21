import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import DealCard from "@/components/DealCard";
import { ScrollArea } from "@/components/ui/scroll-area";

const Deals = () => {
  const deals = [
    {
      origin: "CLT",
      destination: "LAX",
      duration: "5h 15m",
      dateRange: "Nov. 15th - Nov. 30th",
      originalPrice: 185,
      currentPrice: 105,
    },
    {
      origin: "MIA",
      destination: "SJU",
      duration: "5h 15m",
      dateRange: "Nov. 15th - Nov. 30th",
      originalPrice: 185,
      currentPrice: 105,
    },
    {
      origin: "SFO",
      destination: "DFW",
      duration: "5h 15m",
      dateRange: "Nov. 15th - Nov. 30th",
      originalPrice: 185,
      currentPrice: 105,
    },
    {
      origin: "BUR",
      destination: "PDX",
      duration: "2h 30m",
      dateRange: "Dec. 1st - Dec. 15th",
      originalPrice: 145,
      currentPrice: 79,
    },
    {
      origin: "PHX",
      destination: "OAK",
      duration: "1h 45m",
      dateRange: "Dec. 5th - Dec. 20th",
      originalPrice: 120,
      currentPrice: 65,
    },
  ];

  return (
    <div className="min-h-screen bg-[#310047] flex flex-col">
      <PageHeader />
      
      <main className="flex-1 pb-24 overflow-hidden">
        <div className="px-4 py-6">
          <h1 className="text-[40px] font-heading font-semibold text-white text-center mb-6">
            Deals
          </h1>
          
          <ScrollArea className="h-[calc(100vh-280px)]">
            <div className="space-y-6 pr-4">
              {deals.map((deal, index) => (
                <DealCard
                  key={index}
                  origin={deal.origin}
                  destination={deal.destination}
                  duration={deal.duration}
                  dateRange={deal.dateRange}
                  originalPrice={deal.originalPrice}
                  currentPrice={deal.currentPrice}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Deals;
