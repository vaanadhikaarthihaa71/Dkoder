import React, { useState } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { RecruiterMarquee } from '../components/home/RecruiterMarquee';
import { AnxietyTicker } from '../components/home/AnxietyTicker';
import { FilterToolbar, FilterState } from '../components/home/FilterToolbar';
import { QuestionStream } from '../components/home/QuestionStream';
import { CodingLabModal } from '../components/home/CodingLabModal';
import { CareerTracks } from '../components/home/CareerTracks';
import { DailyPath } from '../components/home/DailyPath';
import { InstitutionalBanner } from '../components/home/InstitutionalBanner';
import { Leaderboard } from '../components/home/Leaderboard';
import { PricingGrid } from '../components/home/PricingGrid';
import { MOCK_QUESTIONS } from '../data/mockData';
import { Question } from '../types';
import { useToast } from '../context/ToastContext';

interface HomePageProps {
  onNavigate: (path: string) => void;
}

const INITIAL_FILTERS: FilterState = {
  company: 'All',
  packageRange: 'All',
  mode: 'All',
  difficulty: 'All',
  searchQuery: ''
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { addToast } = useToast();
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);
  const [solvedQuestionIds, setSolvedQuestionIds] = useState<Set<string>>(new Set(['q-102']));

  const handleFilterChange = (updated: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
  };

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
    addToast({
      type: 'info',
      title: 'Filters Reset',
      description: 'Showing all curated placement practice questions.'
    });
  };

  // Filter logic
  const filteredQuestions = MOCK_QUESTIONS.filter((q) => {
    // 1. Company
    if (filters.company !== 'All' && q.company !== filters.company) return false;

    // 2. Package Range
    if (filters.packageRange !== 'All' && q.packageCategory !== filters.packageRange) return false;

    // 3. Difficulty
    if (filters.difficulty !== 'All' && q.difficulty !== filters.difficulty) return false;

    // 4. Mode
    if (filters.mode === 'Core Coding' && q.format !== 'Coding') return false;
    if (filters.mode === 'MCQ & Tech' && q.format !== 'MCQ') return false;
    if (filters.mode === 'Aptitude' && !q.topicTags.includes('Aptitude')) return false;
    if (filters.mode === 'System Design' && !q.topicTags.includes('System Design')) return false;

    // 5. Search query
    if (filters.searchQuery.trim()) {
      const qText = filters.searchQuery.toLowerCase();
      const matchTitle = q.title.toLowerCase().includes(qText);
      const matchTopic = q.topic.toLowerCase().includes(qText);
      const matchCompany = q.company.toLowerCase().includes(qText);
      const matchTags = q.topicTags.some((t) => t.toLowerCase().includes(qText));
      if (!matchTitle && !matchTopic && !matchCompany && !matchTags) return false;
    }

    return true;
  });

  const handleSurpriseMe = () => {
    const pool = filteredQuestions.length > 0 ? filteredQuestions : MOCK_QUESTIONS;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setSelectedQuestion(random);
    addToast({
      type: 'success',
      title: '🎲 Surprise Question Picked!',
      description: `Opened: "${random.title}" (${random.company} • ${random.difficulty})`
    });
  };

  const handleSuccessSolved = (qId: string) => {
    setSolvedQuestionIds((prev) => new Set([...prev, qId]));
  };

  const scrollToQuestions = () => {
    const el = document.getElementById('practice-stream');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Section */}
      <HeroSection
        onStartPracticing={scrollToQuestions}
        onExploreBundles={() => onNavigate('/bundles/infosys')}
        onApplyMou={() => onNavigate('/partner-mou')}
      />

      {/* 2. Recruiter Logo Marquee */}
      <RecruiterMarquee />

      {/* 3. Student Anxiety Ticker & Tag Cloud */}
      <AnxietyTicker 
        onNavigateToTrack={() => {
          scrollToQuestions();
        }} 
      />

      {/* 4. Question Stream & Filter Toolbar Section */}
      <section className="py-16 bg-[#FAF8FF] border-b border-purple-100" id="practice-stream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight">
              Dynamic Practice Stream & <span className="text-yellow-600">Company Filters</span>
            </h2>
            <p className="mt-3 text-base text-purple-800/80">
              Filter by recruiter, salary package, or difficulty. Launch the live in-browser compiler directly on any card.
            </p>
          </div>

          <FilterToolbar
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleResetFilters}
            onSurpriseMe={handleSurpriseMe}
            matchingCount={filteredQuestions.length}
            totalCount={MOCK_QUESTIONS.length}
          />

          <QuestionStream
            questions={filteredQuestions}
            solvedIds={solvedQuestionIds}
            onSelectQuestion={(q) => setSelectedQuestion(q)}
            onResetFilters={handleResetFilters}
          />

        </div>
      </section>

      {/* 5. Career Track Breakdown Cards */}
      <CareerTracks
        solvedCount={solvedQuestionIds.size}
        onNavigate={onNavigate}
      />

      {/* 6. Daily Path Interactive Checklist */}
      <DailyPath
        onStartTaskPractice={() => scrollToQuestions()}
      />

      {/* 7. Institutional Placement LMS Analytics Banner */}
      <InstitutionalBanner
        onNavigate={onNavigate}
      />

      {/* 8. Campus Leaderboard Dashboard */}
      <Leaderboard />

      {/* 9. Pricing & Subscription Grid */}
      <PricingGrid
        onNavigate={onNavigate}
      />

      {/* Live Coding Lab Modal */}
      <CodingLabModal
        question={selectedQuestion}
        isOpen={!!selectedQuestion}
        onClose={() => setSelectedQuestion(null)}
        onSuccessSolved={handleSuccessSolved}
      />

    </div>
  );
};
