import React from "react";
import OurProcess from "../../Components/OurProcess/OurProcess";
import OurPassion from "../../Components/OurPassion/OurPassion";
import HeroSection from "../../Components/HeroSection/HeroSection";
import { FaGift, FaSnowflake, FaHome } from "react-icons/fa";
import { FaBucket } from "react-icons/fa6";
import Subscription from "../../Components/Subscrition/Subscription";

const About = () => {
  const heroDetails = {
    Homearticle: [
      {
        id: 1,
        icon: <FaBucket size={30} className="inline mr-4 text-cyan-600" />,
        heading: "Milking",
        paragraph:
          "Our cows are maintained and milked hygienically two times a day.",
      },
      {
        id: 2,
        icon: <FaSnowflake size={30} className="inline mr-4 text-cyan-600" />,
        heading: "Chilling",
        paragraph:
          "We chill as quickly as possible within 1 to 2 hours to 2-4°C.",
      },
      {
        id: 3,
        icon: <FaGift size={30} className="inline mr-4 text-cyan-600" />,
        heading: "Packaging",
        paragraph:
          "We believe in consuming fresh milk. It tastes better and rich in vitamins and minerals compared to processed milk.",
      },
      {
        id: 4,
        icon: <FaHome size={30} className="inline mr-4 text-cyan-600" />,
        heading: "Home Delivery",
        paragraph: "Packed milk is delivered to the customer home by 7 am.",
      },
    ],
    homeImage: "./AboutHero.png",
    homeHeading: "WELCOME TO",
    homeSubHeading: "A2 DAIRY FARM",
    homeParagraph:
      "We follow the farm-to-home concept. We avoid many layers in between. After milking is done, milk is chilled at remote chilling centers, transported to our main plant, packed, and delivered to your home as quickly as possible with a strict cold chain.",
  };
  return (
    <>
      <header className="text-white bg-cover bg-center" style={{backgroundImage:"url('./passion_bg.jpg')"}}>
        <h1 className="text-2xl md:text-4xl ps-8 pt-7 font-bold">ABOUT</h1>
        <p className="text-sm md:text-lg ps-8 py-6 ">
          DEDICATED IN SERVRING COWS
        </p>
      </header>
      <HeroSection heroDetails={heroDetails} />
      <OurProcess />
      <OurPassion />
      <Subscription />
    </>
  );
};

export default About;
