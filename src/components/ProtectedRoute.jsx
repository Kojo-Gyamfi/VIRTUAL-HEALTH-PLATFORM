import React, { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../Firebase/firebase';
import { toast } from 'react-toastify';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setAuthenticated(!!user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (authenticated) {
      // Push a new state to the history stack
      window.history.pushState(null, null, window.location.pathname);
      
      const handlePopState = (event) => {
        // Prevent the default back behavior
        event.preventDefault();
        event.stopImmediatePropagation();
        
        // Push the state back to prevent going back
        window.history.pushState(null, null, window.location.pathname);
        
        // Show notification to user
        toast.info('Please logout to access login page');
      };

      // Add the popstate listener
      window.addEventListener('popstate', handlePopState);

      // Cleanup function
      return () => {
        window.removeEventListener('popstate', handlePopState);
      };
    }
  }, [authenticated]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-900 via-blue-700 to-cyan-500">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-white border-t-transparent"></div>
          <p className="mt-4 text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
