import React from 'react';
import { 
  Settings, 
  BarChart2, 
  Shield, 
  Workflow, 
  Database, 
  LineChart, 
  Cpu,
  Lock,
  User,
  Globe,
  Terminal,
  Share2,
  Video
} from 'lucide-react';
import Section from '../components/common/Section';
import PrimaryButton from '../components/common/Button';

const Home = () => {
  return (
      <main>
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold mb-4">
                Air Heater Control System
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Advanced temperature control with real-time monitoring, OPC UA integration, and intelligent process management
              </p>
              <div className="flex space-x-4">
                <PrimaryButton 
                  href="https://airheater-control-monitor.streamlit.app/"
                  target="_blank"
                >
                  <LineChart className="h-5 w-5" />
                  <span>Launch Dashboard</span>
                </PrimaryButton>
                <PrimaryButton 
                  href="https://github.com/choukha/airheater-control"
                  target="_blank"
                  variant="secondary"
                >
                  <Settings className="h-5 w-5" />
                  <span>View Source Code</span>
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <Section title="System Overview" icon={BarChart2}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Key Objectives</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Cpu className="h-5 w-5 mr-3 text-blue-600" />
                    Implement advanced temperature control for industrial processes
                  </li>
                  <li className="flex items-center">
                    <LineChart className="h-5 w-5 mr-3 text-blue-600" />
                    Provide real-time monitoring and data visualization
                  </li>
                  <li className="flex items-center">
                    <Share2 className="h-5 w-5 mr-3 text-blue-600" />
                    Enable seamless industrial data communication
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-blue-600" />
                    Ensure robust cybersecurity and data integrity
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-blue-900">
                  Industry 4.0 Integration
                </h3>
                <p className="text-gray-700">
                  Transforms traditional manual control into a connected, intelligent system with:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2 mt-3">
                  <li>Real-time data monitoring</li>
                  <li>Automated control systems</li>
                  <li>Secure data communication</li>
                  <li>Advanced analytics capabilities</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section title="System Architecture" icon={Workflow}>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Core Components</h3>
                <ul className="space-y-4">
                  <li className="flex items-center bg-gray-50 p-3 rounded-md">
                    <Cpu className="h-6 w-6 mr-3 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">Air Heater Control</h4>
                      <p className="text-sm text-gray-600">PI Controller with dynamic parameter tuning</p>
                    </div>
                  </li>
                  <li className="flex items-center bg-gray-50 p-3 rounded-md">
                    <Database className="h-6 w-6 mr-3 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">Data Management</h4>
                      <p className="text-sm text-gray-600">SQLite database for historical data storage</p>
                    </div>
                  </li>
                  <li className="flex items-center bg-gray-50 p-3 rounded-md">
                    <Share2 className="h-6 w-6 mr-3 text-blue-600" />
                    <div>
                      <h4 className="font-semibold">OPC UA Server</h4>
                      <p className="text-sm text-gray-600">Industrial data communication protocol</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h4 className="text-center text-lg font-semibold mb-4">System Communication Flow</h4>
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-500 text-white p-3 rounded-full">
                      <Cpu className="h-6 w-6" />
                    </div>
                    <div className="h-1 w-16 bg-gray-300"></div>
                    <div className="bg-green-500 text-white p-3 rounded-full">
                      <Database className="h-6 w-6" />
                    </div>
                    <div className="h-1 w-16 bg-gray-300"></div>
                    <div className="bg-purple-500 text-white p-3 rounded-full">
                      <Share2 className="h-6 w-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Section>

          <Section title="Security Features" icon={Shield}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Cybersecurity Measures</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <Lock className="h-5 w-5 mr-3 text-blue-600" />
                    Role-based access control
                  </li>
                  <li className="flex items-center">
                    <User className="h-5 w-5 mr-3 text-blue-600" />
                    Secure user authentication
                  </li>
                  <li className="flex items-center">
                    <Shield className="h-5 w-5 mr-3 text-blue-600" />
                    SQL injection protection
                  </li>
                  <li className="flex items-center">
                    <Globe className="h-5 w-5 mr-3 text-blue-600" />
                    Secure OPC UA data transmission
                  </li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-yellow-900">
                  Security Best Practices
                </h3>
                <p className="text-gray-700 mb-3">
                  Implementing multi-layered security strategies to protect industrial control systems:
                </p>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Regular security updates</li>
                  <li>Firewall configuration</li>
                  <li>Limited OPC UA access</li>
                  <li>Continuous monitoring</li>
                </ul>
              </div>
            </div>
          </Section>


          <Section title="Video Demonstration" icon={Video}>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96 rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/GS97DElMbIc"
                title="Air Heater Control System Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Section>

        </div>
      </main>
  );
};

export default Home;