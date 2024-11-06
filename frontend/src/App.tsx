import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PropertyList from './pages/PropertyList';
import AddProperty from './pages/AddProperty';
import PropertyDetail from './pages/PropertyDetail';
import TransferOwnership from './pages/TransferOwnership';
import Dashboard from './pages/Dashboard';
import ConnectWallet from './components/ConnectWallet';
import Header from './components/Header';
import Footer from './components/Footer';
import LearnMore from './pages/LearnMore'; // Adjust path based on your project structure


const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <Header />
        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/properties" element={<PropertyList />} />
            <Route path="/properties/:id" element={<PropertyDetail />} />
            <Route path="/add-property" element={<AddProperty />} />
            <Route path="/transfer-ownership" element={<TransferOwnership />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learn-more" element={<LearnMore />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
