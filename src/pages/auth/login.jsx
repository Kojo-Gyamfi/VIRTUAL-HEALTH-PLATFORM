import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthBackground from '../AuthBackground';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validate inputs (in a real app, this would be server-side validation)
    if (!email || !password) {
      toast.error("Please fill in all fields");
      setIsLoading(false);
      return; // Early return if validation fails
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Simulate successful login
      toast.success('Login successful!');
      navigate('/dashboard'); // Redirect to dashboard on success
    }
    catch (err) {
      setError(err.message || 'Login failed. Please try again.');
      toast.error(err.message || 'Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthBackground>
        <div className="min-h-screen flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <motion.div
            className="w-full max-w-md mx-auto"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
                Welcome Back
              </h2>
              <p className="text-base sm:text-lg text-gray-200">
                Sign in to your Health-X account
              </p>
              <p className="mt-4 text-sm text-gray-300">
                Don't have an account?{' '}
                <button
                  onClick={() => navigate('/register')}
                  className="font-medium text-cyan-300 hover:text-cyan-200 hover:underline focus:outline-none transition-colors duration-200"
                >
                  Create one here
                </button>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full max-w-md mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20">
              {error && (
                <motion.div
                  className="mb-6 bg-red-500/20 border border-red-400/30 rounded-xl p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <svg
                        className="h-5 w-5 text-red-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-200 font-medium">{error}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="appearance-none block w-full pl-10 pr-3 py-3 rounded-xl placeholder-gray-400 bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <label htmlFor="password" className="block text-sm font-semibold text-white mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      autoComplete="current-password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="appearance-none block w-full pl-10 pr-3 py-3 rounded-xl placeholder-gray-400 bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white"
                    />
                  </div>
                </motion.div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-cyan-500 border-white/20 rounded focus:ring-cyan-400 focus:ring-2 bg-white/10"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-200">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <button
                      type="button"
                      onClick={() => navigate('/forgot-password')}
                      className="font-medium text-cyan-300 hover:text-cyan-200 hover:underline focus:outline-none transition-colors duration-200"
                    >
                      Forgot password?
                    </button>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-xl text-base font-semibold text-white bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg ${
                      isLoading ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Signing in...
                      </>
                    ) : (
                      'Sign In'
                    )}
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </AuthBackground>
    </>
  );
};

export default LoginPage;