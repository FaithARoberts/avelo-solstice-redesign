import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AveloLogo from "@/components/AveloLogo";

const EditPaymentMethod = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const cardType = searchParams.get("type") || "discover";
  const initialLast4 = searchParams.get("last4") || "5555";
  const initialExpiry = searchParams.get("expiry") || "08/30";

  const [isEditing, setIsEditing] = useState(false);
  const [cardNumber, setCardNumber] = useState(`************${initialLast4}`);
  const [expiry, setExpiry] = useState(initialExpiry);

  const handleDelete = () => {
    // Store deleted card ID in sessionStorage
    const deletedCards = JSON.parse(sessionStorage.getItem('deletedCards') || '[]');
    sessionStorage.setItem('deletedCards', JSON.stringify([...deletedCards, id]));
    navigate("/payment-methods");
  };

  const handleSave = () => {
    setIsEditing(false);
    // In a real app, this would save the updated card info
  };

  const getCardLogo = () => {
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
    return logos[cardType as keyof typeof logos] || logos.discover;
  };

  return (
    <div className="min-h-screen bg-[#310047] flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-border py-4">
        <div className="max-w-md mx-auto px-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/payment-methods")}
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
          Edit Payment Method
        </h1>
      </div>

      {/* Card Display or Edit Form */}
      <main className="flex-1 pb-32 px-4 pt-8 bg-avelo-purple-dark">
        <div className="max-w-md mx-auto">
          {!isEditing ? (
            <>
              {/* Card Info */}
              <div className="bg-[#F7F5F9] rounded-2xl p-6 mb-8">
                <div className="mb-4">{getCardLogo()}</div>
                <p className="text-base font-body text-[#000000] font-semibold mb-1">
                  {cardNumber}
                </p>
                <p className="text-sm font-body text-[#323131]">
                  Expires {expiry}
                </p>
              </div>

              {/* Edit Card Button */}
              <Button
                onClick={() => setIsEditing(true)}
                className="w-full bg-[#FECE00] hover:bg-[#FECE00]/90 text-[#000000] font-heading text-[20px] py-6 rounded-2xl h-auto mb-6"
              >
                Edit Card
              </Button>

              {/* Delete Card Button */}
              <Button
                onClick={handleDelete}
                className="w-full bg-[#FECE00] hover:bg-[#FECE00]/90 text-[#000000] font-heading text-[20px] py-6 rounded-2xl h-auto"
              >
                Delete Card
              </Button>
            </>
          ) : (
            <>
              {/* Edit Form */}
              <div className="space-y-8 mb-8">
                <div>
                  <Label htmlFor="cardNumber" className="text-sm font-body text-white mb-2 block">
                    Card Number
                  </Label>
                  <Input
                    id="cardNumber"
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="h-11 bg-white border-none rounded-2xl text-base font-body text-[#000000] focus-visible:ring-2 focus-visible:ring-avelo-yellow"
                    maxLength={16}
                  />
                </div>

                <div>
                  <Label htmlFor="expiry" className="text-sm font-body text-white mb-2 block">
                    Expiration Date
                  </Label>
                  <Input
                    id="expiry"
                    type="text"
                    placeholder="MM/YY"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    className="h-11 bg-white border-none rounded-2xl text-base font-body text-[#000000] focus-visible:ring-2 focus-visible:ring-avelo-yellow placeholder:text-[#323131]"
                    maxLength={5}
                  />
                </div>
              </div>

              {/* Save Changes Button */}
              <Button
                onClick={handleSave}
                className="w-full bg-[#FECE00] hover:bg-[#FECE00]/90 text-[#000000] font-heading text-[20px] py-6 rounded-2xl h-auto mb-6"
              >
                Save Changes
              </Button>

              {/* Cancel Button */}
              <Button
                onClick={() => setIsEditing(false)}
                className="w-full bg-white/20 hover:bg-white/30 text-white font-heading text-[20px] py-6 rounded-2xl h-auto"
              >
                Cancel
              </Button>
            </>
          )}
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default EditPaymentMethod;
