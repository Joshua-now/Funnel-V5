import { Check, Phone, Mail } from 'lucide-react';

export default function Pricing() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 pb-8 border-b-4 border-blue-900">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Revenue Recovery Systems
          </h1>
          <p className="text-2xl text-gray-600">
            Stop Losing Money to Missed Opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl border-2 border-gray-200 p-8 relative hover:shadow-xl transition-shadow">
            <div className="absolute -top-3 left-6 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              14-Day Free Trial
            </div>

            <div className="text-center mb-6 pb-6 border-b-2 border-gray-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-3">
                Never Miss Another Call
              </h2>
              <p className="text-sm text-gray-600 italic min-h-[60px]">
                Stop losing after-hours emergency calls and daily missed opportunities
              </p>
            </div>

            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                $297<span className="text-lg text-gray-500 font-normal">/mo</span>
              </div>
              <div className="text-sm text-gray-500">$297 setup fee</div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg text-center mb-6">
              <div className="text-sm font-semibold text-gray-700">
                300 minutes included<br />
                $0.40/min overage
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>24/7 professional call answering</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>After-hours emergency coverage</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Direct calendar booking</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Missed call text-back recovery</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Appointment confirmations</span>
              </li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-2">
                Perfect For
              </div>
              <div className="text-sm text-gray-700 leading-relaxed">
                Contractors doing $500K-$1.5M annually with 2-3 trucks who are losing $30K-60K/year to unanswered calls
              </div>
            </div>

            <a
              href="https://buy.stripe.com/6oUeV5eza7wW02ib3F2sM0i"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-900 text-white py-4 rounded-lg text-center font-semibold hover:bg-blue-800 transition-colors"
            >
              Start Free Trial
            </a>
          </div>

          <div className="bg-white rounded-xl border-4 border-blue-900 p-8 relative hover:shadow-2xl transition-shadow">
            <div className="absolute -top-3 right-6 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
              Most Popular
            </div>
            <div className="absolute -top-3 left-6 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              14-Day Free Trial
            </div>

            <div className="text-center mb-6 pb-6 border-b-2 border-gray-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-3">
                Speed-to-Lead Domination
              </h2>
              <p className="text-sm text-gray-600 italic min-h-[60px]">
                Beat every competitor to new leads and capture them within 60 seconds
              </p>
            </div>

            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                $997<span className="text-lg text-gray-500 font-normal">/mo</span>
              </div>
              <div className="text-sm text-gray-500">$697 setup fee</div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg text-center mb-6">
              <div className="text-sm font-semibold text-gray-700">
                1,200 minutes included<br />
                $0.40/min overage
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-sm font-bold">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Everything in "Never Miss Another Call" PLUS:</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Sub-60-second lead response system</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Multi-channel follow-up (call + text + email)</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Advanced missed call recovery</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Lead qualification & scoring</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Google Ads integration</span>
              </li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-2">
                Perfect For
              </div>
              <div className="text-sm text-gray-700 leading-relaxed">
                Growing contractors doing $1.5M-$4M annually running paid ads who are losing $60K-120K/year to slow lead response
              </div>
            </div>

            <a
              href="https://buy.stripe.com/4gM4gr76I5oO2aqfjV2sM0j"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-900 text-white py-4 rounded-lg text-center font-semibold hover:bg-blue-800 transition-colors"
            >
              Start Free Trial
            </a>
          </div>

          <div className="bg-white rounded-xl border-2 border-gray-200 p-8 relative hover:shadow-xl transition-shadow">
            <div className="absolute -top-3 left-6 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              14-Day Free Trial
            </div>

            <div className="text-center mb-6 pb-6 border-b-2 border-gray-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-3">
                Complete Revenue Recovery
              </h2>
              <p className="text-sm text-gray-600 italic min-h-[60px]">
                Plug every revenue leak in your business - capture nearly 100% of opportunities
              </p>
            </div>

            <div className="text-center mb-6">
              <div className="text-5xl font-bold text-gray-900 mb-2">
                $1,497<span className="text-lg text-gray-500 font-normal">/mo</span>
              </div>
              <div className="text-sm text-gray-500">$997 setup fee</div>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg text-center mb-6">
              <div className="text-sm font-semibold text-gray-700">
                2,000 minutes included<br />
                $0.40/min overage
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-sm font-bold">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Everything in "Speed-to-Lead" PLUS:</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>24/7 website live chat engagement</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>No-show appointment recovery system</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Technician mobile app</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Priority support & optimization</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Monthly performance reviews</span>
              </li>
              <li className="flex items-start text-sm">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                <span>Dedicated account manager</span>
              </li>
            </ul>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="text-xs font-bold text-blue-900 uppercase tracking-wide mb-2">
                Perfect For
              </div>
              <div className="text-sm text-gray-700 leading-relaxed">
                Established contractors doing $4M+ annually with multiple crews, ready to scale to $10M+, currently losing $150K+ across all revenue leaks
              </div>
            </div>

            <a
              href="https://buy.stripe.com/28E5kv76I5oOaGW4Fh2sM0h"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-blue-900 text-white py-4 rounded-lg text-center font-semibold hover:bg-blue-800 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </div>

        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-8 text-center mb-12">
          <h3 className="text-2xl font-bold text-yellow-800 mb-4">Quick ROI Calculator</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            If we help you book just <strong>3 additional jobs per month</strong> at an average of <strong>$1,800 per job</strong>, that's <strong>$5,400 in recovered revenue monthly</strong>.
          </p>
          <p className="text-xl font-bold text-yellow-800 mb-4">
            Your profit after system cost: $4,400+/month or $52,800/year
          </p>
          <p className="text-gray-700 italic">
            Most contractors see 10-30 additional booked jobs per month within 90 days.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-6">All Plans Include</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm">
                <span className="text-blue-900 font-bold mr-3">•</span>
                <span>14-day free trial (200 minutes included)</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-blue-900 font-bold mr-3">•</span>
                <span>No long-term contracts (month-to-month)</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-blue-900 font-bold mr-3">•</span>
                <span>Full CRM/calendar integration</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-blue-900 font-bold mr-3">•</span>
                <span>Call recording & transcription</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-blue-900 font-bold mr-3">•</span>
                <span>Real-time notifications</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-blue-900 font-bold mr-3">•</span>
                <span>99.9% uptime guarantee</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-blue-900 font-bold mr-3">•</span>
                <span>Regular system updates</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Setup Process (2-3 Weeks)</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm">
                <span className="text-blue-900 font-bold mr-3">•</span>
                <span>Week 1: Configuration & integration</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-blue-900 font-bold mr-3">•</span>
                <span>Week 2: Testing & training</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-blue-900 font-bold mr-3">•</span>
                <span>Week 3: Go-live & monitoring</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-blue-900 font-bold mr-3">•</span>
                <span>We do all the technical work</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-blue-900 font-bold mr-3">•</span>
                <span>Minimal time required from you</span>
              </li>
              <li className="flex items-start text-sm">
                <span className="text-blue-900 font-bold mr-3">•</span>
                <span>No disruption to your business</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 text-center border-t-4 border-blue-900 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Stop Losing Revenue?</h3>
          <div className="text-gray-700 space-y-2">
            <p className="font-bold text-lg">Fluid Productions LLC</p>
            <p className="flex items-center justify-center space-x-2">
              <Mail className="w-5 h-5 text-blue-900" />
              <a href="mailto:joshua@fluidproductions.com" className="text-blue-900 font-semibold hover:underline">
                joshua@fluidproductions.com
              </a>
            </p>
            <p className="flex items-center justify-center space-x-2">
              <Phone className="w-5 h-5 text-blue-900" />
              <a href="tel:+1234567890" className="text-blue-900 font-semibold hover:underline">
                [Your Phone Number]
              </a>
            </p>
            <p>
              <a href="https://fluidproductions.com" className="text-blue-900 font-semibold hover:underline">
                fluidproductions.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
