import React from 'react'
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import AuthBackground from './AuthBackground';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <>
      <AuthBackground>
        <div className='min-h-screen flex flex-col justify-between px-4 sm:px-6 lg:px-8 py-4 lg:py-8'>

          {/* navbar */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex justify-between items-center w-full max-w-7xl mx-auto bg-white/10 backdrop-blur-lg rounded-full px-4 sm:px-6 lg:px-8 py-3 lg:py-4 shadow-xl'
          >

            <h2 className="bg-linear-to-r from-purple-500 via-pink-500 to-red-500 
             bg-clip-text text-transparent text-lg sm:text-xl lg:text-2xl font-bold transition-transform duration-300 
             hover:bg-linear-to-r hover:from-red-500 hover:via-pink-500 hover:to-purple-500
             animate-pulse cursor-pointer hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">Health-X</h2>

            <div className='flex items-center gap-3 sm:gap-6'>
              <Link to="/login">
                <button className='hover:cursor-pointer py-2 px-4 sm:px-6 hover:scale-105 transition-all duration-300 ease-in-out hover:font-semibold
                text-white text-sm sm:text-base lg:text-lg hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]
                border border-white/20 rounded-full hover:bg-white/10'
                >Login</button>
              </Link>
              <Link to="/register">
                <button
                  className="relative px-4 sm:px-6 lg:px-8 py-2 lg:py-3 rounded-full font-bold text-white text-sm sm:text-base lg:text-lg
                    bg-linear-to-r from-cyan-500 via-blue-500 to-purple-600
                    shadow-lg hover:shadow-[0_0_20px_rgba(56,189,248,0.7)]
                    transition-all duration-500 ease-in-out
                    hover:scale-105 hover:-translate-y-0.5
                    overflow-hidden group"
                >
                  <span className="relative z-10">Register</span>
                  <div className="absolute inset-0 bg-linear-to-r from-purple-600 via-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </Link>
            </div>
          </motion.nav>

          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 flex flex-col items-center justify-center text-white text-center px-4 py-8 lg:py-16">
            
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 leading-tight"
            >
              Hello there!
            </motion.h1>
            
            <div className="mb-8 lg:mb-10 h-12 sm:h-16 lg:h-20">
              <ReactTyped
                strings={[
                  "Welcome to Health-X",
                  "Book Appointments", 
                  "Connect with doctors",
                  "Find Specialists", 
                  "Therapy Sessions", 
                  "Track Health Records"
                ]}
                typeSpeed={50}
                backSpeed={60}
                loop
                className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium"
              />
            </div>
            
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto mb-8 lg:mb-12 leading-relaxed text-gray-100"
            >
              Making medical services more accessible, efficient, and cost-effective. 
              Your health journey starts here with world-class healthcare at your fingertips.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <Link to="/login" className="w-full sm:w-auto">
                <button className='w-full sm:w-auto bg-linear-to-r from-purple-500 via-pink-500 to-red-500 text-white text-base lg:text-lg font-semibold py-3 lg:py-4 px-8 lg:px-12 rounded-full hover:cursor-pointer
                  transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-linear-to-r hover:from-red-500 hover:via-pink-500 hover:to-purple-500
                  shadow-lg hover:shadow-xl hover:shadow-purple-500/25'
                >
                  Get Started
                </button>
              </Link>
              
              <button className='w-full sm:w-auto bg-white/10 backdrop-blur-lg text-white text-base lg:text-lg font-semibold py-3 lg:py-4 px-8 lg:px-12 rounded-full hover:cursor-pointer
                border border-white/20 transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:bg-white/20'
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 lg:mb-12"
          >
            {[
              { icon: "🏥", title: "Find Doctors", desc: "Connect with certified healthcare professionals" },
              { icon: "📅", title: "Book Appointments", desc: "Schedule visits at your convenience" },
              { icon: "💊", title: "Track Medications", desc: "Never miss a dose with smart reminders" },
              { icon: "📊", title: "Health Records", desc: "Access your medical history anytime" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 border border-white/10"
              >
                <div className="text-3xl lg:text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-200">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AuthBackground>
      <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none"></div>
    </>
  )
}

export default LandingPage
