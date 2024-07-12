import React from "react";
import SEO from "../../Components/SEO/SEO";
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
    homeHeading: "FRESH MILK",
    homeSubHeading: "HOME DELIVERED",
    homeParagraph: "",
  };
  return (
    <>
      <SEO
        title="Pure Milk Haven"
        description="Farm Fresh Organic A2 Gir Cow Ghee, A2 Desi Cow Milk, Buffalo Milk"
        keywords="Pure Milk Haven,pure milk haven netlify,Pure Milk Haven Netlify,Pure Milk Haven Pune,pure milk haven pune,organic milk,organic cow milk,organic milk pune,organic cow milk pune,a1 milk,a1 milk pune,raw milk,organic raw milk,desi cow milk,desi milk,a2 milk,a2 desi milk,a2 cow milk,paneer,organic paneer,home made paneer,paneer pune,natural paneer,desi cow paneer,a2 paneer,organic curd,natural curd,home made curd,organic curd pune,desi cow curd,a2 curd,desi curd,desi curd pune,a2 curd pune,desi cow ghee,a2 desi ghee,where can i buy a2 milk,gir cow milk,malnad milk,malnad cow milk,hallikar cow milk,a2 desi ghee company,raw desi cow milk,buy a2 cow milk,buy a2 raw milk,a2 milk company,where can i buy desi cow milk,best a2 milk company,buttermilk,desi cow buttermilk"
        ImgUrl="./Home.jpg"
      />
      <Carousel />
      <marquee>
        <p>
          Start your day right with fresh buffalo, Gir Cow milk delivered to your
          doorstep daily by A2 Dairy Farm🐃! Taste the richness, embrace the
          health. Subscribe now and enjoy pure goodness every morning! 🥛🌿
        </p>
      </marquee>
      <HeroSection heroDetails={heroDetails} />
      <OurProducts />
      <OurProcess />
      <OurPassion />
      <Subscription />
    </>
  );
};

export default Home;
