//import { Input } from '../assets/components/Input/Input';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Exercise.css"
function Main(day) {

  const navigate = useNavigate();

  const goToExercise = () => {
    navigate('/main');
  };
  const [buttons, setButtons] = useState([{id,name:'m'}]);

  const addButton = () => {
  
    const newButton = { id: buttons.length, name: buttons.find(button => button.id === id).name }
    setButtons([...buttons, {  newButton }]);
  };

  return (
    <div className='father-div'>
      <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          <a href="#"> <button onClick={addButton}><p className='exerciseTitle'>Monday</p></button></a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
     
      {buttons.map((button) => (
          <button key={button.id} onClick={() => clone(button.id)}>
            {button}
          </button>
        ))}
    </div>

      ) 
}

export default Main;
