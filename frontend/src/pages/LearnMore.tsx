import React from 'react';
import { Link } from 'react-router-dom';
import ConnectWallet from '../components/ConnectWallet';

const LearnMore: React.FC = () => {
  const handleConnect = async () => {
    try {
      // Placeholder for actual ICP authentication logic
      console.log('Connecting to ICP Identity...');
      window.location.href = "https://identity.ic0.app/#authorize";
    } catch (error) {
      console.error('Failed to connect to ICP Identity:', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-6 text-green-700">Discover the Future of Property Management</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Welcome to Ark, a revolutionary platform designed to simplify, secure, and modernize the way we manage land ownership. With the power of blockchain technology, Ark provides transparent and efficient property tokenization, enabling seamless transactions, data integrity, and security for property owners and buyers alike.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-green-700 text-center mb-8">What Ark Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-8 shadow-md rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Property Tokenization</h3>
            <p className="text-gray-600">
              Tokenize your land properties to enable more accessible ownership, easier transactions, and secure investments. Ark utilizes blockchain technology to convert property ownership into digital tokens, providing transparency and security in every transaction.
            </p>
          </div>
          <div className="bg-white p-8 shadow-md rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Secure Ownership Transfer</h3>
            <p className="text-gray-600">
              Say goodbye to tedious paperwork and enjoy seamless and secure ownership transfer. Our platform ensures that all ownership data is recorded immutably on the blockchain, making disputes a thing of the past.
            </p>
          </div>
          <div className="bg-white p-8 shadow-md rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Legal Transparency</h3>
            <p className="text-gray-600">
              All properties listed on Ark are verified to ensure transparency regarding legal cases or liens on the land. This reduces the risk of hidden legal complications and provides peace of mind for potential buyers and investors.
            </p>
          </div>
          <div className="bg-white p-8 shadow-md rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Rich Property Data</h3>
            <p className="text-gray-600">
              Each property comes with detailed information, including geolocation, zoning type, and previous ownership history. Buyers get a complete understanding of the property before committing to any investment.
            </p>
          </div>
          <div className="bg-white p-8 shadow-md rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Access Anytime, Anywhere</h3>
            <p className="text-gray-600">
              Manage your properties, track token values, and initiate ownership transfers conveniently from any device. Ark is accessible anywhere, empowering you to manage your assets with ease.
            </p>
          </div>
          <div className="bg-white p-8 shadow-md rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Support for Utilities and Amenities</h3>
            <p className="text-gray-600">
              Explore properties based on available utilities and nearby amenities. Our listings include essential information like access to electricity, water, gas, and proximity to schools, hospitals, and public transportation.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="my-16">
        <h2 className="text-4xl font-bold text-green-700 text-center mb-8">Why Choose Ark?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          <div className="flex items-center space-x-6">
            <img src="/assets/security-icon.png" alt="Security Icon" className="w-20 h-20" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Enhanced Security</h3>
              <p className="text-gray-600">
                Blockchain ensures secure, immutable records of your property ownership, reducing the risk of fraud.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <img src="/assets/transparency-icon.png" alt="Transparency Icon" className="w-20 h-20" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Complete Transparency</h3>
              <p className="text-gray-600">
                All property information is available on the blockchain, allowing buyers and sellers to make informed decisions confidently.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <img src="/assets/accessibility-icon.png" alt="Accessibility Icon" className="w-20 h-20" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Ease of Access</h3>
              <p className="text-gray-600">
                Whether you're at home or on the move, Ark provides easy access to manage your assets securely from any device.
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <img src="/assets/cost-icon.png" alt="Cost Efficiency Icon" className="w-20 h-20" />
            <div>
              <h3 className="text-2xl font-bold mb-2">Cost Efficiency</h3>
              <p className="text-gray-600">
                By removing intermediaries and automating processes, Ark significantly reduces transaction costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="flex justify-between items-center my-16 p-12 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg shadow-md">
        <div>
          <h2 className="text-4xl font-bold mb-2">Ready to Transform Property Ownership?</h2>
          <p className="text-xl">
            Take the first step towards secure, transparent, and efficient property management. Join Ark today and be part of the future.
          </p>
        </div>
        <div className="inline-block">
          <button onClick={handleConnect} className="bg-white text-green-700 font-bold px-12 py-4 rounded-full transition-transform transform hover:scale-110 hover:bg-gray-100 shadow-lg hover:shadow-2xl">
            Connect Wallet
          </button>
        </div>
      </section>
    </div>
  );
};

export default LearnMore;
