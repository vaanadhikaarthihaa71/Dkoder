import React, { useState } from 'react';
import { 
  Trophy, 
  Calendar, 
  Clock, 
  Users, 
  Sparkles, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Timer,
  Zap,
  Code2
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { useToast } from '../context/ToastContext';

interface HackathonsPageProps {
  onNavigate: (path: string) => void;
}

export const HackathonsPage: React.FC<HackathonsPageProps> = ({ onNavigate }) => {
  const { addToast } = useToast();
  const [selectedContest, setSelectedContest] = useState<string | null>(null);
  const [teamName, setTeamName] = useState('');
  const [collegeName, setCollegeName] = useState('');

  const contests = [
    {
      id: 'c-1',
      title: 'DKODER National Collegiate Code Sprint 2026',
      tagline: 'All-India Inter-College Algorithmic Championship',
      startsIn: '2 Days 14 Hours',
      duration: '3 Hours (4 Coding Problems)',
      prizes: '₹1,50,000 Prize Pool + Fast-track Interviews',
      participants: '3,840 Students Registered',
      category: 'National Open',
      difficulty: 'Medium to Hard',
      bannerColor: 'from-purple-900 to-purple-950',
      topics: ['Dynamic Programming', 'Graph BFS/DFS', 'Sliding Window', 'Trie']
    },
    {
      id: 'c-2',
      title: 'TCS NQT & InfyTQ Rapid-Fire Mock Contest',
      tagline: 'Strict 90-minute timed simulation matching 2026 recruiter patterns',
      startsIn: '5 Days 08 Hours',
      duration: '90 Minutes (60 MCQs + 2 Code)',
      prizes: 'DKODER Gold Pass Subscriptions + Detailed AI Report',
      participants: '2,120 Students Registered',
      category: 'Service Track',
      difficulty: 'Easy to Medium',
      bannerColor: 'from-amber-600 to-yellow-600',
      topics: ['Arrays & Two Pointers', 'Quantitative Aptitude', 'SQL Aggregates', 'Pseudo-code']
    },
    {
      id: 'c-3',
      title: 'Super Dream 20+ LPA Algorithmic Marathon',
      tagline: 'High-difficulty challenge for Big Tech aspirants (Google, Microsoft, Amazon)',
      startsIn: 'Next Weekend',
      duration: '4 Hours (5 Hard Problems)',
      prizes: '1-on-1 Mentorship with SDE-II Engineers + Direct Referrals',
      participants: '1,450 Students Registered',
      category: 'Super Dream',
      difficulty: 'Hard',
      bannerColor: 'from-purple-800 to-indigo-900',
      topics: ['Segment Trees', 'Hard DP', 'System Design Scenarios', 'Graph Shortest Paths']
    }
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName || !collegeName) {
      addToast({
        type: 'error',
        title: 'Missing Details',
        description: 'Please fill in your Team Name and College Name.'
      });
      return;
    }
    addToast({
      type: 'success',
      title: 'Registration Confirmed! 🎉',
      description: `Your team "${teamName}" is registered for the contest. An invite link has been generated.`
    });
    setSelectedContest(null);
    setTeamName('');
    setCollegeName('');
  };

  return (
    <div className="py-12 bg-[#FAF8FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <div className="text-xs text-purple-700 font-semibold mb-6 flex items-center gap-2">
          <button onClick={() => onNavigate('/')} className="hover:text-purple-950">Home</button>
          <span>/</span>
          <span className="text-purple-950 font-bold">Hackathons & Contests</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-950 text-xs font-bold uppercase tracking-wider mb-3 border border-yellow-300">
            <Trophy className="w-3.5 h-3.5 text-yellow-600" />
            <span>Collegiate Coding Arena</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-purple-950 tracking-tight">
            Campus Hackathons & <span className="text-yellow-600">Live Contests</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-purple-800/80">
            Compete with thousands of engineering peers across India. Benchmark your speed, test under high-pressure timers, and win placement fast-tracks.
          </p>
        </div>

        {/* Contests List */}
        <div className="space-y-6 max-w-4xl mx-auto">
          {contests.map((contest) => (
            <div
              key={contest.id}
              className="bg-white rounded-3xl border-2 border-purple-200/90 hover:border-yellow-400 p-6 sm:p-8 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200">
                      {contest.category}
                    </span>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-yellow-400 text-purple-950">
                      {contest.difficulty}
                    </span>
                    <span className="text-xs font-semibold text-purple-600 flex items-center gap-1">
                      <Timer className="w-3.5 h-3.5 text-yellow-600" />
                      Starts in {contest.startsIn}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-purple-950">
                    {contest.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-800/80 leading-relaxed">
                    {contest.tagline}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-purple-900">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>Duration: <strong>{contest.duration}</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-purple-600 shrink-0" />
                      <span>Participation: <strong>{contest.participants}</strong></span>
                    </div>
                    <div className="flex items-center gap-2 sm:col-span-2">
                      <Award className="w-4 h-4 text-yellow-600 shrink-0" />
                      <span className="text-purple-950 font-bold">Reward: {contest.prizes}</span>
                    </div>
                  </div>

                  {/* Topics Covered */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {contest.topics.map((t) => (
                      <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-purple-50 text-purple-800 border border-purple-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-auto shrink-0 flex flex-col gap-2">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => setSelectedContest(contest.title)}
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="font-bold w-full sm:w-auto shadow-md shadow-yellow-400/20"
                  >
                    Register Team Free
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onNavigate('/')}
                    className="text-xs text-purple-900 border-purple-200"
                  >
                    Practice Similar Qs
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Registration Modal */}
      {selectedContest && (
        <Modal
          isOpen={!!selectedContest}
          onClose={() => setSelectedContest(null)}
          title={`Register for ${selectedContest}`}
          subtitle="Inter-Collegiate Online Coding Contest"
          maxWidth="md"
        >
          <form onSubmit={handleRegister} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                Candidate / Team Leader Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Vaanadhi Kaarthihaa"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                College / Institution Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Anna University (CEG Campus), Chennai"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="p-3 bg-yellow-50 rounded-xl border border-yellow-200 text-xs text-amber-950">
              Contest rules: In-browser code editor only. No external IDEs or code sharing. Rankings are evaluated on test case correctness and runtime efficiency.
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setSelectedContest(null)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="font-bold"
              >
                Confirm Contest Registration
              </Button>
            </div>
          </form>
        </Modal>
      )}

    </div>
  );
};
