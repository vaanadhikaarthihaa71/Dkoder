import React from 'react';
import { 
  Code2, 
  MapPin, 
  Mail, 
  Phone, 
  MessageCircle, 
  ShieldCheck
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#211B2B] text-white border-t border-[#371275]">
      
      {/* Platform Standards Strip */}
      <div className="border-b border-white/10 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#E8E2EF]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FFD84D]" />
            <span className="font-semibold text-white">DKODER Placement Standards:</span>
            <span>Verified company placement patterns & in-browser compilation</span>
          </div>
          <span className="text-[11px] text-[#A89FB5]">
            Engineered for Engineering Colleges Across India
          </span>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Brand & Address Column (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#5425A8] text-[#FFD84D] flex items-center justify-center font-bold">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                DK<span className="text-[#FFD84D]">ODER</span>
              </span>
            </div>

            <p className="text-xs text-[#A89FB5] leading-relaxed max-w-sm">
              The placement learning management system built for engineering institutions. Practice verified placement questions with live compilers, salary filters, and batch analytics.
            </p>

            {/* Address & Contacts */}
            <div className="pt-2 space-y-2 text-xs text-[#E8E2EF]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FFD84D] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-4 pt-1">
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="flex items-center gap-1.5 text-white hover:text-[#FFD84D] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FFD84D]" />
                  <span>{COMPANY_INFO.email}</span>
                </a>

                <a 
                  href={`tel:${COMPANY_INFO.phone}`} 
                  className="flex items-center gap-1.5 text-white hover:text-[#FFD84D] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#FFD84D]" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 1: For Students */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD84D] mb-3">
              For Students
            </h4>
            <ul className="space-y-2 text-xs text-[#A89FB5]">
              <li><button onClick={() => onNavigate('/')} className="hover:text-white transition-colors text-left">Practice Question Bank</button></li>
              <li><button onClick={() => onNavigate('/dashboard')} className="hover:text-white transition-colors text-left">Student Dashboard</button></li>
              <li><button onClick={() => onNavigate('/student/subscription')} className="hover:text-white transition-colors text-left">Subscription Plans</button></li>
              <li><button onClick={() => onNavigate('/hackathons')} className="hover:text-white transition-colors text-left">Campus Hackathons</button></li>
              <li><button onClick={() => onNavigate('/#daily-path')} className="hover:text-white transition-colors text-left">Daily Checklist</button></li>
            </ul>
          </div>

          {/* Column 2: For Institutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD84D] mb-3">
              For Institutions
            </h4>
            <ul className="space-y-2 text-xs text-[#A89FB5]">
              <li><button onClick={() => onNavigate('/colleges')} className="hover:text-white transition-colors text-left">College Placement LMS</button></li>
              <li><button onClick={() => onNavigate('/partner-mou')} className="hover:text-white transition-colors text-left text-white font-medium">Apply for Campus MOU</button></li>
              <li><button onClick={() => onNavigate('/colleges')} className="hover:text-white transition-colors text-left">Batch Analytics Suite</button></li>
              <li><button onClick={() => onNavigate('/colleges')} className="hover:text-white transition-colors text-left">Custom Mock Drives</button></li>
              <li><a href={`mailto:${COMPANY_INFO.email}?subject=College%20Partnership`} className="hover:text-white transition-colors">Placement Enquiries</a></li>
            </ul>
          </div>

          {/* Column 3: Programmes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD84D] mb-3">
              Programmes
            </h4>
            <ul className="space-y-2 text-xs text-[#A89FB5]">
              <li><button onClick={() => onNavigate('/bundles/infosys')} className="hover:text-white transition-colors text-left">Infosys InfyTQ Prep</button></li>
              <li><button onClick={() => onNavigate('/bundles/accenture')} className="hover:text-white transition-colors text-left">Accenture Fast-Track</button></li>
              <li><button onClick={() => onNavigate('/student/subscription')} className="hover:text-white transition-colors text-left">TCS NQT Preparation</button></li>
              <li><button onClick={() => onNavigate('/student/subscription')} className="hover:text-white transition-colors text-left">Big Tech SDE Sprint</button></li>
              <li><button onClick={() => onNavigate('/student/subscription')} className="hover:text-white transition-colors text-left text-[#FFD84D] font-medium">Super Dream Pack</button></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A89FB5]">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => alert('DKODER Privacy Policy: Compliance with Indian digital data protection standards.')} className="hover:text-white transition-colors">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => alert('DKODER Terms of Service: Authorized for engineering students and partner institutions.')} className="hover:text-white transition-colors">Terms of Service</button>
            <span>•</span>
            <button onClick={() => alert('DKODER Refund Policy: 7-day money-back guarantee for student plans.')} className="hover:text-white transition-colors">Refund Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
