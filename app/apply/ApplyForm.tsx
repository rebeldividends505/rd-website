'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'

interface FormState {
  first_name: string
  last_name: string
  email: string
  phone: string
  investment_amount: string
  investor_type: string
  how_heard: string
  message: string
}

const initialState: FormState = {
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  investment_amount: '',
  investor_type: 'accredited',
  how_heard: '',
  message: '',
}

export function ApplyForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')
  const [utmParams, setUtmParams] = useState<Record<string, string>>({})
  const searchParams = useSearchParams()
  const router = useRouter()

  // Capture UTM params from URL on mount
  useEffect(() => {
    const params: Record<string, string> = {}
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']
    utmKeys.forEach(key => {
      const val = searchParams.get(key)
      if (val) params[key] = val
    })
    // Also check sessionStorage for UTMs set on earlier page visits
    if (typeof window !== 'undefined') {
      utmKeys.forEach(key => {
        if (!params[key]) {
          const stored = sessionStorage.getItem(key)
          if (stored) params[key] = stored
        } else {
          sessionStorage.setItem(key, params[key])
        }
      })
    }
    setUtmParams(params)

    const type = searchParams.get('type')
    if (type === 'sophisticated' || type === 'accredited') {
      setForm((prev) => ({ ...prev, investor_type: type }))
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      // Route through server API (handles DB write + admin notification)
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: form.first_name.trim(),
          last_name: form.last_name.trim(),
          email: form.email.toLowerCase().trim(),
          phone: form.phone.trim() || null,
          investment_amount: form.investment_amount || null,
          investor_type: form.investor_type,
          how_heard: form.how_heard || null,
          message: form.message || null,
          // UTM attribution
          utm_source: utmParams.utm_source || null,
          utm_medium: utmParams.utm_medium || null,
          utm_campaign: utmParams.utm_campaign || null,
        }),
      })

      if (!res.ok) {
        const err = await res.text()
        throw new Error(err || `HTTP ${res.status}`)
      }

      setStatus('success')
      setForm(initialState)
      // Clear stored UTMs after successful submit
      if (typeof window !== 'undefined') {
        ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(k =>
          sessionStorage.removeItem(k)
        )
      }
      router.push('/thank-you')
    } catch (err: unknown) {
      console.error('Apply form error:', err)
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Name Row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">First Name *</label>
          <input
            type="text"
            name="first_name"
            value={form.first_name}
            onChange={handleChange}
            required
            placeholder="Jason"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-1.5">Last Name *</label>
          <input
            type="text"
            name="last_name"
            value={form.last_name}
            onChange={handleChange}
            required
            placeholder="Cox"
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address *</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="jason@example.com"
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="(555) 000-0000"
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
        />
      </div>

      {/* Investment Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Investment Interest *</label>
        <select
          name="investment_amount"
          value={form.investment_amount}
          onChange={handleChange}
          required
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
        >
          <option value="">Select an amount...</option>
          <option value="10000">$10,000 – $24,999</option>
          <option value="25000">$25,000 – $49,999</option>
          <option value="50000">$50,000 – $99,999</option>
          <option value="100000">$100,000 – $249,999</option>
          <option value="250000">$250,000+</option>
        </select>
      </div>

      {/* Investor Type */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Investor Classification *</label>
        <select
          name="investor_type"
          value={form.investor_type}
          onChange={handleChange}
          required
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition"
        >
          <option value="accredited">Accredited Investor (net worth $1M+ or $200K+ income)</option>
          <option value="sophisticated">Sophisticated Investor (financial knowledge & experience)</option>
          <option value="unknown">Not sure — please explain below</option>
        </select>
        <p className="text-gray-600 text-xs mt-1">
          Accredited investor status per SEC Rule 501. Sophisticated investors subject to 35-slot cap.
        </p>
      </div>

      {/* How Heard */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">How did you hear about us?</label>
        <input
          type="text"
          name="how_heard"
          value={form.how_heard}
          onChange={handleChange}
          placeholder="YouTube, referral, Twitter, etc."
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-1.5">Anything else? (Optional)</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="Questions, background, referral info..."
          className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none"
        />
      </div>

      {/* Hidden UTM attribution indicator (dev info) */}
      {process.env.NODE_ENV === 'development' && Object.keys(utmParams).length > 0 && (
        <p className="text-gray-600 text-xs">
          UTM: {JSON.stringify(utmParams)}
        </p>
      )}

      {/* Error */}
      {status === 'error' && (
        <div className="bg-red-950 border border-red-700 text-red-300 rounded-lg p-3 text-sm">
          {errorMsg || 'Something went wrong. Please try again or email jason@rebeldividends.com'}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white font-bold py-4 rounded-xl text-lg transition"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit Application →'}
      </button>

      {/* Legal footer */}
      <p className="text-gray-600 text-xs text-center pt-2">
        By submitting, you confirm you have read our{' '}
        <Link href="/risk-disclosure" className="underline hover:text-gray-400" target="_blank">Risk Disclosure</Link>
        {' '}and{' '}
        <Link href="/legal" className="underline hover:text-gray-400" target="_blank">Legal Notices</Link>.
        This offering is made pursuant to Rule 506(b) of Regulation D.
      </p>
    </form>
  )
}
