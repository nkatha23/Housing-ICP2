import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

// Define property type
type Property = {
  id: string;
  tokenValue: number;
  legalCases: boolean;
  previousOwners: number;
  description: string;
  geolocation: {
    lat: number;
    long: number;
  };
  ownershipType: string;
  currentOwner: string;
  zoningType: string;
  area: number;
  utilities: string[];
  nearbyAmenities: string[];
};

const PropertyList: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleProperties, setVisibleProperties] = useState<number>(3);

  useEffect(() => {
    async function fetchProperties() {
      try {
        setLoading(true);
        setError(null);

        // Attempt to fetch from the backend API
        const response = await axios.get<Property[]>('http://localhost:8000/api/properties');
        setProperties(response.data);
      } catch (err) {
        console.error('Failed to fetch from backend. Attempting to load local data.', err);
        try {
          // Fallback to loading data from local JSON file if backend fetch fails
          const localData = await axios.get<Property[]>('/assets/properties.json');
          setProperties(localData.data);
        } catch (localErr) {
          setError('Failed to load properties from both backend and local data. Please try again later.');
          console.error('Failed to fetch from local JSON file:', localErr);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  const handleLoadMore = () => {
    setVisibleProperties((prevVisibleProperties) => prevVisibleProperties + 3);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Property List</h1>
      {loading ? (
        <p>Loading properties...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {properties.slice(0, visibleProperties).map((property, index) => (
              <div key={property.id} className="bg-white p-8 shadow-md rounded-md transition-transform transform hover:scale-105 hover:shadow-xl">
                <h3 className="text-2xl font-bold mb-4">Land Parcel {index + 1}</h3>
                <p className="mb-2"><strong>Location:</strong> Lat: {property.geolocation.lat}, Long: {property.geolocation.long}</p>
                <p className="mb-2"><strong>Token Value:</strong> {property.tokenValue}</p>
                <p className="mb-2"><strong>Area:</strong> {property.area} sqm</p>
                <p className="mb-2"><strong>Legal Cases:</strong> {property.legalCases ? '⚠️ Yes' : '✅ No'}</p>
                <p className="mb-2"><strong>Ownership Type:</strong> {property.ownershipType}</p>
                <p className="mb-2"><strong>Zoning Type:</strong> {property.zoningType}</p>
                <p className="mb-2"><strong>Utilities Available:</strong> {property.utilities.join(', ')}</p>
                <p className="mb-2"><strong>Nearby Amenities:</strong> {property.nearbyAmenities.join(', ')}</p>

                {/* Map Integration Section */}
                <div className="my-4">
                  <MapContainer center={[property.geolocation.lat, property.geolocation.long]} zoom={13} className="w-full h-48 rounded-md">
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[property.geolocation.lat, property.geolocation.long]}>
                      <Popup>
                        Land Parcel {index + 1}
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>

                <Link
                  to={`/properties/${property.id}`}
                  className="mt-4 inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-all"
                >
                  View More
                </Link>
              </div>
            ))}
          </div>
          {visibleProperties < properties.length && (
            <div className="text-center mt-8">
              <button
                onClick={handleLoadMore}
                className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-transform transform hover:scale-105"
              >
                See More
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PropertyList;
