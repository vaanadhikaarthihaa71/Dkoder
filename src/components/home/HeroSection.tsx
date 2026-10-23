import React, { useState } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  Check, 
  Sparkles, 
  FileCheck2,
  Code2
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
    response: "Master Matrix in-place rotation, Two-Pointers, and Greedy Arrays. TCS Digital emphasizes O(N) linear time and edge case accuracy.",
    company: "TCS Prep"
  },
  {
    query: "What is key for Infosys InfyTQ?",
    response: "Focus on OOP abstraction, DBMS relational queries, and 2 medium algorithmic problems in the timed assessment.",
    company: "Infosys Prep"
  },
  {
    query: "Where should I start for Big Tech 20+ LPA?",
    response: "Master Sliding Window, Binary Search on Answer, Graph BFS/DFS, and 0/1 Knapsack memoisation.",
    company: "Super Dream"
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
    <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white border-b border-[#E8E2EF] overflow-hidden">
      
      {/* Subtle background ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F3EDFF]/70 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Headline, Copy & CTAs (Span 7) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Clean Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3EDFF] border border-[#E8E2EF] text-[#5425A8] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#FFD84D]" />
              <span>Campus Placement LMS for Engineering Colleges</span>
            </div>

            {/* One strong, clear headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-[#211B2B] tracking-tight leading-[1.15]">
              Master campus coding rounds with <span className="text-[#5425A8]">real recruiter questions</span>
            </h1>

            {/* Concise, comfortable copy */}
            <p className="text-base sm:text-lg text-[#6F687A] leading-relaxed max-w-xl mx-auto lg:mx-0">
              Practice verified company-tagged questions from TCS NQT, Infosys, and Accenture to 20+ LPA Super Dream roles with in-browser compilation and diagnostic performance reports.
            </p>

            {/* Value checklist */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-[#211B2B] font-medium pt-1">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#5425A8] stroke-[2.5]" />
                <span>Live Browser Coding Lab</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#5425A8] stroke-[2.5]" />
                <span>Salary & Package Filters</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#5425A8] stroke-[2.5]" />
                <span>College TnP Analytics</span>
              </div>
            </div>

            {/* Clear Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={onStartPracticing}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
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
                className="w-full sm:w-auto text-[#6F687A] hover:text-[#5425A8]"
              >
                For Institutions →
              </Button>
            </div>

          </div>

          {/* Right Column: One Cohesive Visual (Span 5) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF8FD] rounded-2xl border border-[#E8E2EF] p-5 shadow-sm space-y-4">
              
              {/* Header of preview card */}
              <div className="flex items-center justify-between pb-3 border-b border-[#E8E2EF]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-[#5425A8] text-[#FFD84D] flex items-center justify-center">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#211B2B]">DKODER Learning Engine</div>
                    <div className="text-[10px] text-[#6F687A]">Placement Diagnostic Sandbox</div>
                  </div>
                </div>
                <span className="text-[10px] font-medium bg-[#F3EDFF] text-[#5425A8] px-2 py-0.5 rounded-full border border-[#E8E2EF]">
                  Interactive Demo
                </span>
              </div>

              {/* Student Query Simulation */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-semibold text-[#6F687A] uppercase tracking-wider">
                  Target Candidate Goal:
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E8E2EF] text-xs font-medium text-[#211B2B]">
                  "{activeItem.query}"
                </div>
              </div>

              {/* Engine Guidance */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#5425A8] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Curated Preparation Strategy:</span>
                </div>
                <div className="p-3 rounded-xl bg-[#F3EDFF] border border-[#E8E2EF] text-xs text-[#211B2B] leading-relaxed">
                  {activeItem.response}
                </div>
              </div>

              {/* Select Query Chips */}
              <div className="pt-2 border-t border-[#E8E2EF]">
                <div className="text-[10px] font-semibold text-[#6F687A] mb-1.5">
                  Select common placement target:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {DEMO_QUERIES.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveQueryIndex(idx)}
                      className={`text-[11px] px-2.5 py-1 rounded-lg font-medium transition-all cursor-pointer ${
                        activeQueryIndex === idx
                          ? 'bg-[#FFD84D] text-[#211B2B] font-semibold shadow-xs'
                          : 'bg-white text-[#6F687A] border border-[#E8E2EF] hover:bg-[#FAF8FD]'
                      }`}
                    >
                      {item.company}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
};
