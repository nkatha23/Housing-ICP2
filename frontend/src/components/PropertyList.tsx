import React, { useEffect, useState } from 'react';

const PropertyList = () => {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    async function fetchLands() {
      // Add logic to interact with the ICP backend and fetch lands
      const landsData = await landRegistryActor.getLands();
      setLands(landsData);
    }

    fetchLands();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Land Registry</h1>
      <div className="space-y-4">
        {lands.map((land, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-md">
            <p><strong>ID:</strong> {land.id.toString()}</p>
            <p><strong>Owner:</strong> {land.owner.name}</p>
            <p><strong>Location:</strong> {land.location}</p>
            <p><strong>Area:</strong> {land.area.toString()} sqm</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyList;
