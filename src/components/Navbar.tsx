import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  BookOpen,
  Terminal,
  LayoutDashboard,
  Award,
  Info,
  LogIn,
  Palette,
  Menu,
  X
} from 'lucide-react';

import { cn } from '../lib/utils';

const logo = "/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Courses', path: '/courses', icon: BookOpen },
   
    { name: 'DevLab', path: '/devlab', icon: Terminal },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Certificate', path: '/certificate', icon: Award },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Themes', path: '/themes', icon: Palette },
    { name: 'Login', path: '/login', icon: LogIn },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl shadow-lg">

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10 group-hover:scale-105 transition-all">
              <img
                src={logo}
                alt="Tech Routes Logo"
                className="h-12 w-12 object-cover"
              />
            </div>

            <span className="text-2xl font-bold tracking-tight text-white">
              Tech<span className="text-blue-500">Routes</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300",
                  location.pathname === item.path
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon size={17} />
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#020617] border-t border-white/10 backdrop-blur-xl">

          <div className="space-y-2 pt-4">

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all",
                  location.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon size={18} />
                {item.name}
              </Link>
            ))}

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;