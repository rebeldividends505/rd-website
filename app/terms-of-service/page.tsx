import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Rebel Dividends",
  description: "Terms of Service for Rebel Dividends Inc. — governing your use of our website and services.",
  robots: "noindex, nofollow",
};

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "1. Agreement",
      content: `This Terms of Service Agreement (the "Agreement") is a legally binding contract governing your relationship with Rebel Dividends, Inc, located at 11112 Sidney Ave NE, Albuquerque, New Mexico, 87111, USA, in connection with the use of our website and services at https://rebeldividends.com.

By using Rebel Dividends, you warrant that you have read and reviewed this Agreement and agree to be bound by it. If you do not agree, please exit the site immediately. We only agree to provide Services if you assent to this Agreement.`,
    },
    {
      title: "2. Definitions",
      content: `"PARTIES": The parties to this Agreement are Rebel Dividends, Inc (the "Company") and you, as the User.

"SERVICES": Any services made available for use on the Rebel Dividends platform, including but not limited to investment tracking, dividend projections, document access, and investor portal access.

"USER / MEMBER": Any visitor to the site is a User. Users who register and create accounts are Members.`,
    },
    {
      title: "3. Services",
      content: `Rebel Dividends provides a unified dashboard for tracking investment assets. We also offer additional Services which may include, but are not limited to, projections of potential investment gains, detailed transaction information, and investor communications.

At our sole discretion, we may offer additional Services or update, modify, or revise any current content and Services. We reserve the right to cancel and cease offering any Service at any time. Continued use of the Services after any updates constitutes acceptance of those updates.`,
    },
    {
      title: "4. Age Restriction",
      content: `No persons under 18 years of age are permitted to use Rebel Dividends. By using this site, you represent and warrant that you are at least 18 years of age and may legally enter into a binding contract. We disclaim any liability for misrepresentation of age.`,
    },
    {
      title: "5. Registration & Privacy",
      content: `When you register, the Company may collect information such as your email address and, depending on Services chosen, additional information such as billing info and investment data. Once registered and signed in, you are no longer anonymous to us.

As a Member, you consent to the collection and use of information provided, including transfer within the United States and other countries for storage, processing, or use by the Company. See our Privacy Policy for details.`,
    },
    {
      title: "6. Account and Security",
      content: `You are the sole authorized user of your account. You are responsible for maintaining the confidentiality of your credentials and for all activities that occur within your account.

You must not share your account credentials with any third party. If you discover your account has been compromised, notify us immediately at support@rebeldividends.com. You are exclusively responsible for any act or omission by users who access your account.`,
    },
    {
      title: "7. Investment Services — Important Disclosures",
      content: `Investment offerings by Rebel Dividends are made pursuant to Regulation D, Rule 506(b) of the Securities Act of 1933. Participation is limited to accredited investors (as defined by SEC Rule 501) and a limited number of sophisticated investors (not to exceed 35 non-accredited investors under 506(b)).

INVESTMENT RISK: Investing in cryptocurrency-related private offerings involves substantial risk, including the risk of total loss of your investment. Past performance is not indicative of future results. Nothing on this website constitutes investment advice, legal advice, or a solicitation to invest.

FORWARD-LOOKING STATEMENTS: Any projections, estimates, or forecasts on this site are forward-looking and not guaranteed. They are based on current assumptions and may differ materially from actual results.`,
    },
    {
      title: "8. Acceptable Use",
      content: `You agree not to use the Services to:
• Upload, transmit, or make available any unlawful, harmful, or fraudulent content
• Impersonate any individual or entity
• Infringe upon any patent, copyright, trademark, or other proprietary rights
• Transmit unsolicited advertising, junk mail, or spam
• Interfere with or disrupt the Services or connected networks
• Violate any local, state, federal, or international law, including SEC regulations`,
    },
    {
      title: "9. Intellectual Property",
      content: `The Company will always respect the intellectual property of others. All content on the Rebel Dividends website — including text, graphics, logos, and software — is the property of Rebel Dividends, Inc or its content suppliers and is protected by applicable copyright and intellectual property laws.

You may not reproduce, distribute, or create derivative works from our content without express written permission.`,
    },
    {
      title: "10. Payment & Billing",
      content: `All investments and fund subscriptions are processed through wire transfer or other approved payment methods as disclosed during the onboarding process. Investment commitments are subject to the terms of the applicable Private Placement Memorandum (PPM) and Subscription Agreement, which govern in all cases.

Rebel Dividends does not process credit card payments for investment capital. All financial terms are governed by your executed Subscription Agreement.`,
    },
    {
      title: "11. Limitation of Liability",
      content: `To the fullest extent permitted by law, Rebel Dividends, Inc shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill, arising from your use of the Services or any investment outcomes.

Our total aggregate liability to you for any claim arising from this Agreement shall not exceed the amount you have paid to us in the 12 months preceding the claim.`,
    },
    {
      title: "12. Indemnification",
      content: `You agree to indemnify, defend, and hold harmless Rebel Dividends, Inc and its officers, directors, employees, and agents from any claim, demand, loss, liability, or expense (including reasonable attorneys' fees) arising from your use of the Services, your violation of this Agreement, or your violation of any third-party rights.`,
    },
    {
      title: "13. Governing Law",
      content: `This Agreement shall be governed by and construed in accordance with the laws of the State of New Mexico, without regard to conflict of law provisions. Any dispute shall be subject to the exclusive jurisdiction of courts located in Bernalillo County, New Mexico.`,
    },
    {
      title: "14. Changes to This Agreement",
      content: `We reserve the right to modify this Agreement at any time. If we make material changes, we will notify registered Members via email. Your continued use of the Services following notice of changes constitutes your acceptance of the revised Agreement.`,
    },
    {
      title: "15. Contact",
      content: `Questions about these Terms? Contact us:

Rebel Dividends, Inc
11112 Sidney Ave NE
Albuquerque, New Mexico 87111
support@rebeldividends.com`,
    },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-white mb-3">Terms of Service</h1>
        <p className="text-gray-500 text-sm">
          Effective Date: January 1, 2025 · Last Updated: April 2026
        </p>
        <p className="text-gray-400 mt-4 leading-relaxed">
          Please read these Terms of Service carefully before using the Rebel Dividends website
          or investor portal. By accessing or using our Services, you agree to be bound by these Terms.
        </p>
      </div>

      <div className="space-y-8">
        {sections.map((section) => (
          <section key={section.title} className="bg-gray-900 rounded-2xl border border-gray-800 p-6">
            <h2 className="text-lg font-bold text-white mb-3">{section.title}</h2>
            <div className="text-gray-300 text-sm leading-relaxed whitespace-pre-line">
              {section.content}
            </div>
          </section>
        ))}
      </div>

      {/* Related links */}
      <div className="mt-12 pt-8 border-t border-gray-800">
        <p className="text-gray-500 text-sm mb-4">Related legal documents:</p>
        <div className="flex flex-wrap gap-3">
          <Link href="/privacy" className="text-blue-400 hover:text-blue-300 text-sm underline">
            Privacy Policy
          </Link>
          <span className="text-gray-700">·</span>
          <Link href="/disclaimer" className="text-blue-400 hover:text-blue-300 text-sm underline">
            Investment Disclaimer
          </Link>
          <span className="text-gray-700">·</span>
          <Link href="/risk-disclosure" className="text-blue-400 hover:text-blue-300 text-sm underline">
            Risk Disclosure
          </Link>
          <span className="text-gray-700">·</span>
          <Link href="/legal" className="text-blue-400 hover:text-blue-300 text-sm underline">
            Legal Notices
          </Link>
        </div>
      </div>
    </div>
  );
}
