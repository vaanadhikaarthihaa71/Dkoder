import React, { useState } from 'react';
import { 
  GraduationCap, 
  BarChart3, 
  Users2, 
  CheckCircle2, 
  ArrowRight, 
  TrendingUp, 
  FileCheck2, 
  Layers, 
  Target,
  Sparkles,
  Download
} from 'lucide-react';
import { Button } from '../common/Button';

interface InstitutionalBannerProps {
  onNavigate: (path: string) => void;
}

export const InstitutionalBanner: React.FC<InstitutionalBannerProps> = ({ onNavigate }) => {
  const [activeCohort, setActiveCohort] = useState<'all' | 'cse' | 'ece'>('all');

  return (
    <section className="py-16 bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950 text-white relative overflow-hidden" id="institutions">
      
      {/* Decorative Glow Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-800/80 text-yellow-300 text-xs font-bold uppercase tracking-wider mb-3 border border-purple-700">
            <GraduationCap className="w-3.5 h-3.5 text-yellow-400" />
            <span>Campus Training & Placement (TnP) Suite</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Complete Batch-Level Visibility for <span className="text-yellow-400">Placement Officers</span>
          </h2>
          <p className="mt-3 text-base text-purple-200/90 leading-relaxed">
            Eliminate placement guesswork. Track real-time student practice volume, identify company-specific syllabus gaps, and administer institutional diagnostic tests before drive season begins.
          </p>
        </div>

        {/* 4 Core Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          
          <div className="bg-purple-900/60 border border-purple-700/80 rounded-2xl p-5 hover:border-yellow-400/80 transition-all">
            <div className="flex items-center justify-between text-yellow-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Batch Participation</span>
              <Users2 className="w-4 h-4" />
            </div>
            <div className="text-3xl font-black text-white">94.2%</div>
            <div className="text-xs text-purple-200 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Active Weekly Solvers</span>
            </div>
          </div>

          <div className="bg-purple-900/60 border border-purple-700/80 rounded-2xl p-5 hover:border-yellow-400/80 transition-all">
            <div className="flex items-center justify-between text-yellow-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Test Completion Rate</span>
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="text-3xl font-black text-white">88.5%</div>
            <div className="text-xs text-purple-200 mt-1 flex items-center gap-1">
              <span className="text-yellow-300 font-semibold">TCS & Infy Mock Sets</span>
            </div>
          </div>

          <div className="bg-purple-900/60 border border-purple-700/80 rounded-2xl p-5 hover:border-yellow-400/80 transition-all">
            <div className="flex items-center justify-between text-yellow-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Topic Coverage Index</span>
              <Layers className="w-4 h-4" />
            </div>
            <div className="text-3xl font-black text-white">96.0%</div>
            <div className="text-xs text-purple-200 mt-1 flex items-center gap-1">
              <span>DSA + SQL + Core CS</span>
            </div>
          </div>

          <div className="bg-purple-900/60 border border-purple-700/80 rounded-2xl p-5 hover:border-yellow-400/80 transition-all">
            <div className="flex items-center justify-between text-yellow-400 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Placement Readiness</span>
              <Target className="w-4 h-4" />
            </div>
            <div className="text-3xl font-black text-white">81.4%</div>
            <div className="text-xs text-purple-200 mt-1 flex items-center gap-1">
              <span className="text-emerald-400 font-semibold">Drive-Ready Standard</span>
            </div>
          </div>

        </div>

        {/* Dashboard Preview / Visualization Card */}
        <div className="bg-purple-950/90 rounded-3xl border-2 border-purple-700/80 p-6 sm:p-8 shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-purple-800">
            <div>
              <div className="text-xs font-bold text-yellow-400 uppercase tracking-wider">
                Interactive TnP Cohort Analytics (Sample Demo View)
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                Batch Diagnostic & Readiness Distribution
              </h3>
            </div>

            {/* Cohort Switcher */}
            <div className="flex items-center gap-1 bg-purple-900 p-1 rounded-xl border border-purple-700">
              <button
                onClick={() => setActiveCohort('all')}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeCohort === 'all' ? 'bg-yellow-400 text-purple-950' : 'text-purple-200 hover:text-white'
                }`}
              >
                All Engineering
              </button>
              <button
                onClick={() => setActiveCohort('cse')}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeCohort === 'cse' ? 'bg-yellow-400 text-purple-950' : 'text-purple-200 hover:text-white'
                }`}
              >
                CSE & IT
              </button>
              <button
                onClick={() => setActiveCohort('ece')}
                className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  activeCohort === 'ece' ? 'bg-yellow-400 text-purple-950' : 'text-purple-200 hover:text-white'
                }`}
              >
                ECE & Circuit
              </button>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="py-6 space-y-4">
            
            {/* Metric 1 */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-purple-200">Service Track Readiness (TCS Ninja, Infosys SE, Accenture ASE)</span>
                <span className="text-yellow-400">92% of Batch Qualified</span>
              </div>
              <div className="w-full h-3 rounded-full bg-purple-900 overflow-hidden">
                <div className="h-full bg-yellow-400 rounded-full transition-all duration-700" style={{ width: '92%' }} />
              </div>
            </div>

            {/* Metric 2 */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-purple-200">High-Package Differential (TCS Digital, Infy SP, 7-12 LPA)</span>
                <span className="text-yellow-300">68% of Batch Qualified</span>
              </div>
              <div className="w-full h-3 rounded-full bg-purple-900 overflow-hidden">
                <div className="h-full bg-yellow-300 rounded-full transition-all duration-700" style={{ width: '68%' }} />
              </div>
            </div>

            {/* Metric 3 */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1.5">
                <span className="text-purple-200">Super Dream Tier (Big Tech & Product SDE 18+ LPA)</span>
                <span className="text-yellow-200">34% of Batch Qualified</span>
              </div>
              <div className="w-full h-3 rounded-full bg-purple-900 overflow-hidden">
                <div className="h-full bg-purple-400 rounded-full transition-all duration-700" style={{ width: '34%' }} />
              </div>
            </div>

          </div>

          {/* Footer CTAs */}
          <div className="pt-6 border-t border-purple-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-purple-300">
              Want institutional LMS deployment on your campus? Contact our institutional partnership cell.
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onNavigate('/colleges')}
                className="text-white border-purple-500 hover:bg-purple-800"
              >
                Explore For Colleges
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => onNavigate('/partner-mou')}
                leftIcon={<FileCheck2 className="w-4 h-4" />}
                className="font-bold"
              >
                Apply for Campus MOU
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
