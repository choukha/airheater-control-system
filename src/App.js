import React from 'react';
import { 
  Settings, 
  ChevronDown, 
  ChevronUp, 
  BarChart2, 
  Shield, 
  Workflow, 
  Database, 
  CloudUpload, 
  LineChart, 
  Cpu,
  Lock,
  User,
  Globe,
  Terminal
} from 'lucide-react';

const NavLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-gray-600 hover:text-blue-700 transition-colors duration-200 font-medium"
  >
    {children}
  </a>
);

const PrimaryButton = ({ href, target, children, variant = "primary" }) => {
  const variantStyles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300"
  };

  return (
    <a
      href={href}
      target={target}
      className={`${variantStyles[variant]} px-4 py-2 rounded-md transition-colors duration-200 flex items-center space-x-2`}
    >
      {children}
    </a>
  );
};

const Section = ({ title, icon: Icon, children, defaultOpen = true }) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultOpen);
  
  return (
    <div className="mb-8 bg-white rounded-lg shadow-md overflow-hidden">
      <div 
        className="px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center">
          <Icon className="h-6 w-6 text-blue-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        </div>
        {isExpanded ? <ChevronUp className="h-6 w-6 text-gray-500" /> : <ChevronDown className="h-6 w-6 text-gray-500" />}
      </div>
      {isExpanded && (
        <div className="px-6 py-4 border-t border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

const Layout = ({ children }) => (
  <div className="min-h-screen bg-gray-50">
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Terminal className="h-8 w-8 text-blue-600 mr-3" />
            <span className="text-xl font-bold text-gray-900">Air Heater Control</span>
          </div>
          <div className="flex items-center space-x-6">
            <NavLink href="#overview">Overview</NavLink>
            <NavLink href="#architecture">Architecture</NavLink>
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#security">Security</NavLink>
            <PrimaryButton 
              href="https://airheater-control-monitor.streamlit.app/"
              target="_blank"
            >
              <Globe className="h-4 w-4" />
              <span>Live Dashboard</span>
            </PrimaryButton>
          </div>
        </div>
      </div>
    </nav>
    {children}
  </div>
);

const App = () => {
  return (
    <Layout>
      <main>
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-extrabold mb-4">
                Air Heater Control System and Monitoring
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
                  href="https://github.com/yourusername/air-heater-control"
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
                    <CloudUpload className="h-5 w-5 mr-3 text-blue-600" />
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
                    <CloudUpload className="h-6 w-6 mr-3 text-blue-600" />
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
                      <CloudUpload className="h-6 w-6" />
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

          <div className="bg-blue-100 rounded-lg p-8 text-center mt-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Ready to Experience Industry 4.0?
            </h2>
            <p className="text-blue-800 mb-6">
              Access our live Air Heater Control Dashboard and explore advanced industrial control technologies
            </p>
            <div className="flex justify-center space-x-4">
              <PrimaryButton 
                href="https://airheater-control-monitor.streamlit.app/"
                target="_blank"
              >
                <LineChart className="h-5 w-5" />
                <span>Launch Dashboard</span>
              </PrimaryButton>
              <PrimaryButton 
                href="https://github.com/yourusername/air-heater-control"
                target="_blank"
                variant="secondary"
              >
                <Settings className="h-5 w-5" />
                <span>View Project</span>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Air Heater Control System. All Rights Reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="hover:text-blue-400">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400">Terms of Service</a>
            <a href="#" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default App;