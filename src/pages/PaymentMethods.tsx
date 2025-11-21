import { useState } from "react";
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

const PaymentMethods = () => {
  const navigate = useNavigate();
  const [cards, setCards] = useState<PaymentCard[]>([
    { id: "1", type: "mastercard", last4: "9999", expiry: "10/28" },
    { id: "2", type: "visa", last4: "8888", expiry: "12/26" },
    { id: "3", type: "amex", last4: "7777", expiry: "01/25" },
    { id: "4", type: "discover", last4: "5555", expiry: "08/30" },
  ]);

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
      <div className="bg-[#580081] pt-12 pb-6 px-4">
        <div className="max-w-md mx-auto flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/more")}
            className="text-avelo-yellow"
            aria-label="Go back"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="h-12">
            <AveloLogo showTagline={false} />
          </div>
          <div className="w-6" />
        </div>
        <h1 className="text-2xl font-heading font-semibold text-white text-center">
          Payment Methods
        </h1>
      </div>

      {/* Cards List */}
      <main className="flex-1 pb-32 px-4 pt-6">
        <div className="max-w-md mx-auto space-y-4">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#F7F5F9] rounded-2xl p-4 flex items-center gap-4"
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
              <button
                onClick={() => navigate(`/payment-methods/edit/${card.id}`)}
                className="text-[#323131]"
                aria-label="More options"
              >
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          ))}

          {/* Add Payment Method Button */}
          <Button
            onClick={() => navigate("/payment-methods/add")}
            className="w-full bg-[#FECE00] hover:bg-[#FECE00]/90 text-[#000000] font-heading text-[20px] py-6 rounded-2xl h-auto mt-6"
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
