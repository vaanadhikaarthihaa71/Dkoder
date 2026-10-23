import React, { useState, useEffect } from 'react';
import { INITIAL_DAILY_TASKS } from '../../data/mockData';
import { DailyTask } from '../../types';
import { 
  CheckCircle2, 
  Circle, 
  Flame, 
  ArrowRight, 
  RotateCcw, 
  CalendarDays
} from 'lucide-react';
import { Button } from '../common/Button';
import { useToast } from '../../context/ToastContext';
import confetti from 'canvas-confetti';

interface DailyPathProps {
  onStartTaskPractice: (taskCategory: string) => void;
}

const STORAGE_KEY = 'dkoder_daily_tasks_v2';

export const DailyPath: React.FC<DailyPathProps> = ({ onStartTaskPractice }) => {
  const { addToast } = useToast();
  const [tasks, setTasks] = useState<DailyTask[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return INITIAL_DAILY_TASKS;
  });

  const [hasCelebrated, setHasCelebrated] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.error(e);
    }
  }, [tasks]);

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalTasks = tasks.length;
  const progressPercent = Math.round((completedCount / totalTasks) * 100);
  const isAllComplete = completedCount === totalTasks;

  useEffect(() => {
    if (isAllComplete && !hasCelebrated) {
      setHasCelebrated(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#FFD84D', '#5425A8', '#F3EDFF']
      });
      addToast({
        type: 'success',
        title: 'Daily Practice Complete! 🎉',
        description: 'All 4 goals completed for today. Consistency streak extended!'
      });
    }
  }, [isAllComplete, hasCelebrated, addToast]);

  const toggleTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === taskId ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleCompleteNextTask = () => {
    const nextIncomplete = tasks.find((t) => !t.completed);
    if (nextIncomplete) {
      toggleTask(nextIncomplete.id);
      addToast({
        type: 'success',
        title: 'Goal Completed',
        description: nextIncomplete.title
      });
    }
  };

  const handleResetTasks = () => {
    setTasks(INITIAL_DAILY_TASKS.map(t => ({ ...t, completed: false })));
    setHasCelebrated(false);
    addToast({
      type: 'info',
      title: 'Checklist Reset',
      description: 'Daily checklist reset for fresh practice.'
    });
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const nextTask = tasks.find((t) => !t.completed) || tasks[0];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E8E2EF]" id="daily-path">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F1E9FF] text-[#5425A8] text-xs font-semibold uppercase tracking-wider mb-2">
              <CalendarDays className="w-3.5 h-3.5" />
              <span>Daily Practice Routine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#211B2B] tracking-tight">
              Daily Path: <span className="text-[#5425A8]">4 Habits a Day</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#706879] mt-1">
              Maintain continuous preparation momentum with progressive daily milestones.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#FAF8FD] border border-[#E8E2EF] px-3.5 py-2 rounded-2xl text-xs shadow-xs">
            <Flame className="w-4 h-4 fill-[#FFD84D] text-[#92400E]" />
            <span className="font-bold text-[#211B2B]">14-Day Streak</span>
            <span className="text-[#706879]">({completedCount}/{totalTasks} Completed)</span>
          </div>
        </div>

        {/* 2-Column Visual Journey Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Interactive Tasks Checklist (Span 7) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Progress bar */}
            <div>
              <div className="flex justify-between text-xs text-[#706879] mb-1.5 font-medium">
                <span>Today's Milestone Progress</span>
                <span className="text-[#211B2B] font-bold">{progressPercent}%</span>
              </div>
              <div className="w-full h-2.5 rounded-full bg-[#E8E2EF] overflow-hidden">
                <div
                  className="h-full bg-[#5425A8] rounded-full transition-all duration-300"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {/* If not expanded: Show only Current Task */}
            {!isExpanded ? (
              <div className="bg-[#FAF8FD] rounded-2xl border border-[#E8E2EF] p-4 shadow-2xs">
                <div className="text-[11px] uppercase font-bold text-[#5425A8] mb-1.5 flex items-center justify-between">
                  <span>Current Task in Queue</span>
                  <span className="font-semibold text-[#706879] lowercase">
                    {isAllComplete ? 'All goals completed' : `task ${completedCount + 1} of ${totalTasks}`}
                  </span>
                </div>

                <div 
                  onClick={() => toggleTask(nextTask.id)}
                  className="p-3.5 rounded-xl bg-white border border-[#E8E2EF] flex items-center justify-between gap-3 cursor-pointer hover:border-[#5425A8] transition-all"
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleTask(nextTask.id);
                      }}
                      className="focus:outline-none"
                      aria-label={nextTask.completed ? 'Mark incomplete' : 'Mark complete'}
                    >
                      {nextTask.completed ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <Circle className="w-5 h-5 text-[#E8E2EF] hover:text-[#5425A8]" />
                      )}
                    </button>

                    <div>
                      <span
                        className={`text-xs sm:text-sm font-semibold block ${
                          nextTask.completed ? 'line-through text-[#706879]' : 'text-[#211B2B]'
                        }`}
                      >
                        {nextTask.title}
                      </span>
                      <span className="text-[11px] text-[#706879]">
                        {nextTask.category} • ~{nextTask.estimatedMinutes} mins
                      </span>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      nextTask.completed ? 'bg-emerald-100 text-emerald-800' : 'bg-[#F1E9FF] text-[#5425A8]'
                    }`}
                  >
                    {nextTask.completed ? 'Done' : 'Active'}
                  </span>
                </div>
              </div>
            ) : (
              /* Expanded: Show Full 4-Task Interactive Checklist */
              <div className="space-y-2.5 animate-fadeIn">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between gap-3 cursor-pointer select-none shadow-2xs ${
                      task.completed
                        ? 'bg-[#FAF8FD] border-[#E8E2EF] opacity-75'
                        : 'bg-white border-[#E8E2EF] hover:border-[#5425A8] hover:shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTask(task.id);
                        }}
                        className="focus:outline-none"
                        aria-label={task.completed ? 'Mark incomplete' : 'Mark complete'}
                      >
                        {task.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                        ) : (
                          <Circle className="w-5 h-5 text-[#E8E2EF] hover:text-[#5425A8]" />
                        )}
                      </button>

                      <div>
                        <span
                          className={`text-xs sm:text-sm font-semibold block ${
                            task.completed ? 'line-through text-[#706879]' : 'text-[#211B2B]'
                          }`}
                        >
                          {task.title}
                        </span>
                        <span className="text-[11px] text-[#706879]">
                          {task.category} • ~{task.estimatedMinutes} mins
                        </span>
                      </div>
                    </div>

                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                        task.completed ? 'bg-emerald-100 text-emerald-800' : 'bg-[#F1E9FF] text-[#5425A8]'
                      }`}
                    >
                      {task.completed ? 'Done' : 'Pending'}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Expand / Collapse Full Checklist Toggle */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-xs font-semibold text-[#5425A8] hover:text-[#401B85] flex items-center gap-1 cursor-pointer"
              >
                <span>{isExpanded ? 'Hide Task Queue (Show Current Task)' : `View All ${totalTasks} Tasks in Checklist`}</span>
                <span className="text-xs">{isExpanded ? '↑' : '↓'}</span>
              </button>
            </div>

            {/* Actions Row */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleCompleteNextTask}
                  disabled={isAllComplete}
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Complete Next Task
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleResetTasks}
                  leftIcon={<RotateCcw className="w-3 h-3 text-[#706879]" />}
                >
                  Reset Checklist
                </Button>
              </div>

              <span className="text-[11px] text-[#706879]">
                * Progress saved locally in session.
              </span>
            </div>

          </div>

          {/* Right Column: 3D Quest Roadmap Visual (Span 5) */}
          <div className="lg:col-span-5 relative rounded-3xl overflow-hidden bg-gradient-to-tr from-[#FAF8FD] to-[#F1E9FF] border border-[#E8E2EF] p-2.5 shadow-sm group">
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-xs">
              <img
                src="/images/daily-journey.jpg"
                alt="3D Daily Coding Practice Roadmap Journey with DKODER Robot Mascot"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#E8E2EF] text-[10px] font-bold text-[#5425A8] shadow-xs flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FFD84D]" />
                <span>Interactive Practice Journey</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
