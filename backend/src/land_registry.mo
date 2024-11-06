import Nat "mo:base/Nat";
import Principal "mo:base/Principal";
import Properties "mo:./properties";  // Import the properties module

actor LandRegistry {
  // Defining the type for Property (reuse the same definition to ensure consistency)
  type Property = {
    id: Text;
    tokenValue: Nat;
    legalCases: Bool;
    previousOwners: Nat;
    description: Text;
    geolocation: {
      lat: Float;
      long: Float;
    };
    ownershipType: Text;  // e.g., "Freehold" or "Leasehold"
    currentOwner: Principal;  // Principal ID of the current owner
    zoningType: Text;  // e.g., "Residential", "Commercial"
    area: Float;  // Size in square meters or acres
    utilities: [Text];  // List of available utilities like "Electricity", "Water"
    nearbyAmenities: [Text];  // List of nearby amenities
  };

  // Initialize properties from properties.mo
  stable var properties: [Property] = Properties.properties;

  // Function to add a new property
  public func addProperty(
    id: Text,
    tokenValue: Nat,
    legalCases: Bool,
    previousOwners: Nat,
    description: Text,
    lat: Float,
    long: Float,
    ownershipType: Text,
    currentOwner: Principal,
    zoningType: Text,
    area: Float,
    utilities: [Text],
    nearbyAmenities: [Text]
  ): async Text {
    let newProperty: Property = {
      id = id;
      tokenValue = tokenValue;
      legalCases = legalCases;
      previousOwners = previousOwners;
      description = description;
      geolocation = {
        lat = lat;
        long = long;
      };
      ownershipType = ownershipType;
      currentOwner = currentOwner;
      zoningType = zoningType;
      area = area;
      utilities = utilities;
      nearbyAmenities = nearbyAmenities;
    };
    properties := Array.append(properties, [newProperty]);
    return "Property added successfully!";
  };

  // Function to fetch all properties
  public query func getAllProperties(): async [Property] {
    return properties;
  };

  // Function to fetch a property by ID
  public query func getPropertyById(id: Text): async ?Property {
    return Array.find(properties, func(p) { p.id == id });
  };

  // Function to transfer ownership of a property
  public func transferOwnership(propertyId: Text, newOwner: Principal): async Text {
    let indexOpt = Array.findIndex<Property>(properties, func(p) { p.id == propertyId });
    switch (indexOpt) {
      case (?index) {
        let updatedProperty = properties[index];
        properties[index] := {
          id = updatedProperty.id;
          tokenValue = updatedProperty.tokenValue;
          legalCases = updatedProperty.legalCases;
          previousOwners = updatedProperty.previousOwners + 1;
          description = updatedProperty.description;
          geolocation = updatedProperty.geolocation;
          ownershipType = updatedProperty.ownershipType;
          currentOwner = newOwner;
          zoningType = updatedProperty.zoningType;
          area = updatedProperty.area;
          utilities = updatedProperty.utilities;
          nearbyAmenities = updatedProperty.nearbyAmenities;
        };
        return "Ownership transferred successfully!";
      };
      case (null) {
        return "Property not found.";
      };
    }
  };

  // Function to update the token value of a property
  public func updateTokenValue(propertyId: Text, newTokenValue: Nat): async Text {
    let indexOpt = Array.findIndex<Property>(properties, func(p) { p.id == propertyId });
    switch (indexOpt) {
      case (?index) {
        properties[index].tokenValue := newTokenValue;
        return "Token value updated successfully!";
      };
      case (null) {
        return "Property not found.";
      };
    }
  };

  // Function to fetch properties by current owner
  public query func getPropertiesByOwner(owner: Principal): async [Property] {
    return Array.filter(properties, func(p) { p.currentOwner == owner });
  };

  // Function to update the legal case status of a property
  public func updateLegalCases(propertyId: Text, hasLegalCases: Bool): async Text {
    let indexOpt = Array.findIndex<Property>(properties, func(p) { p.id == propertyId });
    switch (indexOpt) {
      case (?index) {
        properties[index].legalCases := hasLegalCases;
        return "Legal case status updated successfully!";
      };
      case (null) {
        return "Property not found.";
      };
    }
  };
}
