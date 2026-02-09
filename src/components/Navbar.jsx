import React, { useState } from 'react'
import { Menu_Links } from '../utils/data';
import { Link } from 'react-scroll';


import LOGO from '../assets/images/ligo.png'

import menu from "../assets/menu.svg"
import close from "../assets/close.svg"

const Navbar = () => {

  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={` w-full flex items-center py-6 fixed top-0 z-20 px-6 bg-[#1D1D1D]  `}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-2" onClick={() => {
          setActive("Home");
          window.scrollTo(0, 0)

        }}>
          <div className='h-10 w-10 text-2xl text-[#1D1D1D] bg-[#FFAB2F] rounded-full font-semibold flex items-center justify-center'>
            SP
          </div>
          <p className="text-white text-[20px] font-bold cursor-pointer flex">Sumit  &nbsp;<span className="sm:block hidden"> Palariya</span> </p>
        </div>
        <ul className="list-none hidden sm:flex flex-row gap-10">

          {Menu_Links.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                onSetActive={() => setActive(item.label)}
                className={`cursor-pointer text-[18px] font-medium ${active === item.label ? 'text-[#FFAB2F]' : 'text-white'
                  } hover:text-[#FFAB2F]`}
              >
                {item.label}
              </Link>
            </li>
          ))}

        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center]">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer" onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? "hidden" : "flex"} p-6  bg-gradient-to-r from-custom1 to-custom2 absolute top-10 right-0 mx-4 my-2  min-w-[140px] z-10 rounded-xl`}>

            <ul className="list-none flex justify-end items-start flex-col gap-4 bg-[#1D1D1D] w-40 p-6">

              {Menu_Links.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={item.offset}
                    duration={500}
                    onSetActive={() => setActive(item.label)}
                    className={`cursor-pointer text-[18px] font-medium ${active === item.label ? 'text-[#FFAB2F]' : 'text-white'
                      } hover:text-[#FFAB2F]`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar




