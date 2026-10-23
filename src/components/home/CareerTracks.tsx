import React from 'react';
import { CAREER_TRACKS } from '../../data/mockData';
import { 
  Briefcase, 
  Code2, 
  CheckCircle, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  Target,
  BarChart2,
  PieChart
} from 'lucide-react';
import { Button } from '../common/Button';

interface CareerTracksProps {
  solvedCount: number;
  onNavigate: (path: string) => void;
}

export const CareerTracks: React.FC<CareerTracksProps> = ({ solvedCount, onNavigate }) => {
  return (
    <section className="py-16 bg-white border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Target className="w-3.5 h-3.5 text-yellow-600" />
            <span>Structured Career Roadmaps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight">
            Targeted Tracks for <span className="text-yellow-600">Every Career Ambition</span>
          </h2>
          <p className="mt-3 text-base text-purple-800/80">
            Tailored curriculum balancing aptitude MCQs, core CS fundamentals, and live DSA coding challenges.
          </p>
        </div>

        {/* Career Tracks Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {CAREER_TRACKS.map((track, idx) => {
            // Calculate a transparent local demo progress based on user's solved count
            const simulatedTotal = track.totalQuestions;
            const trackSolved = Math.min(simulatedTotal, Math.max(1, solvedCount * (idx === 0 ? 3 : idx === 1 ? 1 : 2)));
            const progressPercent = Math.min(100, Math.round((trackSolved / simulatedTotal) * 100));

            return (
              <div
                key={track.id}
                className="bg-[#FAF8FF] rounded-3xl border-2 border-purple-200/90 hover:border-yellow-400 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/5 group"
              >
                <div>
                  {/* Top Badge: Package Range */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-yellow-400 text-purple-950 shadow-sm">
                      {track.packageRange}
                    </span>
                    <span className="text-xs font-bold text-purple-600">
                      {track.totalQuestions} Curated Qs
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-extrabold text-purple-950 group-hover:text-purple-700 transition-colors">
                    {track.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-600/90 mt-1 mb-4">
                    {track.subtitle}
                  </p>

                  {/* Overview Text */}
                  <p className="text-xs text-purple-900/80 leading-relaxed mb-5">
                    {track.overview}
                  </p>

                  {/* MCQ vs Coding Distribution Bar */}
                  <div className="p-3.5 rounded-2xl bg-white border border-purple-100 mb-5">
                    <div className="flex items-center justify-between text-xs font-bold text-purple-950 mb-2">
                      <span className="flex items-center gap-1">
                        <Code2 className="w-3.5 h-3.5 text-purple-700" />
                        Coding: {track.codingRatio}%
                      </span>
                      <span className="flex items-center gap-1 text-purple-600">
                        <PieChart className="w-3.5 h-3.5 text-yellow-600" />
                        MCQ: {track.mcqRatio}%
                      </span>
                    </div>

                    {/* Dual Color Progress Bar */}
                    <div className="w-full h-2.5 rounded-full bg-purple-100 overflow-hidden flex">
                      <div 
                        className="bg-purple-800 h-full transition-all duration-500" 
                        style={{ width: `${track.codingRatio}%` }}
                        title={`Coding ${track.codingRatio}%`}
                      />
                      <div 
                        className="bg-yellow-400 h-full transition-all duration-500" 
                        style={{ width: `${track.mcqRatio}%` }}
                        title={`MCQ ${track.mcqRatio}%`}
                      />
                    </div>
                  </div>

                  {/* Target Recruiters Chips */}
                  <div className="mb-5">
                    <div className="text-[11px] font-bold text-purple-400 uppercase tracking-wider mb-2">
                      Target Recruiters
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {track.targetCompanies.map((c) => (
                        <span
                          key={c}
                          className="text-[11px] font-semibold px-2.5 py-1 rounded-lg bg-white text-purple-900 border border-purple-200"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Skills Breakdown */}
                  <div className="mb-6">
                    <div className="text-[11px] font-bold text-purple-400 uppercase tracking-wider mb-2">
                      Core Syllabus & Skills
                    </div>
                    <div className="space-y-1.5">
                      {track.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-2 text-xs text-purple-900 font-medium">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Local Demo Progress Meter */}
                  <div className="p-3.5 rounded-2xl bg-white border border-purple-100 mb-6">
                    <div className="flex items-center justify-between text-xs font-semibold text-purple-950 mb-1.5">
                      <span>Your Local Progress</span>
                      <span className="font-bold text-purple-700">{progressPercent}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-purple-100 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full transition-all duration-500"
                        style={{ width: `${Math.max(5, progressPercent)}%` }}
                      />
                    </div>
                    <div className="text-[10px] text-purple-500 mt-1">
                      {trackSolved} of {simulatedTotal} questions completed in local session
                    </div>
                  </div>

                </div>

                {/* Card Footer CTA Button */}
                <div className="pt-2">
                  <Button
                    variant={idx === 0 ? 'primary' : 'secondary'}
                    size="md"
                    fullWidth
                    onClick={() => track.bundleUrl && onNavigate(track.bundleUrl)}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="font-bold"
                  >
                    {track.bundleName || 'Start Track'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bundle Links Ticker */}
        <div className="mt-12 p-6 rounded-2xl bg-purple-950 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-yellow-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Specialized Company Preparation Portals
            </h4>
            <p className="text-xs text-purple-200 mt-1">
              Explore dedicated deep-dive practice modules built around past hiring patterns.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onNavigate('/bundles/infosys')}
              className="text-xs font-bold px-4 py-2 rounded-xl bg-purple-900 hover:bg-yellow-400 hover:text-purple-950 text-white border border-purple-700 transition-colors cursor-pointer"
            >
              Infosys InfyTQ Hub →
            </button>
            <button
              onClick={() => onNavigate('/bundles/accenture')}
              className="text-xs font-bold px-4 py-2 rounded-xl bg-purple-900 hover:bg-yellow-400 hover:text-purple-950 text-white border border-purple-700 transition-colors cursor-pointer"
            >
              Accenture Assessment Hub →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
