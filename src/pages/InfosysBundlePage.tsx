import React from 'react';
import { 
  Sparkles, 
  BookOpen, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Trophy, 
  Layers, 
  FileText,
  Target
} from 'lucide-react';
import { Button } from '../components/common/Button';

interface InfosysBundlePageProps {
  onNavigate: (path: string) => void;
}

export const InfosysBundlePage: React.FC<InfosysBundlePageProps> = ({ onNavigate }) => {
  const roles = [
    { title: 'System Engineer (SE)', ctc: '3.6 LPA', focus: 'Foundational Aptitude & Basic Coding' },
    { title: 'Digital Specialist Engineer (DSE)', ctc: '6.5 LPA', focus: 'Advanced DSA, SQL & Multi-threading' },
    { title: 'Specialist Programmer (SP)', ctc: '9.5 LPA', focus: 'Hard Algorithmic DP, Trees & Graphs' }
  ];

  const syllabus = [
    { section: 'Hands-on Coding Round (180 Mins)', items: ['2 Medium/Hard algorithmic problems', 'Language support: Python 3 or Java 8/11', 'Strict boundary & time limit enforcement'] },
    { section: 'DBMS & Advanced SQL', items: ['Second highest salary subqueries', 'Complex INNER & LEFT OUTER JOINs', 'Window functions & Partition queries'] },
    { section: 'Object-Oriented Programming (OOP)', items: ['Polymorphism, Inheritance & Abstraction', 'Exception handling & custom exceptions', 'Collections Framework & memory management'] }
  ];

  return (
    <div className="py-12 bg-[#FAF8FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Breadcrumb */}
        <div className="text-xs text-purple-700 font-semibold flex items-center gap-2">
          <button onClick={() => onNavigate('/')} className="hover:text-purple-950">Home</button>
          <span>/</span>
          <button onClick={() => onNavigate('/')} className="hover:text-purple-950">Bundles</button>
          <span>/</span>
          <span className="text-purple-950 font-bold">Infosys Preparation Bundle</span>
        </div>

        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-400 text-purple-950 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 fill-purple-950" />
              <span>Official Recruiter Syllabus Aligned</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Infosys InfyTQ & Specialist <span className="text-yellow-400">Master Bundle</span>
            </h1>

            <p className="text-sm sm:text-base text-purple-200/90 leading-relaxed font-normal">
              Engineered specifically for Infosys campus placement drives and national InfyTQ certification assessments. Crack 3.6 LPA SE up to 9.5 LPA Specialist Programmer roles.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-3">
              <Button
                variant="primary"
                size="lg"
                onClick={() => onNavigate('/')}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="font-bold shadow-lg shadow-yellow-400/20"
              >
                Practise Infosys Questions
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => onNavigate('/student/subscription')}
                className="text-white border-purple-400 hover:bg-purple-800"
              >
                Unlock Bundle with Gold/Platinum
              </Button>
            </div>
          </div>
        </div>

        {/* 3 Infosys Hiring Roles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {roles.map((role, idx) => (
            <div key={idx} className="bg-white rounded-2xl border-2 border-purple-200 p-6 shadow-sm">
              <div className="text-xs font-bold text-yellow-600 uppercase tracking-wider mb-1">
                Tier {idx + 1} Role
              </div>
              <h3 className="text-lg font-bold text-purple-950">{role.title}</h3>
              <div className="text-2xl font-black text-purple-900 my-2">{role.ctc}</div>
              <p className="text-xs text-purple-700/80 leading-relaxed">{role.focus}</p>
            </div>
          ))}
        </div>

        {/* Detailed Syllabus Sections */}
        <div className="bg-white rounded-3xl border-2 border-purple-200 p-8 shadow-sm">
          <h2 className="text-2xl font-extrabold text-purple-950 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-yellow-600" />
            <span>InfyTQ Exam Curriculum & Round Breakdown</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {syllabus.map((s, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100">
                <h4 className="font-bold text-sm text-purple-950 mb-3">{s.section}</h4>
                <ul className="space-y-2 text-xs text-purple-800">
                  {s.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
