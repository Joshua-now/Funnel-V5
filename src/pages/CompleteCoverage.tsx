import { Phone, CheckCircle } from 'lucide-react';

export default function CompleteCoverage() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Coverage System
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full AI phone system handling all calls, 24/7/365. Your business never sleeps.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Xh3Es4LdxAQ?si=mN3b4YRtAA3kZ5PS"
              title="Complete Coverage Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
          <a
            href="https://links.fluidproductionsllc.com/widget/bookings/aiteammate"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-orange-600 transition-colors text-center"
          >
            Get Your Custom Demo
          </a>
          <a
            href="https://links.fluidproductionsllc.com/widget/form/Aud56k5Zq6uoCVHjNBKN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-900 text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-blue-800 transition-colors flex items-center justify-center space-x-2"
          >
            <Phone className="w-6 h-6" />
            <span>Have AI Teammate Call You</span>
          </a>
        </div>

        <div className="flex justify-center mb-12">
          <a
            href="https://buy.stripe.com/28E5kv76I5oOaGW4Fh2sM0h"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition-colors text-center shadow-lg"
          >
            Buy Now
          </a>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What You Get With Complete Coverage:
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Every Call Answered, Every Time
                </h3>
                <p className="text-gray-600">
                  AI handles 100% of incoming calls during business hours and after hours. Zero missed opportunities, ever.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Smart Call Routing & Escalation
                </h3>
                <p className="text-gray-600">
                  AI qualifies callers, books appointments, and transfers urgent calls to your team with full context.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Replace or Augment Your Front Desk
                </h3>
                <p className="text-gray-600">
                  Free your staff from phone duty or eliminate the position entirely. AI costs less and never calls in sick.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
