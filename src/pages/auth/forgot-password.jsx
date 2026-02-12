import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-900 via-blue-700 to-cyan-500 px-4">
      
      {/* Card Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl w-full max-w-md p-8 text-center text-white"
      >
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Forgot Password?
        </motion.h1>

        {/* Subtitle */}
        <p className="text-gray-200 mb-8 text-sm">
          Enter your email address below and we’ll send you a link to reset your password.
        </p>

        {/* Input */}
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition mb-6"
        />

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 rounded-lg font-semibold shadow-md transition"
        >
          Send Reset Link
        </motion.button>

        {/* Back to Login */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-sm text-gray-200"
        >
          Remember your password?{" "}
          <Link to="/login" className="text-cyan-300 hover:underline">
            Back to Login
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
