import React from 'react'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { ABOUT_ME } from '../utils/data'
import ContactInfoCard from '../components/ContactInfoCard'
import { IoMdMail } from 'react-icons/io'
import { MdOutlineWeb } from 'react-icons/md'

const ContactMe = () => {
  return (
    <section className='max-w-7xl mx-auto -mt-20'>
      <div className=' mx-auto p-10 flex flex-col items-center'>
        <div className='w-full lg:w-[60vw] mx-auto'>
          <h4 className='text-[#FFAB2F]  text-[26px] font-semibold text-center '>Contact Me</h4>
          <p className='text-sm text-center mt-4 leading-6 text-white'>
            A versatile developer with hands-on expertise in modern technologies, tools, frameworks, dedicated to building efficient, scalable, and user-centric solutions.
          </p>
        </div>
        <div className=' mt-16 sm:w-2xl  '>
          {/* <div className='mt-16 w-2xl flex flex-col justify-center items-center'> */}
          <div>
            <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} className='' />
            <ContactInfoCard icon={<IoPhonePortraitOutline />} text={ABOUT_ME.phone} />
            <ContactInfoCard icon={<MdOutlineWeb />} text={ABOUT_ME.website} />
          </div>
          {/* </div> */}


          {/* <div>
            <h5 className='md:hidden text-[#FFAB2F] text-lg font-medium mt-4 pb-5                 text-[26px]  text-center '>
              Contact Form
            </h5> */}

          {/* <form className='flex flex-col' action="">

              <input type='text' name='fullname' placeholder='Full Name' autoComplete='off' className='bg-orange-50 rounded-2xl border border-orange-100 px-4 py-3 placeholder:text-orange-400/80 placeholder:text-sm mb-5 focus:outline-none focus:border-amber-200' />
              <input type='text' name='email' placeholder='Email' autoComplete='off' className='bg-orange-50 rounded-2xl border border-orange-100 px-4 py-3 placeholder:text-orange-400/80 placeholder:text-sm mb-5 focus:outline-none focus:border-amber-200' />
              <textarea type='text' name='message' placeholder='Message' rows={3} autoComplete='off' className='bg-orange-50 rounded-2xl border border-orange-100 px-4 py-3 placeholder:text-orange-400/80 placeholder:text-sm mb-5 focus:outline-none focus:border-amber-200' />



              <div className='flex justify-center'>
              <button className='text-[#FFAB2F] border border-[#FFAB2F] p-3 w-fit rounded-xl px-8'>SUBMIT</button>

              </div>

            </form> */}
          {/* </div> */}

        </div>

      </div>
    </section>
  )
}

export default ContactMe