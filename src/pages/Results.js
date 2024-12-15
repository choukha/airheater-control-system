import React from 'react';
import { 
  LineChart,
  BarChart,
  Activity,
  Check,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

const ResultCard = ({ title, children, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="flex items-center mb-4">
      <Icon className="h-6 w-6 text-blue-600 mr-3" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    {children}
  </div>
);

const ResultsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        System Performance Results
      </h1>

      <div className="space-y-8">
        {/* Control System Performance */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Control System Performance</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ResultCard title="Temperature Control" icon={LineChart}>
              <div className="space-y-4">
                <p className="text-gray-700">The PI controller demonstrated excellent performance with:</p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Rise time: 22 seconds</li>
                  <li>Settling time: 120 seconds</li>
                  <li>Overshoot: less than 5%</li>
                  <li>Steady-state error: ± 0.2°C</li>
                </ul>
              </div>
            </ResultCard>

            <ResultCard title="Stability Analysis" icon={Activity}>
              <div className="space-y-4">
                <p className="text-gray-700">System stability metrics:</p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Gain Margin: 5.22 dB</li>
                  <li>Phase Margin: 28.16 degrees</li>
                  <li>Critical Gain: 3.65</li>
                  <li>Crossover Frequency: 0.33 rad/s</li>
                </ul>
              </div>
            </ResultCard>
          </div>
        </section>

        {/* System Integration Results */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">System Integration Results</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <ResultCard title="OPC UA Performance" icon={TrendingUp}>
              <div className="space-y-4">
                <p className="text-gray-700">Communication metrics:</p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Average latency: lt 50ms</li>
                  <li>Data throughput: 100 samples/s</li>
                  <li>Connection reliability: 99.9%</li>
                </ul>
              </div>
            </ResultCard>

            <ResultCard title="Data Management" icon={BarChart}>
              <div className="space-y-4">
                <p className="text-gray-700">Database performance:</p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Query response time: ~ 100ms</li>
                  <li>Storage efficiency: 1MB/day</li>
                  <li>Data integrity: 100%</li>
                </ul>
              </div>
            </ResultCard>

            <ResultCard title="Web Interface" icon={Check}>
              <div className="space-y-4">
                <p className="text-gray-700">Dashboard metrics:</p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Page load time: ~ 2s</li>
                  <li>Update frequency: 100ms</li>
                  <li>Browser compatibility: 100%</li>
                </ul>
              </div>
            </ResultCard>
          </div>
        </section>


        {/* Performance Limitations */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Known Limitations</h2>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Control System Limitations</h4>
                  <p className="text-gray-600">
                    Response time may increase under heavy network load or when processing large datasets.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Integration Constraints</h4>
                  <p className="text-gray-600">
                    System requires consistent network connectivity for OPC UA communication.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold">Resource Requirements</h4>
                  <p className="text-gray-600">
                    Optimal performance requires dedicated computing resources for real-time processing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ResultsPage;