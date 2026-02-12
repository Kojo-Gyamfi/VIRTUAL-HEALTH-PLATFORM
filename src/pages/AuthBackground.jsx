// AuthBackground.jsx
import { motion } from "framer-motion";

export default function AuthBackground({ children }) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-900 via-blue-700 to-cyan-500 px-4 relative overflow-hidden">

            {/* Floating Circles */}
            <motion.div
                className="absolute top-20 left-10 w-40 h-40 rounded-full bg-cyan-400/30 blur-3xl"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-32 right-12 w-56 h-56 rounded-full bg-blue-400/20 blur-3xl"
                animate={{ y: [0, -30, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/3 right-1/4 w-24 h-24 rounded-full bg-teal-300/20 blur-2xl"
                animate={{ x: [0, 25, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Grid Pattern Overlay */}
            {/* <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:4rem_4rem]"></div> */}

            {/* Main Content */}
            <main className="relative z-10 w-full ">
                {children}
            </main>
        </div>
    );
}
