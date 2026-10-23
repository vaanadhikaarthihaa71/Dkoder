import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Check, 
  Sparkles, 
  Trophy,
  Cpu
} from 'lucide-react';
import { Button } from '../common/Button';

interface HeroSectionProps {
  onStartPracticing: () => void;
  onExploreBundles: () => void;
  onApplyMou: () => void;
}

const DEMO_QUERIES = [
  {
    query: "How do I clear TCS Digital with 7+ LPA?",
    response: "Master Matrix in-place rotation, Two-Pointers, and Greedy Arrays with O(N) linear accuracy.",
    company: "TCS Prep",
    badge: "7.0+ LPA"
  },
  {
    query: "What is key for Infosys InfyTQ & SP?",
    response: "Focus on OOP abstraction, DBMS relational queries, and 2 medium algorithmic problems in the timed test.",
    company: "Infosys Prep",
    badge: "9.5 LPA"
  },
  {
    query: "Where should I start for Big Tech 20+ LPA?",
    response: "Master Sliding Window, Binary Search on Answer, Graph BFS/DFS, and 0/1 Knapsack memoisation.",
    company: "Super Dream",
    badge: "20+ LPA"
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartPracticing,
  onExploreBundles,
  onApplyMou
}) => {
  const [activeQueryIndex, setActiveQueryIndex] = useState(0);
  const activeItem = DEMO_QUERIES[activeQueryIndex];

  return (
    <section className="relative pt-10 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-white via-[#FAF8FD] to-white border-b border-[#E8E2EF] overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#F1E9FF]/80 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#FFF8D6]/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Copy & CTAs (Span 6) */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            
            {/* Pill with Robot Mascot Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1E9FF] border border-[#E8E2EF] text-[#5425A8] text-xs font-semibold shadow-xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD84D] animate-pulse" />
              <span>Campus Placement LMS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#211B2B] tracking-tight leading-[1.12]">
              Master campus coding rounds with <span className="text-[#5425A8] underline decoration-[#FFD84D] decoration-4 underline-offset-4">real recruiter questions</span>
            </h1>

            {/* Concise One-Sentence Subtitle */}
            <p className="text-base sm:text-lg text-[#706879] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Practice company-pattern questions from TCS and Infosys to 20+ LPA Super Dream roles with in-browser compilation.
            </p>

            {/* Value checklist */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs sm:text-sm text-[#211B2B] font-medium pt-1">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#5425A8] stroke-[2.5]" />
                <span>Live Code Lab</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#5425A8] stroke-[2.5]" />
                <span>Salary Filters</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#5425A8] stroke-[2.5]" />
                <span>Verified Syllabi</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onStartPracticing}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-md hover:shadow-lg"
              >
                Start Practising Now
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onExploreBundles}
                leftIcon={<Terminal className="w-4 h-4 text-[#5425A8]" />}
                className="w-full sm:w-auto"
              >
                Explore Prep Bundles
              </Button>

              <Button
                variant="ghost"
                size="lg"
                onClick={onApplyMou}
                className="w-full sm:w-auto text-[#706879] hover:text-[#5425A8]"
              >
                Campus MOU →
              </Button>
            </div>

            {/* Quick interactive placement goal selector */}
            <div className="pt-3 border-t border-[#E8E2EF]/80">
              <div className="flex items-center justify-center lg:justify-between text-[11px] font-semibold text-[#706879] mb-2">
                <span>Select placement target:</span>
              </div>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                {DEMO_QUERIES.map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveQueryIndex(idx)}
                    className={`text-xs px-3 py-1.5 rounded-xl font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeQueryIndex === idx
                        ? 'bg-[#FFD84D] text-[#211B2B] font-bold shadow-xs scale-102 border border-[#FFD84D]'
                        : 'bg-white text-[#706879] border border-[#E8E2EF] hover:bg-[#FAF8FD]'
                    }`}
                  >
                    <span>{item.company}</span>
                    <span className="text-[10px] px-1.5 py-0.2 rounded-md bg-white/70 text-[#211B2B]">
                      {item.badge}
                    </span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Layered 3D Mascot & Student Illustration (Span 6) */}
          <div className="lg:col-span-6 relative">
            
            {/* Visual Container */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-[#FAF8FD] to-[#F1E9FF] border border-[#E8E2EF] shadow-xl p-2 sm:p-3 group">
              
              {/* Primary 3D Illustration */}
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xs">
                <img
                  src="/images/hero-mascot.jpg"
                  alt="DKODER 3D Yellow Robot Mascot with Indian College Students Learning Coding"
                  className="w-full h-auto object-cover transform group-hover:scale-101 transition-transform duration-500"
                  loading="eager"
                />

                {/* Subtle gradient overlay at bottom for speech bubble readability */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#211B2B]/75 via-[#211B2B]/30 to-transparent pointer-events-none" />

                {/* Floating Badge Top-Left: Live Pass Rate */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-[#E8E2EF] shadow-md flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-[#FFD84D] text-[#211B2B] flex items-center justify-center font-bold text-xs shadow-xs">
                    <Trophy className="w-3.5 h-3.5 text-[#211B2B]" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-[#211B2B]">98.4% Pass Rate</div>
                    <div className="text-[9px] text-[#706879]">In TCS, Infosys & Product rounds</div>
                  </div>
                </div>

                {/* Floating Badge Top-Right: Active Compiler */}
                <div className="absolute top-3 right-3 bg-[#5425A8]/90 text-white backdrop-blur-md px-2.5 py-1 rounded-xl shadow-md flex items-center gap-1.5 text-[11px] font-semibold border border-purple-400/30">
                  <Cpu className="w-3.5 h-3.5 text-[#FFD84D]" />
                  <span>Browser Lab Active</span>
                </div>

                {/* Dynamic Layered Speech Bubble Overlay over bottom of illustration */}
                <div className="absolute inset-x-3 bottom-3 bg-white/95 backdrop-blur-md rounded-xl p-3 border border-white/80 shadow-lg space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#5425A8] flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#FFD84D] fill-[#FFD84D]" />
                      Candidate Goal • {activeItem.company}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFF8D6] text-[#211B2B] border border-[#FFD84D]/40">
                      {activeItem.badge}
                    </span>
                  </div>

                  <p className="text-xs font-semibold text-[#211B2B] leading-tight">
                    "{activeItem.query}"
                  </p>

                  <div className="pt-1 border-t border-[#E8E2EF] text-[11px] text-[#5425A8] font-medium leading-relaxed flex items-start gap-1.5">
                    <span className="font-bold shrink-0 text-[#211B2B]">DKODER Mascot:</span>
                    <span>{activeItem.response}</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};
