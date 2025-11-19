import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FlightStatusDetails = () => {
  return (
    <div className="min-h-screen bg-avelo-purple-dark flex flex-col">
      <PageHeader />
      
      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-[40px] font-heading font-semibold text-white mb-7">
          Flight status details
        </h1>
        
        <div className="max-w-md mx-auto space-y-7">
          <div className="bg-white rounded-2xl p-[18px] border border-border space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-heading text-avelo-purple">SanBPI</p>
                <p className="text-base font-body text-avelo-text-dark mt-1">
                  JAN 23, 2025
                </p>
                <p className="text-base font-body text-avelo-text-dark">
                  12:00 PM
                </p>
                <p className="text-[13px] font-body text-avelo-text-light mt-2">
                  Terminal 2
                </p>
                <p className="text-[13px] font-body text-avelo-text-light">
                  Gate 14
                </p>
              </div>
              
              <ArrowRight className="w-6 h-6 text-avelo-purple" />
              
              <div className="text-right">
                <p className="text-2xl font-heading text-avelo-purple">OakBPI</p>
                <p className="text-base font-body text-avelo-text-dark mt-1">
                  JAN 23, 2025
                </p>
                <p className="text-base font-body text-avelo-text-dark">
                  3:00 PM
                </p>
                <p className="text-[13px] font-body text-avelo-text-light mt-2">
                  Terminal 1
                </p>
                <p className="text-[13px] font-body text-avelo-text-light">
                  Gate 8
                </p>
              </div>
            </div>
            
            <div className="pt-4 border-t border-border">
              <p className="text-[10px] font-body text-avelo-text-light leading-relaxed">
                Flight times shown are local to each airport. All times are subject to change. 
                Please check with your airline for the most current information.
              </p>
            </div>
          </div>
          
          <Button className="w-full h-12 bg-avelo-yellow text-avelo-purple font-heading text-xl rounded-2xl hover:bg-avelo-yellow/90">
            Notify me of updates
          </Button>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default FlightStatusDetails;
