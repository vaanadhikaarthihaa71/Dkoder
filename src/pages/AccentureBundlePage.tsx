import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Trophy, 
  Layers, 
  Laptop,
  Check
} from 'lucide-react';
import { Button } from '../components/common/Button';

interface AccentureBundlePageProps {
  onNavigate: (path: string) => void;
}

export const AccentureBundlePage: React.FC<AccentureBundlePageProps> = ({ onNavigate }) => {
  const assessmentStages = [
    {
      stage: 'Stage 1: Cognitive Assessment (50 Qs / 50 Mins)',
      topics: ['English Language Ability', 'Critical Thinking & Problem Solving', 'Abstract Reasoning & Patterns'],
      passing: 'Sectional cutoff required to advance'
    },
    {
      stage: 'Stage 2: Technical Assessment (40 Qs / 40 Mins)',
      topics: ['Common Application & MS Office Tech', 'Pseudo-code logic evaluation', 'Cloud, Network Security & Architecture basics'],
      passing: 'Mandatory technical threshold'
    },
    {
      stage: 'Stage 3: Hands-on Coding Assessment (2 Qs / 45 Mins)',
      topics: ['Array manipulation & Two Pointers', 'String anagrams & substring operations', 'Time complexity O(N) constraints'],
      passing: 'Determines ASE vs FSE differential offer'
    }
  ];

  return (
    <div className="py-12 bg-[#FAF8FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <div className="text-xs text-purple-700 font-semibold flex items-center gap-2">
          <button onClick={() => onNavigate('/')} className="hover:text-purple-950">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('/')} className="hover:text-purple-950">Bundles</button>
          <span>/</span>
          <span className="text-purple-950 font-bold">Accenture Fast-Track Bundle</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400 text-purple-950 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 fill-purple-950" />
              <span>Accenture National Drive Preparation</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Accenture Cognitive & Coding <span className="text-yellow-400">Accelerator</span>
            </h1>

            <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed font-normal">
              Structured preparation for Accenture Associate Software Engineer (ASE 4.5 LPA) and Full Stack Engineer (FSE 6.5 LPA) campus recruitment tests.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate('/')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-bold shadow-lg shadow-yellow-400/20"
              >
                Practise Accenture Questions
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate('/student/subscription')}
                className="text-white border-purple-400 hover:bg-purple-800"
              >
                View Subscription Plans
              </Button>
            </div>
          </div>
        </div>

        {/* Roles Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border-2 border-purple-200 p-6 shadow-sm">
            <span className="text-xs font-bold text-yellow-600 uppercase">Core Entry Track</span>
            <h3 className="text-xl font-bold text-purple-950 mt-1">Associate Software Engineer (ASE)</h3>
            <div className="text-3xl font-black text-purple-900 my-2">₹4.5 LPA</div>
            <p className="text-xs text-purple-800/80 leading-relaxed">
              Assigned based on passing Cognitive + Technical assessments and clearing basic test cases in the coding round.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-yellow-400 p-6 shadow-sm bg-gradient-to-b from-yellow-50/40 to-white">
            <span className="text-xs font-bold text-yellow-700 uppercase">Differential Offer Track</span>
            <h3 className="text-xl font-bold text-purple-950 mt-1">Advanced Associate / Full Stack (FSE)</h3>
            <div className="text-3xl font-black text-purple-950 my-2">₹6.5 LPA</div>
            <p className="text-xs text-purple-800/80 leading-relaxed">
              Awarded to high scorers clearing both coding problems with optimal time complexity and high cognitive accuracy.
            </p>
          </div>
        </div>

        {/* 3 Stages */}
        <div className="bg-white rounded-3xl border-2 border-purple-200 p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-purple-950 mb-6 flex items-center gap-2">
            <Laptop className="w-6 h-6 text-yellow-600" />
            <span>Multi-Stage Recruitment Process Breakdown</span>
          </h2>

          <div className="space-y-4">
            {assessmentStages.map((stage, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-purple-50/70 border border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <h4 className="font-bold text-sm text-purple-950">{stage.stage}</h4>
                  <div className="flex flex-wrap gap-2 text-xs text-purple-800">
                    {stage.topics.map((t, tIdx) => (
                      <span key={tIdx} className="px-2 py-0.5 rounded bg-white border border-purple-200 text-[11px] font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-xs font-bold text-purple-900 bg-yellow-300 px-3 py-1.5 rounded-xl shrink-0 self-start sm:self-center">
                  {stage.passing}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
