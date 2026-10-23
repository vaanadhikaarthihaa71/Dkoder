import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/mockData';
import { PricingPlan } from '../types';
import { 
  Check, 
  Sparkles, 
  ShieldCheck, 
  HelpCircle, 
  Zap, 
  Crown, 
  ArrowRight,
  GraduationCap
} from 'lucide-react';
import { Button } from '../components/common/Button';
import { Modal } from '../components/common/Modal';
import { useToast } from '../context/ToastContext';

interface SubscriptionPageProps {
  onNavigate: (path: string) => void;
}

export const SubscriptionPage: React.FC<SubscriptionPageProps> = ({ onNavigate }) => {
  const { addToast } = useToast();
  const [billingCycle, setBillingCycle] = useState<'annual' | 'semester'>('annual');
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const handleSubscribe = () => {
    if (!selectedPlan) return;
    addToast({
      type: 'success',
      title: `${selectedPlan.name} Subscription Activated!`,
      description: 'Your DKODER student account has been upgraded with all filters and curriculum tracks.'
    });
    setSelectedPlan(null);
  };

  return (
    <div className="py-12 bg-[#FAF8FF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb */}
        <div className="text-xs text-purple-700 font-semibold flex items-center gap-2">
          <button onClick={() => onNavigate('/')} className="hover:text-purple-950">Home</button>
          <span>/</span>
          <span className="text-purple-950 font-bold">Student Subscription Plans</span>
        </div>

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-950 text-xs font-bold uppercase tracking-wider mb-3 border border-yellow-300">
            <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
            <span>Official Placement Subscriptions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-purple-950 tracking-tight">
            Invest in Your <span className="text-yellow-600">Career Trajectory</span>
          </h1>
          <p className="mt-3 text-base sm:text-lg text-purple-800/80">
            Select the placement preparation tier that aligns with your dream recruiter and target salary package.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-2xl bg-purple-100 border border-purple-200">
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-purple-900 text-white shadow-md'
                  : 'text-purple-900 hover:text-purple-950'
              }`}
            >
              Annual Pass (Save 20%)
            </button>
            <button
              onClick={() => setBillingCycle('semester')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingCycle === 'semester'
                  ? 'bg-purple-900 text-white shadow-md'
                  : 'text-purple-900 hover:text-purple-950'
              }`}
            >
              Semester Sprint (6 Months)
            </button>
          </div>
        </div>

        {/* 5-Plan Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {PRICING_PLANS.map((plan) => {
            const multiplier = billingCycle === 'semester' ? 0.65 : 1;
            const price = Math.round(plan.annualPrice * multiplier);
            const cycleText = billingCycle === 'annual' ? '/ year' : '/ 6 mo';

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-5 flex flex-col justify-between transition-all duration-200 relative ${
                  plan.isPopular
                    ? 'bg-purple-950 text-white border-2 border-yellow-400 shadow-xl shadow-purple-950/25 lg:-translate-y-2'
                    : plan.isBestValue
                    ? 'bg-purple-50 border-2 border-yellow-400 text-purple-950 shadow-md'
                    : 'bg-white border-2 border-purple-200 text-purple-950 shadow-sm'
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-purple-950 px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow">
                    ★ Most Popular
                  </div>
                )}
                {plan.isBestValue && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-300 text-purple-950 px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow">
                    ⚡ Super Dream Tier
                  </div>
                )}

                <div>
                  <h3 className={`text-xl font-extrabold ${plan.isPopular ? 'text-yellow-300' : 'text-purple-950'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mt-1 min-h-[32px] ${plan.isPopular ? 'text-purple-200' : 'text-purple-700/80'}`}>
                    {plan.tagline}
                  </p>

                  <div className="my-5 pb-5 border-b border-purple-100/30">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black">₹{price}</span>
                      <span className={`text-xs font-semibold ${plan.isPopular ? 'text-purple-300' : 'text-purple-600'}`}>
                        {cycleText}
                      </span>
                    </div>
                    <div className={`text-xs font-bold mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-md ${
                      plan.isPopular ? 'bg-yellow-400/20 text-yellow-300' : 'bg-yellow-100 text-yellow-900'
                    }`}>
                      ~₹{plan.dailyCost} a day
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {plan.features.map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${plan.isPopular ? 'text-yellow-400' : 'text-emerald-600'}`} />
                        <span className={plan.isPopular ? 'text-purple-100' : 'text-purple-900'}>
                          {f}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <Button
                    variant={plan.isPopular ? 'primary' : 'secondary'}
                    size="sm"
                    fullWidth
                    onClick={() => setSelectedPlan(plan)}
                    className="font-bold text-xs"
                  >
                    Select {plan.name}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Matrix Table */}
        <div className="bg-white rounded-3xl border-2 border-purple-200 p-8 shadow-md">
          <h2 className="text-2xl font-extrabold text-purple-950 mb-6 text-center">
            Comprehensive Tier Feature Matrix
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-purple-950 text-white uppercase text-[11px] font-bold">
                <tr>
                  <th className="p-3.5">Platform Capability</th>
                  <th className="p-3.5 text-center">Bronze</th>
                  <th className="p-3.5 text-center">Silver</th>
                  <th className="p-3.5 text-center">Gold</th>
                  <th className="p-3.5 text-center text-yellow-400">Platinum</th>
                  <th className="p-3.5 text-center text-yellow-300">Super Dream</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-purple-100 font-medium text-purple-950">
                <tr>
                  <td className="p-3.5 font-bold">Service Company Q Bank</td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">Live Browser Compiler</td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">TCS NQT & InfyTQ Mock Exams</td>
                  <td className="p-3.5 text-center text-purple-300">—</td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">Salary Package Range Filters</td>
                  <td className="p-3.5 text-center text-purple-300">—</td>
                  <td className="p-3.5 text-center text-purple-300">—</td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">AI Weakness Diagnostic Report</td>
                  <td className="p-3.5 text-center text-purple-300">—</td>
                  <td className="p-3.5 text-center text-purple-300">—</td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-3.5 font-bold">Big Tech (15+ LPA) Question Vault</td>
                  <td className="p-3.5 text-center text-purple-300">—</td>
                  <td className="p-3.5 text-center text-purple-300">—</td>
                  <td className="p-3.5 text-center text-purple-300">—</td>
                  <td className="p-3.5 text-center text-purple-300">—</td>
                  <td className="p-3.5 text-center"><Check className="w-4 h-4 text-emerald-600 mx-auto" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* College MOU Banner */}
        <div className="p-8 rounded-3xl bg-purple-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-yellow-400 text-purple-950 flex items-center justify-center shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Looking for College-Sponsored Subscriptions?</h3>
              <p className="text-xs text-purple-200 mt-0.5">
                Apply for an Institutional MOU to get 100% subsidized subscriptions for your entire graduating batch.
              </p>
            </div>
          </div>
          <Button
            variant="primary"
            size="md"
            onClick={() => onNavigate('/partner-mou')}
            rightIcon={<ArrowRight className="w-4 h-4" />}
            className="font-bold shrink-0"
          >
            Apply for Campus MOU
          </Button>
        </div>

      </div>

      {/* Subscription Confirmation Modal */}
      {selectedPlan && (
        <Modal
          isOpen={!!selectedPlan}
          onClose={() => setSelectedPlan(null)}
          title={`Activate ${selectedPlan.name} Plan`}
          subtitle="Instant Account Upgrade Demonstration"
          maxWidth="md"
        >
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-xs sm:text-sm">
              <div className="flex justify-between font-bold text-purple-950 mb-1">
                <span>Selected Plan:</span>
                <span>{selectedPlan.name}</span>
              </div>
              <div className="flex justify-between text-purple-700">
                <span>Billing Period:</span>
                <span className="capitalize">{billingCycle} Pass</span>
              </div>
              <div className="flex justify-between font-black text-base text-purple-950 pt-2 border-t border-purple-200 mt-2">
                <span>Total Amount:</span>
                <span>₹{billingCycle === 'annual' ? selectedPlan.annualPrice : Math.round(selectedPlan.annualPrice * 0.65)}</span>
              </div>
            </div>

            <p className="text-xs text-purple-600 italic">
              * Frontend hackathon demonstration. No payment gateway or debit card is charged.
            </p>

            <div className="flex items-center justify-end gap-2 pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedPlan(null)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleSubscribe}
                className="font-bold"
              >
                Confirm Upgrade
              </Button>
            </div>
          </div>
        </Modal>
      )}

    </div>
  );
};
