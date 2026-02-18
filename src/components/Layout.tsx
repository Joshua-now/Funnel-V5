import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import Footer from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-sm border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">AI Teammate</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-900 font-medium">
                Home
              </Link>
              <Link to="/after-hours" className="text-gray-700 hover:text-blue-900 font-medium">
                After Hours
              </Link>
              <Link to="/speed-to-lead" className="text-gray-700 hover:text-blue-900 font-medium">
                Speed to Lead
              </Link>
              <Link to="/complete-coverage" className="text-gray-700 hover:text-blue-900 font-medium">
                Complete Coverage
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-900 font-medium">
                Pricing
              </Link>
              <a
                href="https://links.fluidproductionsllc.com/widget/bookings/aiteammate"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
