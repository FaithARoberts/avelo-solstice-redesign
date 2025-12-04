import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import miamiHero from "@/assets/miami-hero.jpg";
import { useAuth } from "@/contexts/AuthContext";

const Home = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();

  const generateMemberNumber = (id: string) => {
    // Generate a consistent member number from user ID
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
          
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src={miamiHero}
              alt="Fly to Miami - palm trees at sunset with airplane silhouette" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-3xl font-heading font-semibold text-white mb-1">
                Fly To Miami
              </h3>
              <p className="text-xl text-white">from $89</p>
            </div>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Home;
