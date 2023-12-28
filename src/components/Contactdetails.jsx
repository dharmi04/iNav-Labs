import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contactdetails = () => {
  return (
    <div className='text-center mx-auto mt-4' id="contact">
      <p className='text-primary font-serif text-2xl'>Follow for more updates</p>
      <div className='flex space-x-4 justify-center mt-3'>
        <a href="your_facebook_link" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-white hover:text-green-600 cursor-pointer" size={25} />
        </a>
        <a href="your_twitter_link" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white hover:text-green-600 cursor-pointer" size={25} />
        </a>
        <a href="your_instagram_link" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white hover:text-green-600 cursor-pointer" size={25} />
        </a>
        <a href="your_linkedin_link" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white hover:text-green-600 cursor-pointer" size={25} />
        </a>
      </div>
    </div>
  );
};

export default Contactdetails;
