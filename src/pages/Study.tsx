import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
  Share2,
  Star,
  Clock,
  Zap,
  Target,
  Medal,
  Flame,
  Crown,
  Calendar,
  Heart,
  Smile,
  Sun,
  Moon,
  Cloud,
  Coffee,
  PenTool,
  Map,
  Code,
  Scale,
  Microscope,
  Palette,
  Music,
  Building,
  Cpu,
  Database,
  Globe,
  Rocket,
  GraduationCap,
  Briefcase,
  FlaskConical,
  Stethoscope,
  Calculator,
  BookMarked,
  PartyPopper,
  Flag,
  Gift,
  Award
} from "lucide-react";

const studyTools = [
  {
    id: "notebook",
    icon: FileText,
    title: "Smart Notebook",
    description: "Digital note-taking with AI-powered organization and search",
    color: "bg-campus-blue",
    features: ["Auto-organize notes", "Search across all notes", "Export to PDF", "Collaborate with peers"],
    link: "https://notebooklm.google/"
  },
  {
    id: "ai-summary",
    icon: Brain,
    title: "AI Video Summarizer",
    description: "Get instant summaries from lecture videos and online content",
    color: "bg-campus-purple",
    features: ["YouTube integration", "Key points extraction", "Generate flashcards", "Quiz generation"],
    link: "https://notebooklm.google/"
  },
  {
    id: "notes-gen",
    icon: Sparkles,
    title: "Notes Generator",
    description: "Transform textbooks and PDFs into concise study notes",
    color: "bg-campus-teal",
    features: ["PDF to notes", "Highlight key concepts", "Custom formatting", "Share with classmates"],
    link: "https://notebooklm.google/"
  },
  {
    id: "mindmaps",
    icon: Network,
    title: "Mind Map Creator",
    description: "Visualize concepts and create interactive mind maps",
    color: "bg-campus-orange",
    features: ["Drag & drop interface", "Auto-layout", "Export as image", "Collaborative editing"],
    link: "https://notebooklm.google/"
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

const roadmapCategories = [
  { name: "Frontend Development", icon: Globe, color: "bg-gradient-to-br from-blue-400 to-cyan-400", path: "frontend" },
  { name: "Backend Development", icon: Database, color: "bg-gradient-to-br from-green-400 to-emerald-400", path: "backend" },
  { name: "Full Stack", icon: Code, color: "bg-gradient-to-br from-purple-400 to-pink-400", path: "full-stack" },
  { name: "DevOps", icon: Rocket, color: "bg-gradient-to-br from-orange-400 to-red-400", path: "devops" },
  { name: "AI & ML", icon: Brain, color: "bg-gradient-to-br from-violet-400 to-purple-400", path: "ai-data-scientist" },
  { name: "Data Science", icon: Calculator, color: "bg-gradient-to-br from-teal-400 to-cyan-400", path: "data-analyst" },
  { name: "Cyber Security", icon: Cpu, color: "bg-gradient-to-br from-red-400 to-rose-400", path: "cyber-security" },
  { name: "Blockchain", icon: Network, color: "bg-gradient-to-br from-yellow-400 to-orange-400", path: "blockchain" },
  { name: "Mobile Development", icon: Briefcase, color: "bg-gradient-to-br from-pink-400 to-rose-400", path: "android" },
  { name: "Game Development", icon: Gamepad2, color: "bg-gradient-to-br from-indigo-400 to-blue-400", path: "game-developer" },
  { name: "Law Studies", icon: Scale, color: "bg-gradient-to-br from-amber-400 to-yellow-400", path: "legal" },
  { name: "Medical Science", icon: Stethoscope, color: "bg-gradient-to-br from-red-400 to-pink-400", path: "medical" },
  { name: "Physics", icon: FlaskConical, color: "bg-gradient-to-br from-blue-400 to-indigo-400", path: "physics" },
  { name: "Chemistry", icon: Microscope, color: "bg-gradient-to-br from-green-400 to-teal-400", path: "chemistry" },
  { name: "Design & UX", icon: Palette, color: "bg-gradient-to-br from-pink-400 to-purple-400", path: "ux-design" },
  { name: "Product Management", icon: Building, color: "bg-gradient-to-br from-slate-400 to-gray-400", path: "product-manager" },
];

const videosList = [
  { title: "Introduction to Data Structures", duration: "2:09:36", views: "2.3M", thumbnail: "DSA", youtubeUrl: "https://www.youtube.com/watch?v=8hly31xKli0" },
  { title: "Machine Learning Full Course", duration: "11:53:11", views: "5.8M", thumbnail: "ML", youtubeUrl: "https://www.youtube.com/watch?v=GwIo3gDZCVQ" },
  { title: "React JS Full Course", duration: "11:55:27", views: "4.1M", thumbnail: "React", youtubeUrl: "https://www.youtube.com/watch?v=bMknfKXIFA8" },
  { title: "Database Management Systems", duration: "5:32:49", views: "1.2M", thumbnail: "DBMS", youtubeUrl: "https://www.youtube.com/watch?v=HXV3zeQKqGY" },
  { title: "Operating Systems Full Course", duration: "3:59:51", views: "980K", thumbnail: "OS", youtubeUrl: "https://www.youtube.com/watch?v=vBURTt97EkA" },
  { title: "Computer Networks Complete", duration: "8:01:46", views: "1.5M", thumbnail: "CN", youtubeUrl: "https://www.youtube.com/watch?v=qiQR5rTSshw" },
];

const eventCalendarData = [
  { date: "Jan 14, 2026", event: "Makar Sankranti Celebration", type: "festival", color: "bg-orange-400" },
  { date: "Jan 26, 2026", event: "Republic Day", type: "national", color: "bg-green-500" },
  { date: "Mar 14, 2026", event: "Holi Festival", type: "festival", color: "bg-pink-400" },
  { date: "Apr 14, 2026", event: "Baisakhi", type: "festival", color: "bg-yellow-400" },
  { date: "Aug 15, 2026", event: "Independence Day", type: "national", color: "bg-orange-500" },
  { date: "Oct 2, 2026", event: "Gandhi Jayanti", type: "national", color: "bg-blue-400" },
  { date: "Oct 12, 2026", event: "Dussehra", type: "festival", color: "bg-red-400" },
  { date: "Nov 1, 2026", event: "Diwali", type: "festival", color: "bg-yellow-500" },
  { date: "Dec 25, 2026", event: "Christmas", type: "festival", color: "bg-red-500" },
];

const academicCalendarData = [
  { date: "Feb 15-17, 2026", event: "Mid-Semester Exams", type: "exam", color: "bg-red-400" },
  { date: "Mar 5-7, 2026", event: "Hackathon Week", type: "hackathon", color: "bg-purple-500" },
  { date: "Apr 1-30, 2026", event: "Internship Drive", type: "placement", color: "bg-blue-500" },
  { date: "May 1-15, 2026", event: "End Semester Exams", type: "exam", color: "bg-red-500" },
  { date: "Jul 20-22, 2026", event: "Viva Voce", type: "viva", color: "bg-orange-400" },
  { date: "Aug 1-31, 2026", event: "Campus Placements", type: "placement", color: "bg-green-500" },
  { date: "Sep 10, 2026", event: "Research Symposium", type: "research", color: "bg-teal-500" },
  { date: "Nov 15-17, 2026", event: "Technical Festival", type: "event", color: "bg-pink-500" },
];

const hackathonCalendarData = [
  { name: "HackMIT 2026", date: "Feb 15-16, 2026", location: "MIT, USA", prize: "$10,000", link: "https://hackmit.org/" },
  { name: "Smart India Hackathon", date: "Mar 1-2, 2026", location: "India (Virtual)", prize: "₹1,00,000", link: "https://www.sih.gov.in/" },
  { name: "Google Code Jam", date: "Apr 5, 2026", location: "Online", prize: "$15,000", link: "https://codingcompetitions.withgoogle.com/codejam" },
  { name: "Facebook Hacker Cup", date: "May 10, 2026", location: "Online", prize: "$20,000", link: "https://www.facebook.com/codingcompetitions/hacker-cup" },
  { name: "HackIndia 2026", date: "Jun 20-21, 2026", location: "Delhi, India", prize: "₹5,00,000", link: "https://hackindia.xyz/" },
  { name: "ETHGlobal India", date: "Aug 8-10, 2026", location: "Bangalore", prize: "$50,000", link: "https://ethglobal.com/" },
  { name: "Microsoft Imagine Cup", date: "Sep 15, 2026", location: "Global", prize: "$100,000", link: "https://imaginecup.microsoft.com/" },
  { name: "AngelHack Global", date: "Oct 5-6, 2026", location: "Multiple Cities", prize: "$25,000", link: "https://angelhack.com/" },
  { name: "Junction 2026", date: "Nov 8-10, 2026", location: "Helsinki, Finland", prize: "€15,000", link: "https://www.junction.tech/" },
  { name: "NASA Space Apps", date: "Dec 1-2, 2026", location: "Global", prize: "Special Awards", link: "https://www.spaceappschallenge.org/" },
];

const games = [
  { name: "CodinGame", description: "Learn coding through fun games and challenges", icon: Code, color: "bg-gradient-to-br from-green-400 to-emerald-500", link: "https://www.codingame.com/start/" },
  { name: "NASA Space Place", description: "Explore space and science through interactive games", icon: Rocket, color: "bg-gradient-to-br from-blue-400 to-indigo-500", link: "https://spaceplace.nasa.gov/menu/play/" },
  { name: "Open Law Lab", description: "Learn law through interactive simulations", icon: Scale, color: "bg-gradient-to-br from-amber-400 to-orange-500", link: "https://www.openlawlab.com/project-topics/learning-law-better/" },
  { name: "BioMediZone", description: "Medical games for healthcare students", icon: Stethoscope, color: "bg-gradient-to-br from-red-400 to-pink-500", link: "https://www.biomedizone.org/resources/medical-games" },
];

const moodEmojis = [
  { emoji: "😊", label: "Happy", color: "bg-yellow-100 hover:bg-yellow-200" },
  { emoji: "😐", label: "Neutral", color: "bg-gray-100 hover:bg-gray-200" },
  { emoji: "😢", label: "Sad", color: "bg-blue-100 hover:bg-blue-200" },
  { emoji: "😴", label: "Tired", color: "bg-purple-100 hover:bg-purple-200" },
  { emoji: "🤩", label: "Excited", color: "bg-pink-100 hover:bg-pink-200" },
  { emoji: "😰", label: "Stressed", color: "bg-red-100 hover:bg-red-200" },
];

// Personality quiz questions for character assignment
const personalityQuestions = [
  {
    question: "How do you start your morning? 🌅",
    options: [
      { text: "Hit snooze 5 times 😴", scores: { cat: 2, dog: 0, bunny: 0, fox: 0, owl: 1, panda: 2, penguin: 0, unicorn: 0 } },
      { text: "Jump out excited! 🎉", scores: { cat: 0, dog: 2, bunny: 1, fox: 0, owl: 0, panda: 0, penguin: 1, unicorn: 2 } },
      { text: "Slow and peaceful 🌸", scores: { cat: 0, dog: 0, bunny: 2, fox: 1, owl: 0, panda: 1, penguin: 1, unicorn: 0 } },
      { text: "Already planned my day 📝", scores: { cat: 1, dog: 0, bunny: 0, fox: 2, owl: 2, panda: 0, penguin: 0, unicorn: 0 } },
    ]
  },
  {
    question: "Favorite study snack? 🍿",
    options: [
      { text: "Coffee & cookies ☕", scores: { cat: 2, dog: 1, bunny: 0, fox: 0, owl: 2, panda: 0, penguin: 0, unicorn: 0 } },
      { text: "Energy drinks! ⚡", scores: { cat: 0, dog: 2, bunny: 0, fox: 1, owl: 0, panda: 0, penguin: 2, unicorn: 1 } },
      { text: "Fruits & veggies 🥕", scores: { cat: 0, dog: 0, bunny: 2, fox: 1, owl: 0, panda: 2, penguin: 0, unicorn: 1 } },
      { text: "Whatever's clever 🧠", scores: { cat: 1, dog: 0, bunny: 1, fox: 2, owl: 1, panda: 0, penguin: 0, unicorn: 0 } },
    ]
  },
  {
    question: "Group project role? 👥",
    options: [
      { text: "The sleepy one 💤", scores: { cat: 2, dog: 0, bunny: 1, fox: 0, owl: 0, panda: 2, penguin: 0, unicorn: 0 } },
      { text: "The cheerleader! 📣", scores: { cat: 0, dog: 2, bunny: 0, fox: 0, owl: 0, panda: 0, penguin: 1, unicorn: 2 } },
      { text: "The peacemaker 🕊️", scores: { cat: 0, dog: 1, bunny: 2, fox: 0, owl: 0, panda: 1, penguin: 0, unicorn: 1 } },
      { text: "The mastermind 🎯", scores: { cat: 0, dog: 0, bunny: 0, fox: 2, owl: 2, panda: 0, penguin: 0, unicorn: 0 } },
    ]
  },
  {
    question: "Weekend plans? 🎈",
    options: [
      { text: "Netflix & naps 🛋️", scores: { cat: 2, dog: 0, bunny: 1, fox: 0, owl: 0, panda: 2, penguin: 0, unicorn: 0 } },
      { text: "Party time! 🎊", scores: { cat: 0, dog: 2, bunny: 0, fox: 1, owl: 0, panda: 0, penguin: 2, unicorn: 1 } },
      { text: "Nature walks 🌿", scores: { cat: 0, dog: 1, bunny: 2, fox: 0, owl: 1, panda: 1, penguin: 0, unicorn: 1 } },
      { text: "Learn something new 📚", scores: { cat: 1, dog: 0, bunny: 0, fox: 2, owl: 2, panda: 0, penguin: 0, unicorn: 0 } },
    ]
  },
  {
    question: "Your phone battery dies during an exam. You... 📱💀",
    options: [
      { text: "Panic and forget everything 😱", scores: { cat: 0, dog: 0, bunny: 2, fox: 0, owl: 0, panda: 1, penguin: 2, unicorn: 0 } },
      { text: "Meh, I memorized it anyway 😎", scores: { cat: 2, dog: 0, bunny: 0, fox: 2, owl: 2, panda: 0, penguin: 0, unicorn: 0 } },
      { text: "Ask neighbor for their phone! 🙋", scores: { cat: 0, dog: 2, bunny: 0, fox: 1, owl: 0, panda: 0, penguin: 1, unicorn: 1 } },
      { text: "Draw pictures as answers 🎨", scores: { cat: 1, dog: 1, bunny: 1, fox: 0, owl: 0, panda: 1, penguin: 0, unicorn: 2 } },
    ]
  },
  {
    question: "How do you handle deadlines? ⏰",
    options: [
      { text: "What deadline? 🤷", scores: { cat: 2, dog: 0, bunny: 0, fox: 0, owl: 0, panda: 2, penguin: 1, unicorn: 0 } },
      { text: "Finish 3 days early! ✅", scores: { cat: 0, dog: 1, bunny: 0, fox: 2, owl: 2, panda: 0, penguin: 0, unicorn: 0 } },
      { text: "All-nighter champion! 🌙", scores: { cat: 0, dog: 2, bunny: 0, fox: 0, owl: 2, panda: 0, penguin: 1, unicorn: 1 } },
      { text: "Cry, then do it 😭✨", scores: { cat: 1, dog: 0, bunny: 2, fox: 0, owl: 0, panda: 0, penguin: 1, unicorn: 1 } },
    ]
  },
  {
    question: "Your professor asks a question. You... 🎓",
    options: [
      { text: "Pretend to take notes 📝", scores: { cat: 2, dog: 0, bunny: 1, fox: 1, owl: 0, panda: 2, penguin: 0, unicorn: 0 } },
      { text: "Answer immediately! 🙋‍♂️", scores: { cat: 0, dog: 2, bunny: 0, fox: 1, owl: 1, panda: 0, penguin: 0, unicorn: 1 } },
      { text: "Ask another question 🤔", scores: { cat: 1, dog: 0, bunny: 0, fox: 2, owl: 2, panda: 0, penguin: 0, unicorn: 0 } },
      { text: "Give a random magical answer ✨", scores: { cat: 0, dog: 1, bunny: 1, fox: 0, owl: 0, panda: 0, penguin: 1, unicorn: 2 } },
    ]
  },
  {
    question: "Your study playlist is... 🎵",
    options: [
      { text: "Lo-fi beats to relax 🎧", scores: { cat: 2, dog: 0, bunny: 2, fox: 0, owl: 1, panda: 2, penguin: 0, unicorn: 0 } },
      { text: "Heavy metal for focus! 🎸", scores: { cat: 0, dog: 2, bunny: 0, fox: 0, owl: 0, panda: 0, penguin: 2, unicorn: 1 } },
      { text: "Complete silence 🤫", scores: { cat: 1, dog: 0, bunny: 0, fox: 2, owl: 2, panda: 0, penguin: 0, unicorn: 0 } },
      { text: "Disney songs! 🏰", scores: { cat: 0, dog: 1, bunny: 1, fox: 0, owl: 0, panda: 0, penguin: 0, unicorn: 2 } },
    ]
  },
  {
    question: "Your bag always has... 🎒",
    options: [
      { text: "Emergency snacks 🍫", scores: { cat: 1, dog: 1, bunny: 1, fox: 0, owl: 0, panda: 2, penguin: 1, unicorn: 0 } },
      { text: "15 pens (all work!) 🖊️", scores: { cat: 0, dog: 0, bunny: 0, fox: 2, owl: 2, panda: 0, penguin: 0, unicorn: 0 } },
      { text: "Random chaos 🌪️", scores: { cat: 2, dog: 1, bunny: 0, fox: 0, owl: 0, panda: 1, penguin: 2, unicorn: 0 } },
      { text: "Glitter & stickers 💖", scores: { cat: 0, dog: 1, bunny: 2, fox: 0, owl: 0, panda: 0, penguin: 0, unicorn: 2 } },
    ]
  },
  {
    question: "When you get an A, you... 💯",
    options: [
      { text: "Act like it's normal 😏", scores: { cat: 2, dog: 0, bunny: 0, fox: 2, owl: 1, panda: 0, penguin: 0, unicorn: 0 } },
      { text: "Tell EVERYONE! 📢", scores: { cat: 0, dog: 2, bunny: 0, fox: 0, owl: 0, panda: 0, penguin: 2, unicorn: 1 } },
      { text: "Quietly celebrate 🥳", scores: { cat: 0, dog: 0, bunny: 2, fox: 0, owl: 0, panda: 2, penguin: 0, unicorn: 0 } },
      { text: "Do a victory dance! 💃", scores: { cat: 0, dog: 1, bunny: 0, fox: 0, owl: 0, panda: 0, penguin: 1, unicorn: 2 } },
    ]
  },
];

const characterResults = {
  cat: { 
    emoji: "🐱", 
    name: "Cozy Cat", 
    trait: "The Chill Scholar", 
    description: "You're relaxed, independent, and work at your own pace. You value your rest and know when to recharge!",
    funnyStory: "Legend says Cozy Cat once took a 3-hour nap during a 2-hour lecture and still got an A because they 'absorbed knowledge through osmosis.' Their favorite study spot? Anywhere with a sunbeam. They've mastered the art of looking busy while doing absolutely nothing. Teachers are scared to wake them up because last time someone tried, they hissed.",
    personality: "You have the magical ability to stay calm when everyone else is losing their minds before exams. Your motto: 'Will this matter in 5 years? No? Then nap.' You've perfected the 'I'm listening' face while actually planning your next meal.",
    superpower: "Can fall asleep in under 30 seconds anywhere",
    weakness: "Any sunbeam = instant nap mode",
    color: "from-purple-400 to-pink-400" 
  },
  dog: { 
    emoji: "🐶", 
    name: "Peppy Pup", 
    trait: "The Energetic Achiever", 
    description: "You're enthusiastic, social, and always ready for action! Your positive energy motivates everyone around you!",
    funnyStory: "Peppy Pup once organized 7 study groups, 3 club meetings, and a surprise birthday party... all on the same day. They survived purely on enthusiasm and the power of friendship. Their notes are written in 15 different colored pens and honestly, nobody can read them but everyone pretends they're amazing.",
    personality: "You're the friend who sends 47 messages in the group chat at 6 AM asking who wants to jog before class. Your energy is illegal before noon. You've been asked to 'calm down' more times than you can count, but you physically cannot.",
    superpower: "Infinite energy and zero coffee needed",
    weakness: "Cannot whisper. Every whisper is just loud talking.",
    color: "from-yellow-400 to-orange-400" 
  },
  bunny: { 
    emoji: "🐰", 
    name: "Gentle Bunny", 
    trait: "The Kind Soul", 
    description: "You're gentle, caring, and prefer peaceful environments. Your calm nature helps others feel at ease!",
    funnyStory: "Gentle Bunny once cried during a documentary about plants. They have named all the campus squirrels and bring them snacks daily. Their notes are decorated with tiny flowers and motivational quotes like 'You can do it little star!' Their professors give them extra credit just for being adorable.",
    personality: "You're the emotional support friend everyone needs. You've helped 27 people cry through their problems this semester alone. Your room smells like lavender and good vibes. You apologize to chairs when you bump into them.",
    superpower: "Can sense when friends need a hug from 3 buildings away",
    weakness: "Slightly mean comments = 3 days of sadness",
    color: "from-pink-400 to-rose-400" 
  },
  fox: { 
    emoji: "🦊", 
    name: "Clever Fox", 
    trait: "The Strategic Thinker", 
    description: "You're smart, resourceful, and always thinking ahead. Your sharp mind finds solutions to any problem!",
    funnyStory: "Clever Fox once found a loophole in the grading system and technically graduated twice. They have a spreadsheet for their spreadsheets. Their room looks like a detective's office with red strings connecting everything. They predicted the exam questions so accurately, the professor now asks them to review the tests first.",
    personality: "You've color-coded your entire life including your emotions. Your 5-year plan has backup plans with backup plans. You correct professors during lectures but in a way that makes them thank you. You've won arguments in your head that haven't happened yet.",
    superpower: "Can find a shortcut for literally anything",
    weakness: "Gets irrationally angry at inefficiency",
    color: "from-orange-400 to-red-400" 
  },
  owl: { 
    emoji: "🦉", 
    name: "Night Owl", 
    trait: "The Midnight Genius", 
    description: "You're wise, thoughtful, and do your best work when everyone else is asleep!",
    funnyStory: "Night Owl has never seen a sunrise... from the morning side. They've written entire thesis papers between 2-5 AM. The library security guard knows them by name and brings them coffee. They once submitted an assignment at 11:59:59 PM and felt SO early.",
    personality: "You firmly believe creativity peaks at 3 AM and nothing can convince you otherwise. Your dark circles have dark circles. You've memorized the entire nighttime campus map including secret hiding spots. Morning people are your natural enemies.",
    superpower: "Peak brain function after midnight",
    weakness: "Any class before 11 AM is basically torture",
    color: "from-indigo-400 to-purple-400" 
  },
  panda: { 
    emoji: "🐼", 
    name: "Chill Panda", 
    trait: "The Zen Master", 
    description: "You're laid-back, food-motivated, and bring balance to chaos!",
    funnyStory: "Chill Panda once meditated so deeply during an exam, they achieved enlightenment... but forgot to write their name on the paper. They've eaten in every campus location including places that are technically 'not for eating.' Their life philosophy: 'If stressed, eat. If happy, eat. If sad, eat more.'",
    personality: "You're the friend who says 'it'll work out' and somehow it always does. Your approach to problems is like your approach to bamboo: just keep munching until it goes away. You've mastered the art of looking productive while actually just vibing.",
    superpower: "Unshakeable calmness in any crisis",
    weakness: "Will abandon anything for food",
    color: "from-emerald-400 to-teal-400" 
  },
  penguin: { 
    emoji: "🐧", 
    name: "Party Penguin", 
    trait: "The Social Butterfly", 
    description: "You're fun, social, and know how to balance work and play!",
    funnyStory: "Party Penguin has been to 43 campus events this semester... including some they weren't invited to. They know everyone's name, birthday, and drama. They once organized a flash mob in the library and somehow didn't get banned. Their calendar is just a list of parties with occasional 'study' slots.",
    personality: "You believe networking IS studying. Your LinkedIn has more connections than the campus WiFi. You've never met a stranger, only 'future best friends.' Your idea of a quiet night is only going to TWO events.",
    superpower: "Can make friends with anyone in under 60 seconds",
    weakness: "FOMO is a serious medical condition for you",
    color: "from-cyan-400 to-blue-400" 
  },
  unicorn: { 
    emoji: "🦄", 
    name: "Magical Unicorn", 
    trait: "The Creative Dreamer", 
    description: "You're creative, optimistic, and see magic everywhere!",
    funnyStory: "Magical Unicorn once submitted an art assignment as their physics homework and got points for 'creative interpretation of gravity.' Their notes look like a fairy tale coloring book. They've convinced 3 professors to accept glitter as a valid highlighting technique. Their career plan? 'Following my heart to wherever the sparkles lead.'",
    personality: "You add emojis to serious emails and it somehow works. Your problem-solving approach involves saying 'what if we just... made it pretty?' You've cried happy tears at 4 sunsets this week alone. Reality is just a suggestion to you.",
    superpower: "Can turn any boring project into an aesthetic masterpiece",
    weakness: "Gets distracted by anything sparkly",
    color: "from-pink-400 to-violet-400" 
  },
};

export default function Study() {
  const [searchQuery, setSearchQuery] = useState("");
  const [diaryEntry, setDiaryEntry] = useState("");
  const [selectedMood, setSelectedMood] = useState("");
  const [plannerTasks, setPlannerTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [showQuizResult, setShowQuizResult] = useState(false);
  const [assignedCharacter, setAssignedCharacter] = useState<keyof typeof characterResults | null>(null);

  const addTask = () => {
    if (newTask.trim()) {
      setPlannerTasks([...plannerTasks, newTask]);
      setNewTask("");
    }
  };

  const handleQuizAnswer = (questionIndex: number, optionIndex: number) => {
    const newAnswers = [...quizAnswers];
    newAnswers[questionIndex] = optionIndex;
    setQuizAnswers(newAnswers);
  };

  const calculateCharacter = () => {
    const scores = { cat: 0, dog: 0, bunny: 0, fox: 0, owl: 0, panda: 0, penguin: 0, unicorn: 0 };
    
    quizAnswers.forEach((answerIndex, questionIndex) => {
      if (answerIndex !== undefined) {
        const option = personalityQuestions[questionIndex].options[answerIndex];
        scores.cat += option.scores.cat;
        scores.dog += option.scores.dog;
        scores.bunny += option.scores.bunny;
        scores.fox += option.scores.fox;
        scores.owl += option.scores.owl;
        scores.panda += option.scores.panda;
        scores.penguin += option.scores.penguin;
        scores.unicorn += option.scores.unicorn;
      }
    });

    const maxScore = Math.max(...Object.values(scores));
    const character = Object.entries(scores).find(([_, score]) => score === maxScore)?.[0] as keyof typeof characterResults;
    
    setAssignedCharacter(character);
    setShowQuizResult(true);
  };

  const resetQuiz = () => {
    setQuizAnswers([]);
    setShowQuizResult(false);
    setAssignedCharacter(null);
  };

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
            <TabsList className="flex flex-wrap justify-center gap-2 mb-12 h-auto bg-transparent">
              <TabsTrigger value="tools" className="text-sm gap-2 bg-muted data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2">
                <Brain className="w-4 h-4" />
                Study Tools
              </TabsTrigger>
              <TabsTrigger value="videos" className="text-sm gap-2 bg-muted data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2">
                <Video className="w-4 h-4" />
                Videos
              </TabsTrigger>
              <TabsTrigger value="diary" className="text-sm gap-2 bg-muted data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2">
                <PenTool className="w-4 h-4" />
                Campus Diary
              </TabsTrigger>
              <TabsTrigger value="roadmap" className="text-sm gap-2 bg-muted data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2">
                <Map className="w-4 h-4" />
                Roadmap Maker
              </TabsTrigger>
              <TabsTrigger value="calendar" className="text-sm gap-2 bg-muted data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2">
                <Calendar className="w-4 h-4" />
                Event Calendar
              </TabsTrigger>
              <TabsTrigger value="groups" className="text-sm gap-2 bg-muted data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2">
                <Users className="w-4 h-4" />
                Groups
              </TabsTrigger>
              <TabsTrigger value="gamification" className="text-sm gap-2 bg-muted data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2">
                <Gamepad2 className="w-4 h-4" />
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

                      <a 
                        href={tool.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block w-full"
                      >
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
                {videosList.map((video, index) => (
                  <a
                    key={video.title}
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl bg-card border border-border shadow-card overflow-hidden group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up cursor-pointer block"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-40 bg-gradient-to-br from-campus-blue/20 to-campus-purple/20 overflow-hidden flex items-center justify-center">
                      <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                        {video.thumbnail}
                      </div>
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all">
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

            {/* Campus Diary Tab */}
            <TabsContent value="diary" className="animate-fade-in">
              <div className="max-w-4xl mx-auto">
                {/* Cute Header */}
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 border-2 border-pink-200 mb-4">
                    <span className="text-4xl">📔</span>
                    <h2 className="text-2xl font-display font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                      My Campus Diary
                    </h2>
                    <span className="text-4xl">✨</span>
                  </div>
                  <p className="text-muted-foreground">Your personal space to reflect and plan your campus journey</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Daily Journal */}
                  <div className="p-6 rounded-3xl bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 border-2 border-green-200 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">🌸</span>
                      <h3 className="text-xl font-display font-bold text-green-700">Today's Entry</h3>
                    </div>
                    
                    {/* Mood Selector */}
                    <div className="mb-4">
                      <label className="text-sm font-medium text-gray-600 mb-2 block">How are you feeling today?</label>
                      <div className="flex flex-wrap gap-2">
                        {moodEmojis.map((mood) => (
                          <button
                            key={mood.label}
                            onClick={() => setSelectedMood(mood.label)}
                            className={`px-3 py-2 rounded-full text-lg transition-all ${mood.color} ${selectedMood === mood.label ? 'ring-2 ring-purple-400 scale-110' : ''}`}
                          >
                            {mood.emoji}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Journal Entry */}
                    <Textarea
                      placeholder="✏️ Write about your day... What did you learn? Who did you meet? What made you smile?"
                      value={diaryEntry}
                      onChange={(e) => setDiaryEntry(e.target.value)}
                      className="min-h-[150px] bg-white/70 border-2 border-pink-200 rounded-2xl resize-none focus:border-purple-400"
                    />

                    <div className="flex items-center justify-between mt-4">
                      <div className="flex gap-2">
                        <span className="text-2xl cursor-pointer hover:scale-125 transition-transform">🌟</span>
                        <span className="text-2xl cursor-pointer hover:scale-125 transition-transform">📷</span>
                        <span className="text-2xl cursor-pointer hover:scale-125 transition-transform">🎵</span>
                      </div>
                      <Button className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white rounded-full px-6">
                        <Heart className="w-4 h-4 mr-2" />
                        Save Entry
                      </Button>
                    </div>
                  </div>

                  {/* Daily Planner with Personality Quiz */}
                  <div className="p-6 rounded-3xl bg-gradient-to-br from-pink-50 via-yellow-50 to-green-50 border-2 border-pink-200 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">📋</span>
                      <h3 className="text-xl font-display font-bold text-pink-700">Daily Planner</h3>
                    </div>

                    {/* Add Task */}
                    <div className="flex gap-2 mb-4">
                      <Input
                        placeholder="Add a task for tomorrow..."
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addTask()}
                        className="bg-white/70 border-2 border-yellow-200 rounded-xl"
                      />
                      <Button onClick={addTask} className="bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-white rounded-xl">
                        Add
                      </Button>
                    </div>

                    {/* Task List */}
                    <div className="space-y-2 max-h-[150px] overflow-y-auto mb-4">
                      {plannerTasks.length === 0 ? (
                        <div className="text-center py-4 text-gray-400">
                          <span className="text-3xl mb-2 block">🌈</span>
                          <p className="text-sm">No tasks yet! Plan your day ahead</p>
                        </div>
                      ) : (
                        plannerTasks.map((task, index) => (
                          <div key={index} className="flex items-center gap-3 p-2 bg-white/70 rounded-xl border border-green-200">
                            <input type="checkbox" className="w-4 h-4 rounded-full accent-green-500" />
                            <span className="flex-1 text-sm">{task}</span>
                            <span className="text-lg">✨</span>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Personality Quiz Section */}
                    <div className="mt-4 pt-4 border-t-2 border-dashed border-pink-300">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-2xl">🎭</span>
                        <h4 className="font-bold text-purple-700">Find Your Study Buddy Character!</h4>
                      </div>

                      {!showQuizResult ? (
                        <div className="space-y-4">
                          {personalityQuestions.map((q, qIndex) => (
                            <div 
                              key={qIndex} 
                              className={`p-4 rounded-2xl ${
                                qIndex % 4 === 0 ? 'bg-gradient-to-r from-green-100 to-teal-100' :
                                qIndex % 4 === 1 ? 'bg-gradient-to-r from-blue-100 to-purple-100' :
                                qIndex % 4 === 2 ? 'bg-gradient-to-r from-pink-100 to-rose-100' :
                                'bg-gradient-to-r from-yellow-100 to-orange-100'
                              } border-2 border-white shadow-sm`}
                            >
                              <p className="font-semibold text-gray-700 mb-3 text-sm">{q.question}</p>
                              <div className="grid grid-cols-2 gap-2">
                                {q.options.map((option, oIndex) => (
                                  <button
                                    key={oIndex}
                                    onClick={() => handleQuizAnswer(qIndex, oIndex)}
                                    className={`p-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                                      quizAnswers[qIndex] === oIndex
                                        ? 'bg-gradient-to-r from-purple-400 to-pink-400 text-white scale-105 shadow-lg'
                                        : 'bg-white hover:bg-purple-50 text-gray-600 hover:scale-102 border border-purple-200'
                                    }`}
                                  >
                                    {option.text}
                                  </button>
                                ))}
                              </div>
                            </div>
                          ))}

                          <Button
                            onClick={calculateCharacter}
                            disabled={quizAnswers.length < personalityQuestions.length || quizAnswers.includes(undefined as any)}
                            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 text-white rounded-full py-3 font-bold text-sm shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Reveal My Character! ✨
                          </Button>
                        </div>
                      ) : (
                        <div className="text-center animate-scale-in">
                          {assignedCharacter && (
                            <div className={`p-6 rounded-3xl bg-gradient-to-br ${characterResults[assignedCharacter].color} text-white shadow-2xl`}>
                              <div className="text-7xl mb-3 animate-bounce">
                                {characterResults[assignedCharacter].emoji}
                              </div>
                              <h3 className="text-2xl font-bold mb-1">
                                {characterResults[assignedCharacter].name}
                              </h3>
                              <p className="text-lg font-semibold opacity-90 mb-2">
                                {characterResults[assignedCharacter].trait}
                              </p>
                              <p className="text-sm opacity-80 mb-3">
                                {characterResults[assignedCharacter].description}
                              </p>
                              
                              {/* Funny Story Section */}
                              <div className="bg-white/20 rounded-2xl p-4 mb-3 text-left backdrop-blur-sm">
                                <p className="text-xs font-bold mb-1 flex items-center gap-1">📖 Your Origin Story:</p>
                                <p className="text-xs opacity-90 italic leading-relaxed">
                                  {characterResults[assignedCharacter].funnyStory}
                                </p>
                              </div>
                              
                              {/* Personality Details */}
                              <div className="bg-white/20 rounded-2xl p-4 mb-3 text-left backdrop-blur-sm">
                                <p className="text-xs font-bold mb-1 flex items-center gap-1">🧠 Your Personality:</p>
                                <p className="text-xs opacity-90 leading-relaxed">
                                  {characterResults[assignedCharacter].personality}
                                </p>
                              </div>
                              
                              {/* Superpower & Weakness */}
                              <div className="grid grid-cols-2 gap-2 mb-4">
                                <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                                  <p className="text-xs font-bold">⚡ Superpower:</p>
                                  <p className="text-xs opacity-90">{characterResults[assignedCharacter].superpower}</p>
                                </div>
                                <div className="bg-white/20 rounded-xl p-3 backdrop-blur-sm">
                                  <p className="text-xs font-bold">💔 Weakness:</p>
                                  <p className="text-xs opacity-90">{characterResults[assignedCharacter].weakness}</p>
                                </div>
                              </div>
                              
                              <Button
                                onClick={resetQuiz}
                                className="bg-white/20 hover:bg-white/30 text-white rounded-full px-6 backdrop-blur-sm"
                              >
                                Try Again 🔄
                              </Button>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Cute Characters Display - All 8 Characters */}
                <div className="grid grid-cols-4 md:grid-cols-8 gap-4 mt-8">
                  <div className={`text-center transition-all duration-300 cursor-pointer hover:scale-110 ${assignedCharacter === 'cat' ? 'scale-125 ring-4 ring-purple-400 rounded-full p-2 bg-purple-100' : ''}`}>
                    <div className="text-5xl md:text-6xl animate-bounce">🐱</div>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Cozy Cat</p>
                  </div>
                  <div className={`text-center transition-all duration-300 cursor-pointer hover:scale-110 ${assignedCharacter === 'dog' ? 'scale-125 ring-4 ring-yellow-400 rounded-full p-2 bg-yellow-100' : ''}`}>
                    <div className="text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.1s' }}>🐶</div>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Peppy Pup</p>
                  </div>
                  <div className={`text-center transition-all duration-300 cursor-pointer hover:scale-110 ${assignedCharacter === 'bunny' ? 'scale-125 ring-4 ring-pink-400 rounded-full p-2 bg-pink-100' : ''}`}>
                    <div className="text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.2s' }}>🐰</div>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Gentle Bunny</p>
                  </div>
                  <div className={`text-center transition-all duration-300 cursor-pointer hover:scale-110 ${assignedCharacter === 'fox' ? 'scale-125 ring-4 ring-orange-400 rounded-full p-2 bg-orange-100' : ''}`}>
                    <div className="text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.3s' }}>🦊</div>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Clever Fox</p>
                  </div>
                  <div className={`text-center transition-all duration-300 cursor-pointer hover:scale-110 ${assignedCharacter === 'owl' ? 'scale-125 ring-4 ring-indigo-400 rounded-full p-2 bg-indigo-100' : ''}`}>
                    <div className="text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.4s' }}>🦉</div>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Night Owl</p>
                  </div>
                  <div className={`text-center transition-all duration-300 cursor-pointer hover:scale-110 ${assignedCharacter === 'panda' ? 'scale-125 ring-4 ring-emerald-400 rounded-full p-2 bg-emerald-100' : ''}`}>
                    <div className="text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.5s' }}>🐼</div>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Chill Panda</p>
                  </div>
                  <div className={`text-center transition-all duration-300 cursor-pointer hover:scale-110 ${assignedCharacter === 'penguin' ? 'scale-125 ring-4 ring-cyan-400 rounded-full p-2 bg-cyan-100' : ''}`}>
                    <div className="text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.6s' }}>🐧</div>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Party Penguin</p>
                  </div>
                  <div className={`text-center transition-all duration-300 cursor-pointer hover:scale-110 ${assignedCharacter === 'unicorn' ? 'scale-125 ring-4 ring-violet-400 rounded-full p-2 bg-violet-100' : ''}`}>
                    <div className="text-5xl md:text-6xl animate-bounce" style={{ animationDelay: '0.7s' }}>🦄</div>
                    <p className="text-xs md:text-sm text-muted-foreground mt-1">Magical Unicorn</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Roadmap Maker Tab */}
            <TabsContent value="roadmap" className="animate-fade-in">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-display font-bold mb-2">Career Roadmap Maker</h2>
                <p className="text-muted-foreground">Choose your field and get a detailed learning roadmap</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {roadmapCategories.map((category, index) => {
                  const Icon = category.icon;
                  return (
                    <a
                      key={category.name}
                      href={`https://roadmap.sh/${category.path}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group animate-slide-up"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className={`p-6 rounded-2xl ${category.color} text-white shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer`}>
                        <div className="flex flex-col items-center text-center">
                          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                            <Icon className="w-8 h-8" />
                          </div>
                          <h3 className="font-semibold text-sm">{category.name}</h3>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </TabsContent>

            {/* Event Calendar Tab */}
            <TabsContent value="calendar" className="animate-fade-in">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Festival Calendar */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <PartyPopper className="w-6 h-6 text-orange-500" />
                    <h3 className="text-xl font-display font-bold text-orange-700">Festival & Events</h3>
                  </div>
                  <div className="space-y-3">
                    {eventCalendarData.map((event, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className={`w-3 h-3 rounded-full ${event.color}`} />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{event.event}</p>
                          <p className="text-xs text-gray-500">{event.date}</p>
                        </div>
                        <Gift className="w-4 h-4 text-orange-400" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Academic Calendar */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                    <h3 className="text-xl font-display font-bold text-blue-700">Academic Calendar</h3>
                  </div>
                  <div className="space-y-3">
                    {academicCalendarData.map((event, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className={`w-3 h-3 rounded-full ${event.color}`} />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{event.event}</p>
                          <p className="text-xs text-gray-500">{event.date}</p>
                        </div>
                        <Flag className="w-4 h-4 text-blue-400" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hackathon Calendar */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 shadow-lg">
                  <div className="flex items-center gap-3 mb-6">
                    <Rocket className="w-6 h-6 text-purple-500" />
                    <h3 className="text-xl font-display font-bold text-purple-700">Hackathon Calendar 2026</h3>
                  </div>
                  <div className="space-y-3 max-h-[400px] overflow-y-auto">
                    {hackathonCalendarData.map((hackathon, index) => (
                      <div key={index} className="p-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-semibold text-sm text-purple-700">{hackathon.name}</h4>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{hackathon.prize}</span>
                        </div>
                        <p className="text-xs text-gray-500 mb-1">📅 {hackathon.date}</p>
                        <p className="text-xs text-gray-500 mb-2">📍 {hackathon.location}</p>
                        <a 
                          href={hackathon.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-block"
                        >
                          <Button size="sm" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs h-7 rounded-full">
                            Apply Now
                          </Button>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
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

            {/* Gamification/Rewards Tab */}
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

                  {/* Fun Games Section */}
                  <div className="p-6 rounded-2xl bg-card border border-border shadow-card mb-6">
                    <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                      <Gamepad2 className="w-5 h-5 text-campus-purple" />
                      Learning Games
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {games.map((game, index) => {
                        const Icon = game.icon;
                        return (
                          <div
                            key={game.name}
                            className={`p-4 rounded-xl ${game.color} text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}
                          >
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                                <Icon className="w-6 h-6" />
                              </div>
                              <div>
                                <h4 className="font-semibold">{game.name}</h4>
                                <p className="text-xs text-white/80">{game.description}</p>
                              </div>
                            </div>
                            <a href={game.link} target="_blank" rel="noopener noreferrer">
                              <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-0">
                                <Play className="w-4 h-4 mr-2" />
                                Play Now
                              </Button>
                            </a>
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
                <div className="p-6 rounded-2xl bg-card border border-border shadow-card h-fit">
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
