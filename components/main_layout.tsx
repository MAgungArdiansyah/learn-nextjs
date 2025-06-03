import React from 'react'
import MainHeader from './main_header'

import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { SiHelpscout } from "react-icons/si";
import { FiPhoneCall } from "react-icons/fi";

const MainLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='bg-gray-200 w-screen min-h-screen'>
      <MainHeader />
      <div className='flex justify-start items-start'>
        <aside className='bg-white rounded-lg w-60 p-4'>
          <ul>
            <li className='flex justify-start items-center hover:bg-blue-300 hover:text-blue-800 rounded-xl p-2'>
              <AiOutlineHome className='mr-2 text-1xl' />
              <link rel="/" href="" />
              <h3>Home</h3>
            </li>
            <li className='flex justify-start items-center hover:bg-blue-300 hover:text-blue-800 rounded-xl p-2'>
              <GrProjects className='mr-2 text-1xl' />
              <h3 className='flex-1'>Projects</h3>
              <FaAngleRight />
            </li>
            <li className='flex justify-start items-center hover:bg-blue-300 hover:text-blue-800 rounded-xl p-2'>
              <FaCheck className='mr-2 text-1xl' />
              <h3 className='flex-1'>Singule</h3>
              <FaAngleRight />
            </li>
            <li className='flex justify-start items-center hover:bg-blue-300 hover:text-blue-800 rounded-xl p-2'>
              <FaCheckDouble className='mr-2 text-1xl' />
              <h3 className='flex-1'>Complex</h3>
              <FaAngleRight />
            </li>
            <li className='flex justify-start items-center hover:bg-green-300 hover:text-green-800 rounded-xl p-2'>
              <SiHelpscout className='mr-2 text-1xl' />
              <link rel="/" href="/about-us" />
              <h3>About us</h3>
            </li>
            <li className='flex justify-start items-center hover:bg-orange-300 hover:text-orange-800 rounded-xl p-2'>
              <FiPhoneCall className='mr-2 text-1xl' />
              <link rel="/" href="/contact-us" />
              <h3>Contact us</h3>
            </li>
          </ul>
        </aside>
        <main className='flex-1'>{children}</main>
      </div>

    </div>
  )
}

export default MainLayout 