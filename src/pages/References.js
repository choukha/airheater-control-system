import React from 'react';
import { 
  Book, 
  FileText,
  Link,
  Code,
  BookOpen
} from 'lucide-react';

const ReferenceSection = ({ title, icon: Icon, children }) => (
  <div className="mb-8">
    <div className="flex items-center mb-4">
      <Icon className="h-6 w-6 text-blue-600 mr-3" />
      <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
    </div>
    {children}
  </div>
);

const ReferenceItem = ({ title, authors, source, year, link, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md mb-4">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {authors && <p className="text-gray-600 mb-2">{authors}</p>}
    <p className="text-gray-700 mb-2">
      <span className="font-medium">{source}</span>
      {year && <span className="ml-2">({year})</span>}
    </p>
    {description && <p className="text-gray-600 mb-3">{description}</p>}
    {link && (
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 flex items-center"
      >
        <Link className="h-4 w-4 mr-1" />
        View Resource
      </a>
    )}
  </div>
);

const ReferencesPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        References and Documentation
      </h1>

      <div className="space-y-8">
        <ReferenceSection title="Technical Documentation" icon={Book}>
          <ReferenceItem 
            title="Control Systems with Python"
            authors="Hans-Petter Halvorsen"
            source="Technical Documentation"
            year="2024"
            link="https://www.halvorsen.blog"
            description="Comprehensive guide on implementing control systems using Python"
          />

          <ReferenceItem 
            title="Python Control Systems Library Documentation"
            source="Python Control Documentation"
            link="https://python-control.readthedocs.io"
            description="Official documentation for the Python Control Systems Library"
          />

          <ReferenceItem 
            title="OPC UA with Python"
            authors="FreeOpcUa Team"
            source="asyncua Documentation"
            link="https://github.com/FreeOpcUa/opcua-asyncio"
            description="Documentation for the asyncua Python library for OPC UA implementation"
          />
        </ReferenceSection>

        <ReferenceSection title="Project Documentation" icon={Code}>
          <ReferenceItem 
            title="Air Heater Control System Source Code"
            source="GitHub Repository"
            link="https://github.com/choukha/airheater-control"
            description="Complete source code and documentation for the Air Heater Control System"
          />

        </ReferenceSection>

        <ReferenceSection title="Industry Standards" icon={BookOpen}>
          <ReferenceItem 
            title="OPC UA Specification"
            source="OPC Foundation"
            link="https://opcfoundation.org/developer-tools/specifications-unified-architecture"
            description="Official OPC UA protocol specification and standards"
          />

          <ReferenceItem 
            title="ISA-95 Enterprise-Control System Integration"
            source="International Society of Automation"
            description="Standards for developing automated interface between enterprise and control systems"
          />

        </ReferenceSection>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <h2 className="text-xl font-semibold mb-4">Citation Guidelines</h2>
          <p className="text-gray-700 mb-4">
            When referencing this project or its components, please use the following citation format:
          </p>
          <div className="bg-white p-4 rounded-md font-mono text-sm">
            Choukha, R. (2024). Air Heater Control System: An Industry 4.0 Implementation. 
            GitHub Repository: https://github.com/choukha/airheater-control
          </div>
        </div>
      </div>
    </div>
  )};

  export default ReferencesPage;