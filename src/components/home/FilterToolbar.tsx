import React from 'react';
import { 
  RotateCcw, 
  Dices, 
  Search
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
    <div className="bg-white rounded-2xl border border-[#E8E2EF] p-4 shadow-xs mb-6">
      
      {/* Top Search & Actions */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 pb-3 border-b border-[#E8E2EF]">
        
        {/* Search Input */}
        <div className="relative w-full md:max-w-md">
          <Search className="w-4 h-4 text-[#6F687A] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search topic, company, or algorithm..."
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#E8E2EF] bg-[#FAF8FD] text-xs sm:text-sm text-[#211B2B] placeholder-[#6F687A] focus:outline-none focus:ring-1 focus:ring-[#5425A8] focus:bg-white transition-all"
            aria-label="Search questions"
          />
          {filters.searchQuery && (
            <button
              onClick={() => onFilterChange({ searchQuery: '' })}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#6F687A] hover:text-[#211B2B]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Surprise Me & Reset */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
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
            leftIcon={<RotateCcw className="w-3.5 h-3.5 text-[#6F687A]" />}
          >
            Reset
          </Button>
        </div>
      </div>

      {/* Filter Dropdowns Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-3">
        
        {/* 1. Company */}
        <div>
          <label className="block text-[11px] font-semibold text-[#6F687A] uppercase mb-1">
            Company
          </label>
          <select
            value={filters.company}
            onChange={(e) => onFilterChange({ company: e.target.value as CompanyTag | 'All' })}
            className="w-full px-2.5 py-1.5 rounded-lg border border-[#E8E2EF] bg-white text-xs font-medium text-[#211B2B] focus:outline-none focus:ring-1 focus:ring-[#5425A8] cursor-pointer"
          >
            {COMPANIES.map((c) => (
              <option key={c} value={c}>{c === 'All' ? 'All Companies' : c}</option>
            ))}
          </select>
        </div>

        {/* 2. Package */}
        <div>
          <label className="block text-[11px] font-semibold text-[#6F687A] uppercase mb-1">
            Package Range
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

        {/* 3. Prep Mode */}
        <div>
          <label className="block text-[11px] font-semibold text-[#6F687A] uppercase mb-1">
            Prep Mode
          </label>
          <select
            value={filters.mode}
            onChange={(e) => onFilterChange({ mode: e.target.value as PrepMode })}
            className="w-full px-2.5 py-1.5 rounded-lg border border-[#E8E2EF] bg-white text-xs font-medium text-[#211B2B] focus:outline-none focus:ring-1 focus:ring-[#5425A8] cursor-pointer"
          >
            {MODES.map((m) => (
              <option key={m} value={m}>{m === 'All' ? 'All Modes' : m}</option>
            ))}
          </select>
        </div>

        {/* 4. Difficulty */}
        <div>
          <label className="block text-[11px] font-semibold text-[#6F687A] uppercase mb-1">
            Difficulty
          </label>
          <select
            value={filters.difficulty}
            onChange={(e) => onFilterChange({ difficulty: e.target.value as Difficulty | 'All' })}
            className="w-full px-2.5 py-1.5 rounded-lg border border-[#E8E2EF] bg-white text-xs font-medium text-[#211B2B] focus:outline-none focus:ring-1 focus:ring-[#5425A8] cursor-pointer"
          >
            {DIFFICULTIES.map((d) => (
              <option key={d} value={d}>{d === 'All' ? 'All Levels' : d}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Results Counter */}
      <div className="flex items-center justify-between text-xs text-[#6F687A] pt-3 mt-3 border-t border-[#E8E2EF]">
        <span>Showing <strong className="text-[#211B2B]">{matchingCount}</strong> of {totalCount} practice questions</span>
        <span className="hidden sm:inline">Recruiter frequency verified</span>
      </div>

    </div>
  );
};
