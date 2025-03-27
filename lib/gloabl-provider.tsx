import { createContext, ReactNode, useContext } from "react";
import { getCurrentUser } from "./appwrite";
import { useAppwrite } from "./useAppwrite";

interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

interface GlobalContextType {
  loading: boolean;
  isLoggedIn: boolean;
  user: User | null;
  refetch: (newParams: Record<string, string | number>) => Promise<void>;
}

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const { data: user, loading, refetch } = useAppwrite({ fn: getCurrentUser });

  const isLoggedIn = !!user;

  return (
    <GlobalContext.Provider
      value={{
        user,
        loading,
        refetch,
        isLoggedIn,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);

  if (!context)
    throw new Error(
      "useGlobalContext hook must be used within a GlobalProvider!"
    );

  return context;
};

export default GlobalProvider;
