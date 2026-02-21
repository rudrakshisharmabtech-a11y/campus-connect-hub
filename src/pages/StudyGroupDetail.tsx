import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Play, BookOpen, Network, FileText, ExternalLink, Clock, Star } from "lucide-react";

const groupData: Record<string, {
  name: string;
  subject: string;
  description: string;
  members: number;
  color: string;
  videos: { title: string; duration: string; views: string; url: string }[];
  resources: { title: string; type: string; url: string }[];
  mindMaps: { title: string; description: string; url: string }[];
  topics: string[];
}> = {
  "dsa-masters": {
    name: "DSA Masters",
    subject: "Data Structures & Algorithms",
    description: "Master data structures and algorithms with curated videos, practice problems, and visual mind maps.",
    members: 128,
    color: "from-blue-500 to-indigo-600",
    videos: [
      { title: "Data Structures Full Course", duration: "2:09:36", views: "2.3M", url: "https://www.youtube.com/watch?v=8hly31xKli0" },
      { title: "Algorithms Complete Tutorial", duration: "5:22:00", views: "1.8M", url: "https://www.youtube.com/watch?v=rL8X2mlNHPM" },
      { title: "Dynamic Programming Masterclass", duration: "3:45:00", views: "900K", url: "https://www.youtube.com/watch?v=oBt53YbR9Kk" },
      { title: "Graph Algorithms Explained", duration: "2:30:00", views: "650K", url: "https://www.youtube.com/watch?v=tWVWeAqZ0WU" },
      { title: "Sorting Algorithms Visualized", duration: "1:15:00", views: "1.2M", url: "https://www.youtube.com/watch?v=kPRA0W1kECg" },
      { title: "Trees & Binary Search Trees", duration: "2:00:00", views: "800K", url: "https://www.youtube.com/watch?v=fAAZixBzIAI" },
    ],
    resources: [
      { title: "LeetCode - Practice Problems", type: "Practice", url: "https://leetcode.com" },
      { title: "GeeksforGeeks - DSA Tutorial", type: "Tutorial", url: "https://www.geeksforgeeks.org/data-structures/" },
      { title: "Visualgo - Algorithm Visualizer", type: "Visual Tool", url: "https://visualgo.net" },
      { title: "CP Algorithms", type: "Reference", url: "https://cp-algorithms.com" },
    ],
    mindMaps: [
      { title: "Complete DSA Roadmap", description: "Visual roadmap covering all DSA topics", url: "https://whimsical.com/data-structures-and-algorithms-roadmap" },
      { title: "Sorting Algorithms Mind Map", description: "Compare all sorting algorithms at a glance", url: "https://coggle.it" },
      { title: "Graph Theory Overview", description: "Mind map of graph concepts and algorithms", url: "https://coggle.it" },
    ],
    topics: ["Arrays", "Linked Lists", "Stacks & Queues", "Trees", "Graphs", "Dynamic Programming", "Sorting", "Searching", "Hashing", "Recursion"],
  },
  "ml-explorers": {
    name: "ML Explorers",
    subject: "Machine Learning",
    description: "Explore machine learning concepts from basics to advanced with hands-on projects and resources.",
    members: 89,
    color: "from-purple-500 to-pink-600",
    videos: [
      { title: "Machine Learning Full Course", duration: "11:53:11", views: "5.8M", url: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" },
      { title: "Deep Learning Specialization", duration: "4:30:00", views: "3.2M", url: "https://www.youtube.com/watch?v=CS4cs9xVecg" },
      { title: "Neural Networks from Scratch", duration: "3:15:00", views: "1.5M", url: "https://www.youtube.com/watch?v=Wo5dMEP_BbI" },
      { title: "NLP with Transformers", duration: "2:45:00", views: "800K", url: "https://www.youtube.com/watch?v=SZorAJ4I-sA" },
      { title: "Computer Vision Tutorial", duration: "3:00:00", views: "1.1M", url: "https://www.youtube.com/watch?v=01sAkU_NvOY" },
      { title: "Reinforcement Learning Basics", duration: "2:20:00", views: "600K", url: "https://www.youtube.com/watch?v=2pWv7GOvuf0" },
    ],
    resources: [
      { title: "Kaggle - ML Competitions", type: "Practice", url: "https://www.kaggle.com" },
      { title: "Papers With Code", type: "Research", url: "https://paperswithcode.com" },
      { title: "Google Colab Notebooks", type: "Tool", url: "https://colab.research.google.com" },
      { title: "Hugging Face", type: "Models", url: "https://huggingface.co" },
    ],
    mindMaps: [
      { title: "ML Algorithms Overview", description: "Visual guide to all ML algorithm families", url: "https://coggle.it" },
      { title: "Deep Learning Architecture Map", description: "CNN, RNN, Transformers and more", url: "https://coggle.it" },
      { title: "ML Pipeline Flowchart", description: "End-to-end ML project workflow", url: "https://coggle.it" },
    ],
    topics: ["Linear Regression", "Classification", "Neural Networks", "CNN", "RNN", "Transformers", "NLP", "Computer Vision", "GANs", "Reinforcement Learning"],
  },
  "web-dev-warriors": {
    name: "Web Dev Warriors",
    subject: "Web Development",
    description: "Build modern web applications with the latest frameworks and best practices.",
    members: 156,
    color: "from-green-500 to-teal-600",
    videos: [
      { title: "React JS Full Course", duration: "11:55:27", views: "4.1M", url: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
      { title: "Node.js Complete Tutorial", duration: "8:15:00", views: "3.5M", url: "https://www.youtube.com/watch?v=Oe421EPjeBE" },
      { title: "CSS Mastery Course", duration: "6:30:00", views: "2.8M", url: "https://www.youtube.com/watch?v=1Rs2ND1ryYc" },
      { title: "TypeScript Full Course", duration: "5:00:00", views: "1.9M", url: "https://www.youtube.com/watch?v=BwuLxPH8IDs" },
      { title: "Next.js 14 Tutorial", duration: "4:20:00", views: "1.3M", url: "https://www.youtube.com/watch?v=wm5gMKuwSYk" },
      { title: "MongoDB Complete Guide", duration: "3:45:00", views: "1.0M", url: "https://www.youtube.com/watch?v=ExcRbA7fy_A" },
    ],
    resources: [
      { title: "MDN Web Docs", type: "Documentation", url: "https://developer.mozilla.org" },
      { title: "Frontend Mentor - Challenges", type: "Practice", url: "https://www.frontendmentor.io" },
      { title: "CSS-Tricks", type: "Tutorial", url: "https://css-tricks.com" },
      { title: "JavaScript.info", type: "Reference", url: "https://javascript.info" },
    ],
    mindMaps: [
      { title: "Frontend Roadmap", description: "Complete frontend development path", url: "https://roadmap.sh/frontend" },
      { title: "Backend Roadmap", description: "Server-side development overview", url: "https://roadmap.sh/backend" },
      { title: "React Ecosystem Map", description: "React libraries and tools overview", url: "https://coggle.it" },
    ],
    topics: ["HTML/CSS", "JavaScript", "React", "Node.js", "TypeScript", "Next.js", "REST APIs", "GraphQL", "Databases", "Deployment"],
  },
  "database-ninjas": {
    name: "Database Ninjas",
    subject: "Database Management Systems",
    description: "Deep dive into database design, SQL, NoSQL, and database administration.",
    members: 67,
    color: "from-orange-500 to-red-600",
    videos: [
      { title: "Database Management Systems", duration: "5:32:49", views: "1.2M", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
      { title: "SQL Complete Course", duration: "4:20:00", views: "2.5M", url: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
      { title: "MongoDB Tutorial", duration: "3:00:00", views: "1.0M", url: "https://www.youtube.com/watch?v=ExcRbA7fy_A" },
      { title: "Database Normalization", duration: "1:30:00", views: "500K", url: "https://www.youtube.com/watch?v=UrYLYV7WSHM" },
      { title: "PostgreSQL Full Course", duration: "4:00:00", views: "800K", url: "https://www.youtube.com/watch?v=qw--VYLpxG4" },
      { title: "Redis Crash Course", duration: "1:15:00", views: "400K", url: "https://www.youtube.com/watch?v=jgpVdJB2sKQ" },
    ],
    resources: [
      { title: "SQLZoo - Interactive SQL", type: "Practice", url: "https://sqlzoo.net" },
      { title: "DB Fiddle - Online SQL Editor", type: "Tool", url: "https://www.db-fiddle.com" },
      { title: "Use The Index, Luke", type: "Tutorial", url: "https://use-the-index-luke.com" },
      { title: "Database Design Guide", type: "Reference", url: "https://www.geeksforgeeks.org/database-design/" },
    ],
    mindMaps: [
      { title: "DBMS Concepts Map", description: "All DBMS concepts in one visual", url: "https://coggle.it" },
      { title: "SQL Commands Cheatsheet", description: "Visual guide to SQL syntax", url: "https://coggle.it" },
      { title: "NoSQL vs SQL Comparison", description: "When to use which database type", url: "https://coggle.it" },
    ],
    topics: ["SQL", "Normalization", "ER Diagrams", "Indexing", "Transactions", "NoSQL", "MongoDB", "PostgreSQL", "Query Optimization", "Stored Procedures"],
  },
};

export default function StudyGroupDetail() {
  const { groupId } = useParams<{ groupId: string }>();
  const group = groupId ? groupData[groupId] : null;

  if (!group) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Group not found</h1>
          <Link to="/study">
            <Button variant="gradient">Back to Study</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className={`pt-24 pb-12 bg-gradient-to-br ${group.color} relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <Link to="/study" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Study Groups
          </Link>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-3">{group.name}</h1>
          <p className="text-xl text-white/80 max-w-2xl mb-4">{group.description}</p>
          <div className="flex items-center gap-4 text-white/70">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              {group.members} members
            </div>
            <span className="px-3 py-1 rounded-full bg-white/20 text-sm">{group.subject}</span>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-8 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-lg font-display font-semibold mb-4">Topics Covered</h2>
          <div className="flex flex-wrap gap-2">
            {group.topics.map((topic) => (
              <span key={topic} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-2">
            <Play className="w-6 h-6 text-red-500" />
            Video Lectures
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.videos.map((video, index) => (
              <a
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-card border border-border shadow-card overflow-hidden group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 block"
              >
                <div className={`relative h-36 bg-gradient-to-br ${group.color} flex items-center justify-center`}>
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/70 text-white text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">{video.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{video.duration}</span>
                    <span className="flex items-center gap-1"><Star className="w-3 h-3" />{video.views} views</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Resources & Mind Maps */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Resources */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
              <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Learning Resources
              </h2>
              <div className="space-y-3">
                {group.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors group"
                  >
                    <div>
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{resource.title}</h3>
                      <span className="text-xs text-muted-foreground">{resource.type}</span>
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  </a>
                ))}
              </div>
            </div>

            {/* Mind Maps */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
              <h2 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
                <Network className="w-5 h-5 text-primary" />
                Mind Maps
              </h2>
              <div className="space-y-3">
                {group.mindMaps.map((mindMap, index) => (
                  <a
                    key={index}
                    href={mindMap.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl bg-muted hover:bg-muted/80 transition-colors group"
                  >
                    <h3 className="font-semibold text-sm group-hover:text-primary transition-colors flex items-center gap-2">
                      {mindMap.title}
                      <ExternalLink className="w-3 h-3" />
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{mindMap.description}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
