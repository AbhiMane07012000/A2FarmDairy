import React from 'react'
import { NavLink } from 'react-router-dom'

const Subscription = () => {
  return (
    <section className=" text-black py-20 px-10 text-center md:text-left">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
      <div className="flex-1 mb-10 md:mb-0">
        <h2 className="text-4xl md:text-6xl font-light" data-aos="fade-left" data-aos-duration="3000">START MILK</h2>
        <h2 className="text-4xl md:text-6xl font-bold text-cyan-500" data-aos="fade-left" data-aos-duration="3000">SUBSCRIPTION</h2>
        <hr className="w-24 border-t-2 border-black my-4 mx-auto md:mx-0"  data-aos="fade-right" data-aos-duration="3000"/>
        <p className="text-lg md:text-xl" data-aos="fade-left" data-aos-duration="3000">NOW IN PUNE</p>
         <NavLink to="https://wa.link/e1i9xz">
         <button className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-3 px-6 my-7 rounded">
          SUBSCRIBE
        </button>
         </NavLink>
        
      </div>
      <div className="flex-1 flex justify-center md:justify-center">
      
      </div>
    </div>
  </section>
  )
}

export default Subscription