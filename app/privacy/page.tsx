import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — Rebel Dividends",
  description: "Rebel Dividends Privacy Policy — how we collect, use, and protect your personal information.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  const lastUpdated = "April 2026";

  return (
    <div className="min-h-screen bg-gray-950 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Last updated: {lastUpdated}</p>

        <div className="prose prose-invert prose-sm max-w-none space-y-8 text-gray-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
            <p>
              Rebel Dividends, LLC (&quot;Rebel Dividends,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              is committed to protecting your privacy. This Privacy Policy describes how we collect, use,
              share, and protect personal information when you visit our website, apply to invest, or otherwise
              interact with our services.
            </p>
            <p className="mt-3">
              By using our website or services, you agree to the collection and use of information in
              accordance with this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <h3 className="text-lg font-medium text-gray-200 mt-4 mb-2">Information You Provide</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
              <li>Name, email address, and phone number when you submit an application or contact form</li>
              <li>Investment information and accreditation status when you apply to invest</li>
              <li>Communications you send us (email, form submissions)</li>
              <li>UTM campaign data when you arrive via a marketing link</li>
            </ul>
            <h3 className="text-lg font-medium text-gray-200 mt-4 mb-2">Information Collected Automatically</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
              <li>IP address and approximate geographic location</li>
              <li>Browser type and device information</li>
              <li>Pages visited, time spent, and referring URLs</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 mt-3 ml-4">
              <li>Process and evaluate investor applications</li>
              <li>Communicate with you about your application and our offerings</li>
              <li>Send investor updates, distribution notices, and required disclosures</li>
              <li>Comply with applicable legal and regulatory requirements</li>
              <li>Maintain our investor portal and provide investor services</li>
              <li>Improve our website and services</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
            <p className="mt-4 text-sm text-gray-500">
              We will never sell your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. Information Sharing</h2>
            <p>
              We may share your personal information with:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 mt-3 ml-4">
              <li>
                <strong className="text-gray-300">Service providers:</strong> Companies that help us operate
                our business (database hosting, email delivery, CRM) under confidentiality agreements
              </li>
              <li>
                <strong className="text-gray-300">Legal and regulatory authorities:</strong> When required
                by law, SEC regulation, or legal process
              </li>
              <li>
                <strong className="text-gray-300">Professional advisors:</strong> Attorneys, accountants,
                and compliance professionals in connection with our regulated offerings
              </li>
            </ul>
            <p className="mt-4">
              We do not share your information with third-party advertisers or data brokers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Securities Law Compliance</h2>
            <p>
              As a Regulation D securities offering, we are required to maintain records about investors
              and investment decisions. This information may be subject to SEC or FINRA examination.
              By submitting an investor application, you consent to us maintaining these records as
              required by applicable securities law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your
              personal information against unauthorized access, alteration, disclosure, or destruction.
              These measures include:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 mt-3 ml-4">
              <li>Encrypted data storage and transmission (TLS/SSL)</li>
              <li>Access controls and role-based permissions</li>
              <li>Regular security reviews</li>
              <li>Audit logging of administrative actions</li>
            </ul>
            <p className="mt-4">
              No method of transmission over the Internet is 100% secure. While we strive to protect your
              personal information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Cookies</h2>
            <p>
              Our website uses cookies and similar tracking technologies to improve your experience.
              You can control cookie settings in your browser, but disabling cookies may affect website
              functionality. We use cookies for:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 mt-3 ml-4">
              <li>Session management and authentication</li>
              <li>UTM campaign attribution (to understand how investors find us)</li>
              <li>Analytics and website improvement</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 text-gray-400 mt-3 ml-4">
              <li>Access the personal information we hold about you</li>
              <li>Correct inaccurate personal information</li>
              <li>Request deletion of your personal information (subject to legal retention requirements)</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Lodge a complaint with a data protection authority</li>
            </ul>
            <p className="mt-4">
              To exercise these rights, contact us at{" "}
              <a href="mailto:privacy@rebeldividends.com" className="text-blue-400 hover:text-blue-300">
                privacy@rebeldividends.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to provide our services and comply
              with our legal obligations. For investor records, we retain information for a minimum of
              5 years as required by federal securities regulations. Marketing contact information is
              retained until you opt out or request deletion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Children&apos;s Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly
              collect personal information from minors. If you believe we have collected information
              from a minor, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify investors of material
              changes by email. Continued use of our services after changes constitutes acceptance of
              the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">12. Contact Us</h2>
            <p>
              For privacy questions or requests:
            </p>
            <div className="mt-3 bg-gray-900/50 border border-gray-700 rounded-xl p-4 text-sm">
              <p className="text-white font-medium">Rebel Dividends, LLC</p>
              <p className="text-gray-400 mt-1">Privacy Officer</p>
              <p className="text-gray-400">
                Email:{" "}
                <a href="mailto:privacy@rebeldividends.com" className="text-blue-400 hover:text-blue-300">
                  privacy@rebeldividends.com
                </a>
              </p>
            </div>
          </section>

        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap gap-4 text-sm">
          <Link href="/disclaimer" className="text-blue-400 hover:text-blue-300">Disclaimer</Link>
          <Link href="/legal" className="text-blue-400 hover:text-blue-300">Legal Notices</Link>
          <Link href="/risk-disclosure" className="text-blue-400 hover:text-blue-300">Risk Disclosure</Link>
          <Link href="/" className="text-gray-500 hover:text-gray-300">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
