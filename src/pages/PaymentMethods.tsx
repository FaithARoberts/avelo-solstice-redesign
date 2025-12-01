import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MoreVertical } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import AveloLogo from "@/components/AveloLogo";

interface PaymentCard {
  id: string;
  type: "mastercard" | "visa" | "amex" | "discover";
  last4: string;
  expiry: string;
}

const INITIAL_CARDS: PaymentCard[] = [
  { id: "1", type: "mastercard", last4: "9999", expiry: "10/28" },
  { id: "2", type: "visa", last4: "8888", expiry: "12/26" },
  { id: "3", type: "amex", last4: "7777", expiry: "01/25" },
  { id: "4", type: "discover", last4: "5555", expiry: "08/30" },
];

const PaymentMethods = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState<PaymentCard[]>(INITIAL_CARDS);

  // Reset cards on component mount to restore deleted cards on refresh
  useEffect(() => {
    setCards(INITIAL_CARDS);
  }, []);

  const getCardLogo = (type: string) => {
    const logos = {
      mastercard: (
        <div className="flex items-center gap-[-8px]">
          <div className="w-8 h-8 rounded-full bg-[#EB001B]" />
          <div className="w-8 h-8 rounded-full bg-[#F79E1B] -ml-3" />
        </div>
      ),
      visa: (
        <div className="bg-[#1A1F71] text-white px-3 py-1 rounded font-bold text-xl">
          VISA
        </div>
      ),
      amex: (
        <div className="bg-[#006FCF] text-white px-2 py-1 rounded font-bold text-sm">
          AMERICAN<br />EXPRESS
        </div>
      ),
      discover: (
        <div className="bg-[#FF6000] text-white px-3 py-1 rounded font-bold text-lg">
          DISCOVER
        </div>
      ),
    };
    return logos[type as keyof typeof logos];
  };

  return (
    <div className="min-h-screen bg-[#310047] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-border py-4">
        <div className="max-w-md mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/more")}
            className="text-avelo-purple"
            aria-label="Go back"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="h-12">
            <AveloLogo showTagline={false} />
          </div>
          <div className="w-6" />
        </div>
      </div>

      <div className="bg-avelo-purple-dark pt-6 pb-4 px-4">
        <h1 className="text-2xl font-heading font-semibold text-white text-center max-w-md mx-auto">
          Payment Methods
        </h1>
      </div>

      {/* Cards List */}
      <main className="flex-1 pb-32 px-4 pt-8 bg-avelo-purple-dark">
        <div className="max-w-md mx-auto space-y-6">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => navigate(`/payment-methods/edit/${card.id}?type=${card.type}&last4=${card.last4}&expiry=${card.expiry}`)}
              className="bg-[#F7F5F9] rounded-2xl p-6 flex items-center gap-4 w-full text-left hover:bg-[#F7F5F9]/90 active:scale-[0.98] transition-all"
            >
              <div className="flex-shrink-0">{getCardLogo(card.type)}</div>
              <div className="flex-1">
                <p className="text-base font-body text-[#000000] font-semibold">
                  **** **** **** {card.last4}
                </p>
                <p className="text-sm font-body text-[#323131]">
                  Expires {card.expiry}
                </p>
              </div>
              <MoreVertical className="w-5 h-5 text-[#323131]" />
            </button>
          ))}

          {/* Add Payment Method Button */}
          <Button
            onClick={() => navigate("/payment-methods/add")}
            className="w-full bg-[#FECE00] hover:bg-[#FECE00]/90 text-[#000000] font-heading text-[20px] py-6 rounded-2xl h-auto mt-8"
          >
            Add Payment Method
          </Button>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default PaymentMethods;
