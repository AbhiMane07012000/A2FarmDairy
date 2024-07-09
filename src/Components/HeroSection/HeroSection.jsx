import React from "react";
import { FaLeaf, FaCogs } from "react-icons/fa";
import { GiHighGrass, GiCow } from "react-icons/gi";


const HeroSection = ({heroDetails}) => {


  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 " >
      <div className="py-10 px-16" >
        <img className="py-5" src={heroDetails.homeImage} alt="heroImage" />
      </div>

      <div className="pt-16" >
        <h1 className="ps-10 font-normal text-gray-500 text-xl uppercase md:text-6xl">
          {heroDetails.homeHeading}<br />{" "}
          <span className="text-cyan-500 font-extrabold">{heroDetails.homeSubHeading}</span>
        </h1>
        <hr className="ms-10 w-32 bg-gray-500 h-0.5 " />
        {!(heroDetails.homeParagraph=="")&&<p className="py-5 px-11">{heroDetails.homeParagraph}</p>}
        <div className="grid grid-cols-1 lg:grid-cols-2 p-10">
          {heroDetails.Homearticle.map((heroDetail) => {
            return (
              <article key={heroDetail.id} className="lg:text-left p-10"  data-aos="fade-up" data-aos-duration="3000">
                <h2 className="font-extrabold text-sm uppercase">
                  {heroDetail.icon}
                  {heroDetail.heading}
                </h2>
                <p className="font-semibold text-sm ps-[3rem] text-gray-500">
                  {heroDetail.paragraph}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
