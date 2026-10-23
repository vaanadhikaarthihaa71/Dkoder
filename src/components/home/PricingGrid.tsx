import React, { useState } from 'react';
import { PRICING_PLANS } from '../../data/mockData';
import { PricingPlan } from '../../types';
import { 
  Check, 
  Sparkles, 
  HelpCircle, 
  ShieldCheck, 
  ArrowRight, 
  GraduationCap, 
  Crown,
  CreditCard,
  X
} from 'lucide-react';
import { Button } from '../common/Button';
import { Modal } from '../common/Modal';
import { useToast } from '../../context/ToastContext';

interface PricingGridProps {
  onNavigate: (path: string) => void;
}

export const PricingGrid: React.FC<PricingGridProps> = ({ onNavigate }) => {
  const { addToast } = useToast();
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<PricingPlan | null>(null);
  const [couponCode, setCouponCode] = useState('CAMPUS2026');
  const [couponApplied, setCouponApplied] = useState(false);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'CAMPUS2026' || couponCode.trim().toUpperCase() === 'HACKATHON') {
      setCouponApplied(true);
      addToast({
        type: 'success',
        title: 'Coupon Applied!',
        description: 'Enjoy 15% promotional student discount on this plan.'
      });
    } else {
      addToast({
        type: 'error',
        title: 'Invalid Coupon',
        description: 'Try coupon code CAMPUS2026 for a student discount.'
      });
    }
  };

  const handleSimulateSubscription = () => {
    if (!selectedPlanForCheckout) return;
    addToast({
      type: 'success',
      title: `${selectedPlanForCheckout.name} Activated! (Demo Mode)`,
      description: 'Your account has been upgraded with all curriculum modules and filters.'
    });
    setSelectedPlanForCheckout(null);
  };

  return (
    <section className="py-16 bg-white border-b border-purple-100" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-100 text-yellow-950 text-xs font-bold uppercase tracking-wider mb-3 border border-yellow-300">
            <Sparkles className="w-3.5 h-3.5 text-yellow-600" />
            <span>Accessible Placement LMS Tiers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-950 tracking-tight">
            Transparent, Student-Friendly <span className="text-yellow-600">Subscriptions</span>
          </h2>
          <p className="mt-3 text-base text-purple-800/80">
            Priced at just ₹2 to ₹9 per day. Full access to real questions, salary filters, and AI report cards.
          </p>
        </div>

        {/* 5-Plan Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {PRICING_PLANS.map((plan) => {
            const isFeatured = plan.isPopular || plan.isBestValue;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-5 flex flex-col justify-between transition-all duration-200 relative ${
                  plan.isPopular
                    ? 'bg-gradient-to-b from-purple-900 via-purple-950 to-purple-900 text-white border-2 border-yellow-400 shadow-xl shadow-purple-950/20 lg:-translate-y-2'
                    : plan.isBestValue
                    ? 'bg-[#FAF5FF] border-2 border-yellow-400 text-purple-950 shadow-md'
                    : 'bg-white border-2 border-purple-200 text-purple-950 hover:border-purple-300 shadow-sm'
                }`}
              >
                {/* Top Badge: Popular / Best Value */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-purple-950 px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow">
                    ★ Most Popular
                  </div>
                )}
                {plan.isBestValue && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-300 text-purple-950 px-3 py-0.5 rounded-full text-[11px] font-black uppercase tracking-wider shadow">
                    ⚡ Best Value (15+ LPA)
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <h3 className={`text-xl font-extrabold ${plan.isPopular ? 'text-yellow-300' : 'text-purple-950'}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs mt-1 min-h-[32px] ${plan.isPopular ? 'text-purple-200' : 'text-purple-700/80'}`}>
                    {plan.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="my-5 pb-5 border-b border-purple-100/30">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black">₹{plan.annualPrice}</span>
                      <span className={`text-xs font-semibold ${plan.isPopular ? 'text-purple-300' : 'text-purple-600'}`}>
                        / year
                      </span>
                    </div>
                    <div className={`text-xs font-bold mt-1 inline-flex items-center gap-1 px-2 py-0.5 rounded-md ${
                      plan.isPopular ? 'bg-yellow-400/20 text-yellow-300' : 'bg-yellow-100 text-yellow-900'
                    }`}>
                      Just ~₹{plan.dailyCost} per day
                    </div>
                  </div>

                  {/* Target Audience Pill */}
                  <div className={`p-2.5 rounded-xl text-xs font-medium mb-4 ${
                    plan.isPopular ? 'bg-purple-900/80 text-purple-200 border border-purple-800' : 'bg-purple-50 text-purple-900 border border-purple-100'
                  }`}>
                    <strong className="block text-[10px] uppercase font-bold text-yellow-500 mb-0.5">Target:</strong>
                    {plan.targetAudience}
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-4">
                    <div className={`text-[11px] font-bold uppercase tracking-wider ${plan.isPopular ? 'text-yellow-400' : 'text-purple-500'}`}>
                      Included Features:
                    </div>
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs">
                        <Check className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${plan.isPopular ? 'text-yellow-400' : 'text-emerald-600'}`} />
                        <span className={plan.isPopular ? 'text-purple-100' : 'text-purple-900'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Filter Capabilities */}
                  <div className="mb-6 pt-3 border-t border-purple-100/20">
                    <div className={`text-[10px] font-bold uppercase tracking-wider mb-1.5 ${plan.isPopular ? 'text-purple-300' : 'text-purple-400'}`}>
                      Included Platform Filters:
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {plan.filterCapabilities.map((fc, fcIdx) => (
                        <span
                          key={fcIdx}
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                            plan.isPopular ? 'bg-purple-800 text-yellow-200' : 'bg-purple-100 text-purple-950'
                          }`}
                        >
                          {fc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div className="space-y-2 pt-2">
                  <Button
                    variant={plan.isPopular ? 'primary' : 'secondary'}
                    size="sm"
                    fullWidth
                    onClick={() => setSelectedPlanForCheckout(plan)}
                    className="font-bold text-xs"
                  >
                    Subscribe Now
                  </Button>

                  <button
                    onClick={() => onNavigate('/partner-mou')}
                    className={`w-full text-center text-[11px] font-semibold py-1 hover:underline transition-all cursor-pointer ${
                      plan.isPopular ? 'text-yellow-300 hover:text-white' : 'text-purple-700 hover:text-purple-950'
                    }`}
                  >
                    Campus Scholarship / MOU →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional MOU Callout Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-purple-50 border-2 border-purple-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-900 text-yellow-400 flex items-center justify-center shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-purple-950">Is Your College Partnered via MOU?</h4>
              <p className="text-xs text-purple-700 mt-0.5">
                Students of partnered engineering colleges receive sponsored LMS access through their college TnP cells.
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onNavigate('/partner-mou')}
            className="text-xs text-purple-950 border-purple-300 font-bold hover:bg-white"
          >
            Check College MOU Status
          </Button>
        </div>

      </div>

      {/* Illustrative Checkout Preview Modal */}
      {selectedPlanForCheckout && (
        <Modal
          isOpen={!!selectedPlanForCheckout}
          onClose={() => setSelectedPlanForCheckout(null)}
          title={`Activate ${selectedPlanForCheckout.name} Plan`}
          subtitle="Illustrative Checkout Demonstration (No payment processed)"
          maxWidth="md"
        >
          <div className="space-y-4">
            <div className="p-4 rounded-xl bg-purple-50 border border-purple-200">
              <div className="flex items-center justify-between text-sm font-bold text-purple-950">
                <span>Annual Subscription</span>
                <span>₹{selectedPlanForCheckout.annualPrice}</span>
              </div>
              <div className="text-xs text-purple-600 mt-1">
                Validity: 1 Full Academic Year (365 Days)
              </div>
            </div>

            {/* Promo Code Input */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                placeholder="Enter coupon code (e.g. CAMPUS2026)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl border border-purple-200 text-xs font-mono font-semibold uppercase text-purple-950"
              />
              <Button type="submit" variant="secondary" size="sm">
                Apply
              </Button>
            </form>

            {couponApplied && (
              <div className="p-2.5 rounded-lg bg-emerald-50 text-emerald-900 text-xs font-semibold flex items-center justify-between border border-emerald-200">
                <span>Promotional Student Discount (15%)</span>
                <span>- ₹{Math.round(selectedPlanForCheckout.annualPrice * 0.15)}</span>
              </div>
            )}

            <div className="p-3 bg-yellow-50 rounded-xl border border-yellow-200 text-xs text-amber-950">
              <strong>Notice:</strong> This is a frontend hackathon demonstration. No credit card or real financial transaction is executed.
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedPlanForCheckout(null)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={handleSimulateSubscription}
                className="font-bold"
              >
                Confirm & Activate Subscription
              </Button>
            </div>
          </div>
        </Modal>
      )}

    </section>
  );
};
