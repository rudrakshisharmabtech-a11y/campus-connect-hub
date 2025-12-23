import { Link } from "react-router-dom";
import { GraduationCap, Mail, MapPin, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">Campus Buddy</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Your ultimate companion for campus life. Navigate, learn, and connect with the best university experience.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/campus-map" className="text-background/70 hover:text-primary transition-colors">Campus Map</Link></li>
              <li><Link to="/study" className="text-background/70 hover:text-primary transition-colors">Study Tools</Link></li>
              <li><Link to="/about" className="text-background/70 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/alumni" className="text-background/70 hover:text-primary transition-colors">Alumni Network</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70">
                <MapPin className="w-5 h-5 text-primary" />
                <span>University Campus, Main Road</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@campusbuddy.edu</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-display font-semibold text-lg">Stay Updated</h4>
            <p className="text-background/70 text-sm">Subscribe to our newsletter for campus updates.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-primary"
              />
              <button className="px-4 py-2 rounded-lg gradient-primary text-primary-foreground font-medium hover:shadow-glow transition-shadow">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-background/50 text-sm">
          <p>© 2024 Campus Buddy. All rights reserved. Made with ❤️ for students.</p>
        </div>
      </div>
    </footer>
  );
}
