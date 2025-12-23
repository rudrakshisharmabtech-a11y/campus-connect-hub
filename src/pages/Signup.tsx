import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GraduationCap, Mail, Lock, User, ArrowRight, Eye, EyeOff, CheckCircle2 } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup:", formData);
  };

  const benefits = [
    "Access to all study tools",
    "Interactive campus navigation",
    "Connect with alumni network",
    "Track your academic progress",
    "Join study groups"
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Side - Decorative */}
      <div className="hidden lg:flex flex-1 gradient-secondary items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary-foreground/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="max-w-lg text-primary-foreground relative z-10">
          <div className="w-24 h-24 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mb-8 animate-pulse-glow">
            <GraduationCap className="w-12 h-12" />
          </div>
          <h2 className="text-4xl font-display font-bold mb-4">
            Join Campus Buddy
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Create your free account and unlock all the features designed to make your university life easier.
          </p>
          
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit} 
                className="flex items-center gap-3 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CheckCircle2 className="w-6 h-6 text-campus-teal" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-slide-up">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shadow-glow">
              <GraduationCap className="w-7 h-7 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-2xl text-gradient">Campus Buddy</span>
          </Link>

          <h1 className="text-3xl font-display font-bold mb-2">Create Account</h1>
          <p className="text-muted-foreground mb-8">Start your journey with us today</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="you@university.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="pl-10 h-12"
                  required
                />
              </div>
            </div>

            <Button type="submit" variant="gradient" size="lg" className="w-full mt-2">
              Create Account
              <ArrowRight className="w-5 h-5" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-muted-foreground">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Sign in
              </Link>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-center text-muted-foreground">
              By creating an account, you agree to our{" "}
              <a href="#" className="text-primary hover:underline">Terms of Service</a>
              {" "}and{" "}
              <a href="#" className="text-primary hover:underline">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
