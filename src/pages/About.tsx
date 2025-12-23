import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import {
  Info,
  Target,
  Award,
  TrendingUp,
  BookOpen,
  Clock,
  CheckCircle2,
  Calendar,
  Trophy,
  Star,
  Zap,
  GraduationCap,
  Mail,
  MapPin,
  Phone
} from "lucide-react";

const progressData = {
  overallGPA: 8.7,
  creditsCompleted: 96,
  totalCredits: 160,
  coursesCompleted: 24,
  totalCourses: 40,
  semesterRank: 12,
  totalStudents: 180
};

const semesterProgress = [
  { semester: "Sem 1", gpa: 8.2, credits: 20 },
  { semester: "Sem 2", gpa: 8.4, credits: 22 },
  { semester: "Sem 3", gpa: 8.8, credits: 26 },
  { semester: "Sem 4", gpa: 9.1, credits: 28 },
];

const currentCourses = [
  { name: "Data Structures & Algorithms", code: "CS301", progress: 75, grade: "A", instructor: "Dr. Sharma" },
  { name: "Database Management", code: "CS302", progress: 60, grade: "A-", instructor: "Prof. Verma" },
  { name: "Computer Networks", code: "CS303", progress: 45, grade: "B+", instructor: "Dr. Patel" },
  { name: "Operating Systems", code: "CS304", progress: 80, grade: "A", instructor: "Prof. Singh" },
];

const recentAchievements = [
  { title: "Dean's List", date: "Dec 2024", icon: Award, color: "bg-campus-yellow" },
  { title: "Hackathon Winner", date: "Nov 2024", icon: Trophy, color: "bg-campus-orange" },
  { title: "Perfect Attendance", date: "Oct 2024", icon: Star, color: "bg-campus-teal" },
  { title: "Research Paper Published", date: "Sep 2024", icon: BookOpen, color: "bg-campus-purple" },
];

const upcomingDeadlines = [
  { task: "DSA Assignment 5", course: "CS301", date: "Dec 26", type: "assignment" },
  { task: "Mid-Semester Exam", course: "CS302", date: "Dec 28", type: "exam" },
  { task: "Project Presentation", course: "CS304", date: "Jan 2", type: "presentation" },
  { task: "Lab Report Submission", course: "CS303", date: "Jan 5", type: "assignment" },
];

const contactEmails = [
  { name: "Academic Office", email: "academics@university.edu", description: "Course registration, grades, and academic inquiries" },
  { name: "Student Affairs", email: "studentaffairs@university.edu", description: "Campus life, events, and student welfare" },
  { name: "Technical Support", email: "techsupport@university.edu", description: "IT issues, system access, and technical help" },
  { name: "Career Services", email: "careers@university.edu", description: "Internships, placements, and career guidance" },
  { name: "Campus Buddy Team", email: "campusbuddy@university.edu", description: "App feedback, feature requests, and support" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-12 gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary-foreground)/0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-slide-up">
              <Info className="w-5 h-5" />
              <span className="font-medium">About & Progress</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Your Academic Dashboard
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Track your progress, celebrate achievements, and stay on top of your academic journey.
            </p>
          </div>
        </div>
      </section>

      {/* Progress Dashboard */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          {/* Stats Overview */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { label: "Overall GPA", value: progressData.overallGPA.toFixed(1), icon: Award, color: "bg-campus-yellow", subtext: "out of 10.0" },
              { label: "Credits Completed", value: `${progressData.creditsCompleted}/${progressData.totalCredits}`, icon: Target, color: "bg-campus-teal", subtext: `${Math.round((progressData.creditsCompleted/progressData.totalCredits)*100)}% complete` },
              { label: "Courses Completed", value: `${progressData.coursesCompleted}/${progressData.totalCourses}`, icon: BookOpen, color: "bg-campus-purple", subtext: `${progressData.totalCourses - progressData.coursesCompleted} remaining` },
              { label: "Class Rank", value: `#${progressData.semesterRank}`, icon: TrendingUp, color: "bg-campus-orange", subtext: `of ${progressData.totalStudents} students` },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-card border border-border shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-14 h-14 rounded-xl ${stat.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-display font-bold mb-1">{stat.value}</div>
                  <div className="text-lg text-muted-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground/70">{stat.subtext}</div>
                </div>
              );
            })}
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Semester Progress Chart */}
            <div className="lg:col-span-2 p-6 rounded-2xl bg-card border border-border shadow-card">
              <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Semester Progress
              </h3>
              <div className="flex items-end justify-between gap-4 h-48 mb-4">
                {semesterProgress.map((sem, index) => {
                  const height = (sem.gpa / 10) * 100;
                  return (
                    <div key={sem.semester} className="flex-1 flex flex-col items-center">
                      <div className="text-sm font-semibold mb-2">{sem.gpa}</div>
                      <div className="w-full bg-muted rounded-t-lg relative overflow-hidden" style={{ height: `${height}%` }}>
                        <div
                          className="absolute inset-0 gradient-primary animate-slide-up"
                          style={{ animationDelay: `${index * 0.2}s` }}
                        />
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">{sem.semester}</div>
                      <div className="text-xs text-muted-foreground/70">{sem.credits} credits</div>
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded gradient-primary" />
                  <span>GPA Progress</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-campus-teal" />
                  <span>Trending Up +0.3 this semester</span>
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="p-6 rounded-2xl bg-card border border-border shadow-card">
              <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-campus-yellow" />
                Recent Achievements
              </h3>
              <div className="space-y-4">
                {recentAchievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={achievement.title}
                      className="flex items-center gap-4 p-3 rounded-xl bg-muted hover:bg-muted/80 transition-colors animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-10 h-10 rounded-lg ${achievement.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold">{achievement.title}</div>
                        <div className="text-xs text-muted-foreground">{achievement.date}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Current Courses */}
          <div className="mt-8 p-6 rounded-2xl bg-card border border-border shadow-card">
            <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-primary" />
              Current Courses
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {currentCourses.map((course, index) => (
                <div
                  key={course.code}
                  className="p-4 rounded-xl bg-muted border border-border hover:shadow-md transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{course.name}</h4>
                      <p className="text-sm text-muted-foreground">{course.code} • {course.instructor}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                      course.grade.startsWith('A') ? 'bg-campus-green/10 text-campus-green' : 'bg-campus-yellow/10 text-campus-yellow'
                    }`}>
                      {course.grade}
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">{course.progress}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-border overflow-hidden">
                      <div
                        className="h-full rounded-full gradient-primary transition-all duration-500"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="mt-8 p-6 rounded-2xl bg-card border border-border shadow-card">
            <h3 className="font-display font-semibold text-xl mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Upcoming Deadlines
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {upcomingDeadlines.map((deadline, index) => (
                <div
                  key={deadline.task}
                  className={`p-4 rounded-xl border ${
                    deadline.type === 'exam' ? 'bg-destructive/5 border-destructive/20' :
                    deadline.type === 'presentation' ? 'bg-campus-purple/5 border-campus-purple/20' :
                    'bg-muted border-border'
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className={`w-4 h-4 ${
                      deadline.type === 'exam' ? 'text-destructive' :
                      deadline.type === 'presentation' ? 'text-campus-purple' :
                      'text-primary'
                    }`} />
                    <span className="text-sm font-medium text-muted-foreground">{deadline.date}</span>
                  </div>
                  <h4 className="font-semibold mb-1">{deadline.task}</h4>
                  <p className="text-sm text-muted-foreground">{deadline.course}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Contact */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">About Campus Buddy</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Campus Buddy is your ultimate companion for university life. From navigating the campus to tracking your academic progress, 
              we've got everything you need to succeed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { icon: GraduationCap, title: "For Students", description: "Designed by students, for students. We understand your needs." },
              { icon: Target, title: "Goal-Oriented", description: "Track your progress and achieve your academic goals effectively." },
              { icon: CheckCircle2, title: "All-in-One", description: "Study tools, maps, alumni network - everything in one place." },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-card border border-border shadow-card text-center animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Contact Information */}
          <div className="p-8 rounded-3xl bg-card border border-border shadow-card">
            <h3 className="font-display font-semibold text-2xl mb-8 text-center flex items-center justify-center gap-2">
              <Mail className="w-6 h-6 text-primary" />
              Contact Us
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactEmails.map((contact, index) => (
                <a
                  key={contact.email}
                  href={`mailto:${contact.email}`}
                  className="p-4 rounded-xl bg-muted hover:bg-primary/5 border border-border hover:border-primary/20 transition-all group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-semibold group-hover:text-primary transition-colors">{contact.name}</h4>
                  <p className="text-sm text-primary font-medium my-1">{contact.email}</p>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                </a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-campus-blue/10 flex items-center justify-center mb-3">
                  <MapPin className="w-6 h-6 text-campus-blue" />
                </div>
                <h4 className="font-semibold">Location</h4>
                <p className="text-sm text-muted-foreground">University Campus, Main Road, City - 123456</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-campus-teal/10 flex items-center justify-center mb-3">
                  <Phone className="w-6 h-6 text-campus-teal" />
                </div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm text-muted-foreground">+1 234 567 890 (Mon-Fri, 9AM-5PM)</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-campus-orange/10 flex items-center justify-center mb-3">
                  <Clock className="w-6 h-6 text-campus-orange" />
                </div>
                <h4 className="font-semibold">Office Hours</h4>
                <p className="text-sm text-muted-foreground">Monday to Friday, 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
