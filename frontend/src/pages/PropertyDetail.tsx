import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L, { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { FaShoppingCart } from 'react-icons/fa';

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

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Custom icon for the property marker
  const customMarkerIcon = new L.Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    iconSize: [25, 41],
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    shadowSize: [41, 41],
  });

  useEffect(() => {
    async function fetchProperty() {
      try {
        setLoading(true);
        setError(null);

        // Real backend API call to fetch property data by ID
        const response = await axios.get<Property>(`http://localhost:8000/api/properties/${id}`);
        setProperty(response.data);
      } catch (err) {
        console.error('Failed to fetch from backend. Attempting to load local data.', err);
        try {
          // Fallback to loading data from local JSON file if backend fetch fails
          const localData = await axios.get<Property[]>(`/assets/properties.json`);
          const propertyFromLocal = localData.data.find((prop) => prop.id === id);
          if (propertyFromLocal) {
            setProperty(propertyFromLocal);
          } else {
            setError('Property not found in local data.');
          }
        } catch (localErr) {
          setError('Failed to load property details from both backend and local data. Please try again later.');
          console.error('Failed to fetch from local JSON file:', localErr);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchProperty();
  }, [id]);

  return (
    <div className="container mx-auto p-8">
      {loading ? (
        <p>Loading property details...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : property ? (
        <div className="bg-white p-8 shadow-md rounded-md">
          <h1 className="text-4xl font-bold mb-6">Property Details</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4"><strong>Location (Latitude, Longitude):</strong> {property.geolocation.lat}, {property.geolocation.long}</p>
              <p className="mb-4"><strong>Current Owner:</strong> {property.currentOwner}</p>
              <p className="mb-4"><strong>Token Value:</strong> {property.tokenValue}</p>
              <p className="mb-4"><strong>Legal Cases:</strong> {property.legalCases ? 'Yes ⚠️' : 'No ✅'}</p>
              <p className="mb-4"><strong>Number of Previous Owners:</strong> {property.previousOwners}</p>
              <p className="mb-4"><strong>Description:</strong> {property.description}</p>
            </div>
            <div>
              <p className="mb-4"><strong>Ownership Type:</strong> {property.ownershipType}</p>
              <p className="mb-4"><strong>Zoning Type:</strong> {property.zoningType}</p>
              <p className="mb-4"><strong>Area:</strong> {property.area} sqm</p>
              <p className="mb-4"><strong>Utilities Available:</strong> {property.utilities.join(', ')}</p>
              <p className="mb-4"><strong>Nearby Amenities:</strong> {property.nearbyAmenities.join(', ')}</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <button
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all inline-flex items-center"
            >
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
          </div>
          {/* Map Integration Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-4">Property Location</h2>
            <MapContainer
              center={[property.geolocation.lat, property.geolocation.long] as LatLngExpression}
              zoom={13}
              className="w-full h-96 rounded-md shadow-lg"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker
                position={[property.geolocation.lat, property.geolocation.long] as LatLngExpression}
                icon={customMarkerIcon}
              >
                <Popup>
                  <div>
                    <h3 className="font-bold">{property.description}</h3>
                    <p>Owner: {property.currentOwner}</p>
                    <p>Area: {property.area} sqm</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      ) : (
        <p>Property not found.</p>
      )}
    </div>
  );
};

export default PropertyDetail;
