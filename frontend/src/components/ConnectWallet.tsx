import React, { useEffect } from 'react';
import { AuthClient } from '@dfinity/auth-client';

const ConnectWallet: React.FC = () => {
  useEffect(() => {
    const initAuth = async () => {
      const authClient = await AuthClient.create();
      if (await authClient.isAuthenticated()) {
        // User already authenticated, redirect to dashboard
        window.location.href = "/dashboard";
      }
    };
    initAuth();
  }, []);

  const handleConnect = async () => {
    const authClient = await AuthClient.create();
    await authClient.login({
      onSuccess: () => {
        console.log('Connected successfully');
        window.location.href = "/dashboard";
      },
      identityProvider: "https://identity.ic0.app/#authorize", // Internet Identity provider
    });
  };

  return (
    <button
      onClick={handleConnect}
      className="bg-green-600 text-white p-4 rounded-md hover:bg-green-700"
    >
      Connect with Internet Identity
    </button>
  );
};

export default ConnectWallet;
