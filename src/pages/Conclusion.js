import React from 'react';
import { 
  CheckCircle, 
  TrendingUp,
  Lightbulb,
  AlertCircle,
  Rocket,
  Target
} from 'lucide-react';

const ConclusionCard = ({ title, children, icon: Icon, className = "" }) => (
  <div className={`bg-white p-6 rounded-lg shadow-md ${className}`}>
    <div className="flex items-center mb-4">
      <Icon className="h-6 w-6 text-blue-600 mr-3" />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    {children}
  </div>
);

const ConclusionsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Conclusions
      </h1>

      <div className="space-y-8">
        {/* Key Achievements */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Achievements</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ConclusionCard title="Technical Success" icon={CheckCircle}>
              <div className="space-y-3 text-gray-700">
                <p>Successfully implemented and validated:</p>
                <ul className="list-disc pl-5">
                  <li>Robust PI control system with proven stability</li>
                  <li>Integrated OPC UA communication</li>
                  <li>Comprehensive data management solution</li>
                  <li>Secure web-based monitoring interface</li>
                </ul>
              </div>
            </ConclusionCard>

            <ConclusionCard title="Performance Metrics" icon={TrendingUp}>
              <div className="space-y-3 text-gray-700">
                <p>Achieved target performance indicators:</p>
                <ul className="list-disc pl-5">
                  <li>Temperature control accuracy: ±0.2°C</li>
                  <li>System response time: ~ 22 seconds</li>
                  <li>Data logging reliability: 99.9%</li>
                  <li>Web interface responsiveness: ~ 2s</li>
                </ul>
              </div>
            </ConclusionCard>
          </div>
        </section>

        {/* Project Impact */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Project Impact</h2>
          
          <ConclusionCard title="Industry 4.0 Advancement" icon={Rocket}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Technical Innovation</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Modern control system implementation</li>
                  <li>Industrial IoT integration</li>
                  <li>Real-time monitoring capabilities</li>
                  <li>Scalable system architecture</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Industry Benefits</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Improved process efficiency</li>
                  <li>Enhanced data visibility</li>
                  <li>Reduced operational costs</li>
                  <li>Increased system reliability</li>
                </ul>
              </div>
            </div>
          </ConclusionCard>
        </section>

        {/* Lessons Learned */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Lessons Learned</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <ConclusionCard title="Technical Insights" icon={Lightbulb}>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Importance of proper PI controller tuning</li>
                <li>Benefits of modular system design</li>
                <li>Value of comprehensive testing</li>
                <li>Need for robust error handling</li>
              </ul>
            </ConclusionCard>

            <ConclusionCard title="Implementation Challenges" icon={AlertCircle}>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Network latency management</li>
                <li>Security implementation complexity</li>
                <li>System integration coordination</li>
                <li>Performance optimization needs</li>
              </ul>
            </ConclusionCard>
          </div>
        </section>

        {/* Future Outlook */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Future Outlook</h2>
          
          <ConclusionCard title="Development Roadmap" icon={Target} className="mb-6">
            <div className="space-y-4">
              <h4 className="font-semibold">Short-term Goals</h4>
              <ul className="list-disc pl-5 text-gray-600 mb-4">
                <li>Implementation of advanced control algorithms</li>
                <li>Enhanced data analytics capabilities</li>
                <li>Mobile interface development</li>
                <li>Cloud integration for data storage</li>
              </ul>

              <h4 className="font-semibold">Long-term Vision</h4>
              <ul className="list-disc pl-5 text-gray-600">
                <li>AI/ML integration for predictive control</li>
                <li>Digital twin implementation</li>
                <li>Distributed system architecture</li>
                <li>Extended industrial applications</li>
              </ul>
            </div>
          </ConclusionCard>
        </section>

        {/* Final Remarks */}
        <section className="bg-blue-50 p-6 rounded-lg">
          <p className="text-gray-700 text-lg leading-relaxed">
            The Air Heater Control System project has successfully demonstrated the practical implementation 
            of Industry 4.0 principles in industrial process control. Through careful design, implementation, 
            and validation, we have created a robust and scalable solution that provides significant value 
            for industrial applications while laying the groundwork for future enhancements and extensions.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ConclusionsPage;