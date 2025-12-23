import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic
    console.log("Login:", { email, password });
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-slide-up">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-2xl text-gradient">Campus Buddy</span>
          </Link>

          <h1 className="text-3xl font-display font-bold mb-2">Welcome Back!</h1>
          <p className="text-muted-foreground mb-8">Sign in to continue your learning journey</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@university.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link to="/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <Button type="submit" variant="gradient" size="lg" className="w-full">
              Sign In
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary font-semibold hover:underline">
                Sign up for free
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-center text-muted-foreground">
              By signing in, you agree to our{" "}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>

      {/* Right Side - Decorative */}
      <div className="hidden lg:flex flex-1 gradient-hero items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-foreground/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        
        <div className="max-w-lg text-center text-primary-foreground relative z-10">
          <div className="w-24 h-24 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
            <GraduationCap className="w-12 h-12" />
          </div>
          <h2 className="text-4xl font-display font-bold mb-4">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-primary-foreground/80 leading-relaxed">
            Access powerful study tools, navigate your campus, connect with alumni, and track your progress all in one place.
          </p>
        </div>
      </div>
    </div>
  );
}
