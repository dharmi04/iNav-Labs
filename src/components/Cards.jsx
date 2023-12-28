import React from 'react';
import expertise from '../assets/robot-3.jpg'
import clients from '../assets/robot-4.jpeg'
import services from '../assets/robot-1.png'

const Card = ({ image, title, description }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-sm shadow-primary m-4 border-2 border-primary transform transition-transform hover:scale-105  ">
      <img className="w-full h-80 object-cover" src={image} alt={title} />
      <div className="px-6 py-4">
        <div className="font-semibold font-Saira text-xl mb-2 text-primary">{title}</div>
        <p className="text-white text-base">{description}</p>
      </div>
    </div>
  );
};

const Cards = () => {
  const cardsData = [
    {
      title: 'Our Expertise',
      description: 'We specialize in developing advanced robotics solutions, including robotic automation, machine vision, and artificial intelligence. Our team of experts has extensive knowledge and experience in the robotics industry.',
      image: expertise,
    },
    {
      title: 'Our Clients',
      description: 'We have worked with clients in various industries, including manufacturing, healthcare, and logistics. Our customized robotics solutions have helped our clients improve their operations and increase their productivity using robotics and ai.'

      ,
      image: clients,
    },
    {
      title: 'Our Services',
      description: 'Experience efficiency redefined with our Smart Robotics Solutions. Specializing in robotic automation, machine vision, and AI, we elevate operations, cut costs, and boost productivity. Trust our expert team for tailored, cutting-edge automation that transforms your business landscape.',
      image: services,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default Cards;
