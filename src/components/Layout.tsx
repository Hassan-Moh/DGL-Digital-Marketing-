import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, MessageCircle, Phone, Instagram, Facebook, Linkedin, ArrowUpRight } from 'lucide-react';
import { cn } from '../lib/utils';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
          isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl">D</span>
            </div>
            <span className="font-serif font-bold text-2xl tracking-tighter hidden sm:block">
              DGL <span className="text-brand-purple">Digital</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-purple',
                  location.pathname === item.href ? 'text-brand-purple' : 'text-gray-600'
                )}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-brand-purple text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-brand-purple/90 transition-all hover:scale-105 active:scale-95"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    'text-2xl font-serif font-semibold',
                    location.pathname === item.href ? 'text-brand-purple' : 'text-gray-900'
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-brand-purple text-white px-6 py-4 rounded-xl text-center font-bold text-lg"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">D</span>
              </div>
              <span className="font-serif font-bold text-2xl tracking-tighter">
                DGL <span className="text-brand-purple">Digital</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Ghana's leading digital growth agency. We help businesses scale through data-driven advertising and innovative branding.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-purple transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-purple transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-purple transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-brand-gold">Services</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Facebook & Instagram Ads</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Google Advertising</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Website Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Branding & Logo Design</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">AI Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-brand-gold">Company</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/case-studies" className="hover:text-white transition-colors">Our Success Stories</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing Packages</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Marketing Blog</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-xl mb-6 text-brand-gold">Contact</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-purple" />
                <span>054 185 3579</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-brand-purple" />
                <span>WhatsApp Available</span>
              </li>
              <li className="text-gray-400 mt-4 italic">
                Tamale, Accra & Global
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2024 DGL Digital Marketing & Ads Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/233541853579"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform active:scale-95"
      >
        <MessageCircle className="w-8 h-8" />
      </a>
    </div>
  );
}
