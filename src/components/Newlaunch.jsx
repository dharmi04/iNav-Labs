import React from 'react';
import car from '../assets/car.png';

const Newlaunch = () => {
  return (
    <div className='flex md:flex-row flex-col items-center mb-8'>
      
      <div className='md:w-1/2 md:ml-12 m-4'>
        <h1 className='text-primary font-Saira text-4xl mb-2 '>Launching Soon</h1>
        <p className='text-white font-2xl'>Introducing our latest innovation: a cutting-edge robot car, set to redefine mobility. Launching soon, this futuristic vehicle blends advanced robotics and smart technology for an unparalleled driving experience. Stay tuned as we usher in a new era of intelligent transportation.</p>
      </div>
      <div className='md:w-1/2 md:ml-6 m-4'>
        <img src={car} alt="car" />
      </div>
    </div>
  );
};

export default Newlaunch;
