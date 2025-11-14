import { ArrowLeft, Plane, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";

const Review = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="bg-background border-b border-border p-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <button onClick={() => navigate(-1)}>
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-heading font-semibold">Review and pay</h1>
          <button className="text-sm font-body text-avelo-purple">New search</button>
        </div>
      </header>
      
      <main className="flex-1 bg-avelo-purple-dark pb-24">
        <div className="max-w-md mx-auto px-4 py-6">
          <h2 className="text-3xl font-heading font-semibold text-white mb-6">
            Your trip
          </h2>
          
          <div className="flex gap-2 mb-6">
            <Button className="flex-1 bg-avelo-card-light text-avelo-text-dark hover:bg-avelo-card-light/90 rounded-2xl h-auto py-3 font-heading border-b-4 border-avelo-purple">
              ATL - ALB
            </Button>
            <Button className="flex-1 bg-avelo-card-light/30 text-white hover:bg-avelo-card-light/40 rounded-2xl h-auto py-3 font-heading">
              ALB-ATL
            </Button>
          </div>
          
          <div className="space-y-4 mb-6">
            <div className="bg-avelo-card-light rounded-2xl p-5">
              <div className="text-sm text-avelo-text-medium mb-3">Tuesday, October 28, 2025</div>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-lg font-heading font-semibold">5:24PM</div>
                  <div className="text-2xl font-heading font-bold">ATL</div>
                  <div className="text-sm text-avelo-text-medium">Atlanta,GA</div>
                </div>
                
                <div className="text-center flex-1 px-4">
                  <div className="text-sm text-avelo-text-medium mb-1">1h 23m</div>
                  <Plane className="w-8 h-8 mx-auto rotate-90 text-avelo-text-dark" />
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-heading font-semibold">6:47PM</div>
                  <div className="text-2xl font-heading font-bold">CLT</div>
                  <div className="text-sm text-avelo-text-medium">Charlotte, NC</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t border-border pt-3">
                <div className="text-sm text-avelo-text-dark">AA 5067 - Main Cabin</div>
                <ChevronDown className="w-5 h-5 text-avelo-text-medium" />
              </div>
            </div>
            
            <div className="bg-avelo-card-light rounded-2xl p-5">
              <div className="text-sm text-avelo-text-medium mb-3">Tuesday, October 28, 2025</div>
              
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-lg font-heading font-semibold">7:55PM</div>
                  <div className="text-2xl font-heading font-bold">CLT</div>
                  <div className="text-sm text-avelo-text-medium">Charlotte, NC</div>
                </div>
                
                <div className="text-center flex-1 px-4">
                  <div className="text-sm text-avelo-text-medium mb-1">2h 2m</div>
                  <Plane className="w-8 h-8 mx-auto rotate-90 text-avelo-text-dark" />
                </div>
                
                <div className="text-right">
                  <div className="text-lg font-heading font-semibold">9:57PM</div>
                  <div className="text-2xl font-heading font-bold">ALB</div>
                  <div className="text-sm text-avelo-text-medium">Albany, NY</div>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t border-border pt-3">
                <div className="text-sm text-avelo-text-dark">AA 5067 - Main Cabin</div>
                <ChevronDown className="w-5 h-5 text-avelo-text-medium" />
              </div>
            </div>
          </div>
          
          <div className="bg-avelo-card-light rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-heading font-semibold">Cost Summary</h3>
              <button>
                <ChevronDown className="w-5 h-5 text-avelo-text-medium" />
              </button>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Main x 1</span>
                <span className="font-semibold">$1,010.58</span>
              </div>
              <div className="flex justify-between text-avelo-text-medium">
                <span>Taxes and carrier imposed fees</span>
                <span>$125.79</span>
              </div>
              <div className="flex justify-between font-semibold border-t border-border pt-2">
                <span>Total amount</span>
                <span>$1,136.37</span>
              </div>
            </div>
            
            <div className="border-t border-border mt-3 pt-3">
              <div className="flex justify-between font-heading font-semibold text-lg">
                <span>Total amount due</span>
                <span>$1,136.37</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Review;
