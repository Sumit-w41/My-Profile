import React from 'react'
import college from '../assets/images/graphicerahilluniversity_logo.jpeg'

function ExperienceCard() {
    return (

        <>


            <div className='flex flex-col '>
                <div className='flex space-x-2'>
                    <img src={college} alt="logo" width={50} />
                    <div>
                    <h3 className='text-[#FFAB2F] text-2xl font-bold'>
                        Graphic Era Hill University
                    </h3>
                    <h2 className='text-[#FFAB2F]'>2022-2026</h2>
                    </div>
                </div>
                
                

                <div className='text-white relative ml-15'>
                1. Currently pursuing B.Tech in Computer Science (2022–2026) with hands-on experience in web development through academic projects, internships, and personal work. 
                </div>
            </div>

        </>

    )
}

export default ExperienceCard