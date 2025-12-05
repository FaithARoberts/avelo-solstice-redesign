import { useState } from "react";
import { ArrowLeft, User, Edit } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const Account = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, logout, updateUser } = useAuth();
  const { toast } = useToast();
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handlePasswordChange = () => {
    if (newPassword.length < 6) {
      toast({
        title: "Password too short",
        description: "Password must be at least 6 characters",
        variant: "destructive",
      });
      return;
    }
    if (newPassword !== confirmPassword) {
      toast({
        title: "Passwords don't match",
        description: "Please make sure both passwords match",
        variant: "destructive",
      });
      return;
    }
    updateUser({ password: newPassword });
    setIsPasswordDialogOpen(false);
    setNewPassword("");
    setConfirmPassword("");
    toast({
      title: "Password updated",
      description: "Your password has been changed successfully",
    });
  };

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-avelo-purple-dark flex flex-col">
        <PageHeader />
        <main className="flex-1 pb-24 px-4 pt-6 flex flex-col items-center justify-center">
          <p className="text-white text-lg mb-4">Please log in to view your account</p>
          <Button
            onClick={() => navigate("/login")}
            className="bg-avelo-yellow text-avelo-purple font-heading rounded-2xl"
          >
            Log In
          </Button>
        </main>
        <BottomNav />
      </div>
    );
  }

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
              <p className="text-small text-avelo-text-medium font-body">
                Welcome Back, {user.name.split(" ")[0]}
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label className="block text-small text-avelo-text-medium mb-2 font-body font-medium">
                  Name
                </label>
                <Input
                  value={user.name}
                  readOnly
                  className="rounded-2xl bg-avelo-card-light border-none h-11 text-base font-body"
                />
              </div>

              <div>
                <label className="block text-small text-avelo-text-medium mb-2 font-body font-medium">
                  Phone Number
                </label>
                <Input
                  value={user.phone}
                  readOnly
                  className="rounded-2xl bg-avelo-card-light border-none h-11 text-base font-body"
                />
              </div>

              <div>
                <label className="block text-small text-avelo-text-medium mb-2 font-body font-medium">
                  Email Address
                </label>
                <Input
                  value={user.email}
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
                <button 
                  onClick={() => setIsPasswordDialogOpen(true)}
                  className="absolute right-3 top-9 hover:scale-110 transition-transform"
                >
                  <Edit className="w-4 h-4 text-avelo-purple" />
                </button>
              </div>
            </div>

            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full rounded-2xl border-avelo-error text-avelo-error hover:bg-avelo-error/10 font-heading"
            >
              Log Out
            </Button>
          </div>
        </div>
      </main>

      <Dialog open={isPasswordDialogOpen} onOpenChange={setIsPasswordDialogOpen}>
        <DialogContent className="bg-white rounded-2xl max-w-sm mx-4">
          <DialogHeader>
            <DialogTitle className="text-xl font-heading text-avelo-purple">
              Change Password
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <div>
              <label className="block text-small text-avelo-text-medium mb-2 font-body font-medium">
                New Password
              </label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="rounded-2xl bg-avelo-card-light border-none h-11 text-base font-body"
              />
            </div>
            <div>
              <label className="block text-small text-avelo-text-medium mb-2 font-body font-medium">
                Confirm Password
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="rounded-2xl bg-avelo-card-light border-none h-11 text-base font-body"
              />
            </div>
            <Button
              onClick={handlePasswordChange}
              className="w-full bg-avelo-yellow text-avelo-purple font-heading rounded-2xl h-11 hover:bg-avelo-yellow/90"
            >
              Save Password
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <BottomNav />
    </div>
  );
};

export default Account;
