import React from 'react'
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import AuthBackground from './AuthBackground';
import { motion } from 'framer-motion';

const LandingPage = () => {
  return (
    <>
      <AuthBackground>
        <div className=' h-screen pt-5 justify-center m-auto '>

          {/* navbar */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='flex gap-1 justify-between md:mx-15 py-2 px-5 font-medium rounded-full bg-white/10 backdrop-blur-lg text-white items-center [box-shadow:0_10px_15px_-3px_rgba(0,0,0,0.3)]'>

            <h2 className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 
             bg-clip-text text-transparent text-[19px] ml-4 font-bold transition-transform duration-300 
             hover:bg-gradient-to-r hover:from-red-500 hover:via-pink-500 hover:to-purple-500
             animate-pulse cursor-pointer hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">Health-X</h2>

            <div className='flex gap-9 md:gap-18'>
              <Link to="/Login">
                <button className='hover:cursor-pointer pt-2 hover:scale-110 transition-transform duration-300 ease-in-out hover:font-bold
                hidden md:block hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.7)]
'
                >Login</button>
              </Link>
              <Link to="/Register">
                <button
                  className="relative px-10 md:px-15 py-2 rounded-full font-bold text-white 
                    bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600
                    shadow-md hover:shadow-[0_0_20px_rgba(56,189,248,0.7)]
                    transition-all duration-500 ease-in-out
                    hover:scale-110 hover:rotate-1
                    animate-gradient-x overflow-hidden"
                >
                  <span className="relative z-10">Register</span>
                </button>

              </Link>
            </div>
          </motion.nav>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center mt-40 text-white ">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-7xl font-bold text-center text-[50px] md:text-7xl md:mb-5 lg:text-7xl">Hello there!
            </motion.h1>
            <ReactTyped
              strings={["Welcome", "Book Appointments", "Connect with doctors",
                "Specialists", "Therapists remotely", "Track Health Records",]}
              typeSpeed={60}
              backSpeed={70}
              loop
              className="text-center text-4xl mt-2 "
            />
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center text-[20px] md:text-2xl mt-5 mx-10 transition  ">Making medical services more accessible, efficient, and cost-effective.
            </motion.p>
            <Link to="/Login">
              <button className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-[19px] mt-7 py-2 px-10 rounded-4xl hover:cursor-pointer
                font-medium transition-transform duration-300 hover:scale-110 hover:rotate-3 hover:bg-gradient-to-r hover:from-red-500 hover:via-pink-500 hover:to-purple-500
                animate-pulse [box-shadow:0_10px_15px_-3px_rgba(0,0,0,0.3)]'
              >Get Started</button>
            </Link>
          </motion.div>
        </div>
      </AuthBackground >
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    </>
  )
}

export default LandingPage
