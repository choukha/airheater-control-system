import React from 'react';
import { 
  Code,
  Database,
  Server,
  GitBranch,
  Shield,
  Terminal
} from 'lucide-react';

const MethodsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Materials and Methods
      </h1>

      <div className="prose max-w-none">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">System Architecture</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-4">Core Components</h3>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <Terminal className="h-6 w-6 text-blue-600 mr-4 mt-1" />
              <div>
                <h4 className="font-semibold">Control System Implementation</h4>
                <p className="text-gray-600">
                  The control system is built using Python, implementing a discrete PI controller 
                  with configurable parameters. Key features include:
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-600">
                  <li>Discrete-time implementation using Forward Euler method</li>
                  <li>Anti-windup protection</li>
                  <li>Dynamic parameter tuning</li>
                  <li>Real-time performance monitoring</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <Database className="h-6 w-6 text-green-600 mr-4 mt-1" />
              <div>
                <h4 className="font-semibold">Data Management System</h4>
                <p className="text-gray-600">
                  Data persistence and management is handled through SQLite, providing:
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-600">
                  <li>Historical data storage and retrieval</li>
                  <li>Efficient data cleanup and maintenance</li>
                  <li>Performance metrics calculation</li>
                  <li>Data export capabilities</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <Server className="h-6 w-6 text-purple-600 mr-4 mt-1" />
              <div>
                <h4 className="font-semibold">OPC UA Integration</h4>
                <p className="text-gray-600">
                  Industrial communication is implemented using the asyncua library:
                </p>
                <ul className="list-disc pl-5 mt-2 text-gray-600">
                  <li>Asynchronous server implementation</li>
                  <li>Standardized data modeling</li>
                  <li>Secure communication channels</li>
                  <li>Real-time data updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Implementation Methodology</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Control System Design</h3>
            <p className="text-gray-700 mb-4">
              Our implementation follows a modular approach with clear separation of concerns:
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Air heater model implementation</li>
              <li>PI controller with anti-windup</li>
              <li>Low-pass filter for noise reduction</li>
              <li>Real-time data visualization</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">System Integration</h3>
            <p className="text-gray-700 mb-4">
              The integration strategy ensures seamless communication between components:
            </p>
            <ul className="list-disc pl-5 text-gray-600">
              <li>OPC UA server setup and configuration</li>
              <li>Database schema design and optimization</li>
              <li>Web interface development using Streamlit</li>
              <li>Security implementation and testing</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Development Tools and Technologies</h2>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Code className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Core Technologies</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Python 3.8+</li>
              <li>Streamlit</li>
              <li>SQLite</li>
              <li>asyncua</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <GitBranch className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Development Tools</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Git version control</li>
              <li>GitHub</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Shield className="h-8 w-8 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Testing Tools</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>DBViewer</li>
              <li>UaExpert</li>
              <li>NI-DAQmx</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodsPage;