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
    <div className="min-h-screen bg-avelo-purple-dark flex flex-col">
      <PageHeader />
      
      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-[40px] font-heading font-semibold text-white mb-7 text-center max-w-md mx-auto">
          More
        </h1>
        
        <div className="max-w-md mx-auto space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center justify-between p-5 rounded-2xl bg-white border-2 transition-all hover:bg-avelo-card-light active:scale-[0.99] ${
                item.highlighted ? 'border-avelo-purple' : 'border-transparent'
              }`}
            >
              <span className="text-base font-body text-avelo-text-dark font-medium">
                {item.label}
              </span>
              <ChevronRight className="w-5 h-5 text-avelo-text-medium" />
            </button>
          ))}
        </div>
        
        <div className="max-w-md mx-auto mt-8">
          <Button
            onClick={() => navigate("/login")}
            className="w-full bg-avelo-yellow hover:bg-avelo-yellow/90 text-avelo-purple font-heading text-xl h-12 rounded-2xl"
          >
            Sign Out
          </Button>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default More;
