import React from "react";
import { FaTruck } from 'react-icons/fa';

const OurProcess = () => {
  const processSteps = [
    {
      id: 1,
      icon: <img src="./Grazing.png" alt="GrazingImage" />,
      title: 'GRAZING',
      subtitle: 'NATURALLY',
      description: 'Our cows are grazed naturally. We feed our cows with naturally grown grass and chemical-free cattle feed along with oil cakes and natural mineral supplements.',
    },
    {
      id: 2,
      icon: <img src="./Care.png" alt="CareImage" />,
      title: 'CARING',
      subtitle: 'WITH LOVE',
      description: 'Cows in our farms are treated with love and care. We monitor closely to make sure they are properly housed, washed, and health is periodically checked.',
    },
    {
      id: 3,
      icon: <img src="./Milking.png" alt="MilkingImage" />,
      title: 'MILKING',
      subtitle: 'HYGIENICALLY',
      description: 'Cows are washed regularly and their hygiene is maintained very well. Before milking, the udder area is thoroughly washed and dried.',
    },
    {
      id: 4,
      icon: <img src="./Chilling.png" alt="chilling" />,
      title: 'CHILLING',
      subtitle: 'FASTER',
      description: 'After milking, milk is chilled as quickly as possible to 4°C. This helps to avoid bacterial growth and maintain freshness.',
    },
    {
      id: 5,
      icon: <FaTruck size={40} className="text-gray-700" />,
      title: 'DELIVERY',
      subtitle: 'ON TIME',
      description: 'Fresh milk is delivered to customers every day before 7 am to their doorsteps. We maintain a strict cold chain end-to-end to maintain freshness.',
    },
  ];

  return (
    <section aria-labelledby="our-process-heading" className="max-w-7xl mx-auto px-4 py-12"   >
      <header className="flex items-center mb-10">
        <div className="h-10 w-1 bg-cyan-800 mr-4"></div>
        <h2 id="our-process-heading" className="text-3xl font-bold text-cyan-500">OUR PROCESS</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {processSteps.map((step) => (
          <article
            key={step.id}
            className="text-center p-6 border rounded-lg shadow-md bg-white"
            aria-labelledby={`step-title-${step.id}`}
            data-aos="flip-left"
            data-aos-duration="3000"
          >
            <div className="flex justify-center mb-4">{step.icon}</div>
            <h3 id={`step-title-${step.id}`} className="font-extrabold text-2xl mb-2 text-cyan-500">{step.title}</h3>
            <h4 className="font-bold text-gray-600 mb-4">{step.subtitle}</h4>
            <p className="text-gray-600">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurProcess;
