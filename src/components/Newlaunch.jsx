import React from 'react';
import car from '../assets/car.png';

const Newlaunch = () => {
  return (
    <div className='flex md:flex-row flex-col items-center'>
      <div className='w-1/2'>
        <img src={car} alt="car" />
      </div>
      <div className='w-1/2'>
        <h1 className='text-white font-Saira text-4xl '>Launching Soon</h1>
        <p className='text-white font-2xl'>Introducing our latest innovation: a cutting-edge robot car, set to redefine mobility. Launching soon, this futuristic vehicle blends advanced robotics and smart technology for an unparalleled driving experience. Stay tuned as we usher in a new era of intelligent transportation.</p>
      </div>
    </div>
  );
};

export default Newlaunch;
