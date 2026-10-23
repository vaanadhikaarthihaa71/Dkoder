import React, { useState, useRef, useEffect } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Code2, 
  Sparkles, 
  Trophy, 
  GraduationCap, 
  FileCheck2, 
  LayoutDashboard, 
  Flame, 
  Zap, 
  Laptop
} from 'lucide-react';
import { Button } from './Button';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLearnDropdownOpen, setIsLearnDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const learnRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (learnRef.current && !learnRef.current.contains(event.target as Node)) {
        setIsLearnDropdownOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setIsMobileMenuOpen(false);
    setIsLearnDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const isActive = (path: string) => {
    if (path === '/' && currentPath === '/') return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-[#E8E2EF] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-2.5 group cursor-pointer focus:outline-none"
              aria-label="DKODER Home"
            >
              <div className="w-9 h-9 rounded-xl bg-[#5425A8] flex items-center justify-center text-[#FFD84D] shadow-sm">
                <Code2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-[#211B2B]">
                  DK<span className="text-[#5425A8]">ODER</span>
                </span>
                <span className="text-[10px] font-semibold text-[#6F687A] hidden sm:inline-block">
                  Placement LMS
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
              {/* Home */}
              <button
                onClick={() => handleNavClick('/')}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive('/') 
                    ? 'text-[#5425A8] bg-[#F3EDFF] font-semibold' 
                    : 'text-[#6F687A] hover:text-[#211B2B] hover:bg-[#FAF8FD]'
                }`}
              >
                Home
              </button>

              {/* Learn Dropdown */}
              <div className="relative" ref={learnRef}>
                <button
                  onClick={() => setIsLearnDropdownOpen(!isLearnDropdownOpen)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setIsLearnDropdownOpen(!isLearnDropdownOpen);
                    }
                  }}
                  aria-expanded={isLearnDropdownOpen}
                  aria-haspopup="true"
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    currentPath.includes('bundles') || currentPath.includes('subscription')
                      ? 'text-[#5425A8] bg-[#F3EDFF] font-semibold'
                      : 'text-[#6F687A] hover:text-[#211B2B] hover:bg-[#FAF8FD]'
                  }`}
                >
                  <span>Learn</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-150 ${isLearnDropdownOpen ? 'rotate-180 text-[#5425A8]' : 'text-[#6F687A]'}`} />
                </button>

                {/* Dropdown Menu */}
                {isLearnDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-[#E8E2EF] p-2 z-50 animate-in fade-in duration-150">
                    <div className="px-3 py-1.5 text-[11px] font-semibold text-[#6F687A] uppercase tracking-wider">
                      Company Prep Bundles
                    </div>

                    <button
                      onClick={() => handleNavClick('/bundles/infosys')}
                      className="w-full flex items-start gap-3 p-2 rounded-xl hover:bg-[#FAF8FD] text-left transition-colors cursor-pointer group"
                    >
                      <div className="p-1.5 rounded-lg bg-[#F3EDFF] text-[#5425A8]">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#211B2B]">Infosys Master Prep</div>
                        <div className="text-xs text-[#6F687A]">InfyTQ & Specialist Programmer</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('/bundles/accenture')}
                      className="w-full flex items-start gap-3 p-2 rounded-xl hover:bg-[#FAF8FD] text-left transition-colors cursor-pointer group"
                    >
                      <div className="p-1.5 rounded-lg bg-[#F3EDFF] text-[#5425A8]">
                        <Laptop className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#211B2B]">Accenture Fast-Track</div>
                        <div className="text-xs text-[#6F687A]">Cognitive & Technical Mock Series</div>
                      </div>
                    </button>

                    <div className="h-px bg-[#E8E2EF] my-1.5" />

                    <button
                      onClick={() => handleNavClick('/student/subscription')}
                      className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-[#FAF8FD] text-left transition-colors cursor-pointer"
                    >
                      <span className="text-xs font-semibold text-[#5425A8]">Compare All 5 Plans</span>
                      <span className="text-[10px] font-semibold text-[#211B2B] bg-[#FFD84D] px-2 py-0.5 rounded-full">From ₹699</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Hackathons Link */}
              <button
                onClick={() => handleNavClick('/hackathons')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive('/hackathons')
                    ? 'text-[#5425A8] bg-[#F3EDFF] font-semibold'
                    : 'text-[#6F687A] hover:text-[#211B2B] hover:bg-[#FAF8FD]'
                }`}
              >
                <span>Hackathons</span>
              </button>

              {/* For Colleges */}
              <button
                onClick={() => handleNavClick('/colleges')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive('/colleges')
                    ? 'text-[#5425A8] bg-[#F3EDFF] font-semibold'
                    : 'text-[#6F687A] hover:text-[#211B2B] hover:bg-[#FAF8FD]'
                }`}
              >
                <span>For Colleges</span>
              </button>

              {/* Apply for MOU */}
              <button
                onClick={() => handleNavClick('/partner-mou')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                  isActive('/partner-mou')
                    ? 'text-[#5425A8] bg-[#F3EDFF] font-semibold'
                    : 'text-[#6F687A] hover:text-[#211B2B] hover:bg-[#FAF8FD]'
                }`}
              >
                <span>Apply for MOU</span>
              </button>
            </nav>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* User Profile / Status Preview */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                className="flex items-center gap-2 p-1 pl-2.5 rounded-xl border border-[#E8E2EF] hover:border-[#D4CBDF] bg-white hover:bg-[#FAF8FD] transition-colors cursor-pointer"
                aria-label="User Profile Menu"
              >
                <div className="flex items-center gap-1 text-xs font-semibold text-[#92400E]">
                  <Flame className="w-3.5 h-3.5 fill-[#FFD84D] text-[#92400E]" />
                  <span>14d</span>
                </div>
                <div className="w-7 h-7 rounded-lg bg-[#5425A8] text-white font-bold text-xs flex items-center justify-center">
                  VK
                </div>
              </button>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-[#E8E2EF] p-4 z-50 animate-in fade-in duration-150">
                  <div className="flex items-center gap-3 pb-3 border-b border-[#E8E2EF]">
                    <div className="w-10 h-10 rounded-xl bg-[#5425A8] text-white font-bold flex items-center justify-center text-sm">
                      VK
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-[#211B2B]">Vaanadhi K.</div>
                      <div className="text-xs text-[#6F687A]">Anna Univ • CSE</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 my-3 text-center">
                    <div className="p-2 rounded-xl bg-[#FAF8FD] border border-[#E8E2EF]">
                      <div className="text-[11px] text-[#6F687A]">Placement XP</div>
                      <div className="text-sm font-bold text-[#211B2B] mt-0.5">4,280</div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#FAF8FD] border border-[#E8E2EF]">
                      <div className="text-[11px] text-[#6F687A]">Solved</div>
                      <div className="text-sm font-bold text-[#211B2B] mt-0.5">84 Qs</div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <button
                      onClick={() => handleNavClick('/dashboard')}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-[#211B2B] hover:bg-[#F3EDFF] text-left transition-colors cursor-pointer"
                    >
                      <LayoutDashboard className="w-4 h-4 text-[#5425A8]" />
                      <span>Student Dashboard</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/student/subscription')}
                      className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-[#211B2B] hover:bg-[#F3EDFF] text-left transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-[#5425A8]" />
                      <span>Manage Subscription</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Prominent Go to Dashboard CTA */}
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNavClick('/dashboard')}
              leftIcon={<LayoutDashboard className="w-4 h-4" />}
            >
              Go to Dashboard
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('/dashboard')}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-[#FFD84D] text-[#211B2B] text-xs font-semibold"
            >
              Dashboard
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[#211B2B] hover:bg-[#FAF8FD] focus:outline-none"
              aria-label="Toggle navigation drawer"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#E8E2EF] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1.5">
            <button
              onClick={() => handleNavClick('/')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-left ${
                isActive('/') ? 'bg-[#F3EDFF] text-[#5425A8]' : 'text-[#6F687A] hover:bg-[#FAF8FD]'
              }`}
            >
              <span>Home</span>
            </button>

            <button
              onClick={() => handleNavClick('/hackathons')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-left ${
                isActive('/hackathons') ? 'bg-[#F3EDFF] text-[#5425A8]' : 'text-[#6F687A] hover:bg-[#FAF8FD]'
              }`}
            >
              <span>Hackathons</span>
            </button>

            <button
              onClick={() => handleNavClick('/colleges')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-left ${
                isActive('/colleges') ? 'bg-[#F3EDFF] text-[#5425A8]' : 'text-[#6F687A] hover:bg-[#FAF8FD]'
              }`}
            >
              <span>For Colleges</span>
            </button>

            <button
              onClick={() => handleNavClick('/partner-mou')}
              className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-left ${
                isActive('/partner-mou') ? 'bg-[#F3EDFF] text-[#5425A8]' : 'text-[#6F687A] hover:bg-[#FAF8FD]'
              }`}
            >
              <span>Apply for MOU</span>
            </button>

            <div className="h-px bg-[#E8E2EF] my-1" />

            <div className="text-[11px] font-semibold text-[#6F687A] px-3.5 pt-1 uppercase tracking-wider">
              Prep Bundles
            </div>

            <button
              onClick={() => handleNavClick('/bundles/infosys')}
              className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-[#211B2B] hover:bg-[#FAF8FD]"
            >
              <span>Infosys InfyTQ & Specialist</span>
              <span className="text-[10px] bg-[#FFD84D] px-2 py-0.5 rounded text-[#211B2B] font-bold">Top Prep</span>
            </button>

            <button
              onClick={() => handleNavClick('/bundles/accenture')}
              className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-[#211B2B] hover:bg-[#FAF8FD]"
            >
              <span>Accenture Fast-Track Prep</span>
              <span className="text-[10px] bg-[#F3EDFF] text-[#5425A8] px-2 py-0.5 rounded font-bold">Module</span>
            </button>

            <button
              onClick={() => handleNavClick('/student/subscription')}
              className="flex items-center justify-between px-3.5 py-2 rounded-xl text-xs font-medium text-[#211B2B] hover:bg-[#FAF8FD]"
            >
              <span>Subscription Pricing</span>
              <span className="text-[10px] bg-[#FAF8FD] border border-[#E8E2EF] text-[#6F687A] px-2 py-0.5 rounded">₹699/yr</span>
            </button>

            <div className="pt-3">
              <Button
                variant="primary"
                size="md"
                fullWidth
                onClick={() => handleNavClick('/dashboard')}
                leftIcon={<LayoutDashboard className="w-4 h-4" />}
              >
                Go to Dashboard
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
