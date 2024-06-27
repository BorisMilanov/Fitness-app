import React, { useState } from 'react';

import { HourDropdown} from './TimeDropdowns'; // Adjust the import path as needed
import  './Time.css'
const Nav = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [printedOption, setPrintedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleButtonClick = () => {
    setPrintedOption(selectedOption);
  };


  return (
    <nav className='navi'>
      <ul>
        <li className='li'>
          
          <div className="dropdown-content" value={selectedOption} onChange={handleSelectChange}>
              <HourDropdown  />
          
            </div>
            
            <button onClick={handleButtonClick}>Print Selected Option</button>
          {printedOption && <p>The traning will start: {printedOption} : 00</p>}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
