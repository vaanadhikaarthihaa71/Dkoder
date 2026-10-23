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
  LogOut, 
  User, 
  CheckCircle,
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

  // Close dropdowns on outside click
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
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-purple-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
              aria-label="DKODER Home"
            >
              {/* Distinctive Logo Badge */}
              <div className="w-11 h-11 rounded-xl bg-purple-900 border-2 border-yellow-400 flex items-center justify-center text-yellow-400 shadow-md shadow-purple-900/20 group-hover:scale-105 transition-transform duration-200">
                <Code2 className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-2xl tracking-tight text-purple-950">
                    DK<span className="text-yellow-500">ODER</span>
                  </span>
                  <span className="bg-yellow-400 text-purple-950 text-[10px] font-bold px-1.5 py-0.5 rounded tracking-wide uppercase">
                    PRO
                  </span>
                </div>
                <span className="text-[11px] font-medium text-purple-700/80 tracking-wider uppercase">
                  Placement LMS
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
              {/* Home */}
              <button
                onClick={() => handleNavClick('/')}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  isActive('/') 
                    ? 'text-purple-950 bg-purple-100/70 border border-purple-200' 
                    : 'text-purple-800 hover:text-purple-950 hover:bg-purple-50'
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
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                    currentPath.includes('bundles') || currentPath.includes('subscription')
                      ? 'text-purple-950 bg-purple-100/70 border border-purple-200'
                      : 'text-purple-800 hover:text-purple-950 hover:bg-purple-50'
                  }`}
                >
                  <span>Learn & Tracks</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isLearnDropdownOpen ? 'rotate-180 text-yellow-600' : 'text-purple-500'}`} />
                </button>

                {/* Dropdown Menu */}
                {isLearnDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-purple-200 p-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="px-3 py-2 text-xs font-bold text-purple-400 uppercase tracking-wider">
                      Preparation Bundles
                    </div>

                    <button
                      onClick={() => handleNavClick('/bundles/infosys')}
                      className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50 text-left transition-colors cursor-pointer group"
                    >
                      <div className="p-2 rounded-lg bg-yellow-100 text-yellow-800 group-hover:bg-yellow-400 group-hover:text-purple-950 transition-colors">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-purple-950">Infosys Master Prep</div>
                        <div className="text-xs text-purple-700/70">InfyTQ & Specialist Programmer (3.6-9.5 LPA)</div>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('/bundles/accenture')}
                      className="w-full flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-50 text-left transition-colors cursor-pointer group"
                    >
                      <div className="p-2 rounded-lg bg-purple-100 text-purple-800 group-hover:bg-purple-800 group-hover:text-yellow-300 transition-colors">
                        <Laptop className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-purple-950">Accenture Fast-Track</div>
                        <div className="text-xs text-purple-700/70">Cognitive & Technical Assessment Modules</div>
                      </div>
                    </button>

                    <div className="h-px bg-purple-100 my-1" />

                    <button
                      onClick={() => handleNavClick('/student/subscription')}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl bg-gradient-to-r from-purple-50 to-yellow-50/50 hover:from-purple-100 hover:to-yellow-100 text-left transition-colors cursor-pointer"
                    >
                      <span className="text-xs font-bold text-purple-950">View All 5 Subscription Tiers</span>
                      <span className="text-[11px] font-semibold text-yellow-800 bg-yellow-300 px-2 py-0.5 rounded-full">From ₹699</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Hackathons Link */}
              <button
                onClick={() => handleNavClick('/hackathons')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  isActive('/hackathons')
                    ? 'text-purple-950 bg-purple-100/70 border border-purple-200'
                    : 'text-purple-800 hover:text-purple-950 hover:bg-purple-50'
                }`}
              >
                <Trophy className="w-4 h-4 text-yellow-600" />
                <span>Hackathons</span>
              </button>

              {/* For Colleges */}
              <button
                onClick={() => handleNavClick('/colleges')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  isActive('/colleges')
                    ? 'text-purple-950 bg-purple-100/70 border border-purple-200'
                    : 'text-purple-800 hover:text-purple-950 hover:bg-purple-50'
                }`}
              >
                <GraduationCap className="w-4 h-4 text-purple-700" />
                <span>For Colleges</span>
              </button>

              {/* Apply for MOU */}
              <button
                onClick={() => handleNavClick('/partner-mou')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
                  isActive('/partner-mou')
                    ? 'text-purple-950 bg-purple-100/70 border border-purple-200'
                    : 'text-purple-800 hover:text-purple-950 hover:bg-purple-50'
                }`}
              >
                <FileCheck2 className="w-4 h-4 text-yellow-600" />
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
                className="flex items-center gap-2 p-1.5 pl-2.5 rounded-xl border border-purple-200 hover:border-purple-300 bg-purple-50/50 hover:bg-purple-100/50 transition-colors cursor-pointer"
                aria-label="User Profile Menu"
              >
                <div className="flex items-center gap-1 text-xs font-bold text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
                  <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>14 Days</span>
                </div>
                <div className="w-7 h-7 rounded-lg bg-purple-900 text-yellow-400 font-bold text-xs flex items-center justify-center">
                  VK
                </div>
              </button>

              {/* Profile Dropdown */}
              {isProfileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-purple-200 p-4 z-50 animate-in fade-in duration-150">
                  <div className="flex items-center gap-3 pb-3 border-b border-purple-100">
                    <div className="w-10 h-10 rounded-xl bg-purple-900 text-yellow-400 font-bold flex items-center justify-center text-sm shadow">
                      VK
                    </div>
                    <div>
                      <div className="font-bold text-sm text-purple-950">Vaanadhi K.</div>
                      <div className="text-xs text-purple-700/70">Anna Univ (CEG) • CSE</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 my-3 text-center">
                    <div className="p-2 rounded-xl bg-purple-50 border border-purple-100">
                      <div className="text-xs text-purple-600">Total XP</div>
                      <div className="text-sm font-extrabold text-purple-950 flex items-center justify-center gap-1 mt-0.5">
                        <Zap className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                        4,280
                      </div>
                    </div>
                    <div className="p-2 rounded-xl bg-yellow-50 border border-yellow-200">
                      <div className="text-xs text-amber-700">Solved</div>
                      <div className="text-sm font-extrabold text-amber-950 mt-0.5">84 Qs</div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <button
                      onClick={() => handleNavClick('/dashboard')}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-purple-900 hover:bg-purple-100/70 text-left transition-colors cursor-pointer"
                    >
                      <LayoutDashboard className="w-4 h-4 text-purple-700" />
                      <span>Full Student Analytics</span>
                    </button>
                    <button
                      onClick={() => handleNavClick('/student/subscription')}
                      className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-purple-900 hover:bg-purple-100/70 text-left transition-colors cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-yellow-600" />
                      <span>Manage Subscription</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Prominent Go to Dashboard CTA */}
            <Button
              variant="primary"
              size="md"
              onClick={() => handleNavClick('/dashboard')}
              leftIcon={<LayoutDashboard className="w-4 h-4" />}
              className="font-bold shadow-md shadow-yellow-400/20"
            >
              Go to Dashboard
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('/dashboard')}
              className="sm:hidden px-3 py-1.5 rounded-lg bg-yellow-400 text-purple-950 text-xs font-bold shadow"
            >
              Dashboard
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-purple-900 hover:bg-purple-100 focus:outline-none"
              aria-label="Toggle navigation drawer"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-purple-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('/')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-left ${
                isActive('/') ? 'bg-purple-100 text-purple-950' : 'text-purple-800 hover:bg-purple-50'
              }`}
            >
              <span>Home</span>
            </button>

            <button
              onClick={() => handleNavClick('/hackathons')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-left ${
                isActive('/hackathons') ? 'bg-purple-100 text-purple-950' : 'text-purple-800 hover:bg-purple-50'
              }`}
            >
              <Trophy className="w-5 h-5 text-yellow-600" />
              <span>Hackathons & Challenges</span>
            </button>

            <button
              onClick={() => handleNavClick('/colleges')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-left ${
                isActive('/colleges') ? 'bg-purple-100 text-purple-950' : 'text-purple-800 hover:bg-purple-50'
              }`}
            >
              <GraduationCap className="w-5 h-5 text-purple-700" />
              <span>For Colleges & TnP Cells</span>
            </button>

            <button
              onClick={() => handleNavClick('/partner-mou')}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold text-left ${
                isActive('/partner-mou') ? 'bg-purple-100 text-purple-950' : 'text-purple-800 hover:bg-purple-50'
              }`}
            >
              <FileCheck2 className="w-5 h-5 text-yellow-600" />
              <span>Apply for College MOU</span>
            </button>

            <div className="h-px bg-purple-100 my-2" />

            <div className="text-xs font-bold text-purple-400 px-4 mb-1">Company Preparation Bundles</div>

            <button
              onClick={() => handleNavClick('/bundles/infosys')}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-purple-50 text-left text-xs font-bold text-purple-950"
            >
              <span>Infosys InfyTQ & Specialist Bundle</span>
              <span className="text-[10px] bg-yellow-400 px-2 py-0.5 rounded text-purple-950">Top Prep</span>
            </button>

            <button
              onClick={() => handleNavClick('/bundles/accenture')}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-purple-50 text-left text-xs font-bold text-purple-950"
            >
              <span>Accenture Cognitive & Coding Prep</span>
              <span className="text-[10px] bg-purple-200 px-2 py-0.5 rounded text-purple-950">New 2026</span>
            </button>

            <button
              onClick={() => handleNavClick('/student/subscription')}
              className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-purple-50 text-left text-xs font-bold text-purple-950"
            >
              <span>Pricing & Subscription (5 Plans)</span>
              <span className="text-[10px] bg-yellow-300 px-2 py-0.5 rounded text-purple-950">₹699/yr</span>
            </button>

            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                fullWidth
                onClick={() => handleNavClick('/dashboard')}
                leftIcon={<LayoutDashboard className="w-5 h-5" />}
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
