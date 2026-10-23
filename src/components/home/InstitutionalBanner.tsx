import React, { useState } from 'react';
import { 
  GraduationCap, 
  BarChart3, 
  Users2, 
  CheckCircle2, 
  Target, 
  Layers, 
  ArrowRight
} from 'lucide-react';
import { Button } from '../common/Button';

interface InstitutionalBannerProps {
  onNavigate: (path: string) => void;
}

export const InstitutionalBanner: React.FC<InstitutionalBannerProps> = ({ onNavigate }) => {
  const [activeCohort, setActiveCohort] = useState<'all' | 'cse' | 'ece'>('all');

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8FD] border-b border-[#E8E2EF]" id="institutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDFF] text-[#5425A8] text-xs font-semibold uppercase tracking-wider mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Institutional TnP Suite</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#211B2B] tracking-tight">
            Batch-level visibility for <span className="text-[#5425A8]">Placement Cells</span>
          </h2>
          <p className="mt-2 text-sm text-[#6F687A]">
            Monitor student readiness, track practice metrics, and run company diagnostic tests across departments.
          </p>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          <div className="bg-white border border-[#E8E2EF] rounded-xl p-4">
            <div className="flex items-center justify-between text-[#6F687A] text-xs mb-1">
              <span>Batch Activity</span>
              <Users2 className="w-4 h-4 text-[#5425A8]" />
            </div>
            <div className="text-2xl font-bold text-[#211B2B]">94.2%</div>
            <div className="text-[11px] text-[#6F687A] mt-0.5">Weekly Active Solvers</div>
          </div>

          <div className="bg-white border border-[#E8E2EF] rounded-xl p-4">
            <div className="flex items-center justify-between text-[#6F687A] text-xs mb-1">
              <span>Test Completion</span>
              <CheckCircle2 className="w-4 h-4 text-[#5425A8]" />
            </div>
            <div className="text-2xl font-bold text-[#211B2B]">88.5%</div>
            <div className="text-[11px] text-[#6F687A] mt-0.5">Mock Drive Cutoffs Met</div>
          </div>

          <div className="bg-white border border-[#E8E2EF] rounded-xl p-4">
            <div className="flex items-center justify-between text-[#6F687A] text-xs mb-1">
              <span>Topic Coverage</span>
              <Layers className="w-4 h-4 text-[#5425A8]" />
            </div>
            <div className="text-2xl font-bold text-[#211B2B]">96.0%</div>
            <div className="text-[11px] text-[#6F687A] mt-0.5">Core DSA & Aptitude</div>
          </div>

          <div className="bg-white border border-[#E8E2EF] rounded-xl p-4">
            <div className="flex items-center justify-between text-[#6F687A] text-xs mb-1">
              <span>Readiness Index</span>
              <Target className="w-4 h-4 text-[#5425A8]" />
            </div>
            <div className="text-2xl font-bold text-[#211B2B]">81.4%</div>
            <div className="text-[11px] text-[#6F687A] mt-0.5">Company Drive Qualified</div>
          </div>

        </div>

        {/* Dashboard Preview Box */}
        <div className="bg-white rounded-2xl border border-[#E8E2EF] p-5 sm:p-6 shadow-xs">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-[#E8E2EF]">
            <div>
              <div className="text-xs font-semibold text-[#5425A8] uppercase tracking-wider">
                Cohort Readiness Distribution (Sample Data)
              </div>
              <h3 className="text-sm font-bold text-[#211B2B] mt-0.5">
                Departmental Qualification by Package Tier
              </h3>
            </div>

            {/* Switcher */}
            <div className="flex items-center gap-1 bg-[#FAF8FD] p-1 rounded-lg border border-[#E8E2EF] text-xs">
              <button
                onClick={() => setActiveCohort('all')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  activeCohort === 'all' ? 'bg-[#5425A8] text-white font-semibold' : 'text-[#6F687A] hover:text-[#211B2B]'
                }`}
              >
                All Departments
              </button>
              <button
                onClick={() => setActiveCohort('cse')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  activeCohort === 'cse' ? 'bg-[#5425A8] text-white font-semibold' : 'text-[#6F687A] hover:text-[#211B2B]'
                }`}
              >
                CSE & IT
              </button>
              <button
                onClick={() => setActiveCohort('ece')}
                className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                  activeCohort === 'ece' ? 'bg-[#5425A8] text-white font-semibold' : 'text-[#6F687A] hover:text-[#211B2B]'
                }`}
              >
                Circuit Branches
              </button>
            </div>
          </div>

          {/* Clean Progress Bars */}
          <div className="py-5 space-y-3.5">
            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="text-[#211B2B]">Service Track Qualified (TCS Ninja, Infosys SE, Accenture ASE)</span>
                <span className="font-semibold text-[#5425A8]">92%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#E8E2EF] overflow-hidden">
                <div className="h-full bg-[#5425A8] rounded-full transition-all duration-300" style={{ width: '92%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="text-[#211B2B]">Differential Tier (TCS Digital, Infy SP, 7-12 LPA)</span>
                <span className="font-semibold text-[#5425A8]">68%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#E8E2EF] overflow-hidden">
                <div className="h-full bg-[#5425A8] rounded-full transition-all duration-300" style={{ width: '68%' }} />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-medium mb-1">
                <span className="text-[#211B2B]">Super Dream Qualified (Big Tech & Product SDE 18+ LPA)</span>
                <span className="font-semibold text-[#5425A8]">34%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#E8E2EF] overflow-hidden">
                <div className="h-full bg-[#FFD84D] rounded-full transition-all duration-300" style={{ width: '34%' }} />
              </div>
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="pt-4 border-t border-[#E8E2EF] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <span className="text-[#6F687A]">
              Interested in LMS deployment for your campus placement drive?
            </span>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onNavigate('/colleges')}
              >
                For Colleges
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => onNavigate('/partner-mou')}
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
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
