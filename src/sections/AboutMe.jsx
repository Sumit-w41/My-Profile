import React from 'react'
import { ABOUT_ME } from '../utils/data'
import profile from '../assets/images/resume.jpg'

const AboutMe = () => {
  return (
      <section className='container mx-auto px-8 py-16 max-w-7xl'>

        <h4 className='block lg:hidden w-[200px] text-left mb-16 text-[#FFAB2F]    text-[26px] font-semibold '>About Me</h4>
        <div className='flex flex-col lg:flex-row gap-16 items-start justify-between'>
          <div className=' '>
            <img src={profile} alt="" className='w-[300px] md:w-[370px]  rounded-3xl' />
          </div>

          <div className='flex-1'>
            <h4 className='hidden lg:block w-[200px] text-left text-[#FFAB2F]     text-[26px] font-semibold'>
              About Me
            </h4>
            <p className='text-sm text-justify leading-6 whitespace-pre-line mt-4 text-white'>
              {ABOUT_ME.content}
            </p>

            <div className='flex gap-4 mt-6'>
              {ABOUT_ME.socialLinks.map((item)=>(
                <a key={item.label} className='cursor-pointer group'>
                  <item.icon className='text-2xl text-red-400 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-blue-400'/>
                </a>
                
              ))}

            </div>
          </div>

        </div>

      </section>
  )
}

export default AboutMe