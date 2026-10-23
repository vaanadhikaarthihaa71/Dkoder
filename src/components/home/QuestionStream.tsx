import React, { useState } from 'react';
import { 
  Question 
} from '../../types';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';
import { 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  FilterX, 
  ArrowUpDown,
  Code2,
  Sparkles
} from 'lucide-react';

interface QuestionStreamProps {
  questions: Question[];
  solvedIds: Set<string>;
  onSelectQuestion: (question: Question) => void;
  onResetFilters: () => void;
}

export const QuestionStream: React.FC<QuestionStreamProps> = ({
  questions,
  solvedIds,
  onSelectQuestion,
  onResetFilters
}) => {
  const [sortBy, setSortBy] = useState<'recommended' | 'time-asc' | 'solvers-desc'>('recommended');
  const [detailQuestion, setDetailQuestion] = useState<Question | null>(null);

  const sortedQuestions = [...questions].sort((a, b) => {
    if (sortBy === 'time-asc') return a.estimatedMinutes - b.estimatedMinutes;
    if (sortBy === 'solvers-desc') return b.solversCount - a.solversCount;
    return 0;
  });

  return (
    <div className="space-y-4">
      
      {/* Stream Controls */}
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-base sm:text-lg font-bold text-[#211B2B]">
          Practice Question Vault
        </h3>

        {/* Sort Selector */}
        <div className="flex items-center gap-1.5 text-xs">
          <ArrowUpDown className="w-3.5 h-3.5 text-[#706879]" />
          <span className="text-[#706879] hidden sm:inline">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs px-2.5 py-1 rounded-lg border border-[#E8E2EF] bg-white text-[#211B2B] focus:outline-none focus:ring-1 focus:ring-[#5425A8] cursor-pointer"
          >
            <option value="recommended">Recommended</option>
            <option value="time-asc">Estimated Time</option>
            <option value="solvers-desc">Most Solved</option>
          </select>
        </div>
      </div>

      {/* Empty State */}
      {sortedQuestions.length === 0 ? (
        <div className="bg-white rounded-2xl border border-dashed border-[#E8E2EF] p-10 text-center max-w-md mx-auto space-y-3">
          <div className="w-10 h-10 rounded-full bg-[#FAF8FD] text-[#706879] flex items-center justify-center mx-auto">
            <FilterX className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-[#211B2B]">No Matching Questions Found</h4>
            <p className="text-xs text-[#706879] mt-0.5">
              Adjust company, salary tier, or mode filters to view available problems.
            </p>
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={onResetFilters}
          >
            Reset All Filters
          </Button>
        </div>
      ) : (
        /* Question Cards Grid — Lightweight, Scannable Cards */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sortedQuestions.map((q) => {
            const isSolved = solvedIds.has(q.id);

            return (
              <div
                key={q.id}
                className={`bg-white rounded-xl border p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-150 group shadow-2xs hover:shadow-xs ${
                  isSolved
                    ? 'border-[#A7F3D0] bg-[#FAFDFB]'
                    : 'border-[#E8E2EF] hover:border-[#5425A8]'
                }`}
              >
                <div>
                  {/* Top Row: Difficulty, Format, Company, Topic */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-1.5">
                      <Badge
                        variant={
                          q.difficulty === 'Easy' ? 'green' : q.difficulty === 'Medium' ? 'amber' : 'purple'
                        }
                        size="sm"
                      >
                        {q.difficulty}
                      </Badge>
                      <Badge variant="outline" size="sm">{q.format}</Badge>
                      <span className="text-[11px] font-semibold text-[#5425A8] bg-[#F1E9FF] px-2 py-0.5 rounded-md border border-purple-100">
                        {q.company}
                      </span>
                    </div>

                    <span className="text-[10px] text-[#706879] font-medium hidden sm:inline">
                      {q.topic}
                    </span>
                  </div>

                  {/* Question Title (Clickable for Detail View) */}
                  <h4 
                    onClick={() => setDetailQuestion(q)}
                    className="text-xs sm:text-sm font-bold text-[#211B2B] line-clamp-1 mb-2 group-hover:text-[#5425A8] transition-colors cursor-pointer"
                  >
                    {q.title}
                  </h4>
                </div>

                {/* Footer Actions: Details & Start Practising */}
                <div className="pt-2 border-t border-[#E8E2EF] flex items-center justify-between gap-2">
                  <button
                    onClick={() => setDetailQuestion(q)}
                    className="text-[11px] font-semibold text-[#706879] hover:text-[#5425A8] transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Details</span>
                  </button>

                  <Button
                    variant={isSolved ? 'outline' : 'primary'}
                    size="sm"
                    onClick={() => onSelectQuestion(q)}
                    rightIcon={isSolved ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  >
                    {isSolved ? 'Review' : 'Start Practising'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Progressive Disclosure Question Detail Modal */}
      {detailQuestion && (
        <Modal
          isOpen={!!detailQuestion}
          onClose={() => setDetailQuestion(null)}
          title={
            <div className="flex items-center gap-2">
              <span className="text-base font-bold text-[#211B2B]">{detailQuestion.title}</span>
              <Badge variant={detailQuestion.difficulty === 'Easy' ? 'green' : detailQuestion.difficulty === 'Medium' ? 'amber' : 'purple'} size="sm">
                {detailQuestion.difficulty}
              </Badge>
            </div>
          }
          subtitle={`${detailQuestion.company} Pattern • ${detailQuestion.packageCategory}`}
          maxWidth="lg"
        >
          <div className="space-y-4">
            
            {/* Meta Strip */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#706879] p-3 rounded-xl bg-[#FAF8FD] border border-[#E8E2EF]">
              <span className="flex items-center gap-1 font-medium text-[#211B2B]">
                <Clock className="w-3.5 h-3.5 text-[#5425A8]" />
                ~{detailQuestion.estimatedMinutes} mins
              </span>
              <span className="flex items-center gap-1 font-medium text-[#211B2B]">
                <Users className="w-3.5 h-3.5 text-[#5425A8]" />
                {detailQuestion.solversCount.toLocaleString()} candidates solved
              </span>
              <span className="flex items-center gap-1 font-medium text-[#5425A8]">
                <Code2 className="w-3.5 h-3.5" />
                Format: {detailQuestion.format}
              </span>
            </div>

            {/* Description */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#706879] mb-1.5">
                Problem Statement:
              </div>
              <p className="text-sm text-[#211B2B] leading-relaxed bg-white p-3.5 rounded-xl border border-[#E8E2EF]">
                {detailQuestion.description}
              </p>
            </div>

            {/* Code / Question Sandbox Preview */}
            <div className="p-3 rounded-xl bg-[#211B2B] text-emerald-400 font-mono text-xs border border-[#211B2B]/20">
              <div className="flex items-center justify-between text-[11px] text-purple-300 font-sans mb-1.5 pb-1 border-b border-white/10">
                <span>{detailQuestion.format === 'Coding' ? 'Live Sandbox Environment' : 'Concept Evaluator'}</span>
                <span>Python 3.11 / Java 17 / C++</span>
              </div>
              <code>
                {detailQuestion.format === 'Coding'
                  ? `def solve_${detailQuestion.id.replace(/-/g, '_')}(nums):\n    # Write your optimal O(N) solution here\n    pass`
                  : `Q: Which optimal data structure achieves O(1) average lookup?\n> [A] Hash Table   [B] Binary Search Tree`}
              </code>
            </div>

            {/* Topic Tags */}
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#706879] mb-1.5">
                Tagged Concepts:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {detailQuestion.topicTags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-[#F1E9FF] text-[#5425A8] border border-purple-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-2 flex items-center justify-end gap-2 border-t border-[#E8E2EF]">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setDetailQuestion(null)}
              >
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  const q = detailQuestion;
                  setDetailQuestion(null);
                  onSelectQuestion(q);
                }}
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Launch in Coding Lab
              </Button>
            </div>

          </div>
        </Modal>
      )}

      <div className="text-center pt-2">
        <p className="text-[11px] text-[#706879]">
          * Sample practice problems representative of verified corporate recruitment formats.
        </p>
      </div>

    </div>
  );
};
