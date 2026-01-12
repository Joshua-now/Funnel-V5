import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AI Teammate</span>
            </div>
            <p className="text-gray-400 mb-4">
              24/7 AI receptionists and speed-to-lead systems built for contractors. Never miss another lead.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/after-hours" className="hover:text-white transition-colors">
                  After Hours Coverage
                </Link>
              </li>
              <li>
                <Link to="/speed-to-lead" className="hover:text-white transition-colors">
                  Speed to Lead
                </Link>
              </li>
              <li>
                <Link to="/complete-coverage" className="hover:text-white transition-colors">
                  Complete Coverage
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} AI Teammate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
