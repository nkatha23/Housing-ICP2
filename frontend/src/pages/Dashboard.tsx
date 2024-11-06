import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

type Property = {
  id: string;
  location: string;
  owner: string;
  details: string;
};

const Dashboard: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProperties() {
      try {
        setLoading(true);
        setError(null);

        // Real backend call to fetch properties
        const response = await axios.get<Property[]>('http://localhost:8000/api/properties');
        setProperties(response.data);
      } catch (err) {
        setError('Failed to load properties. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      {loading ? (
        <p>Loading properties...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <div key={property.id} className="bg-white p-6 shadow-md rounded-md">
              <h3 className="text-xl font-bold">{property.location}</h3>
              <p className="mt-2">Owner: {property.owner}</p>
              <p>Details: {property.details}</p>
              <Link
                to={`/properties/${property.id}`}
                className="mt-4 inline-block text-green-600 hover:text-green-800"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
