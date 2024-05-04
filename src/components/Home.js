import React from 'react';

import { Button } from "../components/ui/button"

const Home = () => {
  const name = "rickee vang / aspiring data center technician";
  const paragraphOne = "Technology is the present and the future. It has helped make our everyday lives so much easier. Now what would be better than benefitting from the usefulness of technology? By directly contributing to it.";
  const paragraphTwo = "I am excited to apply my skills and knowledge to a hands-on career that is so deeply interwined and interconnected with technology.";
  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-gray-300">Rickee Vang</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Button>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                </Button>
                <Button>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resume</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-start h-screen px-20 md:px-40 lg:px-80">
        <div className="flex flex-col items-start justify-center h-1/3">
          <p className="text-xl">{name}</p>
          <p className="text-m">{paragraphOne}</p>
          <p className="text-m">{paragraphTwo}</p>
          <p className="text-m"> Currently studying for the CompTIA Network+ certification.</p>
          <p className="text-m">I recently completed a fiber optics and copper cabling class in the Spring 2024 semester.</p>
          <a href="https://www.linkedin.com/in/rickeevang/" className="text-blue-500 hover:underline">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Home;