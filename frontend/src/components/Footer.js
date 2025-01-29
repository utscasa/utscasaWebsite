import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'; 
import React from 'react';

export default function Footer() {
    return (
      <footer className="bg-[#8B4513] text-white max-w-screen py-6 px-[5vw]"> 
        <div className="flex flex-col justify-center items-center w-full">  
          {/* Social Media Icons */}
        <div className="flex flex-row justify-center items-centerpace-x-4 w-[40vw]"> 
            <div className='px-2'><a href="#" className="text-white px-2 hover:text-yellow-500 transition-colors duration-300">
                <FaFacebookF size={24} />
                </a></div> 
            <div className='px-2'> <a href="#" className="text-white px-2 hover:text-yellow-500 transition-colors duration-300">
                    <FaTwitter size={24} />
                </a></div> 
            <div  className='px-2'>
                
            <a href="#" className="text-white px-2 hover:text-yellow-500 transition-colors duration-300">
                    <FaInstagram size={24} />
                </a></div> 
            <div  className='px-2'><a href="#" className="text-white px-2 hover:text-yellow-500 transition-colors duration-300">
                    <FaTiktok size={24} />
                </a></div>
              
               
                
        </div>

          {/* middle Stuff including icons other page links and   contact us  */}
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            {/* Logo */}
            <img src='ASALOGO.png' alt="ASA Logo"className=" rounded-full h-16 w-16"/>
  
            {/* Navigation Links */}
            <div className="flex space-x-8 mt-4 md:mt-0">
              <a href="#about" className="hover:text-yellow-500">About</a>
              <a href="#events" className="hover:text-yellow-500">Events</a>
              <a href="#team" className="hover:text-yellow-500">Team</a>
              <a href="#newsletter" className="hover:text-yellow-500">News Letter</a>
              <a href="#donate" className="hover:text-yellow-500">Donate</a>
            </div>

  
            {/* Contact Button */}
            <button className="bg-yellow-600 text-white py-2 px-6 rounded-full hover:bg-yellow-700 mt-4 md:mt-0">
              Contact Us
            </button>
          </div>
  
          {/* Divider */}
          <div className="border-t w-full border-yellow-500 my-4"></div>
  
          {/* All rights reserved */}
          <div className="w-full">
           
  
            {/* Copyright */}
            <p className="text-sm flex flex-row justify-center item-center mt-4 md:mt-0">
              © 2024 All Rights Reserved
            </p>
          </div> 
          
        </div>
      </footer>
    );
  }
  