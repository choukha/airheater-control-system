import React from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; 2024 Air Heater Control System. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#" className="hover:text-blue-400">Contact</a>
        </div>
        <div className="mt-4">
          <p>Contact: Choukha Ram</p>
          <p>Email: <a href="mailto:choukharam@gmail.com" className="text-blue-400">choukharam@gmail.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;