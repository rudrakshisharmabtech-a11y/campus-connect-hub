import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { 
  FlaskConical, 
  BookOpen, 
  Award, 
  Newspaper, 
  ExternalLink,
  Code,
  Scale,
  Stethoscope,
  Cpu,
  Palette,
  Building,
  Calculator,
  Atom,
  Brain,
  Leaf,
  Globe,
  ChevronRight
} from "lucide-react";

const courses = [
  { id: "cs", name: "Computer Science", icon: Code, color: "bg-blue-500" },
  { id: "law", name: "Law", icon: Scale, color: "bg-amber-500" },
  { id: "medical", name: "Medical Science", icon: Stethoscope, color: "bg-red-500" },
  { id: "ai", name: "AI & Machine Learning", icon: Brain, color: "bg-purple-500" },
  { id: "physics", name: "Physics", icon: Atom, color: "bg-indigo-500" },
  { id: "biotech", name: "Biotechnology", icon: Leaf, color: "bg-green-500" },
  { id: "electronics", name: "Electronics", icon: Cpu, color: "bg-cyan-500" },
  { id: "design", name: "Design", icon: Palette, color: "bg-pink-500" },
  { id: "economics", name: "Economics", icon: Calculator, color: "bg-teal-500" },
  { id: "environmental", name: "Environmental Science", icon: Globe, color: "bg-emerald-500" },
];

const researchData: Record<string, {
  papers: { title: string; authors: string; journal: string; year: string; link: string }[];
  achievements: { title: string; description: string }[];
  news: { title: string; date: string; source: string; link: string }[];
}> = {
  cs: {
    papers: [
      { title: "Attention Is All You Need", authors: "Vaswani et al.", journal: "NeurIPS", year: "2017", link: "https://arxiv.org/abs/1706.03762" },
      { title: "BERT: Pre-training of Deep Bidirectional Transformers", authors: "Devlin et al.", journal: "NAACL", year: "2019", link: "https://arxiv.org/abs/1810.04805" },
      { title: "GPT-4 Technical Report", authors: "OpenAI", journal: "arXiv", year: "2023", link: "https://arxiv.org/abs/2303.08774" },
    ],
    achievements: [
      { title: "Turing Award 2024", description: "Awarded to pioneers of deep learning" },
      { title: "ACM Prize", description: "Recognizing breakthrough in quantum computing" },
    ],
    news: [
      { title: "Google announces Gemini 2.0", date: "Dec 2024", source: "Google Blog", link: "https://blog.google" },
      { title: "OpenAI releases GPT-5", date: "Jan 2025", source: "OpenAI", link: "https://openai.com" },
    ]
  },
  law: {
    papers: [
      { title: "AI and Legal Reasoning", authors: "Smith et al.", journal: "Harvard Law Review", year: "2024", link: "https://harvardlawreview.org" },
      { title: "Constitutional Interpretation in Digital Age", authors: "Johnson", journal: "Yale Law Journal", year: "2023", link: "https://www.yalelawjournal.org" },
    ],
    achievements: [
      { title: "Supreme Court Landmark Judgment", description: "Right to Privacy as fundamental right" },
      { title: "Legal AI Innovation Award", description: "For AI-powered legal research tools" },
    ],
    news: [
      { title: "New Data Protection Bill 2025", date: "Jan 2025", source: "Law Ministry", link: "https://legislative.gov.in" },
      { title: "AI in Courts: A New Era", date: "Dec 2024", source: "Bar Council", link: "https://www.barcouncilofindia.org" },
    ]
  },
  medical: {
    papers: [
      { title: "mRNA Vaccine Technology Advances", authors: "Karikó et al.", journal: "Nature Medicine", year: "2024", link: "https://www.nature.com/nm/" },
      { title: "CRISPR Gene Therapy in Practice", authors: "Doudna et al.", journal: "Cell", year: "2024", link: "https://www.cell.com" },
    ],
    achievements: [
      { title: "Nobel Prize in Medicine 2024", description: "For mRNA vaccine development" },
      { title: "WHO Excellence Award", description: "For pandemic response research" },
    ],
    news: [
      { title: "Universal Cancer Vaccine Trials Begin", date: "Jan 2025", source: "WHO", link: "https://www.who.int" },
      { title: "AI Diagnosis Achieves 99% Accuracy", date: "Dec 2024", source: "Nature", link: "https://www.nature.com" },
    ]
  },
  ai: {
    papers: [
      { title: "Constitutional AI", authors: "Anthropic", journal: "arXiv", year: "2024", link: "https://arxiv.org" },
      { title: "Scaling Laws for Neural Language Models", authors: "Kaplan et al.", journal: "arXiv", year: "2020", link: "https://arxiv.org/abs/2001.08361" },
    ],
    achievements: [
      { title: "ImageNet Challenge Record", description: "99.9% accuracy achieved" },
      { title: "AI Safety Award", description: "For alignment research breakthrough" },
    ],
    news: [
      { title: "AGI Closer Than Ever: Experts", date: "Jan 2025", source: "MIT Tech Review", link: "https://www.technologyreview.com" },
      { title: "New AI Regulation Framework", date: "Dec 2024", source: "EU Commission", link: "https://ec.europa.eu" },
    ]
  },
  physics: {
    papers: [
      { title: "Quantum Supremacy Achieved", authors: "Google Quantum AI", journal: "Nature", year: "2024", link: "https://www.nature.com" },
      { title: "Dark Matter Detection Progress", authors: "CERN", journal: "Physical Review", year: "2024", link: "https://journals.aps.org" },
    ],
    achievements: [
      { title: "Nobel Prize in Physics 2024", description: "For quantum entanglement research" },
      { title: "Breakthrough Prize", description: "For gravitational wave detection" },
    ],
    news: [
      { title: "CERN Discovers New Particle", date: "Jan 2025", source: "CERN", link: "https://home.cern" },
      { title: "Fusion Energy Milestone", date: "Dec 2024", source: "Nature", link: "https://www.nature.com" },
    ]
  },
  biotech: {
    papers: [
      { title: "Synthetic Biology Advances", authors: "Venter et al.", journal: "Science", year: "2024", link: "https://www.science.org" },
      { title: "Biofuels from Engineered Algae", authors: "MIT Team", journal: "Nature Biotech", year: "2024", link: "https://www.nature.com/nbt/" },
    ],
    achievements: [
      { title: "FDA Approval for Gene Therapy", description: "First CRISPR-based treatment approved" },
      { title: "Biotech Innovation Award", description: "For sustainable protein production" },
    ],
    news: [
      { title: "Lab-Grown Organs Ready for Transplant", date: "Jan 2025", source: "Science Daily", link: "https://www.sciencedaily.com" },
      { title: "New Antibiotic Discovered", date: "Dec 2024", source: "Nature", link: "https://www.nature.com" },
    ]
  },
  electronics: {
    papers: [
      { title: "3nm Chip Technology", authors: "TSMC Research", journal: "IEEE", year: "2024", link: "https://ieeexplore.ieee.org" },
      { title: "Flexible Electronics Revolution", authors: "Stanford", journal: "Nature Electronics", year: "2024", link: "https://www.nature.com/natelectron/" },
    ],
    achievements: [
      { title: "IEEE Medal of Honor", description: "For semiconductor innovations" },
      { title: "Edison Award", description: "For IoT breakthrough technology" },
    ],
    news: [
      { title: "1nm Chips in Development", date: "Jan 2025", source: "IEEE Spectrum", link: "https://spectrum.ieee.org" },
      { title: "Quantum Computers Go Commercial", date: "Dec 2024", source: "Tech Crunch", link: "https://techcrunch.com" },
    ]
  },
  design: {
    papers: [
      { title: "AI in Design Workflows", authors: "Adobe Research", journal: "CHI", year: "2024", link: "https://chi.acm.org" },
      { title: "Sustainable Design Principles", authors: "IDEO", journal: "Design Studies", year: "2024", link: "https://www.sciencedirect.com/journal/design-studies" },
    ],
    achievements: [
      { title: "Red Dot Design Award", description: "For innovative product design" },
      { title: "D&AD Impact Award", description: "For design addressing social issues" },
    ],
    news: [
      { title: "AI Design Tools Transform Industry", date: "Jan 2025", source: "Dezeen", link: "https://www.dezeen.com" },
      { title: "Figma Announces AI Features", date: "Dec 2024", source: "Figma Blog", link: "https://www.figma.com/blog/" },
    ]
  },
  economics: {
    papers: [
      { title: "Digital Currency Impact on Economy", authors: "IMF Research", journal: "JEL", year: "2024", link: "https://www.aeaweb.org/journals/jel" },
      { title: "Climate Economics Models", authors: "Nordhaus", journal: "AER", year: "2024", link: "https://www.aeaweb.org/journals/aer" },
    ],
    achievements: [
      { title: "Nobel Prize in Economics 2024", description: "For behavioral economics research" },
      { title: "World Bank Excellence Award", description: "For poverty reduction research" },
    ],
    news: [
      { title: "Global Recession Concerns Ease", date: "Jan 2025", source: "The Economist", link: "https://www.economist.com" },
      { title: "India Becomes 3rd Largest Economy", date: "Dec 2024", source: "IMF", link: "https://www.imf.org" },
    ]
  },
  environmental: {
    papers: [
      { title: "Carbon Capture Breakthrough", authors: "MIT", journal: "Nature Climate", year: "2024", link: "https://www.nature.com/nclimate/" },
      { title: "Biodiversity Loss and Recovery", authors: "IPBES", journal: "Science", year: "2024", link: "https://www.science.org" },
    ],
    achievements: [
      { title: "UN Environment Award", description: "For conservation efforts" },
      { title: "Green Nobel Prize", description: "For sustainable innovation" },
    ],
    news: [
      { title: "Paris Agreement Goals On Track", date: "Jan 2025", source: "UN Climate", link: "https://unfccc.int" },
      { title: "Ocean Cleanup Project Success", date: "Dec 2024", source: "Nature", link: "https://www.nature.com" },
    ]
  }
};

export default function ResearchHub() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const currentData = selectedCourse ? researchData[selectedCourse] : null;
  const selectedCourseInfo = courses.find(c => c.id === selectedCourse);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary-foreground)/0.1),transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10 text-center text-primary-foreground">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-6 animate-slide-up">
            <FlaskConical className="w-5 h-5" />
            <span className="font-medium">Research Hub</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Explore Research & Innovation
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Select your course to discover research papers, achievements, and latest news
          </p>
        </div>
      </section>

      {/* Course Selection */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold text-center mb-8">Select Your Course</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {courses.map((course) => {
              const Icon = course.icon;
              const isSelected = selectedCourse === course.id;
              return (
                <Button
                  key={course.id}
                  variant={isSelected ? "default" : "outline"}
                  className={`gap-2 ${isSelected ? course.color + ' text-white border-0' : ''}`}
                  onClick={() => setSelectedCourse(course.id)}
                >
                  <Icon className="w-4 h-4" />
                  {course.name}
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {!selectedCourse ? (
            <div className="text-center py-20">
              <FlaskConical className="w-20 h-20 text-muted-foreground/30 mx-auto mb-4" />
              <h3 className="text-2xl font-display font-bold text-muted-foreground mb-2">
                Select a Course Above
              </h3>
              <p className="text-muted-foreground">
                Choose your field of study to see relevant research papers, achievements, and news
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                {selectedCourseInfo && (
                  <div className={`w-14 h-14 rounded-xl ${selectedCourseInfo.color} flex items-center justify-center`}>
                    <selectedCourseInfo.icon className="w-7 h-7 text-white" />
                  </div>
                )}
                <div>
                  <h2 className="text-3xl font-display font-bold">{selectedCourseInfo?.name}</h2>
                  <p className="text-muted-foreground">Research, Achievements & Latest News</p>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {/* Research Papers */}
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
                  <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-campus-blue" />
                    Top Research Papers
                  </h3>
                  <div className="space-y-4">
                    {currentData?.papers.map((paper, index) => (
                      <a 
                        key={index} 
                        href={paper.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors group"
                      >
                        <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors flex items-start gap-2">
                          {paper.title}
                          <ExternalLink className="w-3 h-3 shrink-0 mt-1" />
                        </h4>
                        <p className="text-xs text-muted-foreground">{paper.authors}</p>
                        <p className="text-xs text-primary mt-1">{paper.journal} • {paper.year}</p>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
                  <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                    <Award className="w-5 h-5 text-campus-yellow" />
                    Recent Achievements
                  </h3>
                  <div className="space-y-4">
                    {currentData?.achievements.map((achievement, index) => (
                      <div key={index} className="p-4 rounded-xl bg-gradient-to-r from-campus-yellow/10 to-campus-orange/10 border border-campus-yellow/20">
                        <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Latest News */}
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
                  <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                    <Newspaper className="w-5 h-5 text-campus-green" />
                    Latest News
                  </h3>
                  <div className="space-y-4">
                    {currentData?.news.map((item, index) => (
                      <a 
                        key={index} 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors group"
                      >
                        <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
                          <span>{item.source}</span>
                          <span>{item.date}</span>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
