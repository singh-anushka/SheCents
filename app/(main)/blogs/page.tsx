import React from 'react';
import { ArrowRight } from 'lucide-react'; // Importing the ArrowRight icon from Lucide Icons
import MySVGImage from './path-to-your-svg-image.svg'; // Import your SVG image
import Image from 'next/image';

const Page = () => {
  // Example case studies data
  const caseStudies = [
    {
      id: 1,
      title: "Saving for Retirement",
      content: "Case study content about how a woman successfully saved for retirement, including her strategies and challenges.",
      link: "#"
    },
    {
      id: 2,
      title: "Investing in Stocks",
      content: "Case study content about a woman who started investing in stocks and achieved financial growth over time.",
      link: "#"
    },
    {
      id: 3,
      title: "Managing Debt",
      content: "Case study content about how a woman tackled her debt using a structured repayment plan.",
      link: "#"
    }
  ];

  return (
    <div className=" min-h-screen">
      <div className="flex w-full flex-col items-center">
          <Image src="/blogs.svg" alt="Shop" height={90} width={90} />

          <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
            Blogs
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
          Where Women Learn, Grow, and Thrive Financially
          </p>

          
        </div>
      <main className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((caseStudy) => (
            <div key={caseStudy.id} className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">{caseStudy.title}</h3>
              <p className="text-gray-700">{caseStudy.content}</p>
              <a href={caseStudy.link} className="text-blue-500 hover:text-blue-700 mt-2 inline-block">Read more <ArrowRight className="inline-block ml-1" /></a>
            </div>
          ))}
        </div>
      </main>
      {/* <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Financial Insights. All rights reserved.</p>
        </div>
      </footer> */}
    </div>
  );
}

export default Page;
