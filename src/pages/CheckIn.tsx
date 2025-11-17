import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

const CheckIn = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/boarding-pass");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHeader />
      
      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-[40px] font-heading font-semibold text-avelo-purple mb-7">
          Check In
        </h1>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="bg-white rounded-2xl p-[18px] space-y-7 border-[4px] border-avelo-purple">
            <div className="space-y-2">
              <Label htmlFor="confirmation" className="text-[13px] font-body text-avelo-text-light">
                Confirmation Code
              </Label>
              <Input
                id="confirmation"
                type="text"
                placeholder="ABC123"
                className="h-11 bg-avelo-yellow border-none rounded-2xl text-base font-body focus-visible:ring-2 focus-visible:ring-avelo-purple focus-visible:border-avelo-purple placeholder:text-avelo-text-light"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastname" className="text-[13px] font-body text-avelo-text-light">
                Last Name
              </Label>
              <Input
                id="lastname"
                type="text"
                placeholder="Smith"
                className="h-11 bg-avelo-yellow border-none rounded-2xl text-base font-body focus-visible:ring-2 focus-visible:ring-avelo-purple focus-visible:border-avelo-purple placeholder:text-avelo-text-light"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-avelo-purple text-white font-heading text-xl rounded-2xl hover:bg-avelo-purple/90"
            >
              Continue
            </Button>

            <p className="text-[10px] font-body text-avelo-text-light text-center">
              CONFIRMATION CODE CAN BE FOUND IN YOUR EMAIL
            </p>
          </div>
        </form>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default CheckIn;
