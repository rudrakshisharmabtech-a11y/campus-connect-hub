import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  GraduationCap, 
  Map, 
  BookOpen, 
  Users, 
  Trophy, 
  Brain, 
  Sparkles,
  ArrowRight,
  Star,
  CheckCircle2
} from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

const features = [
  {
    icon: Map,
    title: "Interactive Campus Map",
    description: "Navigate your campus with ease. Find buildings, classrooms, and facilities instantly.",
    color: "bg-campus-blue",
    link: "/campus-map"
  },
  {
    icon: BookOpen,
    title: "Smart Study Tools",
    description: "AI-powered notes, video summaries, mind maps, and study groups all in one place.",
    color: "bg-campus-teal",
    link: "/study"
  },
  {
    icon: Trophy,
    title: "Progress Tracker",
    description: "Monitor your academic journey with beautiful dashboards and achievement badges.",
    color: "bg-campus-orange",
    link: "/about"
  },
  {
    icon: Users,
    title: "Alumni Network",
    description: "Connect with successful alumni for mentorship, guidance, and career opportunities.",
    color: "bg-campus-purple",
    link: "/alumni"
  },
];

const stats = [
  { value: "15,000+", label: "Active Students" },
  { value: "500+", label: "Faculty Members" },
  { value: "100+", label: "Programs" },
  { value: "50+", label: "Research Labs" },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src={heroCampus} 
            alt="University Campus" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/60 to-primary/40" />
        </div>
        
        {/* Animated Shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <div className="max-w-4xl mx-auto text-center stagger-children">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary-foreground">Welcome to Your Campus Companion</span>
            </div>
            
            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6 leading-tight">
              Your Ultimate
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                Campus Buddy
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Navigate, Learn, and Connect. Everything you need for an amazing university experience in one beautiful app.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/campus-map">
                <Button variant="glass" size="xl" className="w-full sm:w-auto border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                  Explore Campus
                  <Map className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary)/0.1),transparent_70%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make your campus life easier, smarter, and more connected.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Link 
                  key={feature.title} 
                  to={feature.link}
                  className="group"
                >
                  <div 
                    className="h-full p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* About University Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
              <GraduationCap className="w-5 h-5" />
              <span className="font-medium">About Our University</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Excellence in Education Since 1950
            </h2>
            
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
              Our university stands as a beacon of academic excellence, research innovation, and student success. 
              With state-of-the-art facilities, world-class faculty, and a vibrant campus community, 
              we prepare students to become leaders in their fields and make a positive impact on the world.
            </p>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10">
              {[
                "NAAC A++ Accredited",
                "Top 50 Universities",
                "100% Placement Support",
                "International Collaborations",
                "Research Excellence",
                "Industry Partnerships"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 justify-center text-primary-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-campus-teal" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            
            <Link to="/about">
              <Button variant="glass" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Loved by Students
            </h2>
            <p className="text-xl text-muted-foreground">
              See what our students say about Campus Buddy
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya Sharma",
                role: "Computer Science, 3rd Year",
                quote: "Campus Buddy's study tools helped me ace my exams. The AI-powered notes are a game changer!",
                avatar: "PS"
              },
              {
                name: "Rahul Kumar",
                role: "Mechanical Engineering, 2nd Year",
                quote: "Finding my way around campus was so hard until I discovered the interactive map. Absolutely love it!",
                avatar: "RK"
              },
              {
                name: "Ananya Singh",
                role: "MBA, 1st Year",
                quote: "The alumni network feature connected me with amazing mentors. Highly recommend for all students!",
                avatar: "AS"
              }
            ].map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-campus-yellow text-campus-yellow" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
              <Brain className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Ready to Transform Your Campus Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of students who are already using Campus Buddy to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button variant="gradient" size="xl">
                  Create Free Account
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="outline" size="xl">
                  Already have an account?
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
