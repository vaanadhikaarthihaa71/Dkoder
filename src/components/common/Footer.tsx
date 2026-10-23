import React from 'react';
import { 
  Code2, 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  ExternalLink,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-purple-950 text-white border-t border-purple-800/60 transition-colors">
      
      {/* Verified Credentials Ticker Banner */}
      <div className="border-b border-purple-800/80 bg-purple-900/40 py-3.5 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-purple-200">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-400"></span>
            </span>
            <span className="font-semibold text-yellow-300 uppercase tracking-wider text-[11px]">
              Verified Platform Standards:
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-purple-200 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
              Engineered for Indian Engineering Colleges
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
              Actual Recruitment Patterns (TCS, Infosys, Accenture)
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              Real-time In-Browser Compilers
            </span>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Address Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900 border-2 border-yellow-400 flex items-center justify-center text-yellow-400 shadow-md">
                <Code2 className="w-5 h-5 stroke-[2.5]" />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                DK<span className="text-yellow-400">ODER</span>
              </span>
            </div>

            <p className="text-sm text-purple-200/90 leading-relaxed max-w-sm">
              The placement readiness Learning Management System built specifically for engineering colleges across India. Real company-tagged questions, live coding lab, salary filters, and entrance exam preparation.
            </p>

            {/* Official Registered Address */}
            <div className="pt-2 space-y-2.5 text-xs text-purple-200/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-semibold">Registered Corporate Office:</strong>
                  {COMPANY_INFO.address}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-yellow-300 transition-colors text-white font-medium"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-4 pt-1">
                <a 
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-1.5 text-white font-medium hover:text-yellow-300 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-yellow-400" />
                  {COMPANY_INFO.phone}
                </a>

                <a 
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-600/50 transition-colors font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  WhatsApp Support
                </a>
              </div>
            </div>
          </div>

          {/* Column 1: For Students */}
          <div>
            <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-4">
              For Students
            </h4>
            <ul className="space-y-2.5 text-sm text-purple-200/80">
              <li>
                <button 
                  onClick={() => onNavigate('/')} 
                  className="hover:text-yellow-300 transition-colors text-left"
                >
                  Practice Question Stream
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/dashboard')} 
                  className="hover:text-yellow-300 transition-colors text-left"
                >
                  Student Dashboard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/student/subscription')} 
                  className="hover:text-yellow-300 transition-colors text-left flex items-center gap-1.5"
                >
                  Subscription Plans
                  <span className="text-[10px] bg-yellow-400/20 text-yellow-300 px-1.5 py-0.2 rounded font-bold">5 Tiers</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/hackathons')} 
                  className="hover:text-yellow-300 transition-colors text-left"
                >
                  Campus Hackathons
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/#daily-path')} 
                  className="hover:text-yellow-300 transition-colors text-left"
                >
                  Daily Path Checklist
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: For Institutions */}
          <div>
            <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-4">
              For Institutions
            </h4>
            <ul className="space-y-2.5 text-sm text-purple-200/80">
              <li>
                <button 
                  onClick={() => onNavigate('/colleges')} 
                  className="hover:text-yellow-300 transition-colors text-left"
                >
                  College Placement LMS
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/partner-mou')} 
                  className="hover:text-yellow-300 transition-colors text-left font-semibold text-white"
                >
                  Apply for Campus MOU
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/colleges')} 
                  className="hover:text-yellow-300 transition-colors text-left"
                >
                  Batch Analytics Portal
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/colleges')} 
                  className="hover:text-yellow-300 transition-colors text-left"
                >
                  Custom TnP Assessments
                </button>
              </li>
              <li>
                <a 
                  href={`mailto:${COMPANY_INFO.email}?subject=Institutional%20Partnership%20Enquiry`}
                  className="hover:text-yellow-300 transition-colors flex items-center gap-1"
                >
                  Institutional Enquiries
                  <ExternalLink className="w-3 h-3 text-purple-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Programmes & Bundles */}
          <div>
            <h4 className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-4">
              Programmes
            </h4>
            <ul className="space-y-2.5 text-sm text-purple-200/80">
              <li>
                <button 
                  onClick={() => onNavigate('/bundles/infosys')} 
                  className="hover:text-yellow-300 transition-colors text-left flex items-center gap-1.5"
                >
                  Infosys InfyTQ Bundle
                  <span className="text-[10px] bg-yellow-400 text-purple-950 font-bold px-1.5 py-0.2 rounded">Hot</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/bundles/accenture')} 
                  className="hover:text-yellow-300 transition-colors text-left"
                >
                  Accenture Fast-Track Prep
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/student/subscription')} 
                  className="hover:text-yellow-300 transition-colors text-left"
                >
                  TCS NQT Ninja/Digital
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/student/subscription')} 
                  className="hover:text-yellow-300 transition-colors text-left"
                >
                  Big Tech SDE Sprint
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('/student/subscription')} 
                  className="hover:text-yellow-300 transition-colors text-left text-yellow-300 font-semibold"
                >
                  Super Dream Pack (15+ LPA)
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright, Socials & Legal */}
        <div className="pt-10 mt-10 border-t border-purple-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-purple-300">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn"
              className="w-8 h-8 rounded-lg bg-purple-900 hover:bg-yellow-400 hover:text-purple-950 text-purple-300 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="YouTube"
              className="w-8 h-8 rounded-lg bg-purple-900 hover:bg-yellow-400 hover:text-purple-950 text-purple-300 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/></svg>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Twitter / X"
              className="w-8 h-8 rounded-lg bg-purple-900 hover:bg-yellow-400 hover:text-purple-950 text-purple-300 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="Instagram"
              className="w-8 h-8 rounded-lg bg-purple-900 hover:bg-yellow-400 hover:text-purple-950 text-purple-300 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-4 text-purple-300/80">
            <button 
              onClick={() => alert('DKODER Privacy Policy: User data is processed strictly for placement analytics and exam prep in compliance with applicable Indian digital data privacy regulations.')}
              className="hover:text-yellow-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              onClick={() => alert('DKODER Terms of Service: Platform usage is licensed for active enrolled engineering students and partner institutions.')}
              className="hover:text-yellow-300 transition-colors"
            >
              Terms of Service
            </button>
            <span>•</span>
            <button 
              onClick={() => alert('DKODER Refund Policy: 7-day satisfaction guarantee for all individual student subscription tiers.')}
              className="hover:text-yellow-300 transition-colors"
            >
              Refund Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
