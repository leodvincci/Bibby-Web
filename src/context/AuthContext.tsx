import { createContext, useContext, useState } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    login: ()=> void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem("isAuthenticated") === "true",
  );

  function login() {
    sessionStorage.setItem("isAuthenticated", "true");
    setIsAuthenticated(true);
  }

  function logout() {
    sessionStorage.removeItem("isAuthenticated");
    setIsAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };