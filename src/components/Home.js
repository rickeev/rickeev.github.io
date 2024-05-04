import React from 'react';

const Home = () => {
  const name = "Hello, I am Rickee";
  const paragraph = "Technology is the present and the future. It has helped make our everyday lives so much easier. Now what is better than benefitting from the usefulness of technology? Working and helping to contribute to that. Having a hands-on career has always piqued my interest, so working as a data center technician would be a dream for me. It is a hands-on career that is deeply interwined and interconnected with technology. Currently studying for the CompTIA Network+ certification. I recently completed a fiber optics and copper cabling class in the Spring 2024 semester. I am excited to apply skills and knowledge to a new career as a data center technician! :)";
  return (
    <div>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-white">Rickee Vang</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Resume</a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="flex justify-center items-start h-screen px-20 md:px-40 lg:px-80">
        <div className="flex flex-col items-start justify-center h-1/3">
          <p className="text-xl">{name}</p>
          <p className="text-m">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;