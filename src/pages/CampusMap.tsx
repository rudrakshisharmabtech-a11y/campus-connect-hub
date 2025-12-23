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
            {/* Interactive Map Placeholder */}
            <div className="relative h-[600px] bg-gradient-to-br from-campus-green/10 via-campus-teal/5 to-campus-blue/10">
              {/* Campus Map Grid Background */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `
                  linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }} />
              
              {/* Campus Outline */}
              <div className="absolute inset-8 border-2 border-dashed border-muted-foreground/30 rounded-3xl" />
              
              {/* Map Title */}
              <div className="absolute top-4 left-4 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-lg border border-border shadow-sm">
                <h3 className="font-display font-bold text-lg">University Campus Map</h3>
                <p className="text-sm text-muted-foreground">Click on locations to learn more</p>
              </div>
              
              {/* Location Markers */}
              {locations.map((location, index) => {
                const Icon = location.icon;
                return (
                  <div
                    key={location.name}
                    className="absolute animate-scale-in group cursor-pointer"
                    style={{ 
                      top: location.position.top, 
                      left: location.position.left,
                      animationDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className={`w-12 h-12 rounded-xl ${location.color} flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-glow`}>
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 bg-card rounded-lg border border-border shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <p className="font-medium text-sm">{location.name}</p>
                    </div>
                    {/* Pulse Ring */}
                    <div className={`absolute inset-0 -m-1 rounded-xl ${location.color} opacity-30 animate-ping`} style={{ animationDuration: '2s' }} />
                  </div>
                );
              })}
              
              {/* Map Legend */}
              <div className="absolute bottom-4 right-4 p-4 bg-card/95 backdrop-blur-sm rounded-xl border border-border shadow-lg">
                <h4 className="font-semibold mb-3">Campus Locations</h4>
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
              
              {/* Upload Map Placeholder */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="w-24 h-24 rounded-2xl bg-muted flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">Your campus map will appear here</p>
                <p className="text-sm text-muted-foreground/70">Upload your university map to customize</p>
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
                
                <Button variant="outline" size="sm" className="w-full mt-4">
                  <MessageCircle className="w-4 h-4" />
                  Send Message
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
