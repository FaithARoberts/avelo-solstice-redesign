import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BottomNav from "@/components/BottomNav";
import { Button } from "@/components/ui/button";
import AveloLogo from "@/components/AveloLogo";

const EditPaymentMethod = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const cardData = {
    type: "discover",
    last4: "5555",
    expiry: "08/30",
  };

  const handleDelete = () => {
    // In a real app, this would delete the card
    navigate("/payment-methods");
  };

  const handleEdit = () => {
    // In a real app, this would open an edit form
    navigate("/payment-methods");
  };

  const getCardLogo = () => {
    return (
      <div className="bg-[#FF6000] text-white px-3 py-1 rounded font-bold text-lg inline-block">
        DISCOVER
      </div>
    );
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
          Edit Payment Method
        </h1>
      </div>

      {/* Card Display */}
      <main className="flex-1 pb-32 px-4 pt-8">
        <div className="max-w-md mx-auto">
          {/* Card Info */}
          <div className="bg-[#F7F5F9] rounded-2xl p-6 mb-6">
            <div className="mb-4">{getCardLogo()}</div>
            <p className="text-base font-body text-[#000000] font-semibold mb-1">
              **** **** **** {cardData.last4}
            </p>
            <p className="text-sm font-body text-[#323131]">
              Expires {cardData.expiry}
            </p>
          </div>

          {/* Edit Card Button */}
          <Button
            onClick={handleEdit}
            className="w-full bg-[#FECE00] hover:bg-[#FECE00]/90 text-[#000000] font-heading text-[20px] py-6 rounded-2xl h-auto mb-4"
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
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default EditPaymentMethod;
