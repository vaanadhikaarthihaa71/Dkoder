import React, { useState } from 'react';
import { 
  GraduationCap, 
  BarChart2, 
  ShieldCheck, 
  FileCheck2, 
  CheckCircle2, 
  Download, 
  Calendar, 
  Building2, 
  Users, 
  Layers, 
  Award,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { useToast } from '../context/ToastContext';

interface CollegesPageProps {
  onNavigate: (path: string) => void;
}

export const CollegesPage: React.FC<CollegesPageProps> = ({ onNavigate }) => {
  const { addToast } = useToast();
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: '',
    designation: 'Placement Officer (TPO)',
    college: '',
    email: '',
    phone: '',
    batchSize: '500 - 1000 Students'
  });

  const handleDownloadBrochure = () => {
    addToast({
      type: 'success',
      title: 'Brochure Download Initiated',
      description: 'DKODER Institutional Placement Suite 2026 PDF has been saved.'
    });
  };

  const handleScheduleDemo = (e: React.FormEvent) => {
    e.preventDefault();
    addToast({
      type: 'success',
      title: 'Demo Session Scheduled!',
      description: `Thank you ${demoForm.name}. Our Institutional Academic Director will contact you within 24 hours.`
    });
    setIsDemoModalOpen(false);
  };

  return (
    <div className="py-12 bg-[#FAF8FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumbs */}
        <div className="text-xs text-purple-700 font-semibold mb-6 flex items-center gap-2">
          <button onClick={() => onNavigate('/')} className="hover:text-purple-950">Home</button>
          <span>/</span>
          <span className="text-purple-950 font-bold">For Colleges & Universities</span>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-950 via-purple-900 to-purple-950 text-white rounded-3xl p-8 sm:p-14 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-5 relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-800 text-yellow-300 text-xs font-bold uppercase tracking-wider border border-purple-700">
              <GraduationCap className="w-3.5 h-3.5 text-yellow-400" />
              <span>Institutional Enterprise LMS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Transform Campus Placements into a <span className="text-yellow-400">Data-Driven Science</span>
            </h1>

            <p className="text-base sm:text-lg text-purple-200/90 leading-relaxed font-normal">
              Equip your Training & Placement (TnP) department with real-time student practice telemetry, automated diagnostic tests, and customized company mock patterns.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                onClick={() => setIsDemoModalOpen(true)}
                rightIcon={<Calendar className="w-4 h-4" />}
                className="font-bold shadow-lg shadow-yellow-400/20"
              >
                Schedule Institutional Demo
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={handleDownloadBrochure}
                leftIcon={<Download className="w-4 h-4" />}
                className="text-white border-purple-400 hover:bg-purple-800"
              >
                Download LMS Brochure (PDF)
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => onNavigate('/partner-mou')}
                leftIcon={<FileCheck2 className="w-4 h-4 text-yellow-400" />}
                className="font-bold"
              >
                Apply for Campus MOU
              </Button>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="bg-white rounded-2xl border-2 border-purple-200/90 p-6 shadow-sm hover:border-yellow-400 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center mb-4">
              <BarChart2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-purple-950 mb-2">
              Batch Readiness Dashboard
            </h3>
            <p className="text-xs text-purple-800/80 leading-relaxed">
              Track student streaks, daily solving frequency, and weak algorithmic topics at the department or section level.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-purple-200/90 p-6 shadow-sm hover:border-yellow-400 transition-all">
            <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-950 flex items-center justify-center mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-purple-950 mb-2">
              Custom Mock Drives
            </h3>
            <p className="text-xs text-purple-800/80 leading-relaxed">
              Create exact replicas of upcoming campus hiring drives (e.g. TCS Digital, InfyTQ, Accenture) with custom timers and cutoffs.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-purple-200/90 p-6 shadow-sm hover:border-yellow-400 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-purple-950 mb-2">
              AI Code Proctoring
            </h3>
            <p className="text-xs text-purple-800/80 leading-relaxed">
              Browser-tab tracking, automated similarity analysis, and keystroke metrics to ensure genuine student coding capability.
            </p>
          </div>

          <div className="bg-white rounded-2xl border-2 border-purple-200/90 p-6 shadow-sm hover:border-yellow-400 transition-all">
            <div className="w-10 h-10 rounded-xl bg-yellow-100 text-yellow-950 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-purple-950 mb-2">
              NIRF Metric Elevators
            </h3>
            <p className="text-xs text-purple-800/80 leading-relaxed">
              Boost your institutional median placement package and placement percentage with disciplined daily practice routines.
            </p>
          </div>

        </div>

        {/* Comparison Table: Traditional Training vs DKODER Placement LMS */}
        <div className="bg-white rounded-3xl border-2 border-purple-200 p-8 shadow-md mb-16">
          <h2 className="text-2xl font-extrabold text-purple-950 mb-6 text-center">
            Traditional Campus Training vs. DKODER LMS Platform
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-purple-950 text-white uppercase text-[11px] font-bold tracking-wider">
                <tr>
                  <th className="p-4">Key Capability</th>
                  <th className="p-4 text-purple-300">Legacy Crash Courses</th>
                  <th className="p-4 text-yellow-300">DKODER Placement LMS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 font-medium">
                <tr>
                  <td className="p-4 font-bold text-purple-950">Daily Student Practice</td>
                  <td className="p-4 text-purple-700">Static PDFs / Zero tracking</td>
                  <td className="p-4 text-purple-950 font-bold bg-yellow-50/50">Daily Path with browser compiler & streak accountability</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-purple-950">Company-Specific Tagging</td>
                  <td className="p-4 text-purple-700">Generic textbook problems</td>
                  <td className="p-4 text-purple-950 font-bold bg-yellow-50/50">Tagged by TCS, Infosys, Accenture, Microsoft with salary tiers</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-purple-950">Faculty Visibility</td>
                  <td className="p-4 text-purple-700">Manual attendance sheets</td>
                  <td className="p-4 text-purple-950 font-bold bg-yellow-50/50">Real-time cohort telemetry, weak-topic heatmaps & exportable reports</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold text-purple-950">Assessment Environment</td>
                  <td className="p-4 text-purple-700">Disconnected Google Forms</td>
                  <td className="p-4 text-purple-950 font-bold bg-yellow-50/50">Proctored coding lab with 18+ automated test cases & memory limits</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Schedule Demo Modal */}
      {isDemoModalOpen && (
        <Modal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
          title="Schedule College Placement Demo"
          subtitle="Exclusive session for TPOs, Principals, and HODs"
          maxWidth="lg"
        >
          <form onSubmit={handleScheduleDemo} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                  Officer Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Prof. Ramesh Sundaram"
                  value={demoForm.name}
                  onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-purple-200 text-xs sm:text-sm text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                  Designation *
                </label>
                <input
                  type="text"
                  required
                  value={demoForm.designation}
                  onChange={(e) => setDemoForm({ ...demoForm, designation: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-purple-200 text-xs sm:text-sm text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                Engineering College Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Coimbatore Institute of Technology"
                value={demoForm.college}
                onChange={(e) => setDemoForm({ ...demoForm, college: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-purple-200 text-xs sm:text-sm text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                  Official Email (.edu / .ac.in / org) *
                </label>
                <input
                  type="email"
                  required
                  placeholder="placement@college.edu.in"
                  value={demoForm.email}
                  onChange={(e) => setDemoForm({ ...demoForm, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-purple-200 text-xs sm:text-sm text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                  Contact Phone / Mobile *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={demoForm.phone}
                  onChange={(e) => setDemoForm({ ...demoForm, phone: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-purple-200 text-xs sm:text-sm text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                Batch Size for Placement Readiness
              </label>
              <select
                value={demoForm.batchSize}
                onChange={(e) => setDemoForm({ ...demoForm, batchSize: e.target.value })}
                className="w-full px-3 py-2 rounded-xl border border-purple-200 text-xs sm:text-sm text-purple-950 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
              >
                <option>200 - 500 Students</option>
                <option>500 - 1000 Students</option>
                <option>1000 - 2500 Students</option>
                <option>2500+ University Campus</option>
              </select>
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setIsDemoModalOpen(false)}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="font-bold"
              >
                Confirm Demo Booking
              </Button>
            </div>
          </form>
        </Modal>
      )}

    </div>
  );
};
