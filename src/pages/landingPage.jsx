import React from 'react'
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";
import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  CalendarIcon, 
  UserGroupIcon, 
  ShieldCheckIcon,
  StarIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

const LandingPage = () => {
  const features = [
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: "Expert Doctors",
      description: "Connect with board-certified healthcare professionals"
    },
    {
      icon: <CalendarIcon className="w-8 h-8" />,
      title: "Easy Booking",
      description: "Schedule appointments 24/7 with real-time availability"
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Health Tracking",
      description: "Monitor your health metrics and get personalized insights"
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Secure Records",
      description: "Your medical data is encrypted and always accessible"
    }
  ];

  const stats = [
    { number: "10,000+", label: "Verified Doctors" },
    { number: "500K+", label: "Happy Patients" },
    { number: "1M+", label: "Appointments" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <HeartSolidIcon className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                Health-X
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <Link to="/login">
                <button className="text-gray-600 hover:text-cyan-600 font-medium transition-colors">
                  Sign In
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-linear-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-cyan-50 rounded-full px-4 py-2 mb-6">
                <span className="bg-cyan-600 text-white text-xs font-semibold px-2 py-1 rounded-full mr-2">NEW</span>
                <span className="text-cyan-700 text-sm font-medium">Now serving 50+ cities worldwide</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Health,
                <br />
                <span className="bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  Simplified
                </span>
              </h1>

              <div className="h-8 mb-6">
                <ReactTyped
                  strings={[
                    "Book appointments instantly",
                    "Connect with top doctors", 
                    "Manage health records",
                    "Get personalized care"
                  ]}
                  typeSpeed={50}
                  backSpeed={60}
                  loop
                  className="text-xl sm:text-2xl text-gray-600 font-medium"
                />
              </div>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Experience the future of healthcare with our comprehensive platform. 
                Book appointments, consult with specialists, and manage your health journey—all in one place.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/register" className="flex items-center justify-center bg-linear-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-lg">
                  Start Free Trial
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
                
                <button className="flex items-center justify-center border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  Watch Demo
                </button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                  <span>Setup in 2 minutes</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-linear-to-br from-cyan-50 to-blue-50 rounded-xl p-4 border border-cyan-100">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                          <UserGroupIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-semibold text-gray-800">Dr. Sarah Johnson</div>
                          <div className="text-xs text-gray-600">Cardiologist</div>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <StarIcon className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span>4.9 (127 reviews)</span>
                      </div>
                    </div>

                    <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <CalendarIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-semibold text-gray-800">Today, 2:30 PM</div>
                          <div className="text-xs text-gray-600">Video Consultation</div>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-1" />
                        <span>Confirmed</span>
                      </div>
                    </div>

                    <div className="bg-linear-to-br from-green-50 to-teal-50 rounded-xl p-4 border border-green-100">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-linear-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                          <HeartIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-semibold text-gray-800">Health Score</div>
                          <div className="text-xs text-gray-600">Excellent</div>
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-linear-to-r from-green-500 to-teal-500 h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>

                    <div className="bg-linear-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-100">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 bg-linear-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                          <ShieldCheckIcon className="w-6 h-6 text-white" />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-semibold text-gray-800">Lab Results</div>
                          <div className="text-xs text-gray-600">Updated 2h ago</div>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-gray-500">
                        <CheckCircleIcon className="w-4 h-4 text-green-500 mr-1" />
                        <span>Normal Range</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-linear-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-linear-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Better Health
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools you need to manage your healthcare journey effectively.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                  <div className="w-16 h-16 bg-linear-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-cyan-600 to-blue-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Take Control of Your Health?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              Join millions of users who trust Health-X for their healthcare needs.
            </p>
            <Link to="/register">
              <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors transform hover:scale-105 shadow-xl">
                Get Started Free
                <ArrowRightIcon className="w-5 h-5 ml-2 inline" />
              </button>
            </Link>
            <p className="text-cyan-100 mt-4 text-sm">
              No credit card required • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-linear-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <HeartSolidIcon className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Health-X</span>
              </div>
              <p className="text-gray-400">
                Making healthcare accessible, efficient, and patient-centered.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Health-X. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
