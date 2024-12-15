import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Terminal, Globe } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <Terminal className="h-8 w-8 text-blue-600 mr-3" />
            <span className="text-xl font-bold text-gray-900">Air Heater Control</span>
          </Link>
          <div className="flex items-center space-x-6">
            <NavLink to="/" className={({isActive}) => `text-gray-600 hover:text-blue-700 ${isActive ? 'text-blue-700' : ''}`}>
              Home
            </NavLink>
            <NavLink to="/introduction" className={({isActive}) => `text-gray-600 hover:text-blue-700 ${isActive ? 'text-blue-700' : ''}`}>
              Introduction
            </NavLink>
            <NavLink to="/methods" className={({isActive}) => `text-gray-600 hover:text-blue-700 ${isActive ? 'text-blue-700' : ''}`}>
              Methods
            </NavLink>
            <NavLink to="/results" className={({isActive}) => `text-gray-600 hover:text-blue-700 ${isActive ? 'text-blue-700' : ''}`}>
              Results
            </NavLink>
            <NavLink to="/discussion" className={({isActive}) => `text-gray-600 hover:text-blue-700 ${isActive ? 'text-blue-700' : ''}`}>
              Discussion
            </NavLink>
            <NavLink to="/conclusion" className={({isActive}) => `text-gray-600 hover:text-blue-700 ${isActive ? 'text-blue-700' : ''}`}>
              Conclusion
            </NavLink>
            <NavLink to="/references" className={({isActive}) => `text-gray-600 hover:text-blue-700 ${isActive ? 'text-blue-700' : ''}`}>
              References
            </NavLink>
            <a 
              href="https://airheater-control-monitor.streamlit.app/"
              target="_blank"
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md transition-colors duration-200 flex items-center space-x-2"
            >
              <Globe className="h-4 w-4" />
              <span>Live Dashboard</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;