import React, { useState } from 'react'
import { auth } from '../Firebase/firebase'
import { useNavigate, Link } from 'react-router-dom'
import { MenuIcon, XIcon, LogOutIcon, UsersIcon, UserIcon, ShieldIcon } from 'lucide-react'
import { toast } from 'react-toastify'

const Navbar = () => {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Logout function
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await auth.signOut();
            console.log('User logged out successfully');
            toast.success('Logged out successfully');
            
            // Clear any history manipulation and redirect to login
            window.history.replaceState(null, null, '/');
            navigate('/');
        } catch (error) {
            console.error('Logout failed:', error);
            toast.error('Logout failed. Please try again.');
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { 
            name: 'Doctors', 
            to: '#', 
            icon: <UserIcon className="w-4 h-4" />,
            description: 'Find and connect with healthcare professionals'
        },
        { 
            name: 'Patients', 
            to: '#', 
            icon: <UsersIcon className="w-4 h-4" />,
            description: 'Manage patient records and appointments'
        },
        { 
            name: 'Admin', 
            to: '#', 
            icon: <ShieldIcon className="w-4 h-4" />,
            description: 'System administration and settings'
        }
    ];

    return (
        <>
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link to="/dashboard" className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">H</span>
                                </div>
                                <h1 className="font-bold text-xl sm:text-2xl text-gray-800">
                                    Health-X
                                </h1>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className="text-gray-600 hover:text-cyan-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:bg-cyan-50 flex items-center space-x-2"
                                >
                                    {item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                        </div>

                        {/* Desktop Logout Button */}
                        <div className="hidden md:flex items-center">
                            <button
                                onClick={handleLogout}
                                className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                            >
                                <LogOutIcon className="w-4 h-4" />
                                <span>Logout</span>
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleMobileMenu}
                                className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 p-2 rounded-md transition-colors duration-200"
                                aria-label="Toggle mobile menu"
                            >
                                {isMobileMenuOpen ? (
                                    <XIcon className="h-6 w-6" />
                                ) : (
                                    <MenuIcon className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className={`md:hidden transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen 
                        ? 'max-h-96 opacity-100 border-t border-gray-200' 
                        : 'max-h-0 opacity-0 overflow-hidden'
                }`}>
                    <div className="px-4 py-3 space-y-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.to}
                                onClick={closeMobileMenu}
                                className="flex items-center space-x-3 text-gray-600 hover:text-cyan-600 hover:bg-cyan-50 px-3 py-3 rounded-lg transition-all duration-200"
                            >
                                <div className="text-cyan-500">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <div className="font-medium">{item.name}</div>
                                    <div className="text-xs text-gray-500">{item.description}</div>
                                </div>
                            </Link>
                        ))}
                        
                        {/* Mobile Logout Button */}
                        <div className="pt-4 border-t border-gray-200">
                            <button
                                onClick={handleLogout}
                                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-3 rounded-lg font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                            >
                                <LogOutIcon className="w-4 h-4" />
                                <span>Logout</span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
