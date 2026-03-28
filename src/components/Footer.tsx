import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--card-bg)] py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Terminal size={18} />
              </div>
              <span className="text-xl font-bold tracking-tight text-[var(--text-primary)]">
                Tech<span className="text-blue-500">Routes</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[var(--text-primary)]/60">
              Transforming learners into industry-ready professionals through practical exposure, innovation, and career-focused education
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[var(--text-primary)]/40 hover:text-blue-500 transition-colors"><Github size={20} /></a>
              <a href="#" className="text-[var(--text-primary)]/40 hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-[var(--text-primary)]/40 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]">Quick Links</h4>
            <ul className="space-y-4 text-sm text-[var(--text-primary)]/60">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li><Link to="/courses" className="hover:text-blue-500 transition-colors">Courses</Link></li>
              <li><Link to="/pretest" className="hover:text-blue-500 transition-colors">Pretest</Link></li>
              <li><Link to="/devlab" className="hover:text-blue-500 transition-colors">DevLab</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]">Support</h4>
            <ul className="space-y-4 text-sm text-[var(--text-primary)]/60">
              <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link to="/dashboard" className="hover:text-blue-500 transition-colors">User Dashboard</Link></li>
              <li><Link to="/certificate" className="hover:text-blue-500 transition-colors">Certification</Link></li>
              <li><Link to="/themes" className="hover:text-blue-500 transition-colors">Themes</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-6 text-sm font-bold uppercase tracking-widest text-[var(--text-primary)]">Contact Us</h4>
            <ul className="space-y-4 text-sm text-[var(--text-primary)]/60">
              <li className="flex items-center gap-3"><Mail size={16} className="text-blue-500" /> techroutesofficial@gmail.com</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-blue-500" />+91 8074651836</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-blue-500" />+91 9391466679</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-blue-500" /> Bangalore, Karnataka</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--border-color)] pt-8 text-center text-sm text-[var(--text-primary)]/40">
          <p>© {new Date().getFullYear()} Tech Routes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
