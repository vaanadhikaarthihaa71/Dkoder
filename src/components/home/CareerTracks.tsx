import React, { useState } from 'react';
import { CAREER_TRACKS } from '../../data/mockData';
import { CareerTrack } from '../../types';
import { 
  Check, 
  ArrowRight, 
  Code2, 
  PieChart,
  BookOpen
} from 'lucide-react';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';

interface CareerTracksProps {
  solvedCount: number;
  onNavigate: (path: string) => void;
}

export const CareerTracks: React.FC<CareerTracksProps> = ({ solvedCount, onNavigate }) => {
  const [selectedTrack, setSelectedTrack] = useState<CareerTrack | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8FD] border-b border-[#E8E2EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1E9FF] text-[#5425A8] text-xs font-semibold uppercase tracking-wider mb-2">
            <span>Career Pathways</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#211B2B] tracking-tight">
            Targeted preparation for <span className="text-[#5425A8]">every recruitment tier</span>
          </h2>
          <p className="mt-1 text-sm text-[#706879]">
            Structured pathways balancing aptitude, CS fundamentals, and timed coding rounds.
          </p>
        </div>

        {/* 3 Clean, Scannable Cards */}
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
                  <div 
                    onClick={() => setSelectedTrack(track)}
                    className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#FAF8FD] border-b border-[#E8E2EF] cursor-pointer"
                  >
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

                  <div className="p-5 sm:p-6 space-y-3">
                    {/* Title & Subtitle */}
                    <div>
                      <h3 
                        onClick={() => setSelectedTrack(track)}
                        className="text-base sm:text-lg font-bold text-[#211B2B] group-hover:text-[#5425A8] transition-colors cursor-pointer"
                      >
                        {track.title}
                      </h3>
                      <p className="text-xs text-[#5425A8] font-semibold">
                        {track.subtitle}
                      </p>
                    </div>

                    {/* Concise 1-sentence overview */}
                    <p className="text-xs text-[#706879] line-clamp-2 leading-relaxed">
                      {track.overview}
                    </p>

                    {/* Local Session Progress */}
                    <div className="pt-2">
                      <div className="flex items-center justify-between text-xs text-[#706879] mb-1">
                        <span>Preparation Progress</span>
                        <span className="font-semibold text-[#211B2B]">{progressPercent}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-[#E8E2EF] overflow-hidden">
                        <div
                          className="h-full bg-[#5425A8] rounded-full transition-all duration-300"
                          style={{ width: `${progressPercent}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card CTA: Explore Track Details */}
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 flex items-center gap-2">
                  <Button
                    variant={idx === 0 ? 'primary' : 'outline'}
                    size="sm"
                    fullWidth
                    onClick={() => setSelectedTrack(track)}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Explore Track
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Deep Syllabus Detail Modal */}
        {selectedTrack && (
          <Modal
            isOpen={!!selectedTrack}
            onClose={() => setSelectedTrack(null)}
            title={selectedTrack.title}
            subtitle={`${selectedTrack.subtitle} • ${selectedTrack.packageRange}`}
            maxWidth="xl"
          >
            <div className="space-y-5">
              
              {/* Full Overview */}
              <div className="p-4 rounded-xl bg-[#FAF8FD] border border-[#E8E2EF]">
                <p className="text-xs sm:text-sm text-[#211B2B] leading-relaxed">
                  {selectedTrack.overview}
                </p>
              </div>

              {/* MCQ vs Coding Ratio */}
              <div>
                <div className="flex items-center justify-between text-xs text-[#706879] mb-1.5 font-medium">
                  <span className="flex items-center gap-1.5 text-[#211B2B] font-bold">
                    <Code2 className="w-4 h-4 text-[#5425A8]" />
                    Coding Rounds: {selectedTrack.codingRatio}%
                  </span>
                  <span className="flex items-center gap-1.5 font-bold">
                    <PieChart className="w-4 h-4 text-[#706879]" />
                    MCQ & Aptitude: {selectedTrack.mcqRatio}%
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-[#E8E2EF] overflow-hidden flex">
                  <div 
                    className="bg-[#5425A8] h-full" 
                    style={{ width: `${selectedTrack.codingRatio}%` }}
                  />
                  <div 
                    className="bg-[#FFD84D] h-full" 
                    style={{ width: `${selectedTrack.mcqRatio}%` }}
                  />
                </div>
              </div>

              {/* Target Recruiters */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#706879] mb-2">
                  Target Recruiters & Patterns:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTrack.targetCompanies.map((c) => (
                    <span
                      key={c}
                      className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white text-[#211B2B] border border-[#E8E2EF] shadow-2xs"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Core Skills Checklist */}
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#706879] mb-2">
                  Core Skills Syllabus ({selectedTrack.totalQuestions} Questions):
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedTrack.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-[#211B2B] p-2.5 rounded-lg bg-[#FAF8FD] border border-[#E8E2EF]">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 stroke-[2.5]" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-3 border-t border-[#E8E2EF] flex items-center justify-end gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedTrack(null)}
                >
                  Close
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => {
                    const url = selectedTrack.bundleUrl;
                    setSelectedTrack(null);
                    if (url) onNavigate(url);
                  }}
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  {selectedTrack.bundleName || 'Start Practice Track'}
                </Button>
              </div>

            </div>
          </Modal>
        )}

      </div>
    </section>
  );
};
