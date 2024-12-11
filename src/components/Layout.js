import React from 'react';

export const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-900">Air Heater Control System</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#overview" className="text-gray-600 hover:text-gray-900">Overview</a>
            <a href="#documentation" className="text-gray-600 hover:text-gray-900">Documentation</a>
            <a href="#demo" className="text-gray-600 hover:text-gray-900">Demo</a>
            <a href="https://your-streamlit-app-url.com" target="_blank" rel="noopener noreferrer" 
               className="text-blue-600 hover:text-blue-800">Live Monitor</a>
          </div>
        </div>
      </div>
    </nav>
    {children}
    <footer className="bg-white shadow-inner mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-500">© 2024 Air Heater Control System</p>
      </div>
    </footer>
  </div>
);