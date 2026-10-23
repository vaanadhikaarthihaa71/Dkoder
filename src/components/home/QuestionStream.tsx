import React, { useState } from 'react';
import { 
  Question, 
  Difficulty, 
  CompanyTag, 
  PackageRange, 
  PrepMode 
} from '../../types';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import { 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FilterX, 
  ArrowUpDown,
  BookOpen,
  Code2
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
    return 0; // recommended default
  });

  return (
    <div className="space-y-6">
      
      {/* Stream Controls Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-purple-950 flex items-center gap-2">
            <span>Verified Practice Stream</span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-yellow-400 text-purple-950">
              Live Bank
            </span>
          </h3>
          <p className="text-xs text-purple-700/80 mt-0.5">
            Sample placement questions curated for engineering recruitment patterns
          </p>
        </div>

        {/* Sort Selector */}
        <div className="flex items-center gap-2">
          <ArrowUpDown className="w-3.5 h-3.5 text-purple-500" />
          <span className="text-xs font-bold text-purple-900">Sort By:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-purple-200 bg-white text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
          >
            <option value="recommended">Placement Relevance</option>
            <option value="time-asc">Fastest First (Minutes)</option>
            <option value="solvers-desc">Most Solved by Students</option>
          </select>
        </div>
      </div>

      {/* Empty State when no questions match filters */}
      {sortedQuestions.length === 0 ? (
        <div className="bg-white rounded-2xl border-2 border-dashed border-purple-200 p-12 text-center max-w-md mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mx-auto">
            <FilterX className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-purple-950">No Questions Match These Filters</h4>
            <p className="text-xs text-purple-700 mt-1">
              Try adjusting your company, package range, or preparation mode to expand results.
            </p>
          </div>
          <Button
            variant="primary"
            size="sm"
            onClick={onResetFilters}
            className="font-bold"
          >
            Reset All Filters
          </Button>
        </div>
      ) : (
        /* Questions Cards Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sortedQuestions.map((q) => {
            const isSolved = solvedIds.has(q.id);

            return (
              <div
                key={q.id}
                className={`group rounded-2xl border transition-all duration-200 p-5 flex flex-col justify-between ${
                  isSolved
                    ? 'bg-purple-50/70 border-emerald-300/80 shadow-sm'
                    : 'bg-white border-purple-200/90 hover:border-yellow-400 hover:shadow-xl hover:shadow-purple-900/5'
                }`}
              >
                <div>
                  {/* Top Badges Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Badge
                        variant={
                          q.difficulty === 'Easy' ? 'green' : q.difficulty === 'Medium' ? 'amber' : 'purple'
                        }
                      >
                        {q.difficulty}
                      </Badge>
                      <Badge variant="yellow">{q.format}</Badge>
                      <Badge variant="outline-purple">{q.company}</Badge>
                    </div>

                    <span className="text-[11px] font-bold text-yellow-800 bg-yellow-100/90 px-2 py-0.5 rounded-full border border-yellow-200">
                      {q.packageCategory}
                    </span>
                  </div>

                  {/* Question Title */}
                  <h4 className="text-base font-bold text-purple-950 group-hover:text-purple-700 transition-colors line-clamp-1 mb-2">
                    {q.title}
                  </h4>

                  {/* Topic Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {q.topicTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Problem Preview Snippet */}
                  <p className="text-xs text-purple-900/70 line-clamp-2 leading-relaxed mb-4">
                    {q.description}
                  </p>
                </div>

                {/* Card Bottom Row: Metadata & Action CTA */}
                <div className="pt-3 border-t border-purple-100 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-3 text-xs text-purple-600 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      {q.estimatedMinutes}m
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-purple-400" />
                      {q.solversCount.toLocaleString()} solved
                    </span>
                  </div>

                  <Button
                    variant={isSolved ? 'outline' : 'primary'}
                    size="sm"
                    onClick={() => onSelectQuestion(q)}
                    rightIcon={isSolved ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <ArrowRight className="w-3.5 h-3.5" />}
                    className={isSolved ? 'border-emerald-300 text-emerald-800 hover:bg-emerald-50' : 'font-bold'}
                  >
                    {isSolved ? 'Review Code' : 'Start Practising'}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Sample Data Disclaimer Note */}
      <div className="text-center pt-2">
        <p className="text-xs text-purple-500 italic">
          * Questions are illustrative sample patterns based on verified company placement formats.
        </p>
      </div>

    </div>
  );
};
