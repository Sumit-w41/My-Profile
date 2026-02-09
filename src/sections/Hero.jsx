import React from 'react'

import profile from '../assets/images/profile.jpg'
import { STATS } from '../utils/data'
import StatInfoCard from '../components/StatInfoCard'
import { Link } from 'react-scroll';


const Hero = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/files/resume.pdf'; // relative to the public folder
    link.download = 'resume.pdf';    // suggested filename
    link.click();
  };


    

  return (
    <section className='relative inset-0 top-[130px] max-w-7xl mx-auto'>
      <div className='flex flex-col lg:flex-row-reverse gap-14 items-center justify-between flex-1'>
        
        <div className='order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0'>
          <h3 className='text-xl lg:text-2xl font-medium text-white'>👋Hi, I'm Sumit Palariya</h3>
            <h1 className='w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] text-[#FFAB2F]'>Building scalable  & User Centric Products </h1>
            <p className='w-full lg:w-[500px] text-sm lg:text-base mt-4 text-white '>I'm a passionate Software Developer dedicated to building solutions that matter. I focus on crafting intuitive, high-performance digital experiences through clean code and thoughtful design. Let’s connect and create something exceptional.</p>

            <div className='flex justify-center lg:justify-start gap-4 md:gap-8 mt-6'>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70} // Adjust for navbar height if needed
            >
              <button className='  text-sm font-bold border p-2 rounded-2xl border-[#FFAB2F] text-[#FFAB2F] hover:scale-110 transition-transform duration-300 ease-in-out transform '>View My Work</button>
             
                </Link>
                 <button className=' text-sm font-bold border p-2 rounded-2xl border-white text-black bg-white hover:scale-110 transition-transform duration-300 ease-in-out transform' onClick={handleDownload}>Download Resume</button>
            </div>
        </div>

        <div>
          <img src={profile} alt="profile" className='w-[300px] md:w-[370px]  rounded-full' />
        </div>

        
      </div>


      <div className='flex gap-12 mt-16 md:mt-24 flex-wrap m-3 mb-35 '>
        {STATS.map((item)=>(
          <StatInfoCard key= {item.id} count = {item.count} label = {item.label}/>
        ))}
        
      </div>
    </section>
  )
}

export default Hero