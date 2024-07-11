import React from "react";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2024 A2 Farm. All rights reserved.
        </p>
        <div className="mt-4">
          <NavLink to="https://www.instagram.com/a2_farm103" target="_blank" className="text-gray-400 hover:text-white mx-2">
            Instagram
          </NavLink>
          <NavLink  to="https://wa.link/e1i9xz" target="_blank" className="text-gray-400 hover:text-white mx-2">
            WhatsApp
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
