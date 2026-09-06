import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { error: signInError } = await signIn(email, password);
      if (signInError) throw signInError;
      window.showToast?.("Welcome back, Administrator!", "success");
      navigate("/admin");
    } catch (err) {
      setError(err.message || "Invalid administrator credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-955 dark:to-gray-900">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-855 rounded-3xl p-8 shadow-premium relative overflow-hidden">
        {/* Decorative Brand Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-gold to-primary" />
        
        <div className="text-center mb-8 space-y-2">
          {/* Logo Frame */}
          <div className="flex justify-center mb-3">
            <img src="/logo.png" alt="Paradise Optics Logo" className="h-10 w-auto object-contain dark:brightness-110" />
          </div>
          <span className="text-[10px] font-bold text-gold uppercase tracking-[0.25em] block">
            Admin Secure Portal
          </span>
          <h2 className="font-serif text-2xl font-black text-gray-900 dark:text-white leading-tight">
            Administrator Sign In
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 font-light">
            Enter your credentials to manage the showroom inventory and catalog database.
          </p>
        </div>

        {/* Error notification banner */}
        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/50 text-xs text-red-600 dark:text-red-400 font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email input field */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">
              Admin Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gold transition-colors duration-300"
              placeholder="admin@example.com"
            />
          </div>

          {/* Password input field */}
          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider block">
              Password
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-gray-50 dark:bg-gray-955 border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 focus:outline-none focus:border-gold transition-colors duration-300"
              placeholder="••••••••"
            />
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary hover:bg-gold dark:bg-gold dark:text-gray-955 text-white text-xs font-bold uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-md focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-white dark:border-gray-955 border-t-transparent rounded-full animate-spin" />
            ) : (
              <span>Sign In</span>
            )}
          </button>

          {/* Dummy Bypass Divider */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-gray-100 dark:border-gray-800"></div>
            <span className="flex-shrink mx-4 text-gray-400 dark:text-gray-500 text-[10px] uppercase font-bold tracking-wider">Or</span>
            <div className="flex-grow border-t border-gray-100 dark:border-gray-800"></div>
          </div>

          {/* Quick Demo Bypass Button */}
          <button
            type="button"
            disabled={loading}
            onClick={async () => {
              setEmail("admin@paradise.com");
              setPassword("admin123");
              setError("");
              setLoading(true);
              try {
                const { error: signInError } = await signIn("admin@paradise.com", "admin123");
                if (signInError) throw signInError;
                window.showToast?.("Welcome back, Demo Administrator!", "success");
                navigate("/admin");
              } catch (err) {
                setError(err.message || "Invalid credentials.");
              } finally {
                setLoading(false);
              }
            }}
            className="w-full bg-gray-50 hover:bg-gray-100 dark:bg-gray-950 dark:hover:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl transition-all focus:outline-none flex items-center justify-center gap-2"
          >
            <span>Login as Demo Admin</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
