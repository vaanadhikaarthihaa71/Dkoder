import React from 'react';
import { 
  Flame, 
  CheckCircle2, 
  ArrowRight, 
  Target 
} from 'lucide-react';
import { Button } from '../components/common/Button';

interface DashboardPageProps {
  onNavigate: (path: string) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const recentSubmissions = [
    { title: 'Rotate Matrix 90 Degrees In-Place', company: 'TCS', lang: 'Python', time: '10 mins ago', status: 'Accepted', xp: '+50 XP' },
    { title: 'Climbing Stairs with Variable Step Costs', company: 'Infosys', lang: 'Java', time: '2 hours ago', status: 'Accepted', xp: '+30 XP' },
    { title: 'Find Second Highest Department Salary', company: 'Accenture', lang: 'SQL', time: 'Yesterday', status: 'Accepted', xp: '+20 XP' },
    { title: 'Longest Substring Without Repeating Characters', company: 'Amazon', lang: 'Python', time: '2 days ago', status: 'Accepted', xp: '+50 XP' }
  ];

  const skillBreakdown = [
    { topic: 'Linear Arrays & Two Pointers', percent: 92, status: 'Mastered' },
    { topic: 'SQL Aggregations & Joins', percent: 85, status: 'Strong' },
    { topic: 'Sliding Window & Hashing', percent: 78, status: 'Proficient' },
    { topic: 'Dynamic Programming & Memoisation', percent: 64, status: 'Developing' },
    { topic: 'Graph Traversal (BFS & DFS)', percent: 48, status: 'Action Needed' }
  ];

  return (
    <div className="py-12 bg-[#FAF8FD] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb & Welcome */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-[#6F687A] font-medium mb-1 flex items-center gap-1.5">
              <button onClick={() => onNavigate('/')} className="hover:text-[#211B2B]">Home</button>
              <span>/</span>
              <span className="text-[#211B2B] font-semibold">Student Dashboard</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl overflow-hidden bg-[#FFD84D] border border-[#E8E2EF] shadow-xs shrink-0">
                <img src="/images/mascot-avatar.jpg" alt="DKODER Mascot" className="w-full h-full object-cover" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-[#211B2B] tracking-tight">
                  Welcome back, <span className="text-[#5425A8]">Vaanadhi K.</span>
                </h1>
                <p className="text-xs sm:text-sm text-[#6F687A]">
                  Anna University (CEG Campus) • Computer Science & Engineering (2026 Batch)
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate('/student/subscription')}
            >
              Subscription
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => onNavigate('/')}
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Resume Practice
            </Button>
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white rounded-xl border border-[#E8E2EF] p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs text-[#6F687A] mb-1">
              <span>Readiness Score</span>
              <Target className="w-4 h-4 text-[#5425A8]" />
            </div>
            <div className="text-2xl font-bold text-[#211B2B]">84 / 100</div>
            <div className="text-[11px] font-medium text-emerald-700 mt-0.5">Super Dream Tier</div>
          </div>

          <div className="bg-white rounded-xl border border-[#E8E2EF] p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs text-[#6F687A] mb-1">
              <span>Current Streak</span>
              <Flame className="w-4 h-4 fill-[#FFD84D] text-[#92400E]" />
            </div>
            <div className="text-2xl font-bold text-[#92400E]">14 Days</div>
            <div className="text-[11px] text-[#6F687A] mt-0.5">Top 5% consistent campus coders</div>
          </div>

          <div className="bg-white rounded-xl border border-[#E8E2EF] p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs text-[#6F687A] mb-1">
              <span>Total XP</span>
              <span className="text-xs font-semibold text-[#5425A8]">Level 8</span>
            </div>
            <div className="text-2xl font-bold text-[#211B2B]">4,280 XP</div>
            <div className="text-[11px] text-[#6F687A] mt-0.5">Senior Problem Solver</div>
          </div>

          <div className="bg-white rounded-xl border border-[#E8E2EF] p-4 shadow-xs">
            <div className="flex items-center justify-between text-xs text-[#6F687A] mb-1">
              <span>Problems Solved</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-bold text-[#211B2B]">84 Total</div>
            <div className="text-[11px] text-[#6F687A] mt-0.5">42 Easy • 32 Med • 10 Hard</div>
          </div>

        </div>

        {/* Middle: Active Tracks & Skill Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E8E2EF] p-6 shadow-xs space-y-4">
            <h3 className="text-sm font-bold text-[#211B2B] pb-2 border-b border-[#E8E2EF]">
              Active Career Tracks
            </h3>

            <div className="p-4 rounded-xl bg-[#FAF8FD] border border-[#E8E2EF] space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[#211B2B]">Service-Company Track (TCS & Infosys)</span>
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">72% Done</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#E8E2EF] overflow-hidden">
                <div className="h-full bg-[#5425A8] rounded-full" style={{ width: '72%' }} />
              </div>
              <div className="flex justify-between text-[11px] text-[#6F687A] pt-1">
                <span>142 of 280 Questions Solved</span>
                <button onClick={() => onNavigate('/bundles/infosys')} className="text-[#5425A8] font-medium hover:underline">
                  Resume Track →
                </button>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#FAF8FD] border border-[#E8E2EF] space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-[#211B2B]">Big Tech Software Engineer Track</span>
                <span className="text-[#92400E] font-semibold bg-[#FFF8D6] px-2 py-0.5 rounded">38% Done</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-[#E8E2EF] overflow-hidden">
                <div className="h-full bg-[#5425A8] rounded-full" style={{ width: '38%' }} />
              </div>
              <div className="flex justify-between text-[11px] text-[#6F687A] pt-1">
                <span>48 of 420 Questions Solved</span>
                <button onClick={() => onNavigate('/')} className="text-[#5425A8] font-medium hover:underline">
                  Resume Track →
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E8E2EF] p-6 shadow-xs space-y-3">
            <h3 className="text-sm font-bold text-[#211B2B] pb-2 border-b border-[#E8E2EF]">
              Topic Mastery Telemetry
            </h3>

            <div className="space-y-3">
              {skillBreakdown.map((sb, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-[#211B2B]">{sb.topic}</span>
                    <span className="text-[#6F687A]">{sb.percent}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-[#E8E2EF] overflow-hidden">
                    <div
                      className="h-full bg-[#5425A8] rounded-full"
                      style={{ width: `${sb.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Submissions History Table */}
        <div className="bg-white rounded-2xl border border-[#E8E2EF] p-6 shadow-xs">
          <h3 className="text-sm font-bold text-[#211B2B] pb-3 border-b border-[#E8E2EF] mb-3">
            Recent Practice Submissions
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-[#FAF8FD] text-[#6F687A] uppercase text-[10px] font-semibold border-b border-[#E8E2EF]">
                <tr>
                  <th className="p-2.5">Problem</th>
                  <th className="p-2.5">Target</th>
                  <th className="p-2.5">Language</th>
                  <th className="p-2.5">Time</th>
                  <th className="p-2.5">Verdict</th>
                  <th className="p-2.5 text-right">XP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8E2EF] text-[#211B2B] font-medium">
                {recentSubmissions.map((sub, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF8FD]">
                    <td className="p-2.5 font-semibold">{sub.title}</td>
                    <td className="p-2.5 text-[#6F687A]">{sub.company}</td>
                    <td className="p-2.5 font-mono text-[#6F687A]">{sub.lang}</td>
                    <td className="p-2.5 text-[#6F687A]">{sub.time}</td>
                    <td className="p-2.5">
                      <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-semibold text-[11px]">
                        {sub.status}
                      </span>
                    </td>
                    <td className="p-2.5 text-right font-semibold text-[#5425A8]">{sub.xp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
