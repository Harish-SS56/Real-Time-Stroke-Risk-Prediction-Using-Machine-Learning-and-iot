
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Home, Activity, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm border-b border-stroke-red/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="flex items-center text-stroke-dark hover:text-stroke-red transition-colors">
              <Home className="mr-1 h-4 w-4" /> Home
            </Link>
            <Link to="/ml" className="flex items-center text-stroke-dark hover:text-stroke-red transition-colors">
              <Activity className="mr-1 h-4 w-4" /> ML
            </Link>
            <Link to="/iot" className="flex items-center text-stroke-dark hover:text-stroke-red transition-colors">
              <svg className="mr-1 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                <line x1="6" y1="6" x2="6.01" y2="6"></line>
                <line x1="6" y1="18" x2="6.01" y2="18"></line>
              </svg> IoT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stroke-gray">
          <div className="container mx-auto px-4 py-2 space-y-2">
            <Link to="/" className="block py-2 px-4 text-stroke-dark hover:bg-stroke-light rounded-md" onClick={toggleMenu}>
              <div className="flex items-center">
                <Home className="mr-2 h-5 w-5" /> Home
              </div>
            </Link>
            <Link to="/ml" className="block py-2 px-4 text-stroke-dark hover:bg-stroke-light rounded-md" onClick={toggleMenu}>
              <div className="flex items-center">
                <Activity className="mr-2 h-5 w-5" /> ML
              </div>
            </Link>
            <Link to="/iot" className="block py-2 px-4 text-stroke-dark hover:bg-stroke-light rounded-md" onClick={toggleMenu}>
              <div className="flex items-center">
                <svg className="mr-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg> IoT
              </div>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
