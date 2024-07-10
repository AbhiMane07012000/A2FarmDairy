import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaLink,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { NavLink } from "react-router-dom";
import Subscription from "../../Components/Subscrition/Subscription";

const Contact = () => {
  return (
   
    <>
    <header className="text-white bg-cover bg-center" style={{backgroundImage:"url('./passion_bg.jpg')"}}>
    <h1 className="text-2xl md:text-4xl ps-8 pt-7 font-bold">CONTACT</h1>
     <p className="text-sm md:text-lg ps-8 py-6 ">WE WILL BE HAPPY TO ASSIST YOU</p>
    </header>
     <section className=" py-10">

      <div className="container mx-auto px-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="md:flex">
            {/* Call Us Section */}
            <article className="md:w-1/2 p-6">
              <header className="flex items-center mb-4">
                <FaPhoneAlt size={24} className="text-cyan-600 mr-4" />
                <div>
                  <h2 className="text-lg font-bold">CALL US</h2>
                  <NavLink to="tel:+91 7083129973" className="text-gray-600">
                    +91 7083129973
                  </NavLink>
                  <NavLink to="https://wa.link/e1i9xz">
                    <button className="mt-2 flex items-center bg-green-500 text-white px-4 py-2 rounded">
                      <FaWhatsapp className="mr-2" />
                      CHAT VIA WHATSAPP
                    </button>
                  </NavLink>
                
                </div>
              </header>
              <p className="text-gray-600 py-2 text-sm">
                    6 AM TO 9 PM - CUSTOMER SUPPORT
                  </p>
                  <p className="text-gray-600 text-sm">
                    9 AM TO 6 PM - SALES & BUSINESS RELATION
                  </p>
            </article>
            {/* Email Section */}
            <article className="md:w-1/2 p-6 border-t md:border-t-0 md:border-l">
              <header className="flex items-center mb-4">
                <FaEnvelope size={24} className="text-cyan-600 mr-4" />
                <div>
                  <h2 className="text-lg font-bold">EMAIL</h2>
                </div>
              </header>
              <NavLink
                to="mailto:gircowfarm103@gmail.com"
                className="text-sm md:text-md lg:text-lg"
              >
                GIRCOWFARM103@GMAIL.COM - SALES
              </NavLink>{" "}
              
            </article>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg overflow-hidden mt-8 p-6">
          <div className="md:flex">
            {/* Address Section */}
            <address className="md:w-1/2 not-italic">
              <header className="flex items-center mb-4">
                <MdLocationOn size={24} className="text-cyan-600 mr-4" />
                <h2 className="text-lg font-bold">ADDRESS</h2>
              </header>
              <p className="text-gray-600 uppercase">A2 Farm</p>
              <p className="text-gray-600 uppercase">Pathare Mala,</p>
              <p className="text-gray-600 uppercase">Charoli Budruk</p>
              <p className="text-gray-600 uppercase">Near Gandharva Park</p>
              <p className="text-gray-600 uppercase">Pune-412105</p>
              <p className="text-gray-600 uppercase">MAHARASHTRA, INDIA</p>
            </address>
            {/* Google Map Section */}
            <div className="md:w-1/2 mt-4 md:mt-0">
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6290359589266!2d73.89385197438648!3d18.63574796564753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70061218555%3A0xd380d26219cf9cc4!2sCharholi%20374%20Gandharva%20Park%2C%20PathareMala%2C%20Charholi%20Budruk%2C%20Pune%2C%20Maharashtra%20412105!5e0!3m2!1sen!2sin!4v1720592492500!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Subscription />
    </>
  );
};

export default Contact;
