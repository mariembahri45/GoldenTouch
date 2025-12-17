import { createContext, useContext, useEffect, useState, useCallback } from "react";
import axios from "axios";
import { getUser as getStoredUser, setUser as setStoredUser, removeUser as removeStoredUser } from "../utils/authUtils";

const AuthContext = createContext({
  user: null,
  role: null,
  isAuthenticated: false,
  loading: true,
  refresh: async () => {},
  signIn: async () => ({ success: false }),
  signOut: async () => {}
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => getStoredUser());
  const [role, setRole] = useState(() => getStoredUser()?.role || null);
  const [loading, setLoading] = useState(false);

  const setUserState = (nextUser) => {
    setUser(nextUser);
    setRole(nextUser?.role || null);
    if (nextUser) {
      setStoredUser(nextUser);
    } else {
      removeStoredUser();
    }
  };

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:6005/api/user/profile", {
        withCredentials: true
      });

      if (data?.user) {
        setUserState(data.user);
      } else {
        setUserState(null);
      }
    } catch (error) {
      setUserState(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();

    const handleAuthChange = () => {
      refresh();
    };

    window.addEventListener("authChange", handleAuthChange);
    window.addEventListener("storage", handleAuthChange);
    return () => {
      window.removeEventListener("authChange", handleAuthChange);
      window.removeEventListener("storage", handleAuthChange);
    };
  }, [refresh]);

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:6005/api/user/signin",
        { email, password },
        { withCredentials: true }
      );

      if (data?.user) {
        setUserState(data.user);
        window.dispatchEvent(new Event("authChange"));
        return { success: true };
      }

      return { success: false, error: "Sign in failed" };
    } catch (error) {
      const msg = error?.response?.data?.msg || "Sign in failed";
      return { success: false, error: msg };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    try {
      await axios.post("http://localhost:6005/api/user/signout", {}, { withCredentials: true });
    } catch (error) {
      // ignore
    } finally {
      setUserState(null);
      window.dispatchEvent(new Event("authChange"));
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, role, isAuthenticated: !!user, loading, refresh, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
