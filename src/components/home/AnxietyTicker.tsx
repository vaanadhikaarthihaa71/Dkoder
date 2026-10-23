import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronRight, 
  Check, 
  Lightbulb, 
  ArrowRight
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
    <section className="py-16 sm:py-20 bg-white border-b border-[#E8E2EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDFF] text-[#5425A8] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Preparation Guidance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#211B2B] tracking-tight">
            Preparing under pressure? <span className="text-[#5425A8]">Quick-start solutions</span>
          </h2>
          <p className="mt-2 text-sm text-[#6F687A]">
            Select any question to see actionable, step-by-step guidance for your placement preparation.
          </p>
        </div>

        {/* 6 Clean Question Cards */}
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
              className="text-left p-5 rounded-2xl bg-white border border-[#E8E2EF] hover:border-[#5425A8] hover:bg-[#FAF8FD] transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#5425A8] cursor-pointer flex flex-col justify-between group"
              aria-haspopup="dialog"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-semibold text-[#5425A8] bg-[#F3EDFF] px-2.5 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <ChevronRight className="w-4 h-4 text-[#6F687A] group-hover:text-[#5425A8] group-hover:translate-x-0.5 transition-all" />
                </div>

                <h3 className="text-sm font-semibold text-[#211B2B] group-hover:text-[#5425A8] transition-colors mb-1.5">
                  {item.question}
                </h3>

                <p className="text-xs text-[#6F687A] line-clamp-2 leading-relaxed">
                  {item.shortAnswer}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E8E2EF] flex items-center justify-between text-xs font-medium text-[#5425A8]">
                <span>View action steps →</span>
                <span className="text-[11px] text-[#6F687A]">{item.recommendedTrack}</span>
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
          title={selectedQuery.question}
          subtitle={`Recommended Track: ${selectedQuery.recommendedTrack}`}
          maxWidth="lg"
        >
          <div className="space-y-4">
            
            {/* Short Answer */}
            <div className="p-3.5 rounded-xl bg-[#F3EDFF] border border-[#E8E2EF]">
              <div className="text-[11px] font-semibold text-[#5425A8] uppercase tracking-wider mb-1">
                Summary:
              </div>
              <p className="text-sm text-[#211B2B] font-medium leading-relaxed">
                {selectedQuery.shortAnswer}
              </p>
            </div>

            {/* Steps */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#6F687A] mb-2">
                Action Steps:
              </div>
              <div className="space-y-2">
                {selectedQuery.detailedSteps.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FAF8FD] border border-[#E8E2EF] text-xs text-[#211B2B]">
                    <span className="w-4 h-4 rounded-full bg-[#FFD84D] text-[#211B2B] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro Tip */}
            <div className="p-3 rounded-xl bg-[#FFF8D6] border border-[#FFD84D]/40 text-xs text-[#211B2B] flex items-start gap-2">
              <Lightbulb className="w-4 h-4 text-[#92400E] shrink-0 mt-0.5" />
              <div>
                <strong>DKODER Tip:</strong> {selectedQuery.proTip}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex items-center justify-end gap-2 border-t border-[#E8E2EF]">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedQuery(null)}
              >
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  const track = selectedQuery.recommendedTrack;
                  setSelectedQuery(null);
                  onNavigateToTrack(track);
                }}
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Start Practicing
              </Button>
            </div>

          </div>
        </Modal>
      )}

    </section>
  );
};
