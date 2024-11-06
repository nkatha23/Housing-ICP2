import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import { TbBrandX } from 'react-icons/tb'; // Updated icon for X (previously Twitter)

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-800 p-12 mt-12 shadow-inner">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
        <div className="lg:col-span-1">
          <h3 className="font-bold text-xl mb-2 text-green-600">Ark - Land Tokenization Platform</h3>
          <p className="text-sm mb-4 text-gray-500">© 2024 Ark. All rights reserved.</p>
          <p className="text-sm text-gray-600">Empowering property management through blockchain technology.</p>
        </div>

        <div className="lg:col-span-1">
          <h4 className="font-bold text-xl mb-4 text-[#1A73E8]">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-gray-700 hover:text-[#34A853] transition-colors">Home</Link></li>
            <li><Link to="/properties" className="text-gray-700 hover:text-[#34A853] transition-colors">Properties</Link></li>
            <li><Link to="/dashboard" className="text-gray-700 hover:text-[#34A853] transition-colors">Dashboard</Link></li>
          </ul>
        </div>

        <div className="lg:col-span-1">
          <h4 className="font-bold text-xl mb-4 text-[#1A73E8]">Contact Us</h4>
          <p className="text-sm mb-2">Email: <a href="mailto:support@arkplatform.com" className="text-green-600 hover:text-green-700 transition-colors">support@arkplatform.com</a></p>
          <p className="text-sm mb-2">Phone: <a href="tel:+254701234567" className="text-green-600 hover:text-green-700 transition-colors">+254 701 234 567</a></p>
          <p className="text-sm text-gray-600">4052 Mfangano Street, Nairobi, Kenya, 00100</p>
        </div>

        <div className="lg:col-span-1">
          <h4 className="font-bold text-xl mb-4 text-[#1A73E8]">Get Started</h4>
          <ul className="space-y-2">
            <li><Link to="/learn-more" className="text-gray-700 hover:text-[#34A853] transition-colors">Learn More</Link></li>
          </ul>
          <div className="flex justify-center lg:justify-start space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#34A853] transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#34A853] transition-colors">
              <TbBrandX size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#34A853] transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-[#34A853] transition-colors">
              <BsWhatsapp size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
