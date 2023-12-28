import React from 'react';
import robot from '../assets/robot-1.png';

const About = () => {
  return (
    <div className="bg-black">
      <div className="container mx-auto flex md:flex-row flex-col items-center justify-center">
        <div className="md:w-1/2 text-center md:text-left md:mt-0 mt-10">
          <h1 className="p-6 md:text-5xl text-4xl text-primary font-semibold uppercase font-Saira shadow-md">
            Innovative Robotics Solutions for the Future
          </h1>
        </div>

        <div className="justify-center md:justify-end">
          <p className="text-white text-lg max-w-lg font-sans">
            We specialize in developing advanced robotics solutions, including robotic automation, machine vision, and artificial intelligence. Our team of experts has extensive knowledge and experience in the robotics industry.
          </p>
          {/* You can uncomment the following line if you want to include a subscribe link */}
          {/* <a href="#subscribe" className="underline font-serif text-white">Subscribe</a> */}
          <div className='mt-4 ' >
          <a href="#subscribe" className="subscribe-btn bg-black text-white py-2 px-4 rounded-md shadow-md hover:bg-primary transition">
            Subscribe
          </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
