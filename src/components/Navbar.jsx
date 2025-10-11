import React from 'react'
import { auth } from '../Firebase/firebase'
import { useNavigate } from 'react-router-dom'
import { Link } from '@radix-ui/react-navigation-menu'
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from 'lucide-react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
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

            <div className=''>

                <NavigationMenu viewport={false}>
                    <NavigationMenuList>

                        <div className='hidden md:flex '>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Doctors</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Doctor Dashboard</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Appointments</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Schedule Timing</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Patients List</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Chat</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Invoices</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Reviews</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Profile Settings</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Doctor Register</Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Patients</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Search Doctor</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Doctor Profile</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Bookng</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Checkout</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Booking Success</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Patient Dashboard</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Favourites</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Chat</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Profile Settings</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Change Password</Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Pages</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Voice Call</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Video Call</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Search Doctors</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Calendar</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Components</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Invoices</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Starter Page</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Login</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Register</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Forgot Password</Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href="#">Admin</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </div>

                        {/* <div className='md:hidden inline-block items-center justify-between '>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid w-[200px] gap-4">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Doctors</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Patients</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Pages</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Admin</Link>
                                            </NavigationMenuLink>
                                            <NavigationMenuLink asChild>
                                                <Link href="#">Contacts</Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </div> */}

                    </NavigationMenuList>
                </NavigationMenu>
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
