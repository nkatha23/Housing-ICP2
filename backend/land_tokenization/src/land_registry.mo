import Nat "mo:base/Nat";

actor LandRegistry {
  type Owner = {
    id: Principal;
    name: Text;
  };

  type LandToken = {
    id: Nat;
    owner: Owner;
    area: Nat;
    location: Text;
  };

  stable var lands: [LandToken] = [];

  public func addLand(id: Nat, owner: Owner, area: Nat, location: Text) : async Bool {
    lands := lands # [{ id; owner; area; location }];
    return true;
  }

  public func getLands() : async [LandToken] {
    return lands;
  }

  public func transferOwnership(landId: Nat, newOwner: Owner) : async Bool {
    lands := lands.map(
      func (land) {
        if (land.id == landId) {
          return { land with owner = newOwner };
        };
        land
      }
    );
    return true;
  }
}
