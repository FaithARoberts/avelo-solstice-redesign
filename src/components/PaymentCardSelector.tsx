import { useState } from "react";
import { CreditCard, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PaymentCard {
  id: string;
  type: "mastercard" | "visa" | "amex" | "discover";
  lastFour: string;
  expiry: string;
}

const SAVED_CARDS: PaymentCard[] = [
  { id: "1", type: "mastercard", lastFour: "8765", expiry: "09/27" },
  { id: "2", type: "visa", lastFour: "4321", expiry: "12/26" },
  { id: "3", type: "amex", lastFour: "1234", expiry: "03/28" },
  { id: "4", type: "discover", lastFour: "5678", expiry: "06/25" },
];

interface PaymentCardSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: (card: PaymentCard) => void;
  isProcessing?: boolean;
}

const PaymentCardSelector = ({
  open,
  onOpenChange,
  onConfirm,
  isProcessing = false,
}: PaymentCardSelectorProps) => {
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);

  const getCardLogo = (type: string) => {
    switch (type) {
      case "mastercard":
        return (
          <div className="flex items-center gap-0.5">
            <div className="w-5 h-5 bg-red-500 rounded-full opacity-90" />
            <div className="w-5 h-5 bg-yellow-500 rounded-full -ml-2 opacity-90" />
          </div>
        );
      case "visa":
        return (
          <span className="text-blue-600 font-bold italic text-sm">VISA</span>
        );
      case "amex":
        return (
          <span className="text-blue-500 font-bold text-xs">AMEX</span>
        );
      case "discover":
        return (
          <span className="text-orange-500 font-bold text-xs">DISCOVER</span>
        );
      default:
        return <CreditCard className="w-6 h-6 text-avelo-text-medium" />;
    }
  };

  const handleConfirm = () => {
    const selectedCard = SAVED_CARDS.find((c) => c.id === selectedCardId);
    if (selectedCard) {
      onConfirm(selectedCard);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-avelo-purple-dark border-avelo-purple max-w-sm mx-auto">
        <DialogHeader>
          <DialogTitle className="text-white font-heading text-xl">
            Select Payment Method
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {SAVED_CARDS.map((card) => (
            <button
              key={card.id}
              onClick={() => setSelectedCardId(card.id)}
              className={`w-full bg-avelo-card-light rounded-2xl p-4 flex items-center justify-between transition-all ${
                selectedCardId === card.id
                  ? "ring-2 ring-avelo-yellow"
                  : "hover:bg-avelo-card-light/80"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                  {getCardLogo(card.type)}
                </div>
                <div className="text-left">
                  <p className="font-heading font-semibold text-avelo-text-dark capitalize">
                    {card.type}
                  </p>
                  <p className="text-sm text-avelo-text-medium font-body">
                    •••• {card.lastFour} | Exp: {card.expiry}
                  </p>
                </div>
              </div>
              {selectedCardId === card.id && (
                <div className="w-6 h-6 bg-avelo-yellow rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-avelo-purple" />
                </div>
              )}
            </button>
          ))}
        </div>

        <Button
          onClick={handleConfirm}
          disabled={!selectedCardId || isProcessing}
          className="w-full bg-avelo-yellow hover:bg-avelo-yellow/90 text-avelo-purple font-heading text-lg h-14 rounded-2xl mt-4 disabled:opacity-50"
        >
          {isProcessing ? "Processing Payment..." : "Pay with Selected Card"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentCardSelector;
