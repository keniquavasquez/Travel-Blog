import { Plane, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b-2 border-[#D4A574]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Plane className="w-8 h-8 text-[#0B4F6C]" />
            <div>
              <h1 className="font-['Sacramento'] text-3xl text-[#0B4F6C]">Niqua's Travel Tales</h1>
              <p className="text-xs text-gray-600 tracking-wide">Wander with heart. Write with soul.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`transition-colors font-medium ${isActive('/') ? 'text-[#20B2AA]' : 'text-gray-700 hover:text-[#20B2AA]'}`}>Home</Link>
            <Link to="/stories" className={`transition-colors font-medium ${isActive('/stories') ? 'text-[#20B2AA]' : 'text-gray-700 hover:text-[#20B2AA]'}`}>Stories</Link>
            <Link to="/gallery" className={`transition-colors font-medium ${isActive('/gallery') ? 'text-[#20B2AA]' : 'text-gray-700 hover:text-[#20B2AA]'}`}>Gallery</Link>
            <Link to="/contact" className={`transition-colors font-medium ${isActive('/contact') ? 'text-[#20B2AA]' : 'text-gray-700 hover:text-[#20B2AA]'}`}>Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-[#0B4F6C]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3">
            <Link to="/" className="text-gray-700 hover:text-[#20B2AA] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/stories" className="text-gray-700 hover:text-[#20B2AA] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Stories</Link>
            <Link to="/gallery" className="text-gray-700 hover:text-[#20B2AA] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#20B2AA] transition-colors font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
