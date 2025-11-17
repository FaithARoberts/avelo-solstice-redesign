import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AveloLogo from "@/components/AveloLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <div className="bg-background border-4 border-avelo-purple rounded-3xl p-6 space-y-4">
          <div className="flex items-center gap-3 mb-2">
            <button
              onClick={() => navigate(-1)}
              className="w-10 h-10 rounded-full bg-avelo-yellow flex items-center justify-center hover:bg-avelo-yellow/90"
            >
              <ArrowLeft className="w-5 h-5 text-black" />
            </button>
            <div>
              <p className="text-xs text-avelo-text-medium">Go Back</p>
            </div>
          </div>
          
          <AveloLogo />
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block text-[13px] font-body text-avelo-text-medium mb-1">
                Name
              </label>
              <Input
                placeholder="Last Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="rounded-2xl border-avelo-text-medium/30 h-11 text-base font-body focus-visible:ring-2 focus-visible:ring-avelo-purple focus-visible:border-avelo-purple"
              />
            </div>
            
            <div>
              <label className="block text-[13px] font-body text-avelo-text-medium mb-1">
                Email
              </label>
              <Input
                type="email"
                placeholder="Enter Email Here"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="rounded-2xl border-avelo-text-medium/30 h-11 text-base font-body focus-visible:ring-2 focus-visible:ring-avelo-purple focus-visible:border-avelo-purple"
              />
            </div>
            
            <div>
              <label className="block text-[13px] font-body text-avelo-text-medium mb-1">
                Password
              </label>
              <Input
                type="password"
                placeholder="Enter Password Here"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                className="rounded-2xl border-avelo-text-medium/30 h-11 text-base font-body focus-visible:ring-2 focus-visible:ring-avelo-purple focus-visible:border-avelo-purple"
              />
            </div>
            
            <div>
              <label className="block text-[13px] font-body text-avelo-text-medium mb-1">
                Confirm Password
              </label>
              <Input
                type="password"
                placeholder="Confirm Password Here"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                className="rounded-2xl border-avelo-text-medium/30 h-11 text-base font-body focus-visible:ring-2 focus-visible:ring-avelo-purple focus-visible:border-avelo-purple"
              />
            </div>
            
            <div>
              <label className="block text-[13px] font-body text-avelo-text-medium mb-1">
                Phone Number
              </label>
              <Input
                type="tel"
                placeholder="555-555-5555"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="rounded-2xl border-avelo-text-medium/30 h-11 text-base font-body focus-visible:ring-2 focus-visible:ring-avelo-purple focus-visible:border-avelo-purple"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-avelo-purple hover:bg-avelo-purple/90 text-white font-heading text-[20px] py-3 rounded-2xl h-auto mt-4"
            >
              Sign up
            </Button>
            
            <div className="text-center text-[13px] text-avelo-text-medium pt-2 font-body">
              <span>Already have an account?</span>
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="text-avelo-purple underline hover:text-avelo-purple/80 ml-1"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
