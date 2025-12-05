import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useBooking } from "@/contexts/BookingContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const homeDeals = [
  {
    destination: "Miami",
    code: "MIA",
    price: 89,
    tagline: "Escape to Paradise",
    image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=800&q=80",
  },
  {
    destination: "Los Angeles",
    code: "LAX",
    price: 79,
    tagline: "City of Angels Awaits",
    image: "https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=800&q=80",
  },
  {
    destination: "Las Vegas",
    code: "LAS",
    price: 59,
    tagline: "Hit the Jackpot",
    image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=800&q=80",
  },
  {
    destination: "Phoenix",
    code: "PHX",
    price: 49,
    tagline: "Desert Adventure",
    image: "https://images.unsplash.com/photo-1558645836-e44122a743ee?w=800&q=80",
  },
  {
    destination: "Orlando",
    code: "MCO",
    price: 99,
    tagline: "Theme Park Magic",
    image: "https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=800&q=80",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  const { setCurrentBooking } = useBooking();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleDealClick = useCallback((deal: typeof homeDeals[0]) => {
    setCurrentBooking({
      destination: { code: deal.code, city: deal.destination },
      origin: { code: "", city: "" },
      departureDate: null,
      returnDate: null,
      passengers: 1,
      tripType: "oneWay",
    });
    navigate("/book");
  }, [setCurrentBooking, navigate]);

  const generateMemberNumber = (id: string) => {
    const hash = id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return `${hash}${hash * 2}${hash * 3}`.slice(0, 11);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHeader />
      
      <main className="flex-1 bg-avelo-purple-dark pb-24">
        <div className="max-w-md mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-heading font-semibold text-white text-center mb-8 leading-tight">
            Where can<br />we take you next?
          </h1>
          
          <Button 
            onClick={() => navigate("/book")}
            className="w-full bg-avelo-yellow hover:bg-avelo-yellow/90 text-black font-heading text-xl py-6 rounded-2xl mb-6 h-auto"
          >
            Find Flight
          </Button>
          
          {isAuthenticated && user ? (
            <div 
              className="bg-avelo-card-light rounded-2xl p-6 mb-6 cursor-pointer hover:bg-opacity-95 transition-all"
              onClick={() => navigate("/account")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-heading font-semibold text-avelo-text-dark mb-1">
                    Welcome back, {user.name.split(" ")[0]}
                  </h2>
                  <p className="text-sm text-avelo-text-medium">
                    Avelo member #{generateMemberNumber(user.id)}
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-avelo-text-medium" />
              </div>
            </div>
          ) : (
            <div 
              className="bg-avelo-card-light rounded-2xl p-6 mb-6 cursor-pointer hover:bg-opacity-95 transition-all"
              onClick={() => navigate("/login")}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-heading font-semibold text-avelo-text-dark mb-1">
                    Sign in to your account
                  </h2>
                  <p className="text-sm text-avelo-text-medium">
                    Access your trips and rewards
                  </p>
                </div>
                <ChevronRight className="w-6 h-6 text-avelo-text-medium" />
              </div>
            </div>
          )}
          
          <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
            className="w-full"
          >
            <CarouselContent>
              {homeDeals.map((deal) => (
                <CarouselItem key={deal.code}>
                  <div 
                    className="relative rounded-2xl overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    onClick={() => handleDealClick(deal)}
                  >
                    <img 
                      src={deal.image}
                      alt={`Fly to ${deal.destination} - ${deal.tagline}`} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-6">
                      <p className="text-sm text-white/80 mb-1">{deal.tagline}</p>
                      <h3 className="text-3xl font-heading font-semibold text-white mb-1">
                        Fly To {deal.destination}
                      </h3>
                      <p className="text-xl text-white">from ${deal.price}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            <div className="flex justify-center gap-2 mt-4">
              {homeDeals.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    current === index ? "bg-white w-4" : "bg-white/40"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Home;
