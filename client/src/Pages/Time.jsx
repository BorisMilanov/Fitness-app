import React, { useState } from 'react';

import { HourDropdown, MinuteDropdown } from './TimeDropdowns'; // Adjust the import path as needed

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleToggleDropdown = (dropdownId) => {
    setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
  };

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => handleToggleDropdown(1)}>Select Time</button>
         
            <div className="dropdown-content">
              <HourDropdown />
              <MinuteDropdown />
            </div>
          
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
