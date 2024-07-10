import React from "react";
import Carousel from "../../Components/Carousel/Carousel";
import HeroSection from "../../Components/HeroSection/HeroSection";
import OurProducts from "../../Components/OurProducts/OurProducts";
import OurProcess from "../../Components/OurProcess/OurProcess";
import OurPassion from "../../Components/OurPassion/OurPassion";
import { FaLeaf, FaCogs } from "react-icons/fa";
import { GiHighGrass, GiCow } from "react-icons/gi";
import Subscription from "../../Components/Subscrition/Subscription";

const Home = () => {
  const heroDetails = {
    Homearticle: [
      {
        id: 1,
        icon: <FaLeaf size={30} className="inline mr-4 text-cyan-600" />,
        heading: "100% Pure",
        paragraph:
          "Our cows are naturally grazed. We feed natural fodder and cattle feed. Free of Growth hormone, Antibiotic, and Preservatives.",
      },
      {
        id: 2,
        icon: <GiHighGrass size={30} className="inline mr-4 text-cyan-600" />,
        heading: "Farm Fresh",
        paragraph:
          " Our goal is to serve the freshest milk. Fresh milk is delivered from our farms to your home as quickly as possible with strict cold-chain.",
      },
      {
        id: 3,
        icon: <FaCogs size={30} className="inline mr-4 text-cyan-600" />,
        heading: "Unprocessed Milk",
        paragraph:
          "We believe in consuming fresh milk. It tastes better and rich in vitamins and minerals compared to processed milk.",
      },
      {
        id: 4,
        icon: <GiCow size={30} className="inline mr-4 text-cyan-600" />,
        heading: "Happy Cows",
        paragraph:
          "Our cows are treated with love and care. We provide quality fodder, cattle feed, and nice shelter for them to live happily.",
      },
    ],
    homeImage: "./HomeHero.png",
    homeHeading:"FRESH MILK",
    homeSubHeading:"HOME DELIVERED",
    homeParagraph:""
  };
  return (
    <>
      <Carousel />
      <HeroSection heroDetails={heroDetails} />
      <OurProducts />
      <OurProcess />
      <OurPassion />
      <Subscription />
    </>
  );
};

export default Home;
