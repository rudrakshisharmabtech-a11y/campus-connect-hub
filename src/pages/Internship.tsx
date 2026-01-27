import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  Code, 
  Scale, 
  Stethoscope, 
  FlaskConical, 
  Palette, 
  Building, 
  Trophy, 
  MapPin, 
  Clock, 
  DollarSign,
  ExternalLink,
  GraduationCap,
  Users,
  Rocket
} from "lucide-react";

const internships = [
  {
    company: "Google",
    role: "Software Engineering Intern",
    domain: "BTech/CS Students",
    location: "Bangalore, India",
    duration: "3 months",
    stipend: "₹80,000/month",
    icon: Code,
    color: "bg-gradient-to-br from-blue-500 to-green-500",
    link: "https://www.google.com/about/careers/applications/jobs/results/?q=intern",
    description: "Work on real-world projects with Google engineers"
  },
  {
    company: "Microsoft",
    role: "Data Science Intern",
    domain: "BTech/Data Science",
    location: "Hyderabad, India",
    duration: "6 months",
    stipend: "₹75,000/month",
    icon: Building,
    color: "bg-gradient-to-br from-blue-600 to-purple-600",
    link: "https://careers.microsoft.com/v2/global/en/students",
    description: "Analyze data and build ML models for Azure services"
  },
  {
    company: "Cyril Amarchand Mangaldas",
    role: "Legal Intern",
    domain: "Law Students",
    location: "Mumbai, India",
    duration: "2 months",
    stipend: "₹25,000/month",
    icon: Scale,
    color: "bg-gradient-to-br from-amber-500 to-orange-500",
    link: "https://www.cyrilshroff.com/careers/",
    description: "Work on corporate law and M&A cases"
  },
  {
    company: "Apollo Hospitals",
    role: "Medical Research Intern",
    domain: "Medical Students",
    location: "Chennai, India",
    duration: "3 months",
    stipend: "₹30,000/month",
    icon: Stethoscope,
    color: "bg-gradient-to-br from-red-500 to-pink-500",
    link: "https://www.apollohospitals.com/careers/",
    description: "Clinical research and patient care experience"
  },
  {
    company: "ISRO",
    role: "Research Intern",
    domain: "Science/Engineering",
    location: "Bangalore, India",
    duration: "6 months",
    stipend: "₹35,000/month",
    icon: Rocket,
    color: "bg-gradient-to-br from-indigo-500 to-blue-500",
    link: "https://www.isro.gov.in/Careers.html",
    description: "Work on satellite and space research projects"
  },
  {
    company: "Tata Institute of Fundamental Research",
    role: "Physics Research Intern",
    domain: "Physics Students",
    location: "Mumbai, India",
    duration: "4 months",
    stipend: "₹40,000/month",
    icon: FlaskConical,
    color: "bg-gradient-to-br from-purple-500 to-indigo-500",
    link: "https://www.tifr.res.in/positions",
    description: "Fundamental physics research and experiments"
  },
  {
    company: "Adobe",
    role: "UX Design Intern",
    domain: "Design Students",
    location: "Noida, India",
    duration: "3 months",
    stipend: "₹60,000/month",
    icon: Palette,
    color: "bg-gradient-to-br from-pink-500 to-red-500",
    link: "https://careers.adobe.com/us/en/search-results?keywords=intern",
    description: "Design experiences for Creative Cloud products"
  },
  {
    company: "Sports Authority of India",
    role: "Sports Management Intern",
    domain: "Sports Students",
    location: "Delhi, India",
    duration: "3 months",
    stipend: "₹20,000/month",
    icon: Trophy,
    color: "bg-gradient-to-br from-green-500 to-teal-500",
    link: "https://sportsauthorityofindia.gov.in/",
    description: "Sports event management and athlete coordination"
  },
  {
    company: "Amazon",
    role: "Product Management Intern",
    domain: "MBA Students",
    location: "Bangalore, India",
    duration: "2 months",
    stipend: "₹1,00,000/month",
    icon: Building,
    color: "bg-gradient-to-br from-orange-500 to-yellow-500",
    link: "https://www.amazon.jobs/en/search?base_query=intern&loc_query=India",
    description: "Drive product strategy for Amazon services"
  },
  {
    company: "Deloitte",
    role: "Consulting Intern",
    domain: "Commerce/MBA",
    location: "Mumbai, India",
    duration: "3 months",
    stipend: "₹50,000/month",
    icon: Users,
    color: "bg-gradient-to-br from-teal-500 to-cyan-500",
    link: "https://www2.deloitte.com/in/en/careers/students.html",
    description: "Business consulting for Fortune 500 clients"
  },
  {
    company: "Biocon",
    role: "Biotech Research Intern",
    domain: "Biotech Students",
    location: "Bangalore, India",
    duration: "6 months",
    stipend: "₹35,000/month",
    icon: FlaskConical,
    color: "bg-gradient-to-br from-green-600 to-emerald-500",
    link: "https://www.biocon.com/careers/",
    description: "Biopharmaceutical research and development"
  },
  {
    company: "Goldman Sachs",
    role: "Finance Intern",
    domain: "Finance/Economics",
    location: "Bangalore, India",
    duration: "2 months",
    stipend: "₹90,000/month",
    icon: DollarSign,
    color: "bg-gradient-to-br from-blue-700 to-indigo-700",
    link: "https://www.goldmansachs.com/careers/students/programs/india/",
    description: "Investment banking and financial analysis"
  },
  {
    company: "Internshala",
    role: "Multiple Internships",
    domain: "All Students",
    location: "Remote/India",
    duration: "Varies",
    stipend: "Varies",
    icon: GraduationCap,
    color: "bg-gradient-to-br from-sky-500 to-blue-600",
    link: "https://internshala.com/internships/",
    description: "India's largest internship platform with 10,000+ opportunities"
  },
  {
    company: "LinkedIn",
    role: "Engineering Intern",
    domain: "BTech Students",
    location: "Bangalore, India",
    duration: "3 months",
    stipend: "₹85,000/month",
    icon: Users,
    color: "bg-gradient-to-br from-blue-600 to-blue-800",
    link: "https://careers.linkedin.com/students",
    description: "Build features used by millions of professionals"
  },
  {
    company: "DRDO",
    role: "Defence Research Intern",
    domain: "Engineering/Science",
    location: "Delhi, India",
    duration: "6 months",
    stipend: "₹25,000/month",
    icon: Rocket,
    color: "bg-gradient-to-br from-gray-600 to-gray-800",
    link: "https://www.drdo.gov.in/careers",
    description: "Work on cutting-edge defence technologies"
  },
  {
    company: "Unstop",
    role: "Various Internships",
    domain: "All Students",
    location: "Pan India",
    duration: "Varies",
    stipend: "Varies",
    icon: Briefcase,
    color: "bg-gradient-to-br from-orange-500 to-red-500",
    link: "https://unstop.com/internships",
    description: "Discover internships, competitions and hackathons"
  },
];

export default function Internship() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary-foreground)/0.1),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-slide-up">
            <Briefcase className="w-5 h-5" />
            <span className="font-medium">Internship Hub</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Launch Your Career
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Discover internships across all domains - Tech, Law, Medical, Science, Sports & more
          </p>
        </div>
      </section>

      {/* Internship Listings */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((internship, index) => {
              const Icon = internship.icon;
              return (
                <div
                  key={`${internship.company}-${internship.role}`}
                  className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-xl ${internship.color} flex items-center justify-center shrink-0`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg">{internship.company}</h3>
                      <p className="text-primary font-medium text-sm">{internship.role}</p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{internship.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="w-4 h-4 text-campus-blue" />
                      <span>{internship.domain}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-campus-orange" />
                      <span>{internship.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 text-campus-purple" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-campus-green">
                      <DollarSign className="w-4 h-4" />
                      <span>{internship.stipend}</span>
                    </div>
                  </div>

                  <a href={internship.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="gradient" className="w-full">
                      Apply for Internship
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
