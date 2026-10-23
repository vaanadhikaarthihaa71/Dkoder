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

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-[#E8E2EF]" id="daily-path">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDFF] text-[#5425A8] text-xs font-semibold uppercase tracking-wider mb-2">
              <CalendarDays className="w-3.5 h-3.5" />
              <span>Daily Practice Routine</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#211B2B] tracking-tight">
              Daily Path: <span className="text-[#5425A8]">4 Habits a Day</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#6F687A] mt-1">
              Check off your daily problems to maintain continuous preparation momentum.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#FAF8FD] border border-[#E8E2EF] px-3 py-1.5 rounded-xl text-xs">
            <Flame className="w-4 h-4 fill-[#FFD84D] text-[#92400E]" />
            <span className="font-semibold text-[#211B2B]">14-Day Streak</span>
            <span className="text-[#6F687A]">({completedCount}/{totalTasks} Done)</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-xs text-[#6F687A] mb-1.5 font-medium">
            <span>Today's Completion</span>
            <span className="text-[#211B2B] font-bold">{progressPercent}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-[#E8E2EF] overflow-hidden">
            <div
              className="h-full bg-[#5425A8] rounded-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Tasks Checklist */}
        <div className="space-y-2 mb-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              onClick={() => toggleTask(task.id)}
              className={`p-3.5 rounded-xl border transition-all flex items-center justify-between gap-3 cursor-pointer select-none ${
                task.completed
                  ? 'bg-[#FAF8FD] border-[#E8E2EF] opacity-75'
                  : 'bg-white border-[#E8E2EF] hover:border-[#5425A8]'
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
                      task.completed ? 'line-through text-[#6F687A]' : 'text-[#211B2B]'
                    }`}
                  >
                    {task.title}
                  </span>
                  <span className="text-[11px] text-[#6F687A]">
                    {task.category} • ~{task.estimatedMinutes} mins
                  </span>
                </div>
              </div>

              <span
                className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                  task.completed ? 'bg-emerald-100 text-emerald-800' : 'bg-[#FAF8FD] text-[#6F687A] border border-[#E8E2EF]'
                }`}
              >
                {task.completed ? 'Done' : 'Pending'}
              </span>
            </div>
          ))}
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
              leftIcon={<RotateCcw className="w-3 h-3 text-[#6F687A]" />}
            >
              Reset Today
            </Button>
          </div>

          <span className="text-[11px] text-[#6F687A]">
            * Progress saved locally in your current browser session.
          </span>
        </div>

      </div>
    </section>
  );
};
