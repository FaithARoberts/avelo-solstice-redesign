import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AveloLogo from "@/components/AveloLogo";

const AddPaymentMethod = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would save the card
    navigate("/payment-methods");
  };

  return (
    <div className="min-h-screen bg-[#310047] flex flex-col">
      {/* Header */}
      <div className="bg-[#580081] pt-12 pb-6 px-4">
        <div className="max-w-md mx-auto flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/payment-methods")}
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
          Add Your Card
        </h1>
      </div>

      {/* Form */}
      <main className="flex-1 pb-32 px-4 pt-8">
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-8">
          {/* Name */}
          <div>
            <Label htmlFor="name" className="text-sm font-body text-white mb-2 block">
              Name
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="h-11 bg-white border-none rounded-2xl text-base font-body text-[#000000] focus-visible:ring-2 focus-visible:ring-avelo-yellow"
              required
            />
          </div>

          {/* Card Number */}
          <div>
            <Label htmlFor="cardNumber" className="text-sm font-body text-white mb-2 block">
              Card Number
            </Label>
            <Input
              id="cardNumber"
              type="text"
              value={formData.cardNumber}
              onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
              className="h-11 bg-white border-none rounded-2xl text-base font-body text-[#000000] focus-visible:ring-2 focus-visible:ring-avelo-yellow"
              maxLength={16}
              required
            />
          </div>

          {/* Expiration Date and CVV */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expirationDate" className="text-sm font-body text-white mb-2 block">
                Expiration Date
              </Label>
              <Input
                id="expirationDate"
                type="text"
                placeholder="MM/YY"
                value={formData.expirationDate}
                onChange={(e) => setFormData({ ...formData, expirationDate: e.target.value })}
                className="h-11 bg-white border-none rounded-2xl text-base font-body text-[#000000] focus-visible:ring-2 focus-visible:ring-avelo-yellow placeholder:text-[#323131]"
                maxLength={5}
                required
              />
            </div>
            <div>
              <Label htmlFor="cvv" className="text-sm font-body text-white mb-2 block">
                CVV
              </Label>
              <Input
                id="cvv"
                type="text"
                value={formData.cvv}
                onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                className="h-11 bg-white border-none rounded-2xl text-base font-body text-[#000000] focus-visible:ring-2 focus-visible:ring-avelo-yellow"
                maxLength={4}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-[#FECE00] hover:bg-[#FECE00]/90 text-[#000000] font-heading text-[20px] py-6 rounded-2xl h-auto mt-10"
          >
            Add Card
          </Button>
        </form>
      </main>

      <BottomNav />
    </div>
  );
};

export default AddPaymentMethod;
