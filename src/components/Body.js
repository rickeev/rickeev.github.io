import Image from 'next/image';
const Body = () => {

  return (
    <div className="flex flex-col justify-center items-center px-20 md:px-40 lg:px-80 outline-4 pt-8">
      <div className="flex flex-col justify-center">
        <h1 className="text-7xl">Rickee Vang</h1>
        <h2 className="text-xl pb-4">Aspiring Data Center Technician</h2>
        <p className="text-m pb-2">
          Technology is the present and the future. It has helped make our everyday lives so much easier. Now what would be better than benefitting from the usefulness of technology? By directly contributing to it. 
        </p>
        <p className="text-m pb-2">
          As a data center technician, I would be standing at the forefront of innovation, ensuring the seamless operation of the digital infrastructure that powers our modern world.
        </p>
        <p className="text-m pb-2">
          I am excited to apply my skills and knowledge to this hands-on career that is so deeply interwined and interconnected with technology.
        </p>
        <p className="text-m pb-2">I am stilly studying to obtain the CompTIA Network+ certification.</p>
        <p className="text-m pb-2">I recently completed a fiber optics and copper cabling class in the Spring 2024 semester.</p>
      </div>
            <div className="centered-content">
              <a href="https://www.linkedin.com/in/rickeevang/" className="text-blue-500 hover:underline">
                <Image src="/icons8-linkedin.svg" alt="LinkedIn Logo" viewBox="0 0 36 36" width="36" height="36" />
              </a>
            </div>
    </div>
  );
};

export default Body;
