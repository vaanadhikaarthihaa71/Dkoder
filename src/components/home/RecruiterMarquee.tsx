import React from 'react';
import { RECRUITER_LOGOS } from '../../data/mockData';
import { Building2, Sparkles } from 'lucide-react';

export const RecruiterMarquee: React.FC = () => {
  // Duplicate array for seamless infinite marquee loop
  const doubleLogos = [...RECRUITER_LOGOS, ...RECRUITER_LOGOS];

  return (
    <section className="bg-purple-900/90 text-white py-8 border-y border-purple-800 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Building2 className="w-4 h-4 text-yellow-400" />
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-yellow-400">
              Company-Tagged Placement Question Vault
            </h2>
          </div>
          <p className="text-xs text-purple-200">
            Real questions curated from on-campus and national recruitment drives
          </p>
        </div>
      </div>

      {/* Marquee Wrapper with soft edge fades */}
      <div className="relative w-full overflow-hidden">
        {/* Left and Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-purple-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-purple-900 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div className="animate-marquee flex gap-6 items-center py-2">
          {doubleLogos.map((recruiter, idx) => (
            <div
              key={`${recruiter.name}-${idx}`}
              className="flex items-center gap-3 bg-purple-950/80 hover:bg-purple-950 border border-purple-700/60 hover:border-yellow-400/80 rounded-xl px-5 py-3 transition-all duration-200 shrink-0 shadow-md group cursor-default"
            >
              {/* Monogram Badge */}
              <div 
                className="w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-xs text-purple-950 bg-yellow-400 shadow-sm group-hover:scale-105 transition-transform"
              >
                {recruiter.name.substring(0, 2).toUpperCase()}
              </div>

              <div>
                <div className="font-extrabold text-sm text-white group-hover:text-yellow-300 transition-colors flex items-center gap-1.5">
                  {recruiter.name}
                </div>
                <div className="text-[11px] text-purple-200/80 font-medium">
                  {recruiter.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
