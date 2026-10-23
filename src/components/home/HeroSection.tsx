import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  CheckCircle2, 
  Bot, 
  MessageSquareCode, 
  Play, 
  Flame, 
  ShieldCheck,
  TrendingUp,
  FileCheck2
} from 'lucide-react';
import { Button } from '../common/Button';

interface HeroSectionProps {
  onStartPracticing: () => void;
  onExploreBundles: () => void;
  onApplyMou: () => void;
}

const DEMO_CONVERSATIONS = [
  {
    query: "How do I crack TCS Digital with 7+ LPA?",
    response: "Master Matrix Operations in-place, Two-Pointers, and Greedy Arrays. TCS Digital prioritizes O(N) linear time and edge case accuracy!",
    tag: "TCS Prep"
  },
  {
    query: "What's the best strategy for Infosys InfyTQ?",
    response: "InfyTQ tests Java/Python OOP fundamentals, DBMS SQL normalization, and 2 medium coding problems within 180 minutes.",
    tag: "Infosys Prep"
  },
  {
    query: "Where should I start for Big Tech 20+ LPA?",
    response: "Begin with Sliding Window and Binary Search on Answer, then advance to Graph BFS/DFS and 0/1 Knapsack memoization.",
    tag: "Super Dream"
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartPracticing,
  onExploreBundles,
  onApplyMou
}) => {
  const [activeConvIndex, setActiveConvIndex] = useState(0);

  const activeConv = DEMO_CONVERSATIONS[activeConvIndex];

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:py-20 bg-gradient-to-b from-[#FAF5FF] via-white to-[#F5F0FF] border-b border-purple-100">
      
      {/* Background Decorative Mesh & Radial Lights */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-purple-100/90 border border-purple-300/80 text-purple-950 text-xs sm:text-sm font-semibold shadow-sm hover:border-yellow-400 transition-colors">
            <span className="flex h-2 w-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-purple-800 font-bold uppercase tracking-wider text-[11px]">2026 Campus Placement Hub</span>
            <span className="text-purple-300">|</span>
            <span className="text-purple-900 font-medium">Real Company-Tagged Questions & Coding Lab</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Copy & CTAs (Span 7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-purple-950 tracking-tight leading-[1.12]">
              The Placement LMS Built for{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-purple-900">Engineering Colleges</span>
                <span className="absolute bottom-1.5 left-0 w-full h-3.5 bg-yellow-300/70 -rotate-1 rounded-sm -z-0"></span>
              </span>{' '}
              Across India
            </h1>

            <p className="text-lg sm:text-xl text-purple-900/80 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Practice real, verified placement coding questions tagged by recruiter and frequency. From <strong className="text-purple-950 font-semibold">TCS NQT</strong> and <strong className="text-purple-950 font-semibold">Infosys InfyTQ</strong> to 20+ LPA Super Dream product roles.
            </p>

            {/* Value Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-purple-900 font-medium pt-1">
              <div className="flex items-center gap-1.5 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-200">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0" />
                <span>Live Browser Coding Lab</span>
              </div>
              <div className="flex items-center gap-1.5 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-200">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0" />
                <span>Salary & Package Filters</span>
              </div>
              <div className="flex items-center gap-1.5 bg-purple-50 px-3 py-1.5 rounded-lg border border-purple-200">
                <CheckCircle2 className="w-4 h-4 text-yellow-500 shrink-0" />
                <span>College TnP Batch Analytics</span>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <Button
                variant="primary"
                size="lg"
                onClick={onStartPracticing}
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto font-bold text-base shadow-xl shadow-yellow-400/25"
              >
                Start Practising Now
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onExploreBundles}
                leftIcon={<Terminal className="w-5 h-5 text-yellow-400" />}
                className="w-full sm:w-auto font-semibold"
              >
                Explore Prep Bundles
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onApplyMou}
                leftIcon={<FileCheck2 className="w-5 h-5 text-purple-700" />}
                className="w-full sm:w-auto text-purple-950 font-semibold border-purple-300 hover:bg-purple-50"
              >
                Apply for MOU
              </Button>
            </div>

            {/* Social Proof / Student Avatars */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 border-t border-purple-100">
              <div className="flex -space-x-2.5 overflow-hidden">
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Student Karthik"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80"
                  alt="Student Ananya"
                />
                <img
                  className="inline-block h-9 w-9 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Student Rohan"
                />
                <div className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-2 ring-white bg-purple-900 text-yellow-300 text-xs font-bold">
                  +15k
                </div>
              </div>
              <div className="text-xs text-purple-800 text-center sm:text-left">
                <span className="font-bold text-purple-950">Active Students</span> practicing across Anna Univ, VIT, SRM, PSG & BITS
              </div>
            </div>
          </div>

          {/* Right Column: Yellow Mascot & Conversational Speech Bubbles Demo (Span 5) */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            
            {/* Conversational Speech Bubble Demo Card */}
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border-2 border-purple-200/80 p-5 relative mb-4 z-20">
              
              <div className="flex items-center justify-between pb-3 border-b border-purple-100">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-950">
                    DKODER Assistant Demo
                  </span>
                </div>
                <span className="text-[10px] font-semibold bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full">
                  Illustrative Guidance
                </span>
              </div>

              {/* Student Question Bubble */}
              <div className="my-3 flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-900 font-bold text-xs flex items-center justify-center shrink-0">
                  You
                </div>
                <div className="bg-purple-50 rounded-2xl rounded-tl-none p-3 text-xs sm:text-sm font-semibold text-purple-950 border border-purple-200 shadow-sm">
                  "{activeConv.query}"
                </div>
              </div>

              {/* Assistant Mascot Response Bubble */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-yellow-400 text-purple-950 font-bold text-xs flex items-center justify-center shrink-0 shadow">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-purple-900 text-white rounded-2xl rounded-tl-none p-3.5 text-xs sm:text-sm leading-relaxed border border-purple-800 shadow-md">
                  <div className="text-yellow-300 font-bold text-xs mb-1 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Curated Placement Insight</span>
                  </div>
                  {activeConv.response}
                </div>
              </div>

              {/* Interactive Prompt Selector Chips */}
              <div className="mt-4 pt-3 border-t border-purple-100">
                <div className="text-[11px] font-bold text-purple-500 mb-2">Try another student query:</div>
                <div className="flex flex-wrap gap-1.5">
                  {DEMO_CONVERSATIONS.map((c, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveConvIndex(idx)}
                      className={`text-[11px] px-2.5 py-1 rounded-lg font-semibold transition-all cursor-pointer ${
                        activeConvIndex === idx
                          ? 'bg-yellow-400 text-purple-950 border border-yellow-500 shadow-sm'
                          : 'bg-purple-50 text-purple-800 hover:bg-purple-100 border border-purple-200'
                      }`}
                    >
                      {c.tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Friendly Yellow Robot Mascot Illustration (SVG) */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 animate-float">
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
                {/* Robot Antenna */}
                <circle cx="100" cy="22" r="10" fill="#FACC15" stroke="#581C87" strokeWidth="4" />
                <line x1="100" y1="32" x2="100" y2="50" stroke="#581C87" strokeWidth="5" strokeLinecap="round" />
                <circle cx="100" cy="22" r="4" fill="#3B0764" />

                {/* Robot Head Body */}
                <rect x="45" y="48" width="110" height="85" rx="28" fill="#FACC15" stroke="#581C87" strokeWidth="6" />
                
                {/* Head Highlights */}
                <rect x="58" y="58" width="20" height="8" rx="4" fill="#FEF08A" opacity="0.9" />

                {/* Robot Screen Visor (Royal Purple) */}
                <rect x="58" y="66" width="84" height="48" rx="16" fill="#3B0764" stroke="#581C87" strokeWidth="3" />

                {/* Robot Friendly Eyes (Glowing Yellow) */}
                <ellipse cx="80" cy="88" rx="8" ry="11" fill="#FACC15" />
                <circle cx="82" cy="85" r="3" fill="#FFFFFF" />

                <ellipse cx="120" cy="88" rx="8" ry="11" fill="#FACC15" />
                <circle cx="122" cy="85" r="3" fill="#FFFFFF" />

                {/* Robot Cheeks */}
                <circle cx="68" cy="98" r="4" fill="#EAB308" opacity="0.8" />
                <circle cx="132" cy="98" r="4" fill="#EAB308" opacity="0.8" />

                {/* Robot Neck */}
                <rect x="85" y="133" width="30" height="12" rx="4" fill="#581C87" />

                {/* Robot Torso / Shoulders */}
                <path d="M 40 175 Q 40 145 75 145 L 125 145 Q 160 145 160 175 Z" fill="#FACC15" stroke="#581C87" strokeWidth="5" />
                
                {/* Chest Code Icon Emblem */}
                <rect x="82" y="152" width="36" height="24" rx="8" fill="#581C87" />
                <path d="M 92 164 L 88 160 L 92 156" stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M 108 164 L 112 160 L 108 156" stroke="#FACC15" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                <path d="M 98 167 L 102 153" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />

                {/* Robot Ears / Headphone nodes */}
                <rect x="36" y="74" width="10" height="32" rx="5" fill="#581C87" />
                <rect x="154" y="74" width="10" height="32" rx="5" fill="#581C87" />
              </svg>

              {/* Decorative Floating Code Chips around Mascot */}
              <div className="absolute -top-2 -left-4 bg-white/95 px-2.5 py-1 rounded-lg border border-purple-200 shadow-md text-[10px] font-mono font-bold text-purple-900 animate-pulse-subtle">
                O(1) Space
              </div>
              <div className="absolute -bottom-2 -right-2 bg-yellow-400 px-3 py-1 rounded-lg shadow-md text-[10px] font-bold text-purple-950 flex items-center gap-1">
                <Flame className="w-3 h-3 fill-purple-950" />
                Daily Streak
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
