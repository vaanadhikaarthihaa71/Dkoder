import React, { useState } from 'react';
import { 
  Question 
} from '../../types';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  FilterX, 
  ArrowUpDown
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

  const sortedQuestions = [...questions].sort((a, b) => {
    if (sortBy === 'time-asc') return a.estimatedMinutes - b.estimatedMinutes;
    if (sortBy === 'solvers-desc') return b.solversCount - a.solversCount;
    return 0;
  });

  return (
    <div className="space-y-4">
      
      {/* Stream Controls */}
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-lg font-bold text-[#211B2B]">
          Practice Question Vault
        </h3>

        {/* Sort Selector */}
        <div className="flex items-center gap-1.5 text-xs">
          <ArrowUpDown className="w-3.5 h-3.5 text-[#6F687A]" />
          <span className="text-[#6F687A] hidden sm:inline">Sort:</span>
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
          <div className="w-10 h-10 rounded-full bg-[#FAF8FD] text-[#6F687A] flex items-center justify-center mx-auto">
            <FilterX className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-base font-semibold text-[#211B2B]">No Matching Questions Found</h4>
            <p className="text-xs text-[#6F687A] mt-0.5">
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
        /* Question Cards Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {sortedQuestions.map((q) => {
            const isSolved = solvedIds.has(q.id);

            return (
              <div
                key={q.id}
                className={`bg-white rounded-xl border p-4 flex flex-col justify-between transition-all duration-150 ${
                  isSolved
                    ? 'border-[#A7F3D0] bg-[#FAFDFB]'
                    : 'border-[#E8E2EF] hover:border-[#5425A8] hover:shadow-xs'
                }`}
              >
                <div>
                  {/* Top Badges */}
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
                      <Badge variant="purple" size="sm">{q.company}</Badge>
                    </div>

                    <span className="text-[11px] font-medium text-[#6F687A]">
                      {q.packageCategory}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-sm font-semibold text-[#211B2B] line-clamp-1 mb-1">
                    {q.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-[#6F687A] line-clamp-2 leading-relaxed mb-3">
                    {q.description}
                  </p>

                  {/* Topic Tag chips */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {q.topicTags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#FAF8FD] text-[#6F687A] border border-[#E8E2EF]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Metadata & CTA */}
                <div className="pt-2.5 border-t border-[#E8E2EF] flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-[#6F687A]">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {q.estimatedMinutes}m
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" />
                      {q.solversCount.toLocaleString()}
                    </span>
                  </div>

                  <Button
                    variant={isSolved ? 'outline' : 'primary'}
                    size="sm"
                    onClick={() => onSelectQuestion(q)}
                    rightIcon={isSolved ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <ArrowRight className="w-3.5 h-3.5" />}
                  >
                    {isSolved ? 'Review Code' : 'Start Practising'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="text-center pt-2">
        <p className="text-[11px] text-[#6F687A]">
          * Sample practice problems representative of verified corporate recruitment formats.
        </p>
      </div>

    </div>
  );
};
