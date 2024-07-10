import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-slate-800" data-aos="fade-down" data-aos-duration="1500">
            <nav className="container mx-auto px-6 py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <NavLink to="/" className="text-xl font-bold text-gray-800 hover:text-gray-700">
                            <img className="h-10 md:h-12 w-100 " src="brand_logo.webp" alt="Brand Logo"  height="2.5rem" width="100%"/>
                        </NavLink>
                        {/* Mobile menu button */}
                        <button
                            type="button"
                            className="absolute right-10 md:hidden text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                            aria-label="toggle menu"
                            onClick={toggleMenu}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                className="h-6 w-6 fill-current"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 18a1 1 0 010-2h18a1 1 0 110 2H3zm0-5a1 1 0 100-2h18a1 1 0 100 2H3zm0-5a1 1 0 110-2h18a1 1 0 110 2H3z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>
                    </div>
                    {/* Desktop navigation */}
                    <ul className="hidden md:flex md:items-center md:w-auto" data-aos="fade-down" data-aos-duration="1500">
                        <li>
                            <NavLink
                                to="/"
                                className="my-1 font-bold text-gray-300 hover:text-blue-500 md:mx-4 md:my-0"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className="my-1 font-bold text-gray-300 hover:text-blue-500 md:mx-4 md:my-0"
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className="my-1 font-bold text-gray-300 hover:text-blue-500 md:mx-4 md:my-0"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Mobile menu */}
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`} >
                <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <li>
                        <NavLink
                            to="/"
                            className="block font-bold text-gray-300 hover:text-blue-500 py-2"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="block font-bold text-gray-300 hover:text-blue-500 py-2"
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="block font-bold text-gray-300 hover:text-blue-500 py-2"
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
