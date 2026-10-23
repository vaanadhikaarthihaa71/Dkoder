import React, { useState } from 'react';
import { 
  HelpCircle, 
  Sparkles, 
  ChevronRight, 
  CheckCircle2, 
  Lightbulb, 
  ArrowRight,
  Compass,
  Clock,
  BookOpen
} from 'lucide-react';
import { ANXIETY_QUERIES } from '../../data/mockData';
import { AnxietyQuery } from '../../types';
import { Modal } from '../common/Modal';
import { Button } from '../common/Button';

interface AnxietyTickerProps {
  onNavigateToTrack: (track: string) => void;
}

export const AnxietyTicker: React.FC<AnxietyTickerProps> = ({ onNavigateToTrack }) => {
  const [selectedQuery, setSelectedQuery] = useState<AnxietyQuery | null>(null);

  return (
    <section className="py-16 bg-[#FAF8FF] border-b border-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-yellow-600" />
            <span>Placement Stress Solved</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight">
            Preparing Under Pressure? <span className="text-yellow-600">Start Right Here.</span>
          </h2>
          <p className="mt-3 text-base text-purple-800/80">
            Click any question card to open tactical, step-by-step guidance designed to turn placement anxiety into structured daily progress.
          </p>
        </div>

        {/* Interactive Pill-Shaped Tag Cloud Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ANXIETY_QUERIES.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedQuery(item)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedQuery(item);
                }
              }}
              className="group text-left p-5 rounded-2xl bg-white border border-purple-200/90 hover:border-yellow-400 hover:shadow-lg hover:shadow-purple-900/5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer flex flex-col justify-between"
              aria-haspopup="dialog"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold text-purple-800 bg-purple-100/80 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {item.category}
                  </span>
                  <span className="text-xs text-yellow-600 group-hover:translate-x-0.5 transition-transform">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>

                <h3 className="text-base font-bold text-purple-950 group-hover:text-purple-700 transition-colors mb-2">
                  {item.question}
                </h3>

                <p className="text-xs text-purple-900/70 line-clamp-2 leading-relaxed">
                  {item.shortAnswer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-purple-50 flex items-center justify-between text-xs font-semibold text-purple-950">
                <span className="text-yellow-600 flex items-center gap-1 text-[11px]">
                  <Sparkles className="w-3 h-3" />
                  View Action Plan
                </span>
                <span className="text-[11px] text-purple-400">Tactical Roadmap</span>
              </div>
            </button>
          ))}
        </div>

      </div>

      {/* Expandable Advice Modal */}
      {selectedQuery && (
        <Modal
          isOpen={!!selectedQuery}
          onClose={() => setSelectedQuery(null)}
          title={
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-yellow-400 text-purple-950 flex items-center justify-center font-bold">
                <Lightbulb className="w-4 h-4" />
              </span>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 block">
                  {selectedQuery.category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-purple-950">
                  {selectedQuery.question}
                </h3>
              </div>
            </div>
          }
          maxWidth="lg"
        >
          <div className="space-y-5">
            {/* Short Answer Callout */}
            <div className="p-4 rounded-xl bg-purple-50 border border-purple-200">
              <div className="text-xs font-bold text-purple-900 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
                Strategic Summary:
              </div>
              <p className="text-sm font-semibold text-purple-950 leading-relaxed">
                {selectedQuery.shortAnswer}
              </p>
            </div>

            {/* Tactical Step-by-Step Checklist */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-purple-900 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Actionable Next Steps:
              </h4>
              <div className="space-y-2.5">
                {selectedQuery.detailedSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-purple-100">
                    <span className="w-5 h-5 rounded-full bg-yellow-400 text-purple-950 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-xs sm:text-sm text-purple-900 font-medium">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tip Box */}
            <div className="p-3.5 rounded-xl bg-yellow-50 border border-yellow-200 flex items-start gap-2.5">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs text-amber-950">
                <strong className="font-bold">DKODER Pro-Tip: </strong>
                {selectedQuery.proTip}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-purple-100">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedQuery(null)}
              >
                Close Advice
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  const track = selectedQuery.recommendedTrack;
                  setSelectedQuery(null);
                  onNavigateToTrack(track);
                }}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Start Practicing {selectedQuery.recommendedTrack}
              </Button>
            </div>

          </div>
        </Modal>
      )}

    </section>
  );
};
