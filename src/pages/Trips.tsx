import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";

const Trips = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHeader />
      
      <main className="flex-1 pb-24 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-3xl font-heading font-semibold text-avelo-purple mb-4">
            My Trips
          </h1>
          <p className="text-avelo-text-medium">
            You don't have any upcoming trips.
          </p>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Trips;
