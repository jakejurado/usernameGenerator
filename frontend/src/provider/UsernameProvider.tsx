import { createContext, useState, useMemo, ReactNode, FC } from "react";

interface UsernameContextType {
  username: string | null;
  setUsername: React.Dispatch<React.SetStateAction<string | null>>;
  error: string | null;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UsernameContext = createContext<UsernameContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

const UsernameProvider: FC<Props> = ({ children }) => {
  const [username, setUsername] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const value = useMemo(() => {
    return { username, setUsername, error, setError, loading, setLoading };
  }, [username, setUsername, error, setError, loading, setLoading]);

  return (
    <UsernameContext.Provider value={value}>
      {children}
    </UsernameContext.Provider>
  );
}

export default UsernameProvider;
