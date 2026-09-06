import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if dummy user session is active
    const savedDummy = localStorage.getItem("dummy_admin_user");
    if (savedDummy) {
      try {
        setUser(JSON.parse(savedDummy));
      } catch (e) {
        localStorage.removeItem("dummy_admin_user");
      }
      setLoading(false);
      return;
    }

    if (!supabase) {
      setLoading(false);
      return;
    }

    // Check active session on load
    supabase.auth.getSession()
      .then(({ data: { session } = {} }) => {
        setUser(session?.user ?? null);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });

    // Listen for auth events (sign in, sign out, token refreshes)
    let subscription = null;
    try {
      const authListener = supabase.auth.onAuthStateChange((_event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      });
      subscription = authListener?.data?.subscription;
    } catch (e) {
      setLoading(false);
    }

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  const signIn = async (email, password) => {
    // Local dummy admin login credentials
    if (email === "admin@paradise.com" && password === "admin123") {
      const dummyUser = {
        id: "dummy-admin-id",
        email: "admin@paradise.com",
        role: "authenticated",
        user_metadata: { role: "admin" }
      };
      setUser(dummyUser);
      localStorage.setItem("dummy_admin_user", JSON.stringify(dummyUser));
      return { data: { user: dummyUser }, error: null };
    }

    if (!supabase) {
      return { data: { user: null }, error: { message: "Supabase credentials not configured." } };
    }

    return supabase.auth.signInWithPassword({ email, password });
  };

  const signUp = (email, password) => {
    if (!supabase) {
      return Promise.resolve({ data: { user: null }, error: { message: "Supabase credentials not configured." } });
    }
    return supabase.auth.signUp({ email, password });
  };

  const signOut = async () => {
    localStorage.removeItem("dummy_admin_user");
    if (supabase) {
      return supabase.auth.signOut();
    }
    setUser(null);
    return { error: null };
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
