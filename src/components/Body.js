const Body = () => {
  const name = "Rickee Vang / Aspiring Data Center Technician";
  const paragraphOne = "Technology is the present and the future. It has helped make our everyday lives so much easier. Now what would be better than benefitting from the usefulness of technology? By directly contributing to it.";
  const paragraphTwo = " As a data center technician, I would be standing at the forefront of innovation, ensuring the seamless operation of the digital infrastructure that powers our modern world.";
  const paragraphThree = "I am excited to apply my skills and knowledge to this hands-on career that is so deeply interwined and interconnected with technology.";
  return (
    <div>
      <div className="flex flex-col items-start justify-center px-20 md:px-40 lg:px-80 outline-4 border-2 border-color: rgb(0 0 0);">
        <div className="flex flex-col justify-center border-2 border-color: rgb(0 0 0);">
          <p className="text-xl">{name}</p>
          <br></br>
          <p className="text-m">{paragraphOne}</p>
          <p className="text-m">{paragraphTwo}</p>
          <p className="text-m">{paragraphThree}</p>
          <br></br>
          <p className="text-m">I am stilly studying to obtain the CompTIA Network+ certification.</p>
          <br></br>
          <p className="text-m">I recently completed a fiber optics and copper cabling class in the Spring 2024 semester.</p>
          <br></br>
        </div>
        <div className="flex flex-col items-center justify-center border-2 border-color: rgb(0 0 0);">
          <a href="https://www.linkedin.com/in/rickeevang/" className="text-blue-500 hover:underline">LinkedIn</a>
        </div>
      </div>
    </div>
  );
};

export default Body;
