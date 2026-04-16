import { Suspense } from "react";
import type { Metadata } from "next";
import { ApplyForm } from "./ApplyForm";
import { YieldCalculator } from "./YieldCalculator";

export const metadata: Metadata = {
  title: "Apply for Investor Access — Rebel Dividends",
  description: "Apply to become a Rebel Dividends investor. Weekly dividends, DeFi yield, and transparent portfolio tracking.",
};

export default function ApplyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-950 border border-blue-800 rounded-full px-4 py-1.5 text-blue-300 text-sm font-medium mb-6">
          Investor Application
        </div>
        <h1 className="text-4xl font-black text-white mb-4">Apply for Access</h1>
        <p className="text-gray-400 max-w-lg mx-auto">
          Complete this form to be considered for a Rebel Dividends investor position.
          We review applications within 48 hours.
        </p>
      </div>

      <YieldCalculator />

      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
        <Suspense fallback={<div className="text-center text-gray-400 py-8">Loading form...</div>}>
          <ApplyForm />
        </Suspense>
      </div>

      <p className="text-gray-600 text-xs text-center mt-6 max-w-md mx-auto">
        This is a private securities offering under Regulation D Rule 506(b).
        Accredited investors only unless otherwise qualified.
        By submitting you agree to receive communications from Rebel Dividends.
      </p>
    </div>
  );
}
