import React from 'react';
import { useState } from 'react';
import { LineChart, XAxis, YAxis, CartesianGrid, Line, Tooltip, Legend } from 'recharts';
import { ChevronDown, ChevronUp, BarChart2, Settings, Shield, Workflow } from 'lucide-react';

// Add NavLink component
const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
  >
    {children}
  </a>
);

// Add PrimaryButton component
const PrimaryButton = ({ href, target, children }) => (
  <a
    href={href}
    target={target}
    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
  >
    {children}
  </a>
);

const demoData = [
  { time: '00:00', temperature: 25.2, setpoint: 25.0, control: 2.5 },
  { time: '00:10', temperature: 25.5, setpoint: 25.0, control: 2.3 },
  { time: '00:20', temperature: 24.8, setpoint: 25.0, control: 2.7 },
  { time: '00:30', temperature: 25.1, setpoint: 25.0, control: 2.4 }
];

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Settings className="h-8 w-8 text-blue-600 mr-2" />
            <span className="text-xl font-bold text-gray-900">Industrial Air Heater System</span>
          </div>
          <div className="flex items-center space-x-6">
            <NavLink href="#overview">Overview</NavLink>
            <NavLink href="#control">Control System</NavLink>
            <NavLink href="#monitoring">Monitoring</NavLink>
            <NavLink href="#architecture">Architecture</NavLink>
            <NavLink href="#security">Security</NavLink>
            <PrimaryButton 
              href="https://your-streamlit-url.com" 
              target="_blank"
            >
              Live Dashboard
            </PrimaryButton>
          </div>
        </div>
      </div>
    </nav>
    {children}
    <footer className="bg-white mt-12 border-t">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Documentation</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Technical Specs</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">API Reference</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Technologies</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">OPC UA</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Azure Cloud</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Support</a></li>
              <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Technical Help</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

const Section = ({ title, icon: Icon, children, id }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  
  return (
    <section id={id} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div 
            className="px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="flex items-center">
              <Icon className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            </div>
            {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
          </div>
          {isExpanded && (
            <div className="px-6 py-4 border-t border-gray-200">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ControlSystem = () => (
  <div className="prose max-w-none">
    <h3>Temperature Control Implementation</h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h4>PI Controller</h4>
        <ul>
          <li>Proportional Gain (Kp): 2.0</li>
          <li>Integral Time (Ti): 7.5s</li>
          <li>Sampling Time: 0.1s</li>
        </ul>
        <h4>Features</h4>
        <ul>
          <li>Anti-windup protection</li>
          <li>Bumpless transfer</li>
          <li>Output limiting</li>
        </ul>
        <h4>Performance Metrics</h4>
        <ul>
          <li>Settling Time: &lt; 30s</li>
          <li>Overshoot: &lt; 5%</li>
          <li>Steady-state error: &lt; 0.1°C</li>
        </ul>
      </div>
      <div>
        <LineChart width={500} height={300} data={demoData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
          <Line type="monotone" dataKey="setpoint" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  </div>
);

const MonitoringSystem = () => (
  <div className="prose max-w-none">
    <h3>Real-time Monitoring Features</h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h4>Data Collection</h4>
        <ul>
          <li>Temperature readings: 10 samples/second</li>
          <li>Control signal logging</li>
          <li>System state monitoring</li>
        </ul>
        <h4>Visualization</h4>
        <ul>
          <li>Real-time temperature plots</li>
          <li>Historical trend analysis</li>
          <li>Control signal monitoring</li>
          <li>System performance metrics</li>
        </ul>
      </div>
      <div>
        <LineChart width={500} height={300} data={demoData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="control" stroke="#ff7300" />
        </LineChart>
      </div>
    </div>
  </div>
);

const SystemArchitecture = () => (
  <div className="prose max-w-none">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h3>System Components</h3>
        <h4>Hardware</h4>
        <ul>
          <li>Air heater unit with temperature sensor</li>
          <li>Control system interface</li>
          <li>Data acquisition system</li>
        </ul>
        <h4>Software</h4>
        <ul>
          <li>PI Controller implementation</li>
          <li>OPC UA server</li>
          <li>Azure SQL Database</li>
          <li>Streamlit monitoring dashboard</li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <img 
          src="/assets/images/architecture.png" 
          alt="System Architecture"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
);

const SecuritySection = () => (
  <div className="prose max-w-none">
    <h3>System Security</h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <h4>Security Measures</h4>
        <ul>
          <li>SQL injection protection</li>
          <li>OPC UA security features</li>
          <li>Azure security integration</li>
          <li>Access control mechanisms</li>
        </ul>
        <h4>Data Protection</h4>
        <ul>
          <li>Encrypted data transmission</li>
          <li>Secure data storage</li>
          <li>Regular security audits</li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <img 
          src="/assets/images/security.png" 
          alt="Security Architecture"
          className="rounded-lg shadow-md"
        />
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <Layout>
      <main>
        <div className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Industrial Air Heater Control & Monitoring System
            </h1>
            <p className="text-xl text-gray-600">
              Advanced temperature control with real-time monitoring and cloud integration
            </p>
          </div>
        </div>

        <Section title="Control System" icon={Settings} id="control">
          <ControlSystem />
        </Section>

        <Section title="Monitoring System" icon={BarChart2} id="monitoring">
          <MonitoringSystem />
        </Section>

        <Section title="System Architecture" icon={Workflow} id="architecture">
          <SystemArchitecture />
        </Section>

        <Section title="Security" icon={Shield} id="security">
          <SecuritySection />
        </Section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-blue-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-900">Live System Demo</h2>
            <div className="aspect-w-16 aspect-h-9 mt-4">
              <video 
                controls
                className="rounded-lg shadow-lg w-full"
                poster="/assets/images/demo-poster.jpg"
              >
                <source src="/assets/videos/demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default App;