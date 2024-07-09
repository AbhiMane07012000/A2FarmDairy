import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; 2024 A2 Farm. All rights reserved.
        </p>
        <p className="text-sm mt-2">Pathare Mala, Charoli Budruk, Near Gandharva Park, Pune-412105</p>
        <p className="text-sm mt-2">
          <NavLink to="tel:+91 7083129973" className="hover:underline">
            7083129973
          </NavLink>{" "}
          |{"  "}
          <NavLink to="mailto:gircowfarm103@gmail.com" className="hover:underline">
             gircowfarm103@gmail.com
          </NavLink>
        </p>
        <div className="mt-4">
          <NavLink to="https://www.instagram.com/a2_farm103?igsh=Mm80bWhqcDQ1Zno1" className="text-gray-400 hover:text-white mx-2">
            Instagram
          </NavLink>
          <NavLink to="https://wa.me/+917083129973" className="text-gray-400 hover:text-white mx-2">
            WhatsApp
          </NavLink>
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
