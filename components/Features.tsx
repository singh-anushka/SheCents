import React from "react";
// import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaClock, FaMapMarkerAlt, FaLock, FaStar, FaHeartbeat, FaChartBar } from "react-icons/fa";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//   });

//   const cardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

  return (
    <div
      className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
     
    >
      <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-rose-400 dark:bg-primary-900 transition-colors transform hover:scale-110 hover:bg-rose-500">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold dark:text-white">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
};

const Features = () => {
  const features: Feature[] = [
    {
      icon: <FaClock />,
      title: "Heading",
      description:
        "lorem",
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Heading",
      description:
        "lorem ipsum",
    },
    {
      icon: <FaLock />,
      title: "Heading",
      description:
        "Lorem Ipsum",
    },
    {
      icon: <FaStar />,
      title: "Heading",
      description:
        "Lorem Ipsum",
    },
    {
      icon: <FaHeartbeat />,
      title: "Heading",
      description:
        "Lorem Ipsum.",
    },
    {
      icon: <FaChartBar />,
      title: "Heading",
      description:
        "Lorem Ipsum.",
    },
  ];

  return (
    <section className="dark:bg-gray-800">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mb-8 max-w-screen-md lg:mb-16">
          <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
         Make your finances easy 
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            Here is A Glimpse into Our Key Features.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            feature.icon ? (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ) : null
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
