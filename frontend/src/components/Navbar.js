// Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('Home');

  const handleMenuItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <nav className="bg-[#863E15] text-body pt-2 px-2 flex flex-row items-center justify-between"> 
    <div> 
      <img src='ASALOGO.png' alt='ASA Logo' className='h-16 w-16' />
    </div>
      <div className="max-w-7xl m-1 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {['Home', 'Events', 'Team', 'About', 'Contacts'].map((item) => (
          <div key={item} className="relative">
            <button
              className={`text-white px-4 py-2 hover:bg-[#996600] transition-colors duration-300 ${
                activeItem === item ? 'font-semibold' : 'font-medium'
              }`}
              onClick={() => handleMenuItemClick(item)}
            >
              {item}
            </button>
            {activeItem === item && (
              <div className="absolute  bottom-0 left-0 right-0 h-1 bg-[#F3B530] rounded-lg"></div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;