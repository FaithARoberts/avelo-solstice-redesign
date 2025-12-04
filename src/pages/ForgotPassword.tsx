import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AveloLogo from "@/components/AveloLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"email" | "code" | "newPassword">("email");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSendCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Simulate sending code
    toast({
      title: "Code Sent",
      description: "Check your email for the reset code",
    });
    setError("");
    setStep("code");
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 6) {
      setError("Please enter a 6-digit code");
      return;
    }

    // Simulate code verification (accept any 6-digit code for demo)
    setError("");
    setStep("newPassword");
  };

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Update password in localStorage
    const storedUsers = localStorage.getItem("avelo_users");
    if (storedUsers) {
      const users = JSON.parse(storedUsers);
      const userIndex = users.findIndex((u: { email: string }) => u.email === email);
      if (userIndex !== -1) {
        users[userIndex].password = btoa(newPassword); // Simple encoding for demo
        localStorage.setItem("avelo_users", JSON.stringify(users));
      }
    }

    toast({
      title: "Password Reset",
      description: "Your password has been successfully reset",
    });
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-background border-[4px] border-avelo-purple rounded-3xl p-[18px] space-y-6">
        <button
          onClick={() => step === "email" ? navigate("/login") : setStep("email")}
          className="flex items-center text-avelo-purple hover:text-avelo-purple/80"
        >
          <ArrowLeft className="w-5 h-5 mr-1" />
          <span className="text-sm font-body">Back</span>
        </button>

        <AveloLogo />

        <h1 className="text-2xl font-heading font-semibold text-avelo-text-dark text-center">
          Reset Password
        </h1>

        {step === "email" && (
          <form onSubmit={handleSendCode} className="space-y-4">
            <p className="text-sm text-avelo-text-medium text-center font-body">
              Enter your email address and we'll send you a code to reset your password.
            </p>

            <div>
              <label className="block text-[13px] font-body text-avelo-text-medium mb-1">
                Email
              </label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-2xl border-avelo-text-medium/30 h-11 text-base font-body"
              />
              {error && <p className="text-xs text-avelo-error mt-1">{error}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-avelo-purple hover:bg-avelo-purple/90 text-white font-heading text-[20px] py-3 rounded-2xl h-auto"
            >
              Send Reset Code
            </Button>
          </form>
        )}

        {step === "code" && (
          <form onSubmit={handleVerifyCode} className="space-y-4">
            <p className="text-sm text-avelo-text-medium text-center font-body">
              Enter the 6-digit code sent to {email}
            </p>

            <div>
              <label className="block text-[13px] font-body text-avelo-text-medium mb-1">
                Verification Code
              </label>
              <Input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="Enter 6-digit code"
                className="w-full rounded-2xl border-avelo-text-medium/30 h-11 text-base font-body text-center tracking-widest"
                maxLength={6}
              />
              {error && <p className="text-xs text-avelo-error mt-1">{error}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-avelo-purple hover:bg-avelo-purple/90 text-white font-heading text-[20px] py-3 rounded-2xl h-auto"
            >
              Verify Code
            </Button>

            <button
              type="button"
              onClick={() => {
                toast({ title: "Code Resent", description: "Check your email" });
              }}
              className="w-full text-center text-sm text-avelo-purple underline font-body"
            >
              Resend Code
            </button>
          </form>
        )}

        {step === "newPassword" && (
          <form onSubmit={handleResetPassword} className="space-y-4">
            <p className="text-sm text-avelo-text-medium text-center font-body">
              Create a new password for your account.
            </p>

            <div>
              <label className="block text-[13px] font-body text-avelo-text-medium mb-1">
                New Password
              </label>
              <Input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full rounded-2xl border-avelo-text-medium/30 h-11 text-base font-body"
              />
            </div>

            <div>
              <label className="block text-[13px] font-body text-avelo-text-medium mb-1">
                Confirm Password
              </label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
                className="w-full rounded-2xl border-avelo-text-medium/30 h-11 text-base font-body"
              />
              {error && <p className="text-xs text-avelo-error mt-1">{error}</p>}
            </div>

            <Button
              type="submit"
              className="w-full bg-avelo-purple hover:bg-avelo-purple/90 text-white font-heading text-[20px] py-3 rounded-2xl h-auto"
            >
              Reset Password
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
