import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';
import Image from 'next/image';

const Page = () => {
  // Demo data for featured leaders
  const featuredLeaders = [
    {
      id: 1,
      name: "Jane Doe",
      title: "Investment Advisor",
      bio: "Jane is a seasoned investment advisor with over 10 years of experience...",
      image: "./leader1.jpg",
      socialLinks: {
        twitter: "https://twitter.com/example",
        linkedin: "https://www.linkedin.com/in/example",
      }
    },
    {
      id: 2,
      name: "Emily Smith",
      title: "Financial Planner",
      bio: "Emily is a certified financial planner helping individuals achieve their financial goals...",
      image: "./leader2.jpg",
      socialLinks: {
        twitter: "https://twitter.com/example",
        linkedin: "https://www.linkedin.com/in/example",
      }
    }
  ];

  // Demo data for discussion forums
  const discussionForums = [
    {
      id: 1,
      title: "Budgeting",
      icon: "💰"
    },
    {
      id: 2,
      title: "Investing",
      icon: "📈"
    },
    {
      id: 3,
      title: "Saving Tips",
      icon: "💡"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      {/* <nav className="bg-rose-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-white text-2xl font-bold">Community Connect</a>
          <ul className="flex">
            <li><a href="#" className="text-white mr-6">Home</a></li>
            {/* Add more navigation links here if needed */}
          {/* </ul>
        </div>
      </nav> */} 
 <div className="flex w-full flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
           src="/connect.svg" alt="Shop" height={90} width={90} />

          <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
            Community Connect
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
          Connect with your favorite leaders!
          </p>

          
        </div>
      {/* Main Content */}
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4"></h1>
        {/* Featured Leaders Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Featured Leaders</h2>
          <div className="grid grid-cols-2 gap-4">
            {featuredLeaders.map((leader) => (
              <div key={leader.id} className="bg-white rounded-lg p-4 shadow-md">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={leader.image} alt={leader.name} className="w-20 h-20 rounded-full mx-auto mb-2" />
                <h3 className="text-xl font-bold text-gray-800">{leader.name}</h3>
                <p className="text-gray-600 mb-2">{leader.title}</p>
                <p className="text-gray-700">{leader.bio}</p>
                <div className="mt-4 flex justify-center">
                  {/* Social Media Links */}
                  <a href={leader.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 mr-4">
                    <Twitter size={24} />
                  </a>
                  <a href={leader.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Discussion Forums Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Discussion Forums</h2>
          <div className="grid grid-cols-3 gap-4">
            {discussionForums.map((forum) => (
              <div key={forum.id} className="bg-white rounded-lg p-4 shadow-md flex items-center">
                <div className="bg-gray-200 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="text-xl">{forum.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{forum.title}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Add more sections for other community features */}

      </div>

      {/* Footer */}
      {/* <footer className="bg-rose-500 text-white text-center py-4">
        <p>&copy; 2024 Community Connect. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default Page;
