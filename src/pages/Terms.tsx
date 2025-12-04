import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { ScrollArea } from "@/components/ui/scroll-area";

const Terms = () => {
  return (
    <div className="min-h-screen bg-avelo-purple-dark flex flex-col">
      <PageHeader />

      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-[40px] font-heading font-semibold text-white mb-7">
          Terms & Conditions
        </h1>

        <div className="max-w-md mx-auto">
          <ScrollArea className="h-[calc(100vh-280px)]">
            <div className="bg-white rounded-2xl p-[18px] space-y-6">
              <section>
                <h2 className="text-xl font-heading font-semibold text-avelo-text-dark mb-3">
                  1. Booking Policy
                </h2>
                <p className="text-sm font-body text-avelo-text-medium leading-relaxed">
                  All bookings are subject to availability. Fares are not guaranteed until your purchase is complete. 
                  Prices may change without notice until the booking is confirmed. A valid email address and phone 
                  number are required for all bookings.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-semibold text-avelo-text-dark mb-3">
                  2. Cancellation & Refund Policy
                </h2>
                <p className="text-sm font-body text-avelo-text-medium leading-relaxed">
                  Cancellations made within 24 hours of booking are eligible for a full refund. After 24 hours, 
                  cancellation fees may apply. Refunds are processed within 7-10 business days to the original 
                  payment method. Non-refundable fares cannot be refunded but may be eligible for future travel credit.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-semibold text-avelo-text-dark mb-3">
                  3. Baggage Policy
                </h2>
                <p className="text-sm font-body text-avelo-text-medium leading-relaxed">
                  Each passenger is allowed one personal item free of charge. Carry-on and checked baggage fees 
                  vary by route and fare type. Overweight and oversized baggage are subject to additional fees. 
                  Avelo is not responsible for items left on aircraft.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-semibold text-avelo-text-dark mb-3">
                  4. Check-In Requirements
                </h2>
                <p className="text-sm font-body text-avelo-text-medium leading-relaxed">
                  Online check-in opens 24 hours before departure. Passengers must arrive at the airport at least 
                  2 hours before domestic flights. Valid government-issued photo ID is required for all passengers 
                  18 years and older.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-semibold text-avelo-text-dark mb-3">
                  5. Liability Limitations
                </h2>
                <p className="text-sm font-body text-avelo-text-medium leading-relaxed">
                  Avelo Airlines' liability for delayed or damaged baggage is limited as specified in our Contract 
                  of Carriage. We are not liable for consequential damages arising from flight delays or cancellations. 
                  In case of overbooking, passengers may be denied boarding and entitled to compensation as per DOT regulations.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-semibold text-avelo-text-dark mb-3">
                  6. Privacy Policy
                </h2>
                <p className="text-sm font-body text-avelo-text-medium leading-relaxed">
                  We collect personal information to process bookings and improve our services. Your data is 
                  protected and never sold to third parties. We may share information with partners necessary 
                  for completing your travel. For full details, visit our Privacy Policy page.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-heading font-semibold text-avelo-text-dark mb-3">
                  7. Changes to Terms
                </h2>
                <p className="text-sm font-body text-avelo-text-medium leading-relaxed">
                  Avelo Airlines reserves the right to modify these terms at any time. Continued use of our 
                  services constitutes acceptance of updated terms. Material changes will be communicated via 
                  email or website notice.
                </p>
              </section>

              <p className="text-xs font-body text-avelo-text-medium text-center pt-4 border-t border-border">
                Last updated: December 2024
              </p>
            </div>
          </ScrollArea>
        </div>
      </main>

      <BottomNav />
    </div>
  );
};

export default Terms;
