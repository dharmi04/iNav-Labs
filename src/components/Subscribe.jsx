import React, { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission, e.g., send the email to a server.
    console.log('Email submitted:', email);
  };

  return (
    <div className='bg-black text-white p-8 text-center'>
      <h1 className='text-primary font-serif text-4xl mb-4'>Subscribe</h1>
      <p className='text-white font-sans mb-2'>Sign up to be the first to know about our soft launch events.</p>
      <form onSubmit={handleSubmit} className='flex items-center justify-center'>
        <input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={handleInputChange}
          required
          placeholder='Enter your email'
          className='border-b-2 border-white mr-4 outline-none bg-black text-white '
        />
        <button type='submit' className='text-white font-sans'>Sign Up</button>
      </form>
    </div>
  );
};

export default Subscribe;
