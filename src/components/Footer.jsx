import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Instagram, Dribbble, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#15548d] text-white py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Logo & About */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-2xl font-extrabold tracking-wide flex items-center gap-2">
                        HEALTH - X
                    </h1>
                    <p className="mt-4 text-sm leading-relaxed text-gray-200">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="flex gap-4 mt-5">
                        {[Facebook, Twitter, Linkedin, Instagram, Dribbble].map((Icon, i) => (
                            <motion.a
                                key={i}
                                href="#"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                            >
                                <Icon size={18} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>

                {/* For Patients */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h2 className="text-lg font-bold mb-4">For Patients</h2>
                    <ul className="space-y-3 text-gray-200">
                        {["Search for Doctors", "Login", "Register", "Booking", "Patient Dashboard"].map((item, i) => (
                            <li key={i} className="hover:translate-x-1 transition cursor-pointer">» {item}</li>
                        ))}
                    </ul>
                </motion.div>

                {/* For Doctors */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-lg font-bold mb-4">For Doctors</h2>
                    <ul className="space-y-3 text-gray-200">
                        {["Appointments", "Chat", "Login", "Register", "Doctor Dashboard"].map((item, i) => (
                            <li key={i} className="hover:translate-x-1 transition cursor-pointer">» {item}</li>
                        ))}
                    </ul>
                </motion.div>

                {/* Contact Us */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    <h2 className="text-lg font-bold mb-4">Contact Us</h2>
                    <ul className="space-y-4 text-gray-200">
                        <li className="flex items-start gap-3">
                            <MapPin size={20} className="mt-1" />
                            GHANA - KUMASI, San Francisco, California, CA 94108
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={20} /> +233 5590 38128
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={20} /> healthX@example.com
                        </li>
                    </ul>
                </motion.div>
            </div>

            {/* Bottom bar */}
            <div className="text-center text-gray-300 mt-12 border-t border-white/20 pt-6 text-sm">
                © {new Date().getFullYear()} HEALTH - X. All rights reserved.
            </div>
        </footer>
    );
}
