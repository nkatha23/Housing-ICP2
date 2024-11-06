import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthClient } from '@dfinity/auth-client';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPropertiesDropdownOpen, setIsPropertiesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const togglePropertiesDropdown = () => {
    setIsPropertiesDropdownOpen(!isPropertiesDropdownOpen);
  };

  const handleConnect = async () => {
    const authClient = await AuthClient.create();
    await authClient.login({
      onSuccess: () => {
        window.location.href = "/dashboard";
      },
      identityProvider: "https://identity.ic0.app/#authorize",
    });
  };

  return (
    <header className="bg-white text-black p-6 shadow-md z-50 relative">
      <div className="container mx-auto flex justify-between items-center space-x-6">
        <h1 className="text-3xl font-bold">
          <Link to="/" className="text-green-600 hover:text-green-700 transition-colors">Ark</Link>
        </h1>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-green-600 focus:outline-none">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className={`md:flex md:items-center ${isMobileMenuOpen ? "block" : "hidden"} md:block`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 mt-4 md:mt-0">
            <li>
              <Link
                to="/"
                className="px-6 py-3 rounded-md hover:bg-green-100 hover:text-green-600 transition-all flex items-center align-middle"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="relative" onMouseEnter={togglePropertiesDropdown} onMouseLeave={togglePropertiesDropdown}>
              <button
                className="px-6 py-3 rounded-md hover:bg-green-100 hover:text-green-600 transition-all flex items-center align-middle"
              >
                Properties
              </button>
              {isPropertiesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white shadow-md rounded-md z-50">
                  <ul className="flex flex-col">
                    <li>
                      <Link
                        to="/properties"
                        className="block px-6 py-3 hover:bg-green-100 hover:text-green-600 transition-all"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsPropertiesDropdownOpen(false);
                        }}
                      >
                        View Properties
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/add-property"
                        className="block px-6 py-3 hover:bg-green-100 hover:text-green-600 transition-all"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsPropertiesDropdownOpen(false);
                        }}
                      >
                        Add Property
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                to="/connect-wallet"
                className="px-6 py-3 rounded-md border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all flex items-center align-middle"
              >
                Connect Wallet
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
