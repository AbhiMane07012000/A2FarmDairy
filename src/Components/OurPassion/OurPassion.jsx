import React from 'react';
import { FaLeaf, FaHeart } from 'react-icons/fa';
import { GiCow, GiFarmer } from 'react-icons/gi';

const PassionSection = () => {
  const passionDetails = [
    {
      id: 1,
      icon: <img className='h-9 mr-4' src='./cow.png' alt='cowpng' />,
      heading: "PROTECT COWS",
      paragraph: "We take care of cows even when they stop giving milk",
    },
    {
      id: 2,
      icon: <img className='h-9 mr-4' src='./bull.png' alt='bullpng' />,
      heading: "PRESERVE DESI COWS",
      paragraph: "We protect desi cows by promoting desi cow products",
    },
    {
      id: 3,
      icon: <img className='h-9 mr-4' src='./Farmer.png' alt='Framer' />,
      heading: "ORGANIC FARMING",
      paragraph: "We make organic fertilizers and pesticides for organic farming",
    },
    {
      id: 4,
      icon: <img className='h-9 mr-4' src='./tradition.png' alt='Tradition' />,
      heading: "FOLLOW TRADITION",
      paragraph: "We follow traditional methods while making our dairy products",
    },
  ];

  return (
    <section className="relative bg-cover bg-center py-10" style={{ backgroundImage: "url('./passion_bg.jpg')" }}>
      <div className="bg-black bg-opacity-60 w-full h-full absolute top-0 left-0"></div>
      <div className="relative z-10 text-white p-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-normal mb-4"data-aos="fade-right" data-aos-duration="3000">OUR <span className="font-bold text-yellow-600">PASSION</span></h2>
        <p className="max-w-xl mb-10" data-aos="fade-right" data-aos-duration="3000">
          We have set out to serve Gomathas and follow our tradition. We believe our tradition is rich and enables us to live a happy and healthy lifestyle. Our Gomathas play a very crucial role in our tradition.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {passionDetails.map((detail) => (
            <div key={detail.id} className="flex flex-col items-start" data-aos="zoom-out"
            data-aos-duration="3000">
              <h2 className="flex items-center text-lg font-bold mb-2">
                {detail.icon}
                {detail.heading}
              </h2>
              <p>{detail.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PassionSection;
