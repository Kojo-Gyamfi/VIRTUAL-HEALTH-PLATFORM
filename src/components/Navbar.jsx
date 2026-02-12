import React from 'react'
import { auth } from '../Firebase/firebase'
import { useNavigate, Link } from 'react-router-dom'
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react'
import { toast } from 'react-toastify'


const Navbar = () => {
    const navigate = useNavigate();

    // Logout function
    const handleLogout = async (e) => {
        e.preventDefault();
        try {
            await auth.signOut();
            console.log('User logged out successfully');
            toast.success('Logged out successfully');
            navigate('/');
            // Optionally, redirect to login page or show a message
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    function ListItem({
        title,
        children,
        href,
        ...props
    }) {
        return (
            <li {...props}>
                <NavigationMenuLink asChild>
                    <Link href={href}>
                        <div className="text-sm leading-none font-medium">{title}</div>
                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                            {children}
                        </p>
                    </Link>
                </NavigationMenuLink>
            </li>
        );
    }

    return (<>
        <div className='bg-white shadow-md py-5 flex justify-between md:items-center px-10'>

            <div>
                <h1 className='font-bold text-[18px] pl-3'>Health - X</h1>
            </div>

            <div className='flex items-center space-x-6'>
                <Link to="/doctors" className="text-gray-600 hover:text-gray-900 transition">Doctors</Link>
                <Link to="/patients" className="text-gray-600 hover:text-gray-900 transition">Patients</Link>
                <Link to="/admin" className="text-gray-600 hover:text-gray-900 transition">Admin</Link>
            </div>



            <div>
                <button onClick={handleLogout} className=" border-2 border-[#09e5ab] rounded text-center 
                md:text-[15px] text-[10px] text-[#09e5ab] uppercase font-medium px-6 py-2 sm:px-3 hover:bg-[#09e5ab] hover:text-white 
                transition-colors duration-300 ease-in-out cursor-pointer">
                    Logout
                </button>
            </div>

        </div>
    </>
    );
};

export default Navbar;
