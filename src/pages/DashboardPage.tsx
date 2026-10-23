import React from 'react';
import { 
  LayoutDashboard, 
  Flame, 
  Zap, 
  CheckCircle2, 
  Clock, 
  Trophy, 
  ArrowRight, 
  Code2, 
  TrendingUp, 
  Target, 
  Sparkles,
  BookOpen,
  Calendar,
  AlertCircle
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
    <div className="py-12 bg-[#FAF8FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb & Welcome */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs text-purple-700 font-semibold mb-1 flex items-center gap-2">
              <button onClick={() => onNavigate('/')} className="hover:text-purple-950">Home</button>
              <span>/</span>
              <span className="text-purple-950 font-bold">Student Placement Dashboard</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-purple-950 tracking-tight">
              Welcome back, <span className="text-yellow-600">Vaanadhi K.</span>
            </h1>
            <p className="text-xs sm:text-sm text-purple-700/80">
              Anna University (CEG Campus) • Computer Science & Engineering (2026 Batch)
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate('/student/subscription')}
              className="text-xs border-purple-300"
            >
              Manage Subscription
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => onNavigate('/')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="font-bold text-xs"
            >
              Resume Practice Stream
            </Button>
          </div>
        </div>

        {/* 4 Overview Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Card 1: Readiness Score */}
          <div className="bg-white rounded-2xl border-2 border-purple-200 p-5 shadow-sm">
            <div className="flex items-center justify-between text-purple-600 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Placement Readiness</span>
              <Target className="w-4 h-4 text-yellow-600" />
            </div>
            <div className="text-3xl font-black text-purple-950">84 / 100</div>
            <div className="text-xs font-semibold text-emerald-600 mt-1 flex items-center gap-1">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Super Dream Qualified (15+ LPA)</span>
            </div>
          </div>

          {/* Card 2: Streak */}
          <div className="bg-white rounded-2xl border-2 border-purple-200 p-5 shadow-sm">
            <div className="flex items-center justify-between text-purple-600 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Solving Streak</span>
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
            </div>
            <div className="text-3xl font-black text-amber-600">14 Days</div>
            <div className="text-xs font-semibold text-purple-700 mt-1">
              Top 4% consistent campus coders
            </div>
          </div>

          {/* Card 3: Total XP */}
          <div className="bg-white rounded-2xl border-2 border-purple-200 p-5 shadow-sm">
            <div className="flex items-center justify-between text-purple-600 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Placement XP</span>
              <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            </div>
            <div className="text-3xl font-black text-purple-950">4,280 XP</div>
            <div className="text-xs font-semibold text-yellow-700 mt-1">
              Level 8 • Senior Problem Solver
            </div>
          </div>

          {/* Card 4: Questions Solved */}
          <div className="bg-white rounded-2xl border-2 border-purple-200 p-5 shadow-sm">
            <div className="flex items-center justify-between text-purple-600 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider">Total Questions</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-3xl font-black text-purple-950">84 Solved</div>
            <div className="text-xs text-purple-600 mt-1 flex items-center gap-2">
              <span>42 Easy</span> • <span>32 Med</span> • <span>10 Hard</span>
            </div>
          </div>

        </div>

        {/* Middle Section: Active Tracks & Topic Skill Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Active Prep Tracks (Span 7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-purple-200 p-6 shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-purple-100">
              <h3 className="text-lg font-bold text-purple-950">
                Active Enrolled Career Tracks
              </h3>
              <span className="text-xs font-bold text-purple-600">
                2 Tracks Active
              </span>
            </div>

            {/* Track 1 */}
            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-purple-950">Service-Company Track (TCS & Infosys)</h4>
                  <p className="text-xs text-purple-700">Target: 3.5 - 7.5 LPA Ninja/Digital Roles</p>
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  72% Done
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-purple-200 overflow-hidden">
                <div className="h-full bg-yellow-400 rounded-full" style={{ width: '72%' }} />
              </div>
              <div className="flex items-center justify-between text-xs text-purple-600">
                <span>142 of 280 Questions Solved</span>
                <button 
                  onClick={() => onNavigate('/bundles/infosys')} 
                  className="font-bold text-purple-950 hover:underline"
                >
                  Continue Track →
                </button>
              </div>
            </div>

            {/* Track 2 */}
            <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-purple-950">Big Tech Software Engineer Track</h4>
                  <p className="text-xs text-purple-700">Target: 18.0 - 45.0 LPA Microsoft, Amazon, Google</p>
                </div>
                <span className="text-xs font-bold text-yellow-800 bg-yellow-200 px-2.5 py-0.5 rounded-full">
                  38% Done
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-purple-200 overflow-hidden">
                <div className="h-full bg-purple-800 rounded-full" style={{ width: '38%' }} />
              </div>
              <div className="flex items-center justify-between text-xs text-purple-600">
                <span>48 of 420 Questions Solved</span>
                <button 
                  onClick={() => onNavigate('/')} 
                  className="font-bold text-purple-950 hover:underline"
                >
                  Continue Track →
                </button>
              </div>
            </div>

          </div>

          {/* Topic Skill Breakdown (Span 5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border-2 border-purple-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-purple-100">
              <h3 className="text-lg font-bold text-purple-950">
                Topic Mastery Radar
              </h3>
              <span className="text-xs font-bold text-yellow-600">
                AI Evaluated
              </span>
            </div>

            <div className="space-y-4">
              {skillBreakdown.map((sb, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-purple-950">{sb.topic}</span>
                    <span className={`font-bold ${sb.percent > 75 ? 'text-emerald-700' : sb.percent > 55 ? 'text-yellow-700' : 'text-purple-700'}`}>
                      {sb.percent}% ({sb.status})
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-purple-100 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        sb.percent > 75 ? 'bg-emerald-500' : sb.percent > 55 ? 'bg-yellow-400' : 'bg-purple-600'
                      }`}
                      style={{ width: `${sb.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-yellow-50 border border-yellow-200 text-xs text-amber-950 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Recommendation:</strong> Solve 3 Graph BFS questions this week to boost your Tier-1 readiness index above 90%.
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Recent Submissions Log Table */}
        <div className="bg-white rounded-3xl border-2 border-purple-200 p-6 shadow-sm">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-100">
            <h3 className="text-lg font-bold text-purple-950">
              Recent In-Browser Submissions
            </h3>
            <span className="text-xs text-purple-600 font-semibold">
              Live Evaluation History
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-purple-950 text-white uppercase text-[11px] font-bold">
                <tr>
                  <th className="p-3">Problem Title</th>
                  <th className="p-3">Target Company</th>
                  <th className="p-3">Language</th>
                  <th className="p-3">Submitted</th>
                  <th className="p-3">Verdict</th>
                  <th className="p-3 text-right">XP Earned</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 font-medium">
                {recentSubmissions.map((sub, idx) => (
                  <tr key={idx} className="hover:bg-purple-50/50">
                    <td className="p-3 font-bold text-purple-950">{sub.title}</td>
                    <td className="p-3 text-purple-700">{sub.company}</td>
                    <td className="p-3 font-mono text-purple-600">{sub.lang}</td>
                    <td className="p-3 text-purple-500">{sub.time}</td>
                    <td className="p-3">
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        {sub.status}
                      </span>
                    </td>
                    <td className="p-3 text-right font-bold text-yellow-600">{sub.xp}</td>
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
