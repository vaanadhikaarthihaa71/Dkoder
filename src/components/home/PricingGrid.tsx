import React, { useState } from 'react';
import { PRICING_PLANS } from '../../data/mockData';
import { PricingPlan } from '../../types';
import { 
  Check, 
  Sparkles, 
  GraduationCap
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
    if (couponCode.trim().toUpperCase() === 'CAMPUS2026') {
      setCouponApplied(true);
      addToast({
        type: 'success',
        title: 'Coupon Applied',
        description: '15% student discount applied to subscription.'
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
      title: `${selectedPlanForCheckout.name} Plan Activated (Demo)`,
      description: 'Your account is upgraded with all included curriculum tracks.'
    });
    setSelectedPlanForCheckout(null);
  };

  return (
    <section className="py-16 sm:py-20 bg-[#FAF8FD] border-b border-[#E8E2EF]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDFF] text-[#5425A8] text-xs font-semibold uppercase tracking-wider mb-3">
            <span>Student Subscriptions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#211B2B] tracking-tight">
            Transparent, student-friendly <span className="text-[#5425A8]">annual pricing</span>
          </h2>
          <p className="mt-2 text-sm text-[#6F687A]">
            Priced at ₹2 to ₹9 per day. Full access to real questions, salary filters, and AI report cards.
          </p>
        </div>

        {/* 5-Plan Directly Comparable Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {PRICING_PLANS.map((plan) => {
            const isRecommended = plan.name === 'Platinum';

            return (
              <div
                key={plan.id}
                className={`bg-white rounded-2xl p-5 flex flex-col justify-between transition-all duration-150 relative ${
                  isRecommended
                    ? 'border-2 border-[#5425A8] shadow-sm'
                    : 'border border-[#E8E2EF] hover:border-[#D4CBDF]'
                }`}
              >
                {isRecommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#5425A8] text-[#FFD84D] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-sm border border-[#FFD84D]/40">
                    <Sparkles className="w-3 h-3 text-[#FFD84D] fill-[#FFD84D]" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-base font-bold text-[#211B2B]">
                      {plan.name}
                    </h3>
                    <span className="text-sm">
                      {plan.name === 'Bronze' ? '🥉' : plan.name === 'Silver' ? '🥈' : plan.name === 'Gold' ? '🥇' : plan.name === 'Platinum' ? '💎' : '🚀'}
                    </span>
                  </div>
                  <p className="text-xs text-[#706879] mt-0.5 min-h-[30px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="my-3 pb-3 border-b border-[#E8E2EF]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-extrabold text-[#211B2B]">₹{plan.annualPrice}</span>
                      <span className="text-xs text-[#6F687A]">/ yr</span>
                    </div>
                    <div className="text-[11px] font-semibold text-[#5425A8] mt-0.5">
                      ~₹{plan.dailyCost} per day
                    </div>
                  </div>

                  {/* Target level */}
                  <div className="text-[11px] text-[#6F687A] bg-[#FAF8FD] p-2 rounded-lg border border-[#E8E2EF] mb-3">
                    <strong className="text-[#211B2B] block">Target:</strong>
                    {plan.targetAudience}
                  </div>

                  {/* Features */}
                  <div className="space-y-1.5 mb-5 text-xs">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#5425A8] shrink-0 mt-0.5 stroke-[2.5]" />
                        <span className="text-[#211B2B] leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-2 space-y-1.5 border-t border-[#E8E2EF]">
                  <Button
                    variant={isRecommended ? 'primary' : 'outline'}
                    size="sm"
                    fullWidth
                    onClick={() => setSelectedPlanForCheckout(plan)}
                  >
                    Select Plan
                  </Button>

                  <button
                    onClick={() => onNavigate('/partner-mou')}
                    className="w-full text-center text-[11px] text-[#6F687A] hover:text-[#5425A8] py-0.5 cursor-pointer"
                  >
                    Campus MOU / Scholarship →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional MOU Link Card */}
        <div className="mt-8 p-4 rounded-xl bg-white border border-[#E8E2EF] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="w-5 h-5 text-[#5425A8] shrink-0" />
            <span className="text-[#211B2B]">
              <strong>Enrolled at a Partner College?</strong> Subsidized institutional access is managed through your college TnP cell.
            </span>
          </div>
          <button
            onClick={() => onNavigate('/partner-mou')}
            className="text-[#5425A8] font-semibold hover:underline shrink-0 cursor-pointer"
          >
            Check MOU Status →
          </button>
        </div>

      </div>

      {/* Checkout Preview Modal */}
      {selectedPlanForCheckout && (
        <Modal
          isOpen={!!selectedPlanForCheckout}
          onClose={() => setSelectedPlanForCheckout(null)}
          title={`Activate ${selectedPlanForCheckout.name} Plan`}
          subtitle="Illustrative Student Subscription Demonstration"
          maxWidth="md"
        >
          <div className="space-y-4">
            <div className="p-3.5 rounded-xl bg-[#FAF8FD] border border-[#E8E2EF] text-xs">
              <div className="flex justify-between font-bold text-[#211B2B] mb-1">
                <span>Annual Subscription</span>
                <span>₹{selectedPlanForCheckout.annualPrice}</span>
              </div>
              <div className="text-[#6F687A]">
                Full 365-day placement preparation validity.
              </div>
            </div>

            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon code (CAMPUS2026)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 px-3 py-1.5 rounded-xl border border-[#E8E2EF] text-xs font-mono uppercase text-[#211B2B]"
              />
              <Button type="submit" variant="secondary" size="sm">
                Apply
              </Button>
            </form>

            {couponApplied && (
              <div className="p-2 rounded-lg bg-emerald-50 text-emerald-900 text-xs font-medium flex justify-between border border-emerald-200">
                <span>15% Student Discount</span>
                <span>- ₹{Math.round(selectedPlanForCheckout.annualPrice * 0.15)}</span>
              </div>
            )}

            <div className="pt-2 flex items-center justify-end gap-2 border-t border-[#E8E2EF]">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setSelectedPlanForCheckout(null)}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={handleSimulateSubscription}
              >
                Confirm Subscription
              </Button>
            </div>
          </div>
        </Modal>
      )}

    </section>
  );
};
