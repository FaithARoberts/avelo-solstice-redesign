import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AveloLogo from "@/components/AveloLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const result = login(email, password);

    if (result.success) {
      toast({
        title: "Welcome back!",
        description: "You have successfully logged in",
      });
      navigate("/");
    } else {
      toast({
        title: "Login failed",
        description: result.error,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-background border-[4px] border-avelo-purple rounded-3xl p-[18px] space-y-6">
        <AveloLogo />

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-[13px] font-body text-avelo-text-medium mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter Email Here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full rounded-2xl border-avelo-text-medium/30 h-11 text-base font-body ${errors.email ? "border-avelo-error" : ""}`}
            />
            {errors.email && <p className="text-xs text-avelo-error mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-[13px] font-body text-avelo-text-medium mb-1">
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter Password Here"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full rounded-2xl border-avelo-text-medium/30 h-11 text-base font-body ${errors.password ? "border-avelo-error" : ""}`}
            />
            {errors.password && <p className="text-xs text-avelo-error mt-1">{errors.password}</p>}
          </div>

          <div className="text-center py-2">
            <span className="text-sm text-avelo-text-medium">or</span>
          </div>

          <Button
            type="button"
            variant="outline"
            className="w-full h-11 rounded-2xl border-avelo-text-medium/30 bg-background hover:bg-muted font-body text-base"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </Button>

          <div className="text-center text-[13px] text-avelo-text-medium space-x-2 font-body">
            <span>New to Avelo?</span>
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-avelo-purple underline hover:text-avelo-purple/80"
            >
              Sign up here
            </button>
            <span>|</span>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="text-avelo-purple underline hover:text-avelo-purple/80"
            >
              Continue as Guest
            </button>
          </div>

          <Button
            type="submit"
            className="w-full bg-avelo-purple hover:bg-avelo-purple/90 text-white font-heading text-[20px] py-3 rounded-2xl h-auto"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
