import React from 'react';
import { 
  CheckCircle2, 
  FileText, 
  Code2, 
  Zap,
  Info
} from 'lucide-react';

interface PerformanceAnalyticsProps {
  examAccuracy?: number;
  examsCompleted?: number;
  examsTotal?: number;
  problemsSolved?: number;
  xpValue?: number;
  levelName?: string;
  progressPercent?: number;
}

export const PerformanceAnalytics: React.FC<PerformanceAnalyticsProps> = ({
  examAccuracy = 0,
  examsCompleted = 0,
  examsTotal = 0,
  problemsSolved = 0,
  xpValue = 0,
  levelName = 'Rookie',
  progressPercent = 0
}) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-[#211B2B]">
          Performance Analytics
        </h3>
        <span className="text-[11px] text-[#706879]">
          Baseline student metrics
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Card 1: Exam Accuracy */}
        <div className="bg-white rounded-2xl border border-[#E8E2EF] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between text-xs text-[#706879] mb-1">
              <span className="font-semibold">Exam Accuracy</span>
              <div className="w-6 h-6 rounded-lg bg-[#FAF8FD] flex items-center justify-center text-[#5425A8]">
                <CheckCircle2 className="w-3.5 h-3.5" />
              </div>
            </div>
            
            <div className="flex items-baseline gap-2 my-1">
              <span className="text-2xl font-black text-[#211B2B]">{examAccuracy}%</span>
              <span className="text-[11px] font-medium text-[#706879]">cut-off avg</span>
            </div>

            <p className="text-xs text-[#706879] mt-0.5">
              Across all MCQ rounds
            </p>
          </div>

          {/* Minimal Circular / Bar indicator */}
          <div className="mt-3 pt-2.5 border-t border-[#E8E2EF]">
            <div className="w-full h-1.5 rounded-full bg-[#E8E2EF] overflow-hidden">
              <div 
                className="h-full bg-[#5425A8] rounded-full transition-all duration-300"
                style={{ width: `${Math.max(examAccuracy, 0)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Card 2: Exams Completed */}
        <div className="bg-white rounded-2xl border border-[#E8E2EF] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between text-xs text-[#706879] mb-1">
              <span className="font-semibold">Exams Completed</span>
              <div className="w-6 h-6 rounded-lg bg-[#FAF8FD] flex items-center justify-center text-[#5425A8]">
                <FileText className="w-3.5 h-3.5" />
              </div>
            </div>
            
            <div className="flex items-baseline gap-2 my-1">
              <span className="text-2xl font-black text-[#211B2B]">{examsCompleted} / {examsTotal}</span>
              <span className="text-[11px] font-medium text-[#706879]">attempts</span>
            </div>

            <p className="text-xs text-[#706879] mt-0.5">
              0 exams in progress
            </p>
          </div>

          <div className="mt-3 pt-2.5 border-t border-[#E8E2EF] flex items-center justify-between text-[11px] text-[#706879]">
            <span>Scheduled: None</span>
            <span className="text-[#059669] font-medium">Ready</span>
          </div>
        </div>

        {/* Card 3: Problems Solved */}
        <div className="bg-white rounded-2xl border border-[#E8E2EF] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between text-xs text-[#706879] mb-1">
              <span className="font-semibold">Problems Solved</span>
              <div className="w-6 h-6 rounded-lg bg-[#FAF8FD] flex items-center justify-center text-[#5425A8]">
                <Code2 className="w-3.5 h-3.5" />
              </div>
            </div>
            
            <div className="flex items-baseline gap-2 my-1">
              <span className="text-2xl font-black text-[#211B2B]">{problemsSolved}</span>
              <span className="text-[11px] font-medium text-[#706879]">challenges</span>
            </div>

            <p className="text-xs text-[#706879] mt-0.5">
              0 challenges
            </p>
          </div>

          <div className="mt-3 pt-2.5 border-t border-[#E8E2EF] flex items-center justify-between text-[11px] text-[#706879]">
            <span className="text-[#059669]">0 Easy</span>
            <span className="text-[#F59E0B]">0 Med</span>
            <span className="text-[#DC2626]">0 Hard</span>
          </div>
        </div>

        {/* Card 4: XP */}
        <div className="bg-white rounded-2xl border border-[#E8E2EF] p-4 flex flex-col justify-between shadow-2xs">
          <div>
            <div className="flex items-center justify-between text-xs text-[#706879] mb-1">
              <span className="font-semibold">Placement XP</span>
              <div className="w-6 h-6 rounded-lg bg-[#FEF3C7] flex items-center justify-center text-[#92400E]">
                <Zap className="w-3.5 h-3.5 fill-[#FFD84D] text-[#92400E]" />
              </div>
            </div>
            
            <div className="flex items-baseline gap-2 my-1">
              <span className="text-2xl font-black text-[#5425A8]">{xpValue} XP</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F3EDFF] text-[#5425A8]">
                {levelName}
              </span>
            </div>

            <p className="text-xs text-[#706879] mt-0.5">
              {progressPercent}% to Achiever
            </p>
          </div>

          <div className="mt-3 pt-2.5 border-t border-[#E8E2EF]">
            <div className="w-full h-1.5 rounded-full bg-[#E8E2EF] overflow-hidden">
              <div 
                className="h-full bg-[#FFD84D] rounded-full transition-all duration-300"
                style={{ width: `${Math.max(progressPercent, 0)}%` }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
