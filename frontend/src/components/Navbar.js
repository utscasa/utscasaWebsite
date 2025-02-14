import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'About', path: '/about' },
    { name: 'Contacts', path: '/contacts' }
  ];

  return (
    <nav className="bg-[#863E15] text-body pt-2 px-4 flex items-center justify-between">
      {/* Hamburger menu for small screens */}
      <div className="sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden sm:flex max-w-7xl px-4 sm:px-6 lg:px-8 space-x-4">
        {menuItems.map((item) => ( 
          <div key={item.name} className="relative">
            <Link
              to={item.path}
              className={`text-white px-4 py-2 hover:bg-[#996600] transition-colors duration-300 ${
                location.pathname === item.path ? 'font-semibold mb-2' : 'font-medium'
              }`}
            >
              {item.name}
            </Link>
            {location.pathname === item.path && (
              <div className="absolute mt-2 bottom-0 left-0 right-0 h-1 bg-[#F3B530] rounded-lg"></div>
            )}
          </div> 
          
        ))}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 top-16 bg-[#863E15] w-full sm:hidden flex flex-col items-start p-4 shadow-md">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-white font-semibold px-4 py-2 w-full text-left hover:bg-[#996600] transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
      
      {/* Logo with link to home */}
      <Link to="/">
        <img src='ASALOGO.png' alt='ASA Logo' className='h-16 w-16' />
      </Link>
    </nav>
  );
};

export default Navbar;