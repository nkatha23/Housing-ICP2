import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-green-100 h-screen p-6 fixed">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-green-700">Ark Navigation</h2>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link to="/" className="text-gray-800 hover:text-green-600">Home</Link>
          </li>
          <li>
            <Link to="/properties" className="text-gray-800 hover:text-green-600">Properties</Link>
          </li>
          <li>
            <Link to="/add-property" className="text-gray-800 hover:text-green-600">Add Property</Link>
          </li>
          <li>
            <Link to="/transfer-ownership" className="text-gray-800 hover:text-green-600">Transfer Ownership</Link>
          </li>
          <li>
            <Link to="/dashboard" className="text-gray-800 hover:text-green-600">Dashboard</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 hover:text-green-600">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;