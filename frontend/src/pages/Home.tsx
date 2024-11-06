import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full h-full">
      {/* Hero Section */}
          <section
      className="h-screen w-full bg-cover bg-center flex flex-col justify-center items-center text-center text-black relative overflow-hidden"
      style={{
        backgroundImage: "url('/path/to/map-background-image.jpg'), linear-gradient(to right, #6EE7B7, #3B82F6)"
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      <div className="relative z-10 max-w-4xl px-8">
        <h1 className="text-6xl font-extrabold mb-8 leading-tight">Welcome to Ark - A Land Tokenization Platform</h1>
        <p className="mb-12 text-2xl">
          Ark is a revolutionary platform that allows you to tokenize and manage your land properties on the blockchain. Seamlessly add, manage, and transfer ownership of properties with transparency and security.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/learn-more"
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-10 py-4 rounded-full transition-transform transform hover:scale-110 hover:bg-blue-700 shadow-md"
          >
            Learn More
          </Link>
          <Link
            to="/properties"
            className="bg-white border border-green-500 text-green-500 px-10 py-4 rounded-full transition-transform transform hover:scale-110 hover:bg-green-100 shadow-md"
          >
            View Properties
          </Link>
        </div>
      </div>
    </section>


      {/* How It Works Section */}
      <section className="relative -mt-32 z-20 mb-20 px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 shadow-xl rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-full">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-2xl font-bold ml-4">Create an Account</h3>
            </div>
            <p>Sign up and verify your identity to start managing your properties on the blockchain platform with ease.</p>
          </div>
          <div className="bg-white p-8 shadow-xl rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-full">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-2xl font-bold ml-4">Add Properties</h3>
            </div>
            <p>Easily add properties to your account and tokenize them for easier management, making your assets more accessible.</p>
          </div>
          <div className="bg-white p-8 shadow-xl rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center mb-4">
              <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-3 rounded-full">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-2xl font-bold ml-4">Transfer Ownership</h3>
            </div>
            <p>Seamlessly transfer property ownership through our secure, blockchain-based platform, ensuring transparency.</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center mb-12 p-12 bg-gradient-to-r from-green-400 to-blue-500 text-white w-full">
        <h2 className="text-5xl font-bold mb-6">Get Started Today!</h2>
        <p className="mb-10 text-2xl">Join Ark and start managing your properties with transparency and ease.</p>
        <button
          onClick={() => window.open("https://identity.ic0.app/#authorize", "_blank")}
          className="bg-white text-green-700 font-bold px-12 py-6 rounded-full transition-transform transform hover:scale-110 hover:bg-green-100 shadow-lg hover:shadow-2xl"
        >
          Connect Wallet
        </button>
      </section>
    </div>
  );
};

export default Home;
