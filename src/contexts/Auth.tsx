import React, { 
  createContext, 
  useState, 
  useContext, 
  useEffect 
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Auth0 from "react-native-auth0";
import { Context, credentials } from "utils";

interface Props {
  children: React.ReactNode;
};

const AuthContext = createContext<Context | null>(null);
const auth0 = new Auth0(credentials);

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [authData, setAuthData] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);
  
  async function loadStorageData() {
    try {
      const accessToken = await AsyncStorage.getItem('accessToken');
      if (accessToken) { 
          setAuthData(accessToken); 
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const login = async () => {
    try {
      const credentials = await auth0.webAuth.authorize({
        scope: 'openid profile email'
      });
      setAuthData(credentials.accessToken);
      await AsyncStorage.setItem('accessToken', credentials.accessToken);

    } catch (error) {
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await auth0.webAuth.clearSession();
      setAuthData(null);
      await AsyncStorage.removeItem('accessToken');

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{authData, loading, login, logout}}>
        {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { AuthContext, AuthProvider, useAuth };
