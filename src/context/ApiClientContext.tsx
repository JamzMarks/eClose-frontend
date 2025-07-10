'use client'
import { PostClient } from '@/app/api/posts/posts';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface ApiClientContextType {
  postClient: PostClient;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const ApiClientContext = createContext<ApiClientContextType | null>(null);

export const ApiClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    setToken(savedToken);
  }, []);

  const value = useMemo(() => {
    const baseURL = process.env.NEXT_PUBLIC_API_URL!;
    return {
      postClient: new PostClient(baseURL, token),
      setToken,
    };
  }, [token]);

  return (
    <ApiClientContext.Provider value={value}>
      {children}
    </ApiClientContext.Provider>
  );
};

export const useApiClients = () => {
  const context = useContext(ApiClientContext);
  if (!context) throw new Error('useApiClients must be used within ApiClientProvider');
  return context;
};
