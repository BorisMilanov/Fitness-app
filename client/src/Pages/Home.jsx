// Home.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Exercise"
function Home() {
  const navigate = useNavigate();

  const goToExercise = () => {
    navigate('/exercise');
  };

  return (
    <div className='father-div'>
      <h1>Home Page</h1>
      <button onClick={goToExercise} className='cat'>Go to About</button>
    </div>
  );
}

export default Home;
