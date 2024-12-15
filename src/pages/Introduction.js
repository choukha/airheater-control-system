import React from 'react';
import { 
  Server, 
  Database, 
  LineChart,
  Cpu,
  Settings,
  Shield
} from 'lucide-react';

const IntroductionPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Air Heater Control System: An Industry 4.0 Solution
        </h1>
        
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            The Air Heater Control System represents a comprehensive implementation of Industry 4.0 principles 
            in industrial process control. This project demonstrates the integration of advanced control systems, 
            real-time monitoring, and industrial communication protocols to create a modern, connected industrial solution.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Project Background</h2>
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-gray-700">
              Traditional industrial heating systems often rely on manual control and isolated monitoring solutions. 
              Our project addresses these limitations by implementing a fully automated, connected control system 
              that leverages modern technologies and Industry 4.0 principles.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Key Technologies</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Cpu className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Control System</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>PI Controller implementation</li>
                <li>Real-time temperature control</li>
                <li>Dynamic parameter tuning</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Server className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">OPC UA Integration</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Industrial communication protocol</li>
                <li>Secure data transmission</li>
                <li>Real-time data access</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Database className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Management</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Historical data storage</li>
                <li>Performance analytics</li>
                <li>Trend analysis</li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Project Objectives</h2>
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <LineChart className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Advanced Process Control</h4>
                  <p className="text-gray-600">Implementation of sophisticated control algorithms for precise temperature regulation</p>
                </div>
              </li>
              <li className="flex items-start">
                <Settings className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">System Integration</h4>
                  <p className="text-gray-600">Seamless integration with industrial communication protocols and data management systems</p>
                </div>
              </li>
              <li className="flex items-start">
                <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Security Implementation</h4>
                  <p className="text-gray-600">Robust security measures for data protection and system integrity</p>
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Technical Innovation</h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Our implementation introduces several innovative features that set it apart from traditional control systems:
            </p>
            <ul className="list-disc pl-5 mt-4">
              <li>Real-time web-based monitoring interface using Streamlit</li>
              <li>Integration of OPC UA for standardized industrial communication</li>
              <li>Advanced PI control with dynamic parameter tuning</li>
              <li>Comprehensive data logging and analysis capabilities</li>
              <li>Role-based access control for enhanced security</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;