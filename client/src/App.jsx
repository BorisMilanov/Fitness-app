import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
import "./App.css"

// import Program from './Pages/Programs';
import Exercise from './Pages/Exercise';
const App = () => {
  return (<>   <li className='fatherDiv'><Link className='cat' to='/a'>A</Link></li>

    <Routes>
     
      <Route path="/a" element={<Exercise />} />
  
    </Routes>
  </>
 
  );
};

export default App;
