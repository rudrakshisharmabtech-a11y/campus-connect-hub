import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Brain,
  Video,
  FileText,
  Network,
  Users,
  Trophy,
  Gamepad2,
  Sparkles,
  Play,
  Download,
  Share2,
  Star,
  Clock,
  Zap,
  Target,
  Medal,
  Flame,
  Crown
} from "lucide-react";

const studyTools = [
  {
    id: "notebook",
    icon: FileText,
    title: "Smart Notebook",
    description: "Digital note-taking with AI-powered organization and search",
    color: "bg-campus-blue",
    features: ["Auto-organize notes", "Search across all notes", "Export to PDF", "Collaborate with peers"],
    link: "https://notebooklm.google.com/"
  },
  {
    id: "ai-summary",
    icon: Brain,
    title: "AI Video Summarizer",
    description: "Get instant summaries from lecture videos and online content",
    color: "bg-campus-purple",
    features: ["YouTube integration", "Key points extraction", "Generate flashcards", "Quiz generation"],
    link: "https://notebooklm.google.com/"
  },
  {
    id: "notes-gen",
    icon: Sparkles,
    title: "Notes Generator",
    description: "Transform textbooks and PDFs into concise study notes",
    color: "bg-campus-teal",
    features: ["PDF to notes", "Highlight key concepts", "Custom formatting", "Share with classmates"],
    link: "https://notebooklm.google.com/"
  },
  {
    id: "mindmaps",
    icon: Network,
    title: "Mind Map Creator",
    description: "Visualize concepts and create interactive mind maps",
    color: "bg-campus-orange",
    features: ["Drag & drop interface", "Auto-layout", "Export as image", "Collaborative editing"],
    link: "https://notebooklm.google.com/"
  }
];

const studyGroups = [
  { name: "DSA Masters", members: 128, subject: "Data Structures", level: "Intermediate", activity: "Active now" },
  { name: "ML Explorers", members: 89, subject: "Machine Learning", level: "Advanced", activity: "3 members online" },
  { name: "Web Dev Warriors", members: 156, subject: "Web Development", level: "Beginner", activity: "Study session at 5PM" },
  { name: "Database Ninjas", members: 67, subject: "DBMS", level: "Intermediate", activity: "Quiz tomorrow" },
];

const achievements = [
  { icon: Flame, title: "7 Day Streak", description: "Study 7 days in a row", progress: 5, total: 7, color: "text-campus-orange" },
  { icon: Target, title: "First Quiz", description: "Complete your first quiz", progress: 1, total: 1, color: "text-campus-green", completed: true },
  { icon: Medal, title: "Note Master", description: "Create 50 notes", progress: 23, total: 50, color: "text-campus-blue" },
  { icon: Crown, title: "Top Learner", description: "Reach top 10 leaderboard", progress: 0, total: 1, color: "text-campus-purple" },
];

export default function Study() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--primary-foreground)/0.15),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-slide-up">
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Study Section</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Supercharge Your Learning
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              AI-powered study tools, collaborative groups, and gamification to make learning fun and effective.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for courses, topics, or study materials..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-14 pl-5 pr-32 text-lg bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                />
                <Button variant="hero" className="absolute right-2 top-2 h-10">
                  <Sparkles className="w-4 h-4" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="tools" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12 h-14">
              <TabsTrigger value="tools" className="text-sm md:text-base gap-2">
                <Brain className="w-4 h-4 hidden sm:block" />
                Study Tools
              </TabsTrigger>
              <TabsTrigger value="videos" className="text-sm md:text-base gap-2">
                <Video className="w-4 h-4 hidden sm:block" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="groups" className="text-sm md:text-base gap-2">
                <Users className="w-4 h-4 hidden sm:block" />
                Groups
              </TabsTrigger>
              <TabsTrigger value="gamification" className="text-sm md:text-base gap-2">
                <Gamepad2 className="w-4 h-4 hidden sm:block" />
                Rewards
              </TabsTrigger>
            </TabsList>

            {/* Study Tools Tab */}
            <TabsContent value="tools" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {studyTools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.id}
                      className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-xl ${tool.color} flex items-center justify-center shrink-0`}>
                          <Icon className="w-7 h-7 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-display font-semibold text-xl mb-1">{tool.title}</h3>
                          <p className="text-muted-foreground">{tool.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {tool.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Zap className="w-3 h-3 text-campus-teal" />
                            {feature}
                          </div>
                        ))}
                      </div>

                      <a href={tool.link} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button variant="gradient" className="w-full">
                          Open {tool.title}
                        </Button>
                      </a>
                    </div>
                  );
                })}
              </div>
            </TabsContent>

            {/* Videos Tab */}
            <TabsContent value="videos" className="animate-fade-in">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { title: "Introduction to Data Structures", duration: "2:09:36", views: "2.3M", thumbnail: "DSA", youtubeId: "8hly31xKli0" },
                  { title: "Machine Learning Full Course", duration: "11:53:11", views: "5.8M", thumbnail: "ML", youtubeId: "GwIo3gDZCVQ" },
                  { title: "React JS Full Course", duration: "11:55:27", views: "4.1M", thumbnail: "React", youtubeId: "RVFAyFWO4go" },
                  { title: "Database Management Systems", duration: "5:32:49", views: "1.2M", thumbnail: "DBMS", youtubeId: "HXV3zeQKqGY" },
                  { title: "Operating Systems Full Course", duration: "3:59:51", views: "980K", thumbnail: "OS", youtubeId: "mXw9ruZaxzQ" },
                  { title: "Computer Networks Complete", duration: "8:01:46", views: "1.5M", thumbnail: "CN", youtubeId: "qiQR5rTSshw" },
                ].map((video, index) => (
                  <a
                    key={video.title}
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-card border border-border shadow-card overflow-hidden group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up block"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-40 bg-gradient-to-br from-campus-blue/20 to-campus-purple/20 overflow-hidden">
                      <img 
                        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                          <Play className="w-6 h-6 text-white fill-white" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-foreground/80 text-primary-foreground text-xs font-medium">
                        {video.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">{video.title}</h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {video.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {video.views} views
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </TabsContent>

            {/* Study Groups Tab */}
            <TabsContent value="groups" className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                {studyGroups.map((group, index) => (
                  <div
                    key={group.name}
                    className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="font-display font-semibold text-xl mb-1">{group.name}</h3>
                        <p className="text-muted-foreground">{group.subject}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-campus-teal/10 text-campus-teal">
                        {group.level}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {group.members} members
                      </div>
                      <div className="flex items-center gap-1 text-campus-green">
                        <span className="w-2 h-2 rounded-full bg-campus-green animate-pulse" />
                        {group.activity}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="gradient" className="flex-1">
                        Join Group
                      </Button>
                      <Button variant="outline" size="icon">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}

                {/* Create Group Card */}
                <div className="p-6 rounded-2xl border-2 border-dashed border-border flex flex-col items-center justify-center text-center min-h-[200px] hover:border-primary transition-colors cursor-pointer group">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <Users className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-1">Create New Group</h3>
                  <p className="text-muted-foreground text-sm">Start a study group for your course</p>
                </div>
              </div>
            </TabsContent>

            {/* Gamification Tab */}
            <TabsContent value="gamification" className="animate-fade-in">
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Stats Overview */}
                <div className="lg:col-span-2">
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-card mb-6">
                    <h3 className="font-display font-semibold text-xl mb-6">Your Progress</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { label: "Study Hours", value: "127", icon: Clock, color: "bg-campus-blue" },
                        { label: "Notes Created", value: "23", icon: FileText, color: "bg-campus-teal" },
                        { label: "Quizzes Passed", value: "15", icon: Trophy, color: "bg-campus-orange" },
                        { label: "Current Streak", value: "5 days", icon: Flame, color: "bg-campus-pink" },
                      ].map((stat) => {
                        const Icon = stat.icon;
                        return (
                          <div key={stat.label} className="text-center p-4 rounded-xl bg-muted">
                            <div className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center mx-auto mb-3`}>
                              <Icon className="w-6 h-6 text-primary-foreground" />
                            </div>
                            <div className="text-2xl font-display font-bold">{stat.value}</div>
                            <div className="text-sm text-muted-foreground">{stat.label}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
                    <h3 className="font-display font-semibold text-xl mb-6">Achievements</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {achievements.map((achievement) => {
                        const Icon = achievement.icon;
                        const progressPercent = (achievement.progress / achievement.total) * 100;
                        return (
                          <div
                            key={achievement.title}
                            className={`p-4 rounded-xl border ${achievement.completed ? 'bg-campus-green/5 border-campus-green/20' : 'bg-muted border-border'}`}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className={`w-10 h-10 rounded-lg ${achievement.completed ? 'bg-campus-green' : 'bg-muted'} flex items-center justify-center`}>
                                <Icon className={`w-5 h-5 ${achievement.completed ? 'text-primary-foreground' : achievement.color}`} />
                              </div>
                              <div>
                                <h4 className="font-semibold">{achievement.title}</h4>
                                <p className="text-xs text-muted-foreground">{achievement.description}</p>
                              </div>
                            </div>
                            <div className="h-2 rounded-full bg-border overflow-hidden">
                              <div
                                className={`h-full rounded-full ${achievement.completed ? 'bg-campus-green' : 'gradient-primary'} transition-all duration-500`}
                                style={{ width: `${progressPercent}%` }}
                              />
                            </div>
                            <div className="mt-2 text-xs text-right text-muted-foreground">
                              {achievement.progress}/{achievement.total}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Leaderboard */}
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
                  <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-campus-yellow" />
                    Leaderboard
                  </h3>
                  <div className="space-y-4">
                    {[
                      { rank: 1, name: "Priya S.", points: 2840, avatar: "PS" },
                      { rank: 2, name: "Rahul K.", points: 2720, avatar: "RK" },
                      { rank: 3, name: "Ananya G.", points: 2650, avatar: "AG" },
                      { rank: 4, name: "Karan M.", points: 2480, avatar: "KM" },
                      { rank: 5, name: "Sneha P.", points: 2350, avatar: "SP" },
                      { rank: 6, name: "You", points: 1890, avatar: "YU", isUser: true },
                    ].map((user) => (
                      <div
                        key={user.name}
                        className={`flex items-center gap-3 p-3 rounded-xl ${user.isUser ? 'bg-primary/10 border border-primary/20' : 'bg-muted'}`}
                      >
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                          user.rank === 1 ? 'bg-campus-yellow text-foreground' :
                          user.rank === 2 ? 'bg-muted-foreground/30 text-foreground' :
                          user.rank === 3 ? 'bg-campus-orange/30 text-campus-orange' :
                          'bg-muted text-muted-foreground'
                        }`}>
                          {user.rank}
                        </div>
                        <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {user.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold">{user.name}</div>
                          <div className="text-xs text-muted-foreground">{user.points.toLocaleString()} pts</div>
                        </div>
                        {user.rank <= 3 && (
                          <Crown className={`w-5 h-5 ${
                            user.rank === 1 ? 'text-campus-yellow' :
                            user.rank === 2 ? 'text-muted-foreground' :
                            'text-campus-orange'
                          }`} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}
