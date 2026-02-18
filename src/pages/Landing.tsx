import { Link } from 'react-router-dom';
import { Moon, Zap, Shield, Star } from 'lucide-react';

export default function Landing() {
  return (
    <div className="bg-gray-50">
      <section className="bg-gradient-to-br from-blue-900 to-blue-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Never Miss Another Lead - AI Answers Every Call, Books Every Appointment
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-4xl mx-auto">
            24/7 AI receptionists and speed-to-lead systems built for contractors
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-16">
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="bg-blue-100 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Moon className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">After Hours Coverage</h3>
              <p className="text-gray-600 text-lg mb-6 flex-grow">
                Never lose a lead after 5pm. AI handles calls nights, weekends, and holidays.
              </p>
              <Link
                to="/after-hours"
                className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
              >
                Watch Demo
              </Link>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="bg-orange-100 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Speed to Lead</h3>
              <p className="text-gray-600 text-lg mb-6 flex-grow">
                Respond to ad leads in seconds, not hours. Convert more while competitors sleep.
              </p>
              <Link
                to="/speed-to-lead"
                className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
              >
                Watch Demo
              </Link>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col">
              <div className="bg-blue-100 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-900" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Complete Coverage</h3>
              <p className="text-gray-600 text-lg mb-6 flex-grow">
                Full AI phone system. Every call answered, qualified, and booked 24/7/365.
              </p>
              <Link
                to="/complete-coverage"
                className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors text-center"
              >
                Watch Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border-l-4 border-orange-500">
            <div className="flex items-start space-x-4">
              <Star className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-xl md:text-2xl text-gray-800 italic mb-4">
                  "We were losing 30-40 calls a week after hours. Now our AI answers every single one. We've booked an extra $47,000 in jobs in just the first two months."
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  Mike Thompson, Thompson HVAC
                </p>
                <p className="text-gray-600">Phoenix, AZ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Stop Missing Leads?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            See exactly how AI can transform your business in a live demo
          </p>
          <a
            href="https://links.fluidproductionsllc.com/widget/bookings/aiteammate"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-orange-600 transition-colors"
          >
            Get Your Custom Demo
          </a>
        </div>
      </section>
    </div>
  );
}
