import React from 'react';
import background from '../assets/background1.jpg';

const Header = () => {
  const headerStyle = {
    background: `url(${background}) center/cover`,
    minHeight: '300px', // Adjust the height as needed
  };

  return (
    <div className="bg-black" style={headerStyle}>
      <div className="flex justify-center">
        <h1 className="text-center p-6 text-5xl text-primary font-semibold">iNav Labs</h1>
      </div>
    </div>
  );
};

export default Header;
