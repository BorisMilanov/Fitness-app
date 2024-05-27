// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Exercise.css"
function LinkOne() {
  const navigate = useNavigate();

  const goToExercise = () => {
    navigate('/exercise');
  };

  return (
    <div className='father-div'>
 
      <button onClick={goToExercise} className='ball'><p className='exerciseTitle'>Bench press</p></button>
    </div>
  );
}

export default LinkOne;
