import React from 'react';
import { 
  Lightbulb,
  TrendingUp,
  Shield,
  AlertCircle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const InsightCard = ({ title, children, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <Icon className="h-6 w-6 text-blue-600 mr-3" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    {children}
  </div>
);

const DiscussionPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Discussion and Analysis
      </h1>

      <div className="space-y-8">
        {/* Key Findings */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Findings</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <InsightCard title="Control System Performance" icon={TrendingUp}>
              <div className="space-y-4">
                <p className="text-gray-700">
                  The implemented PI controller demonstrated robust performance across various operating conditions:
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Excellent setpoint tracking with minimal overshoot</li>
                  <li>Robust disturbance rejection capabilities</li>
                  <li>Stable operation within defined temperature ranges</li>
                  <li>Effective noise filtering through lowpass implementation</li>
                </ul>
              </div>
            </InsightCard>

            <InsightCard title="System Integration" icon={CheckCircle}>
              <div className="space-y-4">
                <p className="text-gray-700">
                  The integration of various components proved successful:
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Seamless OPC UA communication</li>
                  <li>Efficient data management and storage</li>
                  <li>Responsive web-based monitoring</li>
                  <li>Reliable security implementation</li>
                </ul>
              </div>
            </InsightCard>
          </div>
        </section>

        {/* Technical Insights */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Technical Insights</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Lightbulb className="h-6 w-6 text-yellow-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Controller Design Considerations</h4>
                  <p className="text-gray-600">
                    The discrete PI implementation with anti-windup proved effective for temperature control. 
                    The chosen sampling time of 0.1s provided a good balance between control performance and 
                    system resources.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Security Implementation Analysis</h4>
                  <p className="text-gray-600">
                    The multi-layered security approach with role-based access control and secure OPC UA 
                    communication provided robust protection while maintaining system accessibility.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <AlertCircle className="h-6 w-6 text-red-600 mr-4 mt-1" />
                <div>
                  <h4 className="font-semibold">Performance Bottlenecks</h4>
                  <p className="text-gray-600">
                    Network latency and database operations under heavy load were identified as potential 
                    bottlenecks, requiring optimization strategies for larger-scale deployments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Improvements */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Future Improvements</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Control System</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-gray-600">Advanced control algorithms (MPC, adaptive control)</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-gray-600">Auto-tuning capabilities</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-gray-600">Fault detection and diagnosis</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Data Management</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-gray-600">Cloud integration for data storage</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-gray-600">Advanced analytics and ML integration</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-gray-600">Real-time data visualization enhancements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">System Architecture</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-gray-600">Microservices architecture adoption</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-gray-600">Load balancing implementation</span>
                </li>
                <li className="flex items-center">
                  <ArrowRight className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-gray-600">Distributed system capabilities</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Industrial Applications */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Industrial Applications</h2>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="space-y-6">
              <p className="text-gray-700">
                The implemented system demonstrates significant potential for various industrial applications:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Current Applications</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Temperature control in industrial processes</li>
                    <li>HVAC system automation</li>
                    <li>Process monitoring and optimization</li>
                    <li>Quality control systems</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Potential Extensions</h4>
                  <ul className="list-disc pl-5 text-gray-600">
                    <li>Multi-variable process control</li>
                    <li>Energy optimization systems</li>
                    <li>Predictive maintenance</li>
                    <li>Digital twin integration</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
};

export default DiscussionPage;