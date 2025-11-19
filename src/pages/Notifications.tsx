import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";

const Notifications = () => {
  const notifications = [
    {
      title: "Flight AV 123 is on time",
      message: "Your flight from ONT to DAL is scheduled to depart at 12:00 PM on JAN 23, 2025.",
      time: "2 hours ago",
    },
    {
      title: "Check-in now available",
      message: "Check-in is now available for your flight AV 123 departing tomorrow.",
      time: "5 hours ago",
    },
    {
      title: "Boarding pass ready",
      message: "Your boarding pass for flight AV 123 is ready. Add it to your wallet for easy access.",
      time: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-avelo-purple-dark flex flex-col">
      <PageHeader />
      
      <main className="flex-1 pb-24 px-4 pt-6">
        <h1 className="text-[40px] font-heading font-semibold text-white mb-7">
          Notifications and Alerts
        </h1>
        
        <div className="max-w-md mx-auto space-y-4">
          {notifications.map((notification, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-[18px] border border-border space-y-2"
            >
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-base font-body font-semibold text-avelo-text-dark">
                  {notification.title}
                </h3>
                <span className="text-[13px] font-body text-avelo-text-light whitespace-nowrap">
                  {notification.time}
                </span>
              </div>
              <p className="text-base font-body text-avelo-text-light">
                {notification.message}
              </p>
            </div>
          ))}
          
          <div className="pt-4 text-center">
            <a
              href="#"
              className="text-base font-body text-white underline hover:text-avelo-yellow"
            >
              Enable push notifications
            </a>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Notifications;
