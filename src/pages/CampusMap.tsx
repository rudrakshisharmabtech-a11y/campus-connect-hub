import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  MapPin, 
  Building2, 
  Utensils, 
  BookOpen, 
  FlaskConical, 
  Dumbbell,
  Mail,
  Linkedin,
  MessageCircle,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

const locations = [
  { name: "Main Library", icon: BookOpen, color: "bg-campus-blue", position: { top: "20%", left: "45%" } },
  { name: "Engineering Block", icon: Building2, color: "bg-campus-orange", position: { top: "35%", left: "25%" } },
  { name: "Science Labs", icon: FlaskConical, color: "bg-campus-teal", position: { top: "40%", left: "65%" } },
  { name: "Cafeteria", icon: Utensils, color: "bg-campus-pink", position: { top: "60%", left: "40%" } },
  { name: "Sports Complex", icon: Dumbbell, color: "bg-campus-green", position: { top: "70%", left: "70%" } },
  { name: "Admin Building", icon: Building2, color: "bg-campus-purple", position: { top: "25%", left: "75%" } },
];

const helpfulSeniors = [
  {
    name: "Aditya Verma",
    role: "Computer Science, Final Year",
    expertise: "Programming & Tech Help",
    email: "aditya.verma@university.edu",
    linkedin: "linkedin.com/in/adityaverma",
    avatar: "AV"
  },
  {
    name: "Sneha Patel",
    role: "Electronics Engineering, 3rd Year",
    expertise: "Faculty Guidance & Course Selection",
    email: "sneha.patel@university.edu",
    linkedin: "linkedin.com/in/snehapatel",
    avatar: "SP"
  },
  {
    name: "Rohit Singh",
    role: "Mechanical Engineering, Final Year",
    expertise: "Internships & Placements",
    email: "rohit.singh@university.edu",
    linkedin: "linkedin.com/in/rohitsingh",
    avatar: "RS"
  },
  {
    name: "Priya Sharma",
    role: "MBA, 2nd Year",
    expertise: "Career Guidance & Soft Skills",
    email: "priya.sharma@university.edu",
    linkedin: "linkedin.com/in/priyasharma",
    avatar: "PS"
  },
  {
    name: "Karan Mehta",
    role: "Civil Engineering, 3rd Year",
    expertise: "Project Work & Assignments",
    email: "karan.mehta@university.edu",
    linkedin: "linkedin.com/in/karanmehta",
    avatar: "KM"
  },
  {
    name: "Ananya Gupta",
    role: "Data Science, Final Year",
    expertise: "Research & Academic Writing",
    email: "ananya.gupta@university.edu",
    linkedin: "linkedin.com/in/ananyagupta",
    avatar: "AG"
  }
];

export default function CampusMap() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary-foreground)/0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-slide-up">
              <MapPin className="w-5 h-5" />
              <span className="font-medium">Know Your Campus</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Interactive Campus Map
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Navigate through our beautiful campus with ease. Find buildings, facilities, and everything you need.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl border border-border shadow-card overflow-hidden">
            {/* Google Maps Embed - Stanford University Campus */}
            <div className="relative h-[600px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.2833035478!2d-122.17132492370088!3d37.42761473392493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbb2a9eda7f25%3A0x89e8e41f8e51c0f0!2sStanford%20University!5e0!3m2!1sen!2sus!4v1704067200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="University Campus Map"
                className="absolute inset-0"
              />
              
              {/* Map Overlay Title */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-card/95 backdrop-blur-sm rounded-lg border border-border shadow-lg z-10">
                <h3 className="font-display font-bold text-lg">University Campus Map</h3>
                <p className="text-sm text-muted-foreground">Explore our beautiful campus</p>
              </div>
              
              {/* Map Legend */}
              <div className="absolute bottom-4 right-4 p-4 bg-card/95 backdrop-blur-sm rounded-xl border border-border shadow-lg z-10">
                <h4 className="font-semibold mb-3">Key Locations</h4>
                <div className="grid grid-cols-2 gap-2">
                  {locations.map((location) => {
                    const Icon = location.icon;
                    return (
                      <div key={location.name} className="flex items-center gap-2">
                        <div className={`w-6 h-6 rounded ${location.color} flex items-center justify-center`}>
                          <Icon className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-xs text-muted-foreground">{location.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Helpful Seniors Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <User className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Helpful Seniors</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Need Guidance? Ask Seniors!
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with experienced seniors who can help you with courses, faculty, placements, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpfulSeniors.map((senior, index) => (
              <div 
                key={senior.name}
                className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                    {senior.avatar}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{senior.name}</h3>
                    <p className="text-sm text-muted-foreground">{senior.role}</p>
                  </div>
                </div>
                
                <div className="mb-4 px-3 py-2 rounded-lg bg-campus-teal/10 border border-campus-teal/20">
                  <p className="text-sm font-medium text-campus-teal">💡 {senior.expertise}</p>
                </div>
                
                <div className="space-y-2">
                  <a 
                    href={`mailto:${senior.email}`}
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors truncate">
                      {senior.email}
                    </span>
                  </a>
                  <a 
                    href={`https://${senior.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors group"
                  >
                    <Linkedin className="w-4 h-4 text-campus-blue" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      Connect on LinkedIn
                    </span>
                  </a>
                </div>
                
                <a 
                  href={`https://${senior.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-4 inline-block"
                >
                  <Button variant="outline" size="sm" className="w-full">
                    <MessageCircle className="w-4 h-4" />
                    Send Message
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
