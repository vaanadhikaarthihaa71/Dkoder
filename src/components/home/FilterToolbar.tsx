import React from 'react';
import { 
  RotateCcw, 
  Dices, 
  Search, 
  Filter, 
  Building, 
  IndianRupee, 
  Zap, 
  Gauge 
} from 'lucide-react';
import { Button } from '../common/Button';
import { CompanyTag, PackageRange, PrepMode, Difficulty } from '../../types';

export interface FilterState {
  company: CompanyTag | 'All';
  packageRange: PackageRange;
  mode: PrepMode;
  difficulty: Difficulty | 'All';
  searchQuery: string;
}

interface FilterToolbarProps {
  filters: FilterState;
  onFilterChange: (filters: Partial<FilterState>) => void;
  onReset: () => void;
  onSurpriseMe: () => void;
  matchingCount: number;
  totalCount: number;
}

const COMPANIES: (CompanyTag | 'All')[] = [
  'All',
  'TCS',
  'Infosys',
  'Accenture',
  'Microsoft',
  'Amazon',
  'Google',
  'Wipro',
  'Cognizant'
];

const PACKAGES: PackageRange[] = [
  'All',
  '< 4 LPA',
  '4 - 7 LPA',
  '7 - 12 LPA',
  '12 - 20 LPA',
  '20+ LPA (Super Dream)'
];

const MODES: PrepMode[] = [
  'All',
  'Core Coding',
  'Aptitude',
  'MCQ & Tech',
  'System Design'
];

const DIFFICULTIES: (Difficulty | 'All')[] = [
  'All',
  'Easy',
  'Medium',
  'Hard'
];

export const FilterToolbar: React.FC<FilterToolbarProps> = ({
  filters,
  onFilterChange,
  onReset,
  onSurpriseMe,
  matchingCount,
  totalCount
}) => {
  return (
    <div className="bg-white rounded-2xl border-2 border-purple-200/90 p-5 shadow-lg shadow-purple-900/5 mb-8">
      
      {/* Top Search & Actions Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-purple-100">
        
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <Search className="w-4 h-4 text-purple-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by topic, algorithm, or company..."
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-purple-200 bg-purple-50/40 text-sm text-purple-950 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:bg-white transition-all"
            aria-label="Search questions"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-purple-400 hover:text-purple-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Action Controls: Surprise Me & Reset */}
        <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
          <Button
            variant="primary"
            size="sm"
            onClick={onSurpriseMe}
            leftIcon={<Dices className="w-4 h-4" />}
            className="font-bold text-xs sm:text-sm"
          >
            Surprise Me
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={onReset}
            leftIcon={<RotateCcw className="w-3.5 h-3.5 text-purple-600" />}
            className="text-xs sm:text-sm text-purple-900 border-purple-300 hover:bg-purple-50"
          >
            Reset Filters
          </Button>
        </div>
      </div>

      {/* Selectors Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
        
        {/* 1. Company Selector */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-bold text-purple-900 uppercase tracking-wider mb-1.5">
            <Building className="w-3.5 h-3.5 text-yellow-600" />
            <span>Target Company</span>
          </label>
          <select
            value={filters.company}
            onChange={(e) => onFilterChange({ company: e.target.value as CompanyTag | 'All' })}
            className="w-full px-3 py-2 rounded-xl border border-purple-200 bg-white text-xs sm:text-sm font-semibold text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
            aria-label="Filter by target company"
          >
            {COMPANIES.map((comp) => (
              <option key={comp} value={comp}>
                {comp === 'All' ? 'All Recruiters' : comp}
              </option>
            ))}
          </select>
        </div>

        {/* 2. Package Range Selector */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-bold text-purple-900 uppercase tracking-wider mb-1.5">
            <IndianRupee className="w-3.5 h-3.5 text-yellow-600" />
            <span>Package Range</span>
          </label>
          <select
            value={filters.packageRange}
            onChange={(e) => onFilterChange({ packageRange: e.target.value as PackageRange })}
            className="w-full px-3 py-2 rounded-xl border border-purple-200 bg-white text-xs sm:text-sm font-semibold text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
            aria-label="Filter by salary package range"
          >
            {PACKAGES.map((pkg) => (
              <option key={pkg} value={pkg}>
                {pkg === 'All' ? 'All Salary Packages' : pkg}
              </option>
            ))}
          </select>
        </div>

        {/* 3. Prep Mode Selector */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-bold text-purple-900 uppercase tracking-wider mb-1.5">
            <Zap className="w-3.5 h-3.5 text-yellow-600" />
            <span>Preparation Mode</span>
          </label>
          <select
            value={filters.mode}
            onChange={(e) => onFilterChange({ mode: e.target.value as PrepMode })}
            className="w-full px-3 py-2 rounded-xl border border-purple-200 bg-white text-xs sm:text-sm font-semibold text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
            aria-label="Filter by preparation mode"
          >
            {MODES.map((mode) => (
              <option key={mode} value={mode}>
                {mode === 'All' ? 'All Modes (Coding & MCQ)' : mode}
              </option>
            ))}
          </select>
        </div>

        {/* 4. Difficulty Level Selector */}
        <div>
          <label className="flex items-center gap-1.5 text-xs font-bold text-purple-900 uppercase tracking-wider mb-1.5">
            <Gauge className="w-3.5 h-3.5 text-yellow-600" />
            <span>Difficulty Level</span>
          </label>
          <select
            value={filters.difficulty}
            onChange={(e) => onFilterChange({ difficulty: e.target.value as Difficulty | 'All' })}
            className="w-full px-3 py-2 rounded-xl border border-purple-200 bg-white text-xs sm:text-sm font-semibold text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
            aria-label="Filter by difficulty"
          >
            {DIFFICULTIES.map((diff) => (
              <option key={diff} value={diff}>
                {diff === 'All' ? 'All Difficulties' : diff}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Results Counter & Active Filters Tagline */}
      <div className="flex flex-wrap items-center justify-between gap-2 mt-4 pt-3 border-t border-purple-100 text-xs">
        <div className="font-bold text-purple-950">
          Showing <span className="text-yellow-600 font-extrabold">{matchingCount}</span> of {totalCount} practice questions
        </div>
        <div className="text-purple-600/80 font-medium">
          Company tags, frequency and difficulty are aligned with placement patterns
        </div>
      </div>

    </div>
  );
};
