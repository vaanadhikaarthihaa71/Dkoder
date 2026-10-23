import React, { useState } from 'react';
import { STUDENT_RANKINGS } from '../../data/mockData';
import { StudentRanking } from '../../types';
import { 
  Trophy, 
  Flame, 
  Zap, 
  Search, 
  Filter, 
  Medal, 
  Crown, 
  GraduationCap, 
  Sparkles,
  CheckCircle2,
  TrendingUp
} from 'lucide-react';
import { Badge } from '../common/Badge';

export const Leaderboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'xp' | 'active' | 'hard'>('xp');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('All');

  const collegesList = ['All', 'Anna University', 'VIT Vellore', 'PSG College', 'SRM', 'NIT Trichy', 'BITS Pilani'];

  // Filter students based on search and college
  const filteredStudents = STUDENT_RANKINGS.filter((student) => {
    const matchesSearch = 
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.college.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCollege = 
      selectedCollege === 'All' || 
      student.college.toLowerCase().includes(selectedCollege.toLowerCase());

    return matchesSearch && matchesCollege;
  });

  // Sort according to active tab
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (activeTab === 'xp') return b.xp - a.xp;
    if (activeTab === 'active') return b.streakDays - a.streakDays;
    if (activeTab === 'hard') return b.hardSolved - a.hardSolved;
    return a.rank - b.rank;
  });

  // Top 3 for podium
  const topThree = sortedStudents.slice(0, 3);
  const maxXP = Math.max(...STUDENT_RANKINGS.map(s => s.xp));

  return (
    <section className="py-16 bg-[#FAF8FF] border-b border-purple-100" id="leaderboard">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5 text-yellow-600" />
            <span>Campus Leaderboard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight">
            Celebrate Consistent <span className="text-yellow-600">Problem Solvers</span>
          </h2>
          <p className="mt-3 text-base text-purple-800/80">
            Real-time motivation through consistency streaks and peer benchmarking.
          </p>
          <div className="mt-2 text-xs font-semibold text-purple-600 bg-purple-50 inline-block px-3 py-1 rounded-full border border-purple-200">
            * Sample demo student records used for illustrative platform benchmarking
          </div>
        </div>

        {/* Top 3 Highlighted Podium */}
        {topThree.length >= 3 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12 items-end">
            
            {/* Rank 2 (Silver) */}
            <div className="order-2 md:order-1 bg-white rounded-3xl border-2 border-slate-200 p-6 text-center shadow-lg hover:border-purple-300 transition-all flex flex-col items-center">
              <div className="relative mb-3">
                <img
                  src={topThree[1].avatarUrl}
                  alt={topThree[1].name}
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-slate-300"
                />
                <div className="absolute -bottom-2 -right-1 w-7 h-7 rounded-full bg-slate-200 text-slate-800 font-extrabold text-xs flex items-center justify-center border-2 border-white shadow">
                  #2
                </div>
              </div>
              <h4 className="font-extrabold text-purple-950 text-base">{topThree[1].name}</h4>
              <p className="text-xs text-purple-700/80 line-clamp-1 mt-0.5">{topThree[1].college}</p>
              
              <div className="mt-4 pt-3 border-t border-purple-100 w-full flex items-center justify-around text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Streak</span>
                  <span className="font-bold text-amber-600 flex items-center gap-0.5 justify-center mt-0.5">
                    <Flame className="w-3.5 h-3.5" />
                    {topThree[1].streakDays}d
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Total XP</span>
                  <span className="font-bold text-purple-900 flex items-center gap-0.5 justify-center mt-0.5">
                    <Zap className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    {topThree[1].xp.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Rank 1 (Gold - Elevated Champion) */}
            <div className="order-1 md:order-2 bg-gradient-to-b from-yellow-50 via-white to-purple-50 rounded-3xl border-2 border-yellow-400 p-8 text-center shadow-2xl relative md:-translate-y-4 flex flex-col items-center">
              {/* Crown Badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-yellow-400 text-purple-950 px-3.5 py-1 rounded-full text-xs font-extrabold flex items-center gap-1.5 shadow-md">
                <Crown className="w-4 h-4 fill-purple-950" />
                <span>#1 Ranked</span>
              </div>

              <div className="relative mb-3 mt-1">
                <img
                  src={topThree[0].avatarUrl}
                  alt={topThree[0].name}
                  className="w-24 h-24 rounded-full object-cover ring-4 ring-yellow-400"
                />
                <div className="absolute -bottom-2 -right-1 w-8 h-8 rounded-full bg-yellow-400 text-purple-950 font-extrabold text-sm flex items-center justify-center border-2 border-white shadow">
                  🥇
                </div>
              </div>
              <h4 className="font-black text-purple-950 text-lg">{topThree[0].name}</h4>
              <p className="text-xs font-semibold text-purple-700 line-clamp-1 mt-0.5">{topThree[0].college}</p>
              
              <div className="mt-4 pt-3 border-t border-yellow-200/60 w-full flex items-center justify-around text-xs">
                <div>
                  <span className="text-purple-400 block text-[10px] uppercase font-bold">Streak</span>
                  <span className="font-bold text-amber-600 flex items-center gap-0.5 justify-center mt-0.5">
                    <Flame className="w-3.5 h-3.5" />
                    {topThree[0].streakDays} Days
                  </span>
                </div>
                <div>
                  <span className="text-purple-400 block text-[10px] uppercase font-bold">Total XP</span>
                  <span className="font-extrabold text-purple-950 flex items-center gap-0.5 justify-center mt-0.5">
                    <Zap className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    {topThree[0].xp.toLocaleString()} XP
                  </span>
                </div>
              </div>
            </div>

            {/* Rank 3 (Bronze) */}
            <div className="order-3 bg-white rounded-3xl border-2 border-amber-200 p-6 text-center shadow-lg hover:border-purple-300 transition-all flex flex-col items-center">
              <div className="relative mb-3">
                <img
                  src={topThree[2].avatarUrl}
                  alt={topThree[2].name}
                  className="w-20 h-20 rounded-full object-cover ring-4 ring-amber-300"
                />
                <div className="absolute -bottom-2 -right-1 w-7 h-7 rounded-full bg-amber-200 text-amber-900 font-extrabold text-xs flex items-center justify-center border-2 border-white shadow">
                  #3
                </div>
              </div>
              <h4 className="font-extrabold text-purple-950 text-base">{topThree[2].name}</h4>
              <p className="text-xs text-purple-700/80 line-clamp-1 mt-0.5">{topThree[2].college}</p>
              
              <div className="mt-4 pt-3 border-t border-purple-100 w-full flex items-center justify-around text-xs">
                <div>
                  <span className="text-amber-400 block text-[10px] uppercase font-bold">Streak</span>
                  <span className="font-bold text-amber-600 flex items-center gap-0.5 justify-center mt-0.5">
                    <Flame className="w-3.5 h-3.5" />
                    {topThree[2].streakDays}d
                  </span>
                </div>
                <div>
                  <span className="text-amber-400 block text-[10px] uppercase font-bold">Total XP</span>
                  <span className="font-bold text-purple-900 flex items-center gap-0.5 justify-center mt-0.5">
                    <Zap className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    {topThree[2].xp.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Filter Controls Bar: Tabs, Search & College Filter */}
        <div className="bg-white rounded-2xl border border-purple-200 p-4 shadow-sm mb-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Segmented Tabs */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-purple-50 border border-purple-200 w-full lg:w-auto">
            <button
              onClick={() => setActiveTab('xp')}
              className={`flex-1 lg:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'xp'
                  ? 'bg-purple-900 text-white shadow'
                  : 'text-purple-700 hover:text-purple-950'
              }`}
            >
              XP Leaders
            </button>
            <button
              onClick={() => setActiveTab('active')}
              className={`flex-1 lg:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'active'
                  ? 'bg-purple-900 text-white shadow'
                  : 'text-purple-700 hover:text-purple-950'
              }`}
            >
              Most Active Solvers
            </button>
            <button
              onClick={() => setActiveTab('hard')}
              className={`flex-1 lg:flex-none px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'hard'
                  ? 'bg-purple-900 text-white shadow'
                  : 'text-purple-700 hover:text-purple-950'
              }`}
            >
              Hard Solvers
            </button>
          </div>

          {/* Search & College Selector */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="w-3.5 h-3.5 text-purple-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search student or college..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-purple-200 text-xs text-purple-950 placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="w-full sm:w-auto">
              <select
                value={selectedCollege}
                onChange={(e) => setSelectedCollege(e.target.value)}
                className="w-full sm:w-auto px-3 py-1.5 rounded-xl border border-purple-200 text-xs font-bold text-purple-950 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
              >
                {collegesList.map((col) => (
                  <option key={col} value={col}>
                    {col === 'All' ? 'All Partner Institutions' : col}
                  </option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Scrollable Ranking Table */}
        <div className="bg-white rounded-2xl border border-purple-200 shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-purple-950 text-white uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="py-3.5 px-4">Rank</th>
                  <th className="py-3.5 px-4">Student</th>
                  <th className="py-3.5 px-4 hidden md:table-cell">Institution</th>
                  <th className="py-3.5 px-4 text-center">Streak</th>
                  <th className="py-3.5 px-4 hidden sm:table-cell">Relative Progress</th>
                  <th className="py-3.5 px-4 text-right">Placement XP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100">
                {sortedStudents.map((student, idx) => {
                  const relativePct = Math.round((student.xp / maxXP) * 100);

                  return (
                    <tr 
                      key={student.id}
                      className="hover:bg-purple-50/60 transition-colors"
                    >
                      {/* Rank */}
                      <td className="py-3.5 px-4 font-bold text-purple-950">
                        {idx === 0 ? '🥇 1' : idx === 1 ? '🥈 2' : idx === 2 ? '🥉 3' : `#${idx + 1}`}
                      </td>

                      {/* Student info */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <img
                            src={student.avatarUrl}
                            alt={student.name}
                            className="w-8 h-8 rounded-full object-cover border border-purple-200"
                          />
                          <div>
                            <span className="font-bold text-purple-950 block">{student.name}</span>
                            <span className="text-[11px] text-purple-600 block md:hidden line-clamp-1">
                              {student.college}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* College (md+) */}
                      <td className="py-3.5 px-4 text-purple-800 font-medium hidden md:table-cell">
                        {student.college}
                      </td>

                      {/* Streak */}
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-flex items-center gap-1 font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200 text-xs">
                          <Flame className="w-3 h-3 fill-amber-500" />
                          {student.streakDays}d
                        </span>
                      </td>

                      {/* Progress Bar (sm+) */}
                      <td className="py-3.5 px-4 hidden sm:table-cell">
                        <div className="w-full max-w-xs">
                          <div className="flex items-center justify-between text-[11px] text-purple-600 font-medium mb-1">
                            <span>{student.questionsSolved} Solved</span>
                            <span>{student.hardSolved} Hard</span>
                          </div>
                          <div className="w-full h-1.5 rounded-full bg-purple-100 overflow-hidden">
                            <div
                              className="h-full bg-yellow-400 rounded-full"
                              style={{ width: `${relativePct}%` }}
                            />
                          </div>
                        </div>
                      </td>

                      {/* XP */}
                      <td className="py-3.5 px-4 text-right font-extrabold text-purple-950">
                        <span className="inline-flex items-center gap-1 text-purple-950">
                          <Zap className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                          {student.xp.toLocaleString()}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
