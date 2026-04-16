'use client'

import { useState, useMemo } from 'react'

const TIERS = [
  { label: '$10,000', value: 10000 },
  { label: '$25,000', value: 25000 },
  { label: '$50,000', value: 50000 },
  { label: '$100,000', value: 100000 },
  { label: '$250,000', value: 250000 },
  { label: '$500,000', value: 500000 },
]

// Conservative / Base / Optimistic weekly yield rates (annualized)
const SCENARIOS = {
  conservative: { label: 'Conservative', rate: 0.12, color: 'text-gray-400' },
  base:         { label: 'Base Case',    rate: 0.22, color: 'text-blue-400' },
  optimistic:   { label: 'Optimistic',  rate: 0.35, color: 'text-green-400' },
}

function fmt(n: number, digits = 0) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: digits })
}

export function YieldCalculator() {
  const [amount, setAmount] = useState(50000)

  const calcs = useMemo(() => {
    return Object.entries(SCENARIOS).map(([key, s]) => {
      const weekly  = (amount * s.rate) / 52
      const monthly = weekly * 4.33
      const annual  = amount * s.rate
      return { key, ...s, weekly, monthly, annual }
    })
  }, [amount])

  const base = calcs.find(c => c.key === 'base')!

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mb-8">
      <div className="flex items-center gap-2 mb-5">
        <span className="text-2xl">💰</span>
        <h3 className="text-white font-bold text-lg">Estimate Your Weekly Income</h3>
      </div>

      {/* Tier buttons */}
      <div className="mb-5">
        <label className="block text-sm text-gray-400 mb-2 font-medium">Investment Amount</label>
        <div className="grid grid-cols-3 gap-2">
          {TIERS.map(t => (
            <button
              key={t.value}
              type="button"
              onClick={() => setAmount(t.value)}
              className={`py-2.5 rounded-lg text-sm font-semibold transition border ${
                amount === t.value
                  ? 'bg-blue-600 border-blue-500 text-white'
                  : 'bg-gray-800 border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Highlighted weekly projection */}
      <div className="bg-blue-950/50 border border-blue-800/50 rounded-xl p-4 mb-4 text-center">
        <div className="text-gray-400 text-sm mb-1">Estimated weekly dividend (base case)</div>
        <div className="text-4xl font-black text-white mb-1">
          {fmt(base.weekly, 2)}
          <span className="text-gray-400 text-lg font-normal"> / week</span>
        </div>
        <div className="text-blue-400 text-sm">
          {fmt(base.annual)} / year · {fmt(base.monthly, 2)}/mo
        </div>
      </div>

      {/* Scenario table */}
      <div className="space-y-2">
        {calcs.map(c => (
          <div key={c.key} className="flex items-center justify-between bg-gray-800 rounded-lg px-4 py-3">
            <span className={`text-sm font-medium ${c.color}`}>{c.label}</span>
            <div className="text-right">
              <div className={`font-bold ${c.color}`}>{fmt(c.weekly, 2)}<span className="text-gray-500 text-xs font-normal">/wk</span></div>
              <div className="text-gray-500 text-xs">{fmt(c.annual)}/yr</div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-gray-600 text-xs mt-4 text-center leading-relaxed">
        Yield estimates based on historical DeFi returns. Not a guarantee. Actual results vary with market conditions.
        See <a href="/risk-disclosure" className="underline hover:text-gray-400" target="_blank">Risk Disclosure</a>.
      </p>
    </div>
  )
}
