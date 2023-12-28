import React from 'react';
import robot from '../assets/robot-1.png';

const About = () => {
  return (
    <div className="bg-black mb-11">
      <div className="container mx-auto flex md:flex-row flex-col items-center justify-center">
        <div className="md:w-1/2 text-center md:text-left md:mt-0 mt-10">
          <h1 className="p-6 md:text-5xl text-3xl text-primary font-semibold uppercase font-Saira shadow-md">
            Innovative Robotics Solutions for the Future
          </h1>
        </div>

        <div className="justify-center md:justify-end mt-4">
          <p className="text-white text-lg max-w-lg font-sans m-4">
          iNav Labs pioneers robotics and AI, seamlessly integrating precision and intelligence. Our excellence in autonomous systems, machine learning, and human-robot interaction defines the future through code and mechanical mastery. Welcome to iNav Labs.
          </p>
          {/* You can uncomment the following line if you want to include a subscribe link */}
          {/* <a href="#subscribe" className="underline font-serif text-white">Subscribe</a> */}
          <div className='pt-3  '>
          <a href="#subscribe" className='text-white border-primary border-2 p-1 rounded-lg text-sm  hover:shadow-md hover:shadow-primary transform transition-transform hover:scale-105 m-4 '>Subscribe</a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default About;
