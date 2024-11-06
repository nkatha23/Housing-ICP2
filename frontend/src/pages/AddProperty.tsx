import React, { useState } from 'react';
import axios from 'axios';

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

const AddProperty: React.FC = () => {
  const [formData, setFormData] = useState<Property>({
    id: '',
    tokenValue: 0,
    legalCases: false,
    previousOwners: 0,
    description: '',
    geolocation: {
      lat: 0,
      long: 0,
    },
    ownershipType: '',
    currentOwner: '',
    zoningType: '',
    area: 0,
    utilities: [],
    nearbyAmenities: [],
  });
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // Handle input changes, including checkboxes and nested properties
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === 'lat' || name === 'long') {
      setFormData({
        ...formData,
        geolocation: {
          ...formData.geolocation,
          [name]: parseFloat(value),
        },
      });
    } else if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleUtilitiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      utilities: checked
        ? [...prev.utilities, value]
        : prev.utilities.filter((utility) => utility !== value),
    }));
  };

  const handleAmenitiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      nearbyAmenities: checked
        ? [...prev.nearbyAmenities, value]
        : prev.nearbyAmenities.filter((amenity) => amenity !== value),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      // Real backend API call to add property
      const response = await axios.post('http://localhost:8000/api/properties', formData);
      if (response.status === 201) {
        setMessage('Property added successfully!');
        setFormData({
          id: '',
          tokenValue: 0,
          legalCases: false,
          previousOwners: 0,
          description: '',
          geolocation: {
            lat: 0,
            long: 0,
          },
          ownershipType: '',
          currentOwner: '',
          zoningType: '',
          area: 0,
          utilities: [],
          nearbyAmenities: [],
        });
      } else {
        setMessage('Failed to add property. Please try again.');
      }
    } catch (error) {
      setMessage('Failed to add property. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6">Add New Property</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-md space-y-4">
        <div>
          <label className="block font-bold mb-2">Property ID</label>
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-bold mb-2">Latitude</label>
            <input
              type="number"
              name="lat"
              value={formData.geolocation.lat}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <label className="block font-bold mb-2">Longitude</label>
            <input
              type="number"
              name="long"
              value={formData.geolocation.long}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>
        <div>
          <label className="block font-bold mb-2">Token Value</label>
          <input
            type="number"
            name="tokenValue"
            value={formData.tokenValue}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Ownership Type</label>
          <select
            name="ownershipType"
            value={formData.ownershipType}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select ownership type</option>
            <option value="Freehold">Freehold</option>
            <option value="Leasehold">Leasehold</option>
          </select>
        </div>
        <div>
          <label className="block font-bold mb-2">Owner Principal ID</label>
          <input
            type="text"
            name="currentOwner"
            value={formData.currentOwner}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Zoning Type</label>
          <input
            type="text"
            name="zoningType"
            value={formData.zoningType}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Area (sqm)</label>
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Legal Cases</label>
          <input
            type="checkbox"
            name="legalCases"
            checked={formData.legalCases}
            onChange={handleChange}
            className="ml-2"
          />
        </div>
        <div>
          <label className="block font-bold mb-2">Utilities (check all that apply)</label>
          <div className="flex space-x-4">
            {['Electricity', 'Water', 'Gas', 'Internet'].map((utility) => (
              <label key={utility} className="flex items-center">
                <input
                  type="checkbox"
                  value={utility}
                  checked={formData.utilities.includes(utility)}
                  onChange={handleUtilitiesChange}
                  className="mr-2"
                />
                {utility}
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block font-bold mb-2">Nearby Amenities (check all that apply)</label>
          <div className="flex space-x-4">
            {['School', 'Hospital', 'Market', 'Public Transport'].map((amenity) => (
              <label key={amenity} className="flex items-center">
                <input
                  type="checkbox"
                  value={amenity}
                  checked={formData.nearbyAmenities.includes(amenity)}
                  onChange={handleAmenitiesChange}
                  className="mr-2"
                />
                {amenity}
              </label>
            ))}
          </div>
        </div>
        <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-all" disabled={loading}>
          {loading ? 'Adding Property...' : 'Add Property'}
        </button>
      </form>
      {message && (
        <div className="mt-4 p-4 text-center bg-green-100 text-green-700 rounded-md">
          {message}
        </div>
      )}
    </div>
  );
};

export default AddProperty;
