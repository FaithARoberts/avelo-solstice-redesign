import { ArrowLeft, User, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Input } from "@/components/ui/input";

const Account = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-avelo-purple-dark flex flex-col">
      <PageHeader />
      
      <main className="flex-1 pb-24 px-4 pt-6">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full bg-avelo-yellow flex items-center justify-center active:scale-95 transition-transform"
            >
              <ArrowLeft className="w-5 h-5 text-avelo-purple" />
            </button>
            <h1 className="text-[40px] font-heading font-semibold text-white">
              My Account
            </h1>
          </div>
          
          <div className="bg-white rounded-2xl p-6 space-y-6">
            <div className="flex flex-col items-center py-4">
              <div className="w-24 h-24 rounded-full bg-avelo-card-light flex items-center justify-center mb-3">
                <User className="w-12 h-12 text-avelo-purple" />
              </div>
              <p className="text-small text-avelo-text-medium font-body">Welcome Back User</p>
            </div>
            
            <div className="space-y-5">
              <div>
                <label className="block text-small text-avelo-text-medium mb-2 font-body font-medium">
                  Name
                </label>
                <Input
                  value="John Doe"
                  readOnly
                  className="rounded-2xl bg-avelo-card-light border-none h-11 text-base font-body"
                />
              </div>
              
              <div>
                <label className="block text-small text-avelo-text-medium mb-2 font-body font-medium">
                  Phone Number
                </label>
                <Input
                  value="(555) 123-4567"
                  readOnly
                  className="rounded-2xl bg-avelo-card-light border-none h-11 text-base font-body"
                />
              </div>
              
              <div>
                <label className="block text-small text-avelo-text-medium mb-2 font-body font-medium">
                  Email Address
                </label>
                <Input
                  value="bexhetz77@uorak.com"
                  readOnly
                  className="rounded-2xl bg-avelo-card-light border-none h-11 text-base font-body text-ellipsis"
                />
              </div>
              
              <div className="relative">
                <label className="block text-small text-avelo-text-medium mb-2 font-body font-medium">
                  Password
                </label>
                <Input
                  type="password"
                  value="••••••••••"
                  readOnly
                  className="rounded-2xl bg-avelo-card-light border-none h-11 text-base font-body pr-10"
                />
                <button className="absolute right-3 top-9 hover:scale-110 transition-transform">
                  <Edit className="w-4 h-4 text-avelo-purple" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <BottomNav />
    </div>
  );
};

export default Account;
