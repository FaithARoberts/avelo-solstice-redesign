import { ArrowLeft, User, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Input } from "@/components/ui/input";

const Account = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHeader />
      
      <main className="flex-1 pb-24">
        <div className="max-w-md mx-auto">
          <div className="bg-avelo-purple text-white p-4 flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full bg-avelo-yellow flex items-center justify-center"
            >
              <ArrowLeft className="w-5 h-5 text-black" />
            </button>
            <div>
              <p className="text-xs">Go Back</p>
              <h1 className="text-xl font-heading font-semibold">My Account</h1>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="flex flex-col items-center py-4">
              <div className="w-24 h-24 rounded-full bg-avelo-card-light flex items-center justify-center mb-3">
                <User className="w-12 h-12 text-avelo-purple" />
              </div>
              <p className="text-[13px] text-avelo-text-medium font-body">Welcome Back User</p>
            </div>
            
            <div className="space-y-7">
              <div>
                <label className="block text-[13px] text-avelo-text-medium mb-1 font-body">
                  Name
                </label>
                <Input
                  value="John Doe"
                  readOnly
                  className="rounded-2xl bg-avelo-card-light border-none h-11 text-base font-body"
                />
              </div>
              
              <div>
                <label className="block text-[13px] text-avelo-text-medium mb-1 font-body">
                  Phone Number
                </label>
                <Input
                  value="(555) 123-4567"
                  readOnly
                  className="rounded-2xl bg-avelo-card-light border-none h-11 text-base font-body"
                />
              </div>
              
              <div>
                <label className="block text-[13px] text-avelo-text-medium mb-1 font-body">
                  Email Address
                </label>
                <Input
                  value="bexhetz77@uorak.com"
                  readOnly
                  className="rounded-2xl bg-avelo-card-light border-none h-11 text-base font-body text-ellipsis"
                />
              </div>
              
              <div className="relative">
                <label className="block text-[13px] text-avelo-text-medium mb-1 font-body">
                  Password
                </label>
                <Input
                  type="password"
                  value="••••••••••"
                  readOnly
                  className="rounded-2xl bg-avelo-card-light border-none h-11 text-base font-body pr-10"
                />
                <button className="absolute right-3 top-8">
                  <Edit className="w-4 h-4 text-avelo-text-medium" />
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
