import React from 'react';
import { CAREER_TRACKS } from '../../data/mockData';
import { 
  Check, 
  ArrowRight, 
  Code2, 
  PieChart 
} from 'lucide-react';
import { Button } from '../common/Button';

interface CareerTracksProps {
  solvedCount: number;
  onNavigate: (path: string) => void;
}

export const CareerTracks: React.FC<CareerTracksProps> = ({ solvedCount, onNavigate }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF8FD] border-b border-[#E8E2EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDFF] text-[#5425A8] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Career Pathways</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#211B2B] tracking-tight">
            Targeted preparation for <span className="text-[#5425A8]">every recruitment tier</span>
          </h2>
          <p className="mt-2 text-sm text-[#6F687A]">
            Structured syllabus balancing aptitude MCQs, core CS fundamentals, and timed coding problems.
          </p>
        </div>

        {/* 3 Visually Consistent Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {CAREER_TRACKS.map((track, idx) => {
            const simulatedTotal = track.totalQuestions;
            const trackSolved = Math.min(simulatedTotal, Math.max(1, solvedCount * (idx === 0 ? 3 : idx === 1 ? 1 : 2)));
            const progressPercent = Math.min(100, Math.round((trackSolved / simulatedTotal) * 100));

            return (
              <div
                key={track.id}
                className="bg-white rounded-3xl border border-[#E8E2EF] overflow-hidden flex flex-col justify-between hover:border-[#5425A8] hover:shadow-lg transition-all duration-200 group"
              >
                <div>
                  {/* Track 3D Illustration Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#FAF8FD] border-b border-[#E8E2EF]">
                    <img
                      src={
                        idx === 0 
                          ? '/images/track-service.jpg' 
                          : idx === 1 
                            ? '/images/track-super-dream.jpg' 
                            : '/images/track-fullstack.jpg'
                      }
                      alt={track.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg text-xs font-bold text-[#211B2B] border border-[#E8E2EF] shadow-xs">
                      {track.packageRange}
                    </div>
                    <div className="absolute top-3 right-3 bg-[#5425A8]/90 text-white backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-semibold">
                      {track.totalQuestions} Questions
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Title & Subtitle */}
                    <h3 className="text-lg font-bold text-[#211B2B] mb-0.5 group-hover:text-[#5425A8] transition-colors">
                      {track.title}
                    </h3>
                    <p className="text-xs text-[#5425A8] font-semibold mb-3">
                      {track.subtitle}
                    </p>

                  {/* Overview */}
                  <p className="text-xs text-[#6F687A] leading-relaxed mb-4">
                    {track.overview}
                  </p>

                  {/* MCQ vs Coding Ratio */}
                  <div className="p-3 rounded-xl bg-[#FAF8FD] border border-[#E8E2EF] mb-4">
                    <div className="flex items-center justify-between text-xs text-[#6F687A] mb-1.5 font-medium">
                      <span className="flex items-center gap-1 text-[#211B2B]">
                        <Code2 className="w-3.5 h-3.5 text-[#5425A8]" />
                        Coding: {track.codingRatio}%
                      </span>
                      <span className="flex items-center gap-1">
                        <PieChart className="w-3.5 h-3.5 text-[#6F687A]" />
                        MCQ: {track.mcqRatio}%
                      </span>
                    </div>

                    <div className="w-full h-1.5 rounded-full bg-[#E8E2EF] overflow-hidden flex">
                      <div 
                        className="bg-[#5425A8] h-full" 
                        style={{ width: `${track.codingRatio}%` }}
                      />
                      <div 
                        className="bg-[#FFD84D] h-full" 
                        style={{ width: `${track.mcqRatio}%` }}
                      />
                    </div>
                  </div>

                  {/* Target Recruiters */}
                  <div className="mb-4">
                    <div className="text-[11px] font-semibold text-[#6F687A] uppercase mb-1.5">
                      Target Recruiters:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {track.targetCompanies.map((c) => (
                        <span
                          key={c}
                          className="text-[11px] font-medium px-2 py-0.5 rounded bg-white text-[#211B2B] border border-[#E8E2EF]"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Core Skills Checklist */}
                  <div className="space-y-1.5 mb-5">
                    {track.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-[#211B2B]">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>

                  {/* Local Session Progress */}
                  <div className="pt-3 border-t border-[#E8E2EF] mb-5">
                    <div className="flex items-center justify-between text-xs text-[#6F687A] mb-1">
                      <span>Local Progress</span>
                      <span className="font-semibold text-[#211B2B]">{progressPercent}%</span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-[#E8E2EF] overflow-hidden">
                      <div
                        className="h-full bg-[#5425A8] rounded-full transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>
                  </div>
                  {/* Card CTA */}
                  <div className="pt-2">
                    <Button
                      variant={idx === 0 ? 'primary' : 'outline'}
                      size="sm"
                      fullWidth
                      onClick={() => track.bundleUrl && onNavigate(track.bundleUrl)}
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      {track.bundleName || 'Start Track'}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        </div>

      </div>
    </section>
  );
};
