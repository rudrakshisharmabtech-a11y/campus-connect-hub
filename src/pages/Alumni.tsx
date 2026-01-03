import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Users, Award, Briefcase, GraduationCap, Linkedin, Mail, ExternalLink, Star, MapPin } from "lucide-react";

const alumniAchievements = [
  { name: "Dr. Rajesh Kumar", batch: "2010", role: "AI Research Lead at Google", achievement: "Published 50+ papers, IEEE Fellow", avatar: "RK", location: "San Francisco, USA" },
  { name: "Priya Menon", batch: "2012", role: "Founder & CEO, TechStart", achievement: "Forbes 30 Under 30, $50M Funding", avatar: "PM", location: "Bangalore, India" },
  { name: "Amit Sharma", batch: "2008", role: "VP Engineering, Microsoft", achievement: "Led Azure Cloud expansion", avatar: "AS", location: "Seattle, USA" },
  { name: "Dr. Neha Gupta", batch: "2015", role: "Professor, MIT", achievement: "MacArthur Fellowship Winner", avatar: "NG", location: "Boston, USA" },
  { name: "Vikram Singh", batch: "2011", role: "CTO, FinanceHub", achievement: "Built platform serving 10M+ users", avatar: "VS", location: "London, UK" },
  { name: "Anita Desai", batch: "2014", role: "Director, SpaceX", achievement: "Led 5 successful missions", avatar: "AD", location: "Los Angeles, USA" },
];

const contactEmails = [
  { name: "Alumni Relations Office", email: "alumni@university.edu", description: "General alumni inquiries and networking" },
  { name: "Career Connect", email: "careerconnect@university.edu", description: "Mentorship and career guidance programs" },
  { name: "Alumni Events", email: "events@university.edu", description: "Reunions, workshops, and meetups" },
  { name: "Donations & Scholarships", email: "giving@university.edu", description: "Support future students" },
  { name: "Alumni Newsletter", email: "newsletter@university.edu", description: "Stay updated with alumni news" },
];

export default function Alumni() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary-foreground)/0.1),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-slide-up">
            <Users className="w-5 h-5" />
            <span className="font-medium">Alumni Connect</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Our Proud Alumni Network
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Connect with successful graduates making impact worldwide.
          </p>
        </div>
      </section>

      {/* Alumni Achievements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Featured Alumni</h2>
            <p className="text-muted-foreground">Celebrating excellence across industries</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumniAchievements.map((alumni, index) => (
              <div key={alumni.name} className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">{alumni.avatar}</div>
                  <div>
                    <h3 className="font-display font-semibold text-lg">{alumni.name}</h3>
                    <p className="text-sm text-muted-foreground">Batch of {alumni.batch}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <MapPin className="w-3 h-3" />{alumni.location}
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="flex items-center gap-2 text-primary font-medium"><Briefcase className="w-4 h-4" />{alumni.role}</div>
                </div>
                <div className="p-3 rounded-lg bg-campus-yellow/10 border border-campus-yellow/20 mb-4">
                  <div className="flex items-center gap-2 text-sm"><Award className="w-4 h-4 text-campus-yellow" /><span>{alumni.achievement}</span></div>
                </div>
                <div className="flex gap-2">
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full"><Linkedin className="w-4 h-4" />Connect</Button>
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="gradient" size="sm" className="w-full"><Mail className="w-4 h-4" />Message</Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">Connect with our alumni relations team</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {contactEmails.map((contact, index) => (
              <a key={contact.email} href={`mailto:${contact.email}`} className="p-4 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <h4 className="font-semibold">{contact.name}</h4>
                <p className="text-sm text-primary font-medium my-1">{contact.email}</p>
                <p className="text-sm text-muted-foreground">{contact.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
