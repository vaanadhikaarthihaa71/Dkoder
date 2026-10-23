import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  Clock, 
  Calendar, 
  Bell, 
  ArrowLeft,
  CalendarCheck2
} from 'lucide-react';
import { Button } from '../common/Button';

interface DashboardHeaderProps {
  studentName?: string;
  onOpenMobileDrawer: () => void;
  onNavigate: (path: string) => void;
  onSelectTab?: (tab: string) => void;
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  studentName = 'Karthik',
  onOpenMobileDrawer,
  onNavigate,
  onSelectTab
}) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());
  const [showNotificationToast, setShowNotificationToast] = useState(false);

  // Live clock updating every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Dynamic greeting based on current local hour
  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  // Format real date: e.g. Friday, 23 October 2026
  const formattedDate = currentTime.toLocaleDateString('en-IN', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  // Format real time: e.g. 12:51:30 PM IST
  const formattedTime = currentTime.toLocaleTimeString('en-IN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  return (
    <header className="bg-white border-b border-[#E8E2EF] sticky top-0 z-30 px-4 sm:px-6 lg:px-8 py-3.5 transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        
        {/* Left: Mobile Toggle & Personalized Greeting */}
        <div className="flex items-center gap-3">
          {/* Mobile hamburger drawer toggle */}
          <button
            type="button"
            onClick={onOpenMobileDrawer}
            className="lg:hidden p-2 rounded-xl text-[#211B2B] hover:bg-[#FAF8FD] border border-[#E8E2EF] focus:outline-none cursor-pointer"
            aria-label="Open navigation sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-[#211B2B] tracking-tight">
                {getGreeting()}, <span className="text-[#5425A8]">{studentName}</span> 👋
              </h1>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FFD84D]/30 text-[#92400E] border border-[#FFD84D]/50">
                Free Tier
              </span>
            </div>

            {/* Exam status line */}
            <div className="flex items-center gap-2 mt-0.5 text-xs text-[#706879]">
              <div className="flex items-center gap-1 font-medium text-[#706879]">
                <CalendarCheck2 className="w-3.5 h-3.5 text-[#5425A8]" />
                <span>No exams assigned yet.</span>
              </div>
              <span className="hidden sm:inline text-[#E8E2EF]">•</span>
              <span className="hidden sm:inline text-[11px] text-[#948B9E]">
                Check back for scheduled college drives
              </span>
            </div>
          </div>
        </div>

        {/* Right: Live Date & Local Time + Utility Actions */}
        <div className="flex items-center justify-between md:justify-end gap-3 self-end md:self-auto w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-[#E8E2EF]">
          
          {/* Live Date and Time Pill */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#FAF8FD] border border-[#E8E2EF] text-xs shadow-2xs">
            <div className="flex items-center gap-1 text-[#706879] font-medium">
              <Calendar className="w-3.5 h-3.5 text-[#5425A8]" />
              <span className="hidden sm:inline">{formattedDate}</span>
              <span className="sm:hidden">{currentTime.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
            </div>
            <span className="text-[#E8E2EF]">|</span>
            <div className="flex items-center gap-1 font-mono font-bold text-[#211B2B]">
              <Clock className="w-3.5 h-3.5 text-[#059669]" />
              <span>{formattedTime}</span>
            </div>
          </div>

          {/* Quick return to Home */}
          <div className="flex items-center gap-1.5">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate('/')}
              leftIcon={<ArrowLeft className="w-3.5 h-3.5" />}
              className="hidden sm:inline-flex text-xs"
            >
              Main Site
            </Button>

            {/* Notification Bell with Dropdown Toast */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setShowNotificationToast(!showNotificationToast)}
                className="p-2 rounded-xl border border-[#E8E2EF] bg-white text-[#706879] hover:text-[#5425A8] hover:bg-[#FAF8FD] transition-colors relative cursor-pointer"
                title="Notifications"
                aria-label="View notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="w-2 h-2 rounded-full bg-[#5425A8] absolute top-1.5 right-1.5 ring-2 ring-white" />
              </button>

              {showNotificationToast && (
                <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white border border-[#E8E2EF] shadow-lg p-3 z-50 text-xs animate-fadeIn">
                  <div className="flex items-center justify-between pb-2 border-b border-[#E8E2EF]">
                    <span className="font-bold text-[#211B2B]">Notifications</span>
                    <span className="text-[10px] text-[#5425A8] font-semibold">1 New</span>
                  </div>
                  <div className="py-2.5 space-y-2">
                    <div className="p-2 rounded-xl bg-[#FAF8FD] border border-[#E8E2EF]">
                      <div className="font-semibold text-[#211B2B]">Welcome to DKODER! 🚀</div>
                      <p className="text-[11px] text-[#706879] mt-0.5">
                        Solve your first coding challenge today to begin your streak.
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setShowNotificationToast(false);
                      if (onSelectTab) onSelectTab('coding');
                    }}
                    className="w-full py-1 text-center font-semibold text-[#5425A8] hover:underline text-[11px] cursor-pointer"
                  >
                    Start First Practice →
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </header>
  );
};
