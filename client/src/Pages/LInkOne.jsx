import { Input } from '../assets/components/Input/Input';
import React , {useState}from 'react';
import { useNavigate } from 'react-router-dom';
import "./Exercise.css"
function LinkOne() {
  const navigate = useNavigate();

  const goToExercise = () => {
    navigate('/exercise');
  };
  const [exercise, setExercise] = useState([
    { id: 1, title: "Squat" },
    { id: 2, title: "Sumo squat" },
  
  ]);
  const addEx = (title) => {
    setExercise((exercise) => [...exercise, { id: exercise.length + 1, title }]);
  };
  return (
    <div className='father-div'>
     <p className='inputs'> <Input onSubmit={addEx} /></p> 
    
      <button onClick={goToExercise} className='ball'><p className='exerciseTitle'>Bench press</p></button>
      
    </div>
  );
}

export default LinkOne;
