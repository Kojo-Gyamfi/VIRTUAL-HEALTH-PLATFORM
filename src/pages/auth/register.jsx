import { auth, db } from '../../Firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AuthBackground from '../AuthBackground';
import { motion } from 'framer-motion';


const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    // userType: 'patient',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;
    setIsLoading(true);

    const { email, password } = formData;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);

      // seding user data to firestore
      if (user) {
        try {
          await setDoc(doc(db, "Users", user.uid), {
            email: user.email,
            username: formData.username,
          });
          // Display success message
          toast.success('Registration successful!');
          console.log("user Registered successfully");

          navigate('/login');

        } catch (error) {
          toast.error("Failed to save user data. Please try again.");
        }
      } else {
        console.error("User or database instance is not available.");
        toast.error("User or database instance is not available. Please try again.");
      }

      // Simulate API call
      // const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/register/`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     username: formData.username,
      //     // user_type: formData.userType.toUpperCase(),
      //     email: formData.email,
      //     password: formData.password
      //   })
      // });
      // const responseData = await response.json();
      ;

      // Redirect after successful registration


    } catch (error) {
      console.log(error.message);
      setErrors(prev => ({
        ...prev,
        form: error.message || 'Registration failed. Please try again.'
      }));
      // setError(error.message || 'Registration failed. Please try again.');
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
                Join Health-X
              </h2>
              <p className="text-base sm:text-lg text-gray-200">
                Create your account to get started
              </p>
              <p className="mt-4 text-sm text-gray-300">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="font-medium text-cyan-300 hover:text-cyan-200 hover:underline focus:outline-none transition-colors duration-200"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="w-full max-w-md mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
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
                    <div className="shrink-0">
                      <svg className="h-5 w-5 text-red-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-200 font-medium">{error}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {errors.form && (
                <motion.div
                  className="mb-6 bg-red-500/20 border border-red-400/30 rounded-xl p-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <svg className="h-5 w-5 text-red-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-red-200 font-medium">{errors.form}</p>
                    </div>
                  </div>
                </motion.div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}>
                  <label htmlFor="username" className="block text-sm font-semibold text-white mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      placeholder='Enter your username'
                      autoComplete="username"
                      value={formData.username}
                      onChange={handleChange}
                      className={`appearance-none block w-full pl-10 pr-3 py-3 rounded-xl placeholder-gray-400 bg-white/10 border ${errors.username ? 'border-red-400/50' : 'border-white/20'} focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white`}
                    />
                  </div>
                  {errors.username && (
                    <p className="mt-2 text-sm text-red-300 font-medium">{errors.username}</p>
                  )}
                </motion.div>

                {/* this field is for usertype but disabled for now */}

                {/* <div>
                <label htmlFor="userType" className="block text-sm font-medium text-gray-700">
                  I am a
                </label>
                <div className="mt-1">
                  <select
                    id="userType"
                    name="userType"
                    value={formData.userType}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-[#02212e] focus:outline-[#02212e] focus:ring-[#02212e] focus:border-[#02212e] sm:text-sm rounded-md"
                  >
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </div>
              </div> */}

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
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
                      placeholder='Enter your email'
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`appearance-none block w-full pl-10 pr-3 py-3 rounded-xl placeholder-gray-400 bg-white/10 border ${errors.email ? 'border-red-400/50' : 'border-white/20'} focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white`}
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-300 font-medium">{errors.email}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
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
                      placeholder='Enter your password'
                      autoComplete="new-password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`appearance-none block w-full pl-10 pr-3 py-3 rounded-xl placeholder-gray-400 bg-white/10 border ${errors.password ? 'border-red-400/50' : 'border-white/20'} focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white`}
                    />
                  </div>
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-300 font-medium">{errors.password}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}>
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-white mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder='Confirm your password'
                      autoComplete="new-password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`appearance-none block w-full pl-10 pr-3 py-3 rounded-xl placeholder-gray-400 bg-white/10 border ${errors.confirmPassword ? 'border-red-400/50' : 'border-white/20'} focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white`}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-2 text-sm text-red-300 font-medium">{errors.confirmPassword}</p>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
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
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating Account...
                      </>
                    ) : 'Create Account'}
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </AuthBackground >
    </>
  );
};

export default RegisterPage;