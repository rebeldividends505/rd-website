'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

interface Props {
  weeklyYieldRate: number   // e.g. 0.0028 = 0.28% weekly
  hypePrice: number         // live HYPE price
  rdSharePrice: number      // current RD share price (derived from fund data)
}

const INVESTMENT_PRESETS = [25000, 50000, 100000, 250000, 500000]
const HYPE_SCENARIOS = [
  { label: 'Current', multiplier: 1 },
  { label: '$50', price: 50 },
  { label: '$100', price: 100 },
  { label: '$150 Target', price: 150 },
  { label: '$200', price: 200 },
]

function fmt(n: number, compact = false): string {
  if (compact) {
    if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
    if (n >= 1_000) return `$${(n / 1_000).toFixed(1)}K`
  }
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(n)
}

function fmtPct(n: number): string {
  return n.toFixed(2) + '%'
}

export function CalculatorClient({ weeklyYieldRate, hypePrice, rdSharePrice }: Props) {
  const [investment, setInvestment] = useState(100000)
  const [reinvest, setReinvest] = useState(false)
  const [years, setYears] = useState(2)

  // Use live yield rate if available, fallback to a conservative estimate
  const effectiveWeeklyRate = weeklyYieldRate > 0 ? weeklyYieldRate : 0.0028

  const weekly = useMemo(() => investment * effectiveWeeklyRate, [investment, effectiveWeeklyRate])
  const monthly = weekly * (52 / 12)
  const annual = weekly * 52
  const annualPct = effectiveWeeklyRate * 52 * 100

  // HYPE price scenarios — portfolio value (principal * HYPE multiplier)
  const hypePriceForScenario = (scenario: typeof HYPE_SCENARIOS[0]): number => {
    if ('price' in scenario && scenario.price != null) return scenario.price
    return hypePrice > 0 ? hypePrice : 25
  }

  // Compounding model (reinvest = compound weekly, no reinvest = simple)
  const compoundedValue = useMemo(() => {
    const weeks = years * 52
    if (reinvest) {
      return investment * Math.pow(1 + effectiveWeeklyRate, weeks)
    }
    return investment
  }, [investment, effectiveWeeklyRate, years, reinvest])

  const totalDividends = useMemo(() => {
    const weeks = years * 52
    if (reinvest) {
      return compoundedValue - investment
    }
    return weekly * weeks
  }, [investment, weekly, years, reinvest, compoundedValue])

  const totalReturn = useMemo(() => {
    return ((totalDividends / investment) * 100).toFixed(1)
  }, [totalDividends, investment])

  return (
    <div className="space-y-8">
      {/* Investment Amount */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <h2 className="text-white font-bold text-lg mb-5">Your Investment</h2>

        {/* Presets */}
        <div className="flex flex-wrap gap-2 mb-5">
          {INVESTMENT_PRESETS.map(p => (
            <button
              key={p}
              onClick={() => setInvestment(p)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                investment === p
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              {fmt(p, true)}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm">Investment amount</span>
            <span className="text-white font-bold text-xl">{fmt(investment)}</span>
          </div>
          <input
            type="range"
            min={10000}
            max={1000000}
            step={5000}
            value={investment}
            onChange={e => setInvestment(Number(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-gray-600 text-xs">
            <span>$10K</span>
            <span>$1M</span>
          </div>
        </div>

        {/* Manual input */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-gray-500 text-sm">Or enter exact:</span>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
            <input
              type="number"
              min={10000}
              max={10000000}
              step={1000}
              value={investment}
              onChange={e => {
                const v = Number(e.target.value)
                if (v >= 10000) setInvestment(v)
              }}
              className="bg-gray-800 border border-gray-700 text-white pl-7 pr-3 py-2 rounded-lg text-sm w-36 focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Projection Settings */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <h2 className="text-white font-bold text-lg mb-5">Projection Settings</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Reinvest toggle */}
          <div>
            <p className="text-gray-400 text-sm mb-3">Dividend strategy</p>
            <div className="flex gap-2">
              <button
                onClick={() => setReinvest(false)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition ${
                  !reinvest ? 'bg-green-700 text-white' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:text-white'
                }`}
              >
                💵 Cash Out
              </button>
              <button
                onClick={() => setReinvest(true)}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition ${
                  reinvest ? 'bg-blue-700 text-white' : 'bg-gray-800 text-gray-400 border border-gray-700 hover:text-white'
                }`}
              >
                🔄 Reinvest
              </button>
            </div>
          </div>

          {/* Time horizon */}
          <div>
            <p className="text-gray-400 text-sm mb-3">Time horizon: <span className="text-white font-medium">{years} {years === 1 ? 'year' : 'years'}</span></p>
            <input
              type="range"
              min={1}
              max={5}
              step={1}
              value={years}
              onChange={e => setYears(Number(e.target.value))}
              className="w-full h-2 bg-gray-700 rounded-full appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-gray-600 text-xs mt-1">
              <span>1yr</span>
              <span>5yr</span>
            </div>
          </div>
        </div>
      </div>

      {/* Results — Weekly/Monthly/Annual */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-green-950/40 border border-green-900/50 rounded-2xl p-6 text-center">
          <div className="text-green-400 text-3xl font-black mb-1">{fmt(weekly)}</div>
          <div className="text-gray-400 text-sm font-medium">Weekly Dividend</div>
          <div className="text-gray-600 text-xs mt-1">every Friday</div>
        </div>
        <div className="bg-blue-950/40 border border-blue-900/50 rounded-2xl p-6 text-center">
          <div className="text-blue-400 text-3xl font-black mb-1">{fmt(monthly)}</div>
          <div className="text-gray-400 text-sm font-medium">Monthly Income</div>
          <div className="text-gray-600 text-xs mt-1">~4.3 weekly payments</div>
        </div>
        <div className="bg-purple-950/40 border border-purple-900/50 rounded-2xl p-6 text-center">
          <div className="text-purple-400 text-3xl font-black mb-1">{fmt(annual)}</div>
          <div className="text-gray-400 text-sm font-medium">Annual Yield</div>
          <div className="text-gray-600 text-xs mt-1">{fmtPct(annualPct)} on principal</div>
        </div>
      </div>

      {/* Projection over time */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <h2 className="text-white font-bold text-lg mb-1">
          {years}-Year Projection{' '}
          <span className="text-gray-500 font-normal text-sm">({reinvest ? 'compounded weekly' : 'cash out weekly'})</span>
        </h2>
        <p className="text-gray-500 text-xs mb-6">Based on current yield rate of {fmtPct(annualPct)} annually</p>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-gray-800/60 rounded-xl p-4 text-center">
            <div className="text-white text-2xl font-bold">{fmt(investment)}</div>
            <div className="text-gray-400 text-sm">Principal Invested</div>
          </div>
          <div className="bg-green-950/40 border border-green-900/40 rounded-xl p-4 text-center">
            <div className="text-green-400 text-2xl font-bold">{fmt(totalDividends)}</div>
            <div className="text-gray-400 text-sm">Total Dividends ({years}yr)</div>
          </div>
          <div className="bg-blue-950/40 border border-blue-900/40 rounded-xl p-4 text-center">
            <div className="text-blue-400 text-2xl font-bold">{totalReturn}%</div>
            <div className="text-gray-400 text-sm">Total Return on Principal</div>
          </div>
        </div>

        {reinvest && (
          <div className="mt-4 bg-blue-950/20 border border-blue-900/30 rounded-xl p-4 text-center">
            <p className="text-blue-300 text-sm">
              ✨ Reinvesting brings your total portfolio value to{' '}
              <span className="font-bold text-white">{fmt(compoundedValue)}</span> after {years} years —
              a <span className="font-bold text-green-400">{totalReturn}% return</span> on your principal.
            </p>
          </div>
        )}
      </div>

      {/* HYPE Price Scenarios */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6">
        <h2 className="text-white font-bold text-lg mb-1">Portfolio Value Scenarios</h2>
        <p className="text-gray-500 text-xs mb-5">
          Your principal is deployed in HYPE. As HYPE price rises, so does your portfolio value.
          {hypePrice > 0 && ` Current HYPE: $${hypePrice.toFixed(2)}.`}
        </p>
        <div className="space-y-3">
          {HYPE_SCENARIOS.map(scenario => {
            const scenarioPrice = hypePriceForScenario(scenario)
            const multiplier = hypePrice > 0 ? scenarioPrice / hypePrice : 1
            const portfolioValue = investment * multiplier
            const gain = portfolioValue - investment
            const gainPct = ((gain / investment) * 100).toFixed(0)
            const isTarget = scenario.label === '$150 Target'
            const isCurrent = scenario.label === 'Current'

            return (
              <div
                key={scenario.label}
                className={`flex items-center justify-between px-4 py-3 rounded-xl ${
                  isTarget
                    ? 'bg-green-950/50 border border-green-800/50'
                    : 'bg-gray-800/40 border border-gray-700/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`font-semibold text-sm ${isTarget ? 'text-green-300' : 'text-gray-300'}`}>
                    {scenario.label}
                    {isCurrent && hypePrice > 0 && (
                      <span className="text-gray-500 font-normal"> (${hypePrice.toFixed(2)})</span>
                    )}
                    {isTarget && <span className="ml-2 text-xs bg-green-800/60 text-green-300 px-2 py-0.5 rounded-full">RD Target</span>}
                  </span>
                </div>
                <div className="text-right">
                  <div className={`font-bold ${isTarget ? 'text-green-300' : 'text-white'}`}>
                    {fmt(portfolioValue)}
                  </div>
                  {!isCurrent && gain !== 0 && (
                    <div className={`text-xs ${gain > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {gain > 0 ? '+' : ''}{fmt(gain)} ({gain > 0 ? '+' : ''}{gainPct}%)
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        <p className="text-gray-600 text-xs mt-4">
          * Portfolio value scenarios are projections only. Crypto prices are volatile. Past performance does not guarantee future results.
          This is not investment advice.
        </p>
      </div>

      {/* Yield Rate Source */}
      {weeklyYieldRate > 0 && (
        <div className="bg-gray-900/40 border border-gray-800 rounded-xl px-4 py-3 flex items-center gap-3">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
          <p className="text-gray-500 text-xs">
            Yield rate ({fmtPct(weeklyYieldRate * 100)} weekly / {fmtPct(annualPct)} annually) is calculated live from actual
            dividends paid to current Rebel Dividends investors. Updates every 5 minutes.
          </p>
        </div>
      )}

      {/* CTA */}
      <div className="bg-gradient-to-r from-blue-950/50 to-blue-900/30 border border-blue-800/50 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Ready to start earning?</h3>
        <p className="text-gray-400 mb-6 max-w-md mx-auto text-sm">
          These aren&apos;t projections from a backtested model — they&apos;re based on dividends
          actually being paid to real investors every Friday.
        </p>
        <Link
          href="/apply"
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-10 py-4 rounded-xl text-lg transition inline-block"
        >
          Apply for Investor Access →
        </Link>
        <p className="text-gray-600 text-xs mt-4">
          Accredited investors only · Reg D Rule 506(b) · Limited availability
        </p>
      </div>
    </div>
  )
}
