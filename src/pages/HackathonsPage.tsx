import React, { useState } from 'react';
import { 
  Trophy, 
  Clock, 
  Users, 
  Award, 
  ArrowRight, 
  Timer
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
      description: `Your team "${teamName}" is registered for the contest.`
    });
    setSelectedContest(null);
    setTeamName('');
    setCollegeName('');
  };

  return (
    <div className="py-12 bg-[#FAF8FD] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-[#6F687A] font-medium mb-6 flex items-center gap-1.5">
          <button onClick={() => onNavigate('/')} className="hover:text-[#211B2B]">Home</button>
          <span>/</span>
          <span className="text-[#211B2B] font-semibold">Hackathons & Contests</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDFF] text-[#5425A8] text-xs font-semibold uppercase tracking-wider mb-2">
            <Trophy className="w-3.5 h-3.5" />
            <span>Collegiate Coding Contests</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-[#211B2B] tracking-tight">
            Campus Hackathons & <span className="text-[#5425A8]">Live Contests</span>
          </h1>
          <p className="mt-2 text-sm text-[#6F687A]">
            Compete with engineering peers across India. Benchmark your speed under timed conditions.
          </p>
        </div>

        {/* Contests List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {contests.map((contest) => (
            <div
              key={contest.id}
              className="bg-white rounded-2xl border border-[#E8E2EF] p-6 hover:border-[#5425A8] transition-all duration-150 shadow-xs"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
                <div className="space-y-2 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#F3EDFF] text-[#5425A8] border border-[#E8E2EF]">
                      {contest.category}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#FFF8D6] text-[#211B2B] border border-[#FFD84D]/40">
                      {contest.difficulty}
                    </span>
                    <span className="text-xs text-[#6F687A] flex items-center gap-1">
                      <Timer className="w-3.5 h-3.5" />
                      Starts in {contest.startsIn}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#211B2B]">
                    {contest.title}
                  </h3>
                  <p className="text-xs text-[#6F687A] leading-relaxed">
                    {contest.tagline}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-[#211B2B]">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#5425A8]" />
                      <span>Duration: <strong>{contest.duration}</strong></span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-[#5425A8]" />
                      <span>{contest.participants}</span>
                    </div>
                    <div className="flex items-center gap-1.5 sm:col-span-2 text-xs font-semibold text-[#5425A8]">
                      <Award className="w-3.5 h-3.5 text-[#FFD84D]" />
                      <span>Reward: {contest.prizes}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {contest.topics.map((t) => (
                      <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#FAF8FD] text-[#6F687A] border border-[#E8E2EF]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="w-full lg:w-auto shrink-0 flex flex-col gap-2">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={() => setSelectedContest(contest.title)}
                    rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    Register Team Free
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onNavigate('/')}
                  >
                    Practice Problems
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
          title={`Register: ${selectedContest}`}
          subtitle="Inter-Collegiate Online Coding Contest"
          maxWidth="md"
        >
          <form onSubmit={handleRegister} className="space-y-3.5">
            <div>
              <label className="block text-xs font-semibold text-[#211B2B] mb-1">
                Candidate / Team Leader Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Vaanadhi Kaarthihaa"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#E8E2EF] text-xs sm:text-sm text-[#211B2B] focus:outline-none focus:ring-1 focus:ring-[#5425A8]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#211B2B] mb-1">
                College / Institution Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Anna University (CEG Campus), Chennai"
                value={collegeName}
                onChange={(e) => setCollegeName(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-[#E8E2EF] text-xs sm:text-sm text-[#211B2B] focus:outline-none focus:ring-1 focus:ring-[#5425A8]"
              />
            </div>

            <div className="p-3 bg-[#FAF8FD] rounded-xl border border-[#E8E2EF] text-xs text-[#6F687A]">
              Rules: In-browser code editor only. Rankings based on automated test suite evaluation and execution time.
            </div>

            <div className="pt-2 flex items-center justify-end gap-2 border-t border-[#E8E2EF]">
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
                size="sm"
              >
                Confirm Registration
              </Button>
            </div>
          </form>
        </Modal>
      )}

    </div>
  );
};
