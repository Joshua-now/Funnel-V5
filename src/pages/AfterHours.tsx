import { Phone, CheckCircle } from 'lucide-react';

export default function AfterHours() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            After Hours Coverage
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your AI receptionist works 24/7, capturing every lead when your office is closed
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <div className="aspect-video bg-gray-900 flex items-center justify-center">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/0pJhJ-I3XRc?si=SeQ-zbL9BMgqOl5W"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
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
            href="https://links.fluidproductionsllc.com/widget/form/Ec2KNxzEZxsgPXhHGYxk"
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
            href="https://buy.stripe.com/6oUeV5eza7wW02ib3F2sM0i"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-green-700 transition-colors text-center shadow-lg"
          >
            Buy Now
          </a>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What You Get With After Hours Coverage:
          </h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Never Miss Emergency Calls
                </h3>
                <p className="text-gray-600">
                  AI answers every call after hours, nights, weekends, and holidays. Emergency jobs go straight to your on-call team.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Qualify & Book While You Sleep
                </h3>
                <p className="text-gray-600">
                  AI collects customer details, understands their needs, and books appointments directly into your calendar.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Start Every Monday With a Full Schedule
                </h3>
                <p className="text-gray-600">
                  Weekend callers become Monday appointments. No more playing phone tag on Monday morning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
