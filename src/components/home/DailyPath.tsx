import React, { useState, useEffect } from 'react';
import { INITIAL_DAILY_TASKS } from '../../data/mockData';
import { DailyTask } from '../../types';
import { 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  Flame, 
  Trophy, 
  ArrowRight, 
  RotateCcw, 
  Clock, 
  CalendarDays,
  PartyPopper
} from 'lucide-react';
import { Button } from '../common/Button';
import { useToast } from '../../context/ToastContext';
import confetti from 'canvas-confetti';

interface DailyPathProps {
  onStartTaskPractice: (taskCategory: string) => void;
}

const STORAGE_KEY = 'dkoder_daily_tasks_state_v1';

export const DailyPath: React.FC<DailyPathProps> = ({ onStartTaskPractice }) => {
  const { addToast } = useToast();
  const [tasks, setTasks] = useState<DailyTask[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse daily tasks from localStorage', e);
    }
    return INITIAL_DAILY_TASKS;
  });

  const [hasCelebrated, setHasCelebrated] = useState(false);

  // Save to localStorage whenever tasks change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (e) {
      console.error('Failed to save tasks to localStorage', e);
    }
  }, [tasks]);

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalTasks = tasks.length;
  const progressPercent = Math.round((completedCount / totalTasks) * 100);
  const isAllComplete = completedCount === totalTasks;

  // Trigger confetti celebration when reaching 100%
  useEffect(() => {
    if (isAllComplete && !hasCelebrated) {
      setHasCelebrated(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FACC15', '#581C87', '#9333EA', '#FEF08A']
      });
      addToast({
        type: 'success',
        title: 'Daily Path Completed! 🎉',
        description: 'You crushed all 4 daily placement goals today. Streak extended to 15 days!'
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
        title: 'Task Checked Off',
        description: `Completed: ${nextIncomplete.title}`
      });
    } else {
      addToast({
        type: 'info',
        title: 'All Tasks Complete',
        description: "You've finished today's path! Reset to practice again."
      });
    }
  };

  const handleResetTasks = () => {
    setTasks(INITIAL_DAILY_TASKS.map(t => ({ ...t, completed: false })));
    setHasCelebrated(false);
    addToast({
      type: 'info',
      title: 'Daily Path Reset',
      description: 'Your checklist has been reset for a fresh practice cycle.'
    });
  };

  return (
    <section className="py-16 bg-[#FAF8FF] border-b border-purple-100" id="daily-path">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Card */}
        <div className="bg-white rounded-3xl border-2 border-purple-200/90 p-6 sm:p-10 shadow-xl shadow-purple-900/5">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b border-purple-100">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-950 text-xs font-bold uppercase tracking-wider mb-2 border border-yellow-300">
                <CalendarDays className="w-3.5 h-3.5 text-yellow-600" />
                <span>Today's Placement Routine</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-purple-950 tracking-tight">
                Daily Path: Micro-Habits for <span className="text-yellow-600">Macro Offers</span>
              </h2>
              <p className="text-xs sm:text-sm text-purple-800/80 mt-1">
                Complete your 4 curated daily goals. Progress is securely saved in your browser session.
              </p>
            </div>

            {/* Streak & Completion Badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-purple-50 px-4 py-2.5 rounded-2xl border border-purple-200">
                <Flame className="w-5 h-5 text-amber-500 fill-amber-500 animate-bounce" />
                <div>
                  <div className="text-[10px] font-bold text-purple-500 uppercase">Current Streak</div>
                  <div className="text-sm font-extrabold text-purple-950">14 Days Unbroken</div>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2.5 rounded-2xl border border-yellow-200">
                <Trophy className="w-5 h-5 text-yellow-600" />
                <div>
                  <div className="text-[10px] font-bold text-amber-800 uppercase">Goal Status</div>
                  <div className="text-sm font-extrabold text-amber-950">
                    {completedCount} / {totalTasks} Done
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Progress Bar */}
          <div className="my-6">
            <div className="flex items-center justify-between text-xs font-bold text-purple-950 mb-2">
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span>Today's Progress</span>
              </span>
              <span className="text-yellow-600 font-extrabold text-sm">{progressPercent}%</span>
            </div>
            <div className="w-full h-3.5 rounded-full bg-purple-100 p-0.5 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Interactive Tasks Checklist */}
          <div className="space-y-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`p-4 rounded-2xl border-2 transition-all duration-200 flex items-center justify-between gap-4 cursor-pointer select-none ${
                  task.completed
                    ? 'bg-purple-50/60 border-purple-200/60 opacity-80'
                    : 'bg-white border-purple-200 hover:border-yellow-400 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleTask(task.id);
                    }}
                    className="focus:outline-none"
                    aria-label={task.completed ? 'Mark incomplete' : 'Mark complete'}
                  >
                    {task.completed ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 fill-emerald-100" />
                    ) : (
                      <Circle className="w-6 h-6 text-purple-300 hover:text-yellow-500" />
                    )}
                  </button>

                  <div>
                    <span
                      className={`text-sm font-bold block ${
                        task.completed ? 'line-through text-purple-400' : 'text-purple-950'
                      }`}
                    >
                      {task.title}
                    </span>
                    <span className="text-[11px] font-semibold text-purple-600">
                      Category: {task.category} • Est. {task.estimatedMinutes} mins
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      task.completed
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-purple-100 text-purple-900'
                    }`}
                  >
                    {task.completed ? 'Completed' : 'Pending'}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* All-Complete Celebration Callout */}
          {isAllComplete && (
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-yellow-100 via-amber-50 to-purple-100 border-2 border-yellow-400 flex items-center justify-between gap-4 animate-in fade-in">
              <div className="flex items-center gap-3">
                <PartyPopper className="w-8 h-8 text-yellow-600" />
                <div>
                  <h4 className="font-extrabold text-purple-950 text-sm">
                    Awesome dedication! All 4 daily goals completed.
                  </h4>
                  <p className="text-xs text-purple-800">
                    Your placement consistency is in the top 5% of all engineering candidates.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Checklist Footer Actions */}
          <div className="mt-6 pt-5 border-t border-purple-100 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Button
                variant="primary"
                size="md"
                onClick={handleCompleteNextTask}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-bold shadow-md shadow-yellow-400/20"
                disabled={isAllComplete}
              >
                Complete Next Task
              </Button>

              <Button
                variant="outline"
                size="md"
                onClick={handleResetTasks}
                leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
                className="text-purple-900 border-purple-300"
              >
                Reset Today's Path
              </Button>
            </div>

            <span className="text-xs text-purple-500 font-medium">
              * Progress is saved in local browser storage (not uploaded to an external server).
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
