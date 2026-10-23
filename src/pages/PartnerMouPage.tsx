import React, { useState } from 'react';
import { 
  FileCheck2, 
  Building2, 
  GraduationCap, 
  CheckCircle2, 
  Download, 
  Send, 
  ShieldCheck, 
  Sparkles,
  Phone,
  Mail,
  HelpCircle
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { useToast } from '../context/ToastContext';
import { COMPANY_INFO } from '../data/mockData';

interface PartnerMouPageProps {
  onNavigate: (path: string) => void;
}

export const PartnerMouPage: React.FC<PartnerMouPageProps> = ({ onNavigate }) => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    institutionName: '',
    nirfRank: 'Within Top 100',
    state: 'Tamil Nadu',
    contactPerson: '',
    designation: 'Head of Training & Placement',
    officialEmail: '',
    contactPhone: '',
    targetBatch: '2026 Graduating Batch',
    studentCount: '850',
    needsLabIntegration: true,
    needsAptitudeDrills: true,
    agreeToTerms: true
  });

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.institutionName || !formData.contactPerson || !formData.officialEmail || !formData.contactPhone) {
      addToast({
        type: 'error',
        title: 'Missing Required Fields',
        description: 'Please complete all required fields marked with *.'
      });
      return;
    }

    const generatedId = 'MOU-' + Math.floor(100000 + Math.random() * 900000);
    setSubmissionId(generatedId);
    setIsSuccessModalOpen(true);
    addToast({
      type: 'success',
      title: 'MOU Application Submitted!',
      description: `Application Reference: ${generatedId}. We have dispatched a confirmation email to ${formData.officialEmail}.`
    });
  };

  const handleDownloadReceipt = () => {
    addToast({
      type: 'success',
      title: 'Acknowledgement Slip Generated',
      description: `Official MOU Docket for ${formData.institutionName} (${submissionId}) downloaded.`
    });
  };

  return (
    <div className="py-12 bg-[#FAF8FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-xs text-purple-700 font-semibold mb-6 flex items-center gap-2">
          <button onClick={() => onNavigate('/')} className="hover:text-purple-950">Home</button>
          <span>/</span>
          <span className="text-purple-950 font-bold">Institutional Partner MOU</span>
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-950 text-xs font-bold uppercase tracking-wider mb-3 border border-yellow-300">
            <FileCheck2 className="w-3.5 h-3.5 text-yellow-600" />
            <span>Academic Partnership Framework</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-purple-950 tracking-tight">
            Apply for Institutional <span className="text-yellow-600">Placement MOU</span>
          </h1>
          <p className="mt-3 text-base text-purple-800/80">
            Formalize an official training partnership with DKODER. Provide your engineering students with subsidized LMS access and TnP placement analytics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: MOU Benefits & Guidelines (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-b from-purple-900 via-purple-950 to-purple-900 text-white rounded-3xl p-7 shadow-xl border border-purple-800">
              <h3 className="text-xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                MOU Partner Privileges
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-purple-100">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>Subsidized LMS Subscriptions:</strong> Up to 60% fee waiver for bulk student onboarding via campus budget.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>TnP Faculty Admin Portal:</strong> Dedicated logins for placement coordinators to track daily solving and batch metrics.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>Sponsored Collegiate Hackathons:</strong> Platform-managed inter and intra-college coding hackathons with trophies and prize pools.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                  <span><strong>Direct Placement Cell Referrals:</strong> Priority candidate recommendations to participating tech recruiters.</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-purple-800/80 text-xs text-purple-200">
                <p>
                  Official partnerships are executed between your institution's Principal / Dean / TPO and <strong>{COMPANY_INFO.legalName}</strong>.
                </p>
              </div>
            </div>

            {/* Direct Support Contacts */}
            <div className="bg-white rounded-3xl border-2 border-purple-200 p-6 shadow-sm space-y-3 text-xs text-purple-900">
              <h4 className="font-bold uppercase tracking-wider text-purple-950 text-[11px]">
                Need Immediate Partnership Assistance?
              </h4>
              <p className="text-purple-700">
                Contact our Institutional Relations Desk:
              </p>
              <div className="space-y-2 pt-1 font-semibold">
                <div className="flex items-center gap-2 text-purple-950">
                  <Mail className="w-4 h-4 text-yellow-600" />
                  <span>{COMPANY_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2 text-purple-950">
                  <Phone className="w-4 h-4 text-yellow-600" />
                  <span>{COMPANY_INFO.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Application Form (Span 7) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border-2 border-purple-200/90 p-6 sm:p-8 shadow-xl">
              <div className="pb-4 mb-6 border-b border-purple-100">
                <h3 className="text-xl font-bold text-purple-950">
                  Campus MOU Application Form
                </h3>
                <p className="text-xs text-purple-700/80 mt-0.5">
                  All fields are reviewed by the DKODER Academic Advisory Board.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* 1. Institution Name */}
                <div>
                  <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                    College / University Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Government College of Technology, Coimbatore"
                    value={formData.institutionName}
                    onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>

                {/* State & NIRF Ranking Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                      State / Union Territory *
                    </label>
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-purple-950 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
                    >
                      <option>Tamil Nadu</option>
                      <option>Karnataka</option>
                      <option>Andhra Pradesh</option>
                      <option>Telangana</option>
                      <option>Maharashtra</option>
                      <option>Kerala</option>
                      <option>Other State</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                      NIRF / NAAC Status
                    </label>
                    <select
                      value={formData.nirfRank}
                      onChange={(e) => setFormData({ ...formData, nirfRank: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-purple-950 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
                    >
                      <option>NIRF Top 100 Engineering</option>
                      <option>NIRF 101 - 200</option>
                      <option>NAAC A++ / A+ Accredited</option>
                      <option>Affiliated State University Campus</option>
                      <option>Autonomous Engineering College</option>
                    </select>
                  </div>
                </div>

                {/* Contact Person & Designation */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                      Authorised Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. K. Senthil Kumar"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                      Designation *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                      Official Institutional Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tpo@gct.ac.in"
                      value={formData.officialEmail}
                      onChange={(e) => setFormData({ ...formData, officialEmail: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                      Contact Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 94432 10987"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData({ ...formData, contactPhone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                </div>

                {/* Batch details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                      Target Placement Cohort
                    </label>
                    <input
                      type="text"
                      value={formData.targetBatch}
                      onChange={(e) => setFormData({ ...formData, targetBatch: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-purple-900 uppercase tracking-wider mb-1">
                      Expected Student Count
                    </label>
                    <input
                      type="number"
                      value={formData.studentCount}
                      onChange={(e) => setFormData({ ...formData, studentCount: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-purple-200 text-sm text-purple-950 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                  </div>
                </div>

                {/* Checkbox Options */}
                <div className="space-y-2 pt-2 text-xs text-purple-900">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needsLabIntegration}
                      onChange={(e) => setFormData({ ...formData, needsLabIntegration: e.target.checked })}
                      className="rounded border-purple-300 text-yellow-500 focus:ring-yellow-400"
                    />
                    <span>Request on-campus coding lab setup and compiler integration support</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.needsAptitudeDrills}
                      onChange={(e) => setFormData({ ...formData, needsAptitudeDrills: e.target.checked })}
                      className="rounded border-purple-300 text-yellow-500 focus:ring-yellow-400"
                    />
                    <span>Include TCS NQT & Infosys InfyTQ specialized diagnostic mock series</span>
                  </label>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    fullWidth
                    leftIcon={<Send className="w-4 h-4" />}
                    className="font-bold text-base shadow-lg shadow-yellow-400/25"
                  >
                    Submit Official MOU Application
                  </Button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>

      {/* Success Modal */}
      {isSuccessModalOpen && (
        <Modal
          isOpen={isSuccessModalOpen}
          onClose={() => setIsSuccessModalOpen(false)}
          title="MOU Application Received"
          subtitle={`Reference ID: ${submissionId}`}
          maxWidth="md"
        >
          <div className="space-y-4 text-center">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className="text-lg font-bold text-purple-950">
              Thank You, {formData.contactPerson}
            </h4>

            <p className="text-xs text-purple-800 leading-relaxed">
              Your MOU Application for <strong>{formData.institutionName}</strong> has been logged into the DKODER institutional queue. Our Academic Partnerships Director will reach out to schedule the MoU signing review.
            </p>

            <div className="p-3 rounded-xl bg-purple-50 text-xs text-purple-900 font-mono text-left border border-purple-100">
              <div>Institution: {formData.institutionName}</div>
              <div>Batch Size: {formData.studentCount} Students</div>
              <div>Contact: {formData.officialEmail}</div>
              <div>Status: Under Review (Est. 24-48 hrs)</div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2 justify-center">
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownloadReceipt}
                leftIcon={<Download className="w-4 h-4" />}
              >
                Download MOU Docket
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  setIsSuccessModalOpen(false);
                  onNavigate('/');
                }}
                className="font-bold"
              >
                Return to Home
              </Button>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
};
