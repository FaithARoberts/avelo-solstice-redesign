import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";

const menuItems = [
  { label: "Account Details", path: "/account" },
  { label: "Notification Settings", path: "/notifications" },
  { label: "Payment Methods", path: "/payment-methods", highlighted: true },
  { label: "Contact Us", path: "/contact" },
  { label: "Terms & Conditions", path: "/terms" },
];

const More = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHeader />
      
      <main className="flex-1 pb-24">
        <div className="max-w-md mx-auto">
          <h1 className="text-[40px] font-heading font-semibold text-avelo-purple text-center py-6">
            More
          </h1>
          
          <div className="px-4 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center justify-between p-[18px] rounded-2xl bg-background border transition-colors hover:bg-muted ${
                  item.highlighted ? 'border-avelo-purple' : 'border-border'
                }`}
              >
                <span className="text-base font-body text-avelo-text-dark">
                  {item.label}
                </span>
                <ChevronRight className="w-5 h-5 text-avelo-text-medium" />
              </button>
            ))}
          </div>
          
          <div className="px-4 mt-8">
            <Button
              onClick={() => navigate("/login")}
              className="w-full bg-avelo-purple hover:bg-avelo-purple/90 text-white font-heading text-[20px] py-3 rounded-2xl h-auto"
            >
              Sign Out
            </Button>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default More;
