import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

type Property = {
  id: string;
  location: string;
  owner: string;
  details: string;
};

const TransferOwnership: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [newOwner, setNewOwner] = useState<string>('');
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);

  // Fetch property details from backend
  React.useEffect(() => {
    async function fetchProperty() {
      setLoading(true);
      try {
        // Replace with real backend API call
        const response = await axios.get<Property>(`http://localhost:8000/api/properties/${id}`);
        setProperty(response.data);
      } catch (err) {
        setMessage('Failed to load property details. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    fetchProperty();
  }, [id]);

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      // Replace with real backend call to transfer ownership
      await axios.post(`http://localhost:8000/api/properties/${id}/transfer`, {
        newOwner,
      });
      setMessage(`Ownership successfully transferred to ${newOwner}`);
      setProperty((prev) => (prev ? { ...prev, owner: newOwner } : null));
    } catch (err) {
      setMessage('Failed to transfer ownership. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Transfer Property Ownership</h1>
      {loading && <p>Loading...</p>}
      {message && <p className="text-center text-green-700 mb-4">{message}</p>}
      {property ? (
        <div className="bg-white p-6 shadow-md rounded-md mb-6">
          <h3 className="text-xl font-bold">{property.location}</h3>
          <p className="mt-2">Current Owner: {property.owner}</p>
          <p>Details: {property.details}</p>
        </div>
      ) : (
        <p>Property not found.</p>
      )}
      <form onSubmit={handleTransfer} className="space-y-4">
        <div>
          <label className="block font-bold mb-2">New Owner</label>
          <input
            type="text"
            value={newOwner}
            onChange={(e) => setNewOwner(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          disabled={loading}
        >
          Transfer Ownership
        </button>
      </form>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 inline-block text-green-600 hover:text-green-800"
      >
        Back to Property Details
      </button>
    </div>
  );
};

export default TransferOwnership;