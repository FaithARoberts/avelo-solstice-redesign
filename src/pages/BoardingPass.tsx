import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import QRCode from "react-qr-code";

const BoardingPass = () => {
  return (
    <div className="min-h-screen bg-avelo-purple-dark flex flex-col">
      <PageHeader />
      
      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-[40px] font-heading font-semibold text-white mb-7">
          🎫 Boarding Pass
        </h1>
        
        <div className="max-w-md mx-auto space-y-4">
          {/* Boarding Pass Card */}
          <div className="bg-avelo-purple rounded-2xl p-[18px] text-white space-y-4">
            <h2 className="text-2xl font-heading font-semibold text-center">
              John Smith
            </h2>
            
            <div className="flex items-center justify-center gap-2">
              <span className="text-xl font-heading">ONT</span>
              <Plane className="w-5 h-5" />
              <span className="text-xl font-heading">DAL</span>
            </div>
            
            <p className="text-center text-base font-body">JAN 23, 2025</p>
            
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center">
                <p className="text-[13px] opacity-80">Seat</p>
                <p className="text-xl font-heading">21F</p>
              </div>
              <div className="text-center">
                <p className="text-[13px] opacity-80">Gate</p>
                <p className="text-xl font-heading">14</p>
              </div>
              <div className="text-center">
                <p className="text-[13px] opacity-80">Boarding</p>
                <p className="text-xl font-heading">11:30 AM</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg flex justify-center">
              <QRCode value="ABC123-ONT-DAL-20250123" size={150} />
            </div>
            
            <p className="text-center text-[13px]">
              Confirmation: ABC123
            </p>
          </div>
          
          {/* Action Buttons */}
          <Button className="w-full h-12 bg-avelo-yellow text-avelo-purple font-heading text-xl rounded-2xl hover:bg-avelo-yellow/90">
            Add to Apple Wallet
          </Button>
          
          <Button 
            variant="outline"
            className="w-full h-12 bg-transparent border-2 border-avelo-yellow text-avelo-yellow font-heading text-xl rounded-2xl hover:bg-avelo-yellow/10"
          >
            Download Boarding Pass
          </Button>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default BoardingPass;
