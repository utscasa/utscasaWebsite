//import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  //const [activeItem, setActiveItem] = useState('Home');

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'About', path: '/about' },
    { name: 'Contacts', path: '/contacts' }
  ];

  return (
    <nav className="bg-[#863E15] text-body pt-2 px-2 flex flex-row items-center justify-between">
      <div>
        <img src='ASALOGO.png' alt='ASA Logo' className='h-16 w-16' />
      </div>
      <div className="max-w-7xl m-1 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {menuItems.map((item) => (
          <div key={item.name} className="relative">
            <Link
              to={item.path}
              className={`text-white px-4 py-2 hover:bg-[#996600] transition-colors duration-300 ${
                location.pathname === item.path ? 'font-semibold' : 'font-medium'
              }`}
            >
              {item.name}
            </Link>
            {location.pathname === item.path && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F3B530] rounded-lg"></div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;