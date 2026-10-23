import React, { useState } from 'react';
import { 
  RotateCcw, 
  Dices, 
  Search,
  SlidersHorizontal,
  ChevronDown
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
  const [isMoreFiltersOpen, setIsMoreFiltersOpen] = useState(false);

  // Count active secondary filters
  const activeSecondaryCount = [
    filters.packageRange !== 'All',
    filters.mode !== 'All',
    filters.difficulty !== 'All'
  ].filter(Boolean).length;

  return (
    <div className="bg-white rounded-2xl border border-[#E8E2EF] p-3 sm:p-4 shadow-xs mb-6">
      
      {/* Primary Toolbar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">
        
        {/* Search Input */}
        <div className="relative w-full md:flex-1">
          <Search className="w-4 h-4 text-[#706879] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions or topics..."
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#E8E2EF] bg-[#FAF8FD] text-xs sm:text-sm text-[#211B2B] placeholder-[#706879] focus:outline-none focus:ring-1 focus:ring-[#5425A8] focus:bg-white transition-all"
            aria-label="Search questions"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#706879] hover:text-[#211B2B]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Primary Filter: Company Quick Select */}
        <div className="w-full md:w-48 shrink-0">
          <select
            value={filters.company}
            onChange={(e) => onFilterChange({ company: e.target.value as CompanyTag | 'All' })}
            className="w-full px-3 py-2 rounded-xl border border-[#E8E2EF] bg-white text-xs font-semibold text-[#211B2B] focus:outline-none focus:ring-1 focus:ring-[#5425A8] cursor-pointer"
          >
            {COMPANIES.map((c) => (
              <option key={c} value={c}>{c === 'All' ? 'All Recruiters' : c}</option>
            ))}
          </select>
        </div>

        {/* Actions & More Filters Toggle */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end shrink-0">
          <button
            onClick={() => setIsMoreFiltersOpen(!isMoreFiltersOpen)}
            className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
              isMoreFiltersOpen || activeSecondaryCount > 0
                ? 'bg-[#F1E9FF] border-[#5425A8] text-[#5425A8]'
                : 'bg-white border-[#E8E2EF] text-[#211B2B] hover:bg-[#FAF8FD]'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
            {activeSecondaryCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#5425A8] text-white text-[10px] font-bold flex items-center justify-center">
                {activeSecondaryCount}
              </span>
            )}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isMoreFiltersOpen ? 'rotate-180' : ''}`} />
          </button>

          <Button
            variant="primary"
            size="sm"
            onClick={onSurpriseMe}
            leftIcon={<Dices className="w-3.5 h-3.5" />}
          >
            Surprise Me
          </Button>

          <Button
            variant="outline"
            size="sm"
            onClick={onReset}
            leftIcon={<RotateCcw className="w-3.5 h-3.5 text-[#706879]" />}
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Collapsible Secondary Filters Panel */}
      {isMoreFiltersOpen && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 mt-3 border-t border-[#E8E2EF] animate-in fade-in duration-200">
          
          {/* Package Range */}
          <div>
            <label className="block text-[11px] font-semibold text-[#706879] uppercase mb-1">
              Package Tier
            </label>
            <select
              value={filters.packageRange}
              onChange={(e) => onFilterChange({ packageRange: e.target.value as PackageRange })}
              className="w-full px-2.5 py-1.5 rounded-lg border border-[#E8E2EF] bg-white text-xs font-medium text-[#211B2B] focus:outline-none focus:ring-1 focus:ring-[#5425A8] cursor-pointer"
            >
              {PACKAGES.map((p) => (
                <option key={p} value={p}>{p === 'All' ? 'All Packages' : p}</option>
              ))}
            </select>
          </div>

          {/* Prep Mode */}
          <div>
            <label className="block text-[11px] font-semibold text-[#706879] uppercase mb-1">
              Assessment Format
            </label>
            <select
              value={filters.mode}
              onChange={(e) => onFilterChange({ mode: e.target.value as PrepMode })}
              className="w-full px-2.5 py-1.5 rounded-lg border border-[#E8E2EF] bg-white text-xs font-medium text-[#211B2B] focus:outline-none focus:ring-1 focus:ring-[#5425A8] cursor-pointer"
            >
              {MODES.map((m) => (
                <option key={m} value={m}>{m === 'All' ? 'All Formats' : m}</option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label className="block text-[11px] font-semibold text-[#706879] uppercase mb-1">
              Difficulty
            </label>
            <select
              value={filters.difficulty}
              onChange={(e) => onFilterChange({ difficulty: e.target.value as Difficulty | 'All' })}
              className="w-full px-2.5 py-1.5 rounded-lg border border-[#E8E2EF] bg-white text-xs font-medium text-[#211B2B] focus:outline-none focus:ring-1 focus:ring-[#5425A8] cursor-pointer"
            >
              {DIFFICULTIES.map((d) => (
                <option key={d} value={d}>{d === 'All' ? 'All Difficulties' : d}</option>
              ))}
            </select>
          </div>

        </div>
      )}

      {/* Results Counter Strip */}
      <div className="flex items-center justify-between text-xs text-[#706879] pt-2.5 mt-2.5 border-t border-[#E8E2EF]">
        <span>Showing <strong className="text-[#211B2B]">{matchingCount}</strong> of {totalCount} practice questions</span>
        <span className="text-[11px] text-[#5425A8] font-medium">Click any question for details</span>
      </div>

    </div>
  );
};
