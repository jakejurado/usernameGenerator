import { useContext } from 'react';
import { FormData } from '../types/types';
import { UsernameContext } from '../provider/UsernameProvider';

interface UseUsernameResult {
  generateUsername: (formData: FormData) => Promise<void>;
  resetUsername: () => void;
  username: string | null;
  error: string | null;
  loading: boolean;
}

const useUsername = (): UseUsernameResult => {
  const context = useContext(UsernameContext);

  if (!context) {
    throw new Error('useUsername must be used within a UsernameProvider');
  }

  const { username, setUsername, error, setError, loading, setLoading } = context;

  const generateUsername = async (formData: FormData): Promise<void> => {
    setLoading(true);
    setError(null);
    const url = 'http://localhost:5000/generateUsername'
    // const url = '/generateUsername'

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setUsername(data.username);
    } catch (err) {
      setError('An error occurred while generating the username.');
    } finally {
      setLoading(false);
    }
  };

  const resetUsername = (): void => {
    setUsername(null);
    setError(null);
    setLoading(false);
  }

  return {
    generateUsername,
    resetUsername,
    username,
    error,
    loading,
  };
};

export default useUsername;
