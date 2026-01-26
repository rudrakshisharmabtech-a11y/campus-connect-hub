import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Users, Award, Briefcase, GraduationCap, Linkedin, Mail, ExternalLink, Star, MapPin, ChevronDown, ChevronUp, Target, BookOpen, Lightbulb, Trophy, Heart } from "lucide-react";

const alumniAchievements = [
  { 
    name: "Dr. Rajesh Kumar", 
    batch: "2010", 
    role: "AI Research Lead at Google", 
    achievement: "Published 50+ papers, IEEE Fellow", 
    avatar: "RK", 
    location: "San Francisco, USA",
    linkedin: "https://linkedin.com/in/rajeshkumar",
    journey: {
      campusYears: "2006-2010",
      degree: "B.Tech Computer Science",
      highlights: [
        "Started coding club in 2nd year",
        "Won national hackathon 2009",
        "Published first paper in final year",
        "Interned at Microsoft Research"
      ],
      challenges: [
        "Struggled with advanced mathematics initially",
        "Failed first attempt at competitive programming",
        "Balanced academics with research projects"
      ],
      studyStrategy: "Focus on fundamentals, practice daily coding, collaborate with peers",
      advice: "Never stop learning. The field evolves rapidly - stay curious and keep building."
    }
  },
  { 
    name: "Priya Menon", 
    batch: "2012", 
    role: "Founder & CEO, TechStart", 
    achievement: "Forbes 30 Under 30, $50M Funding", 
    avatar: "PM", 
    location: "Bangalore, India",
    linkedin: "https://linkedin.com/in/priyamenon",
    journey: {
      campusYears: "2008-2012",
      degree: "B.Tech + MBA Dual Degree",
      highlights: [
        "Led entrepreneurship cell",
        "Started first venture in 3rd year",
        "Won business plan competition",
        "Mentored junior students"
      ],
      challenges: [
        "First startup failed in campus",
        "Managed dual degree workload",
        "Faced gender bias in tech"
      ],
      studyStrategy: "Learn by doing, network actively, embrace failures as lessons",
      advice: "Your network is your net worth. Build genuine relationships."
    }
  },
  { 
    name: "Amit Sharma", 
    batch: "2008", 
    role: "VP Engineering, Microsoft", 
    achievement: "Led Azure Cloud expansion", 
    avatar: "AS", 
    location: "Seattle, USA",
    linkedin: "https://linkedin.com/in/amitsharma",
    journey: {
      campusYears: "2004-2008",
      degree: "B.Tech Computer Science",
      highlights: [
        "Academic topper all 4 years",
        "Open source contributor",
        "Campus placement star",
        "Built college ERP system"
      ],
      challenges: [
        "Introvert - struggled with presentations",
        "Worked part-time to fund education",
        "Had to teach peers to learn better"
      ],
      studyStrategy: "Deep dive into concepts, build projects, teach others to reinforce learning",
      advice: "Excellence is a habit. Small consistent efforts compound over time."
    }
  },
  { 
    name: "Dr. Neha Gupta", 
    batch: "2015", 
    role: "Professor, MIT", 
    achievement: "MacArthur Fellowship Winner", 
    avatar: "NG", 
    location: "Boston, USA",
    linkedin: "https://linkedin.com/in/nehagupta",
    journey: {
      campusYears: "2011-2015",
      degree: "B.Tech + M.Tech (Integrated)",
      highlights: [
        "Published 3 papers during undergrad",
        "Got direct PhD admission to MIT",
        "Won best thesis award",
        "Started women in STEM initiative"
      ],
      challenges: [
        "Balancing research with coursework",
        "Limited research resources on campus",
        "Long-distance relationship during PhD"
      ],
      studyStrategy: "Read extensively, question everything, collaborate internationally",
      advice: "Research is about asking the right questions, not just finding answers."
    }
  },
  { 
    name: "Vikram Singh", 
    batch: "2011", 
    role: "CTO, FinanceHub", 
    achievement: "Built platform serving 10M+ users", 
    avatar: "VS", 
    location: "London, UK",
    linkedin: "https://linkedin.com/in/vikramsingh",
    journey: {
      campusYears: "2007-2011",
      degree: "B.Tech Information Technology",
      highlights: [
        "Won multiple coding competitions",
        "Built campus social network",
        "Led technical fest team",
        "Got pre-placement offer"
      ],
      challenges: [
        "Had to switch from mechanical to IT",
        "Learned coding from scratch in 2nd year",
        "Dealt with imposter syndrome"
      ],
      studyStrategy: "Code every day, participate in competitions, build real products",
      advice: "It's never too late to start. Your background doesn't define your future."
    }
  },
  { 
    name: "Anita Desai", 
    batch: "2014", 
    role: "Director, SpaceX", 
    achievement: "Led 5 successful missions", 
    avatar: "AD", 
    location: "Los Angeles, USA",
    linkedin: "https://linkedin.com/in/anitadesai",
    journey: {
      campusYears: "2010-2014",
      degree: "B.Tech Aerospace Engineering",
      highlights: [
        "Led satellite project team",
        "Interned at ISRO",
        "Won aerospace design competition",
        "First in class to join SpaceX"
      ],
      challenges: [
        "Only girl in aerospace batch",
        "Limited aerospace opportunities in India",
        "Visa challenges for US jobs"
      ],
      studyStrategy: "Stay focused on your passion, ignore naysayers, work harder than anyone",
      advice: "Dream big but start small. Every rocket starts with a single spark."
    }
  },
];

const contactEmails = [
  { name: "Alumni Relations Office", email: "alumni@university.edu", description: "General alumni inquiries and networking" },
  { name: "Career Connect", email: "careerconnect@university.edu", description: "Mentorship and career guidance programs" },
  { name: "Alumni Events", email: "events@university.edu", description: "Reunions, workshops, and meetups" },
  { name: "Donations & Scholarships", email: "giving@university.edu", description: "Support future students" },
  { name: "Alumni Newsletter", email: "newsletter@university.edu", description: "Stay updated with alumni news" },
];

export default function Alumni() {
  const [expandedAlumni, setExpandedAlumni] = useState<string | null>(null);

  const toggleJourney = (name: string) => {
    setExpandedAlumni(expandedAlumni === name ? null : name);
  };

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
            Connect with successful graduates making impact worldwide. Learn from their journeys.
          </p>
        </div>
      </section>

      {/* Alumni Achievements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Featured Alumni</h2>
            <p className="text-muted-foreground">Celebrating excellence across industries - click to see their journey</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alumniAchievements.map((alumni, index) => (
              <div 
                key={alumni.name} 
                className="rounded-2xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up overflow-hidden" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6">
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
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2 mb-3">
                    <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full"><Linkedin className="w-4 h-4" />Connect</Button>
                    </a>
                    <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="gradient" size="sm" className="w-full"><Mail className="w-4 h-4" />Message</Button>
                    </a>
                  </div>

                  {/* Journey Toggle */}
                  <Button 
                    variant="ghost" 
                    className="w-full text-primary hover:bg-primary/10"
                    onClick={() => toggleJourney(alumni.name)}
                  >
                    {expandedAlumni === alumni.name ? (
                      <>Hide Journey <ChevronUp className="w-4 h-4 ml-2" /></>
                    ) : (
                      <>View Journey <ChevronDown className="w-4 h-4 ml-2" /></>
                    )}
                  </Button>
                </div>

                {/* Expanded Journey Section */}
                {expandedAlumni === alumni.name && (
                  <div className="px-6 pb-6 border-t border-border bg-muted/30 animate-fade-in">
                    <div className="pt-4 space-y-4">
                      {/* Campus Info */}
                      <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-xl">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium text-sm">{alumni.journey.degree}</p>
                          <p className="text-xs text-muted-foreground">{alumni.journey.campusYears}</p>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold text-sm flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-campus-yellow" /> Campus Highlights
                        </h4>
                        <ul className="space-y-1">
                          {alumni.journey.highlights.map((highlight, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <Trophy className="w-3 h-3 mt-1 text-campus-green shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Challenges */}
                      <div>
                        <h4 className="font-semibold text-sm flex items-center gap-2 mb-2">
                          <Target className="w-4 h-4 text-campus-orange" /> Challenges Faced
                        </h4>
                        <ul className="space-y-1">
                          {alumni.journey.challenges.map((challenge, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-campus-orange shrink-0">•</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Study Strategy */}
                      <div className="p-3 bg-campus-blue/10 rounded-xl">
                        <h4 className="font-semibold text-sm flex items-center gap-2 mb-1">
                          <BookOpen className="w-4 h-4 text-campus-blue" /> Study Strategy
                        </h4>
                        <p className="text-sm text-muted-foreground">{alumni.journey.studyStrategy}</p>
                      </div>

                      {/* Advice */}
                      <div className="p-3 bg-campus-purple/10 rounded-xl">
                        <h4 className="font-semibold text-sm flex items-center gap-2 mb-1">
                          <Lightbulb className="w-4 h-4 text-campus-purple" /> Advice for Students
                        </h4>
                        <p className="text-sm text-muted-foreground italic">"{alumni.journey.advice}"</p>
                      </div>
                    </div>
                  </div>
                )}
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
