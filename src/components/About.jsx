import React from 'react'
import robot from "../assets/robot-1.png"

const About = () => {
    return (
        <div className='bg-black'>
            <div className='flex flex-row'>
                <div className=' justify-center w-4/6  mt-20 text-center'>

                    <p className='text-white text-2xl pl-4 '>We specialize in developing advanced robotics solutions, including robotic automation, machine vision, and artificial intelligence. Our team of experts has extensive knowledge and experience in the robotics industry.</p>
                    <a href="#subscribe" className=' underline font-serif text-white'>Subscribe</a>
                </div>


                <div className='flex '>
                    <img src={robot} alt="robot" />
                </div>

            </div>

        </div>
    )
}

export default About
