import React from 'react';
import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';


// import Program from './Pages/Programs';
import Exercise from './Pages/Exercise';
const App = () => {
  return (<>   <li><Link to='/a'>A</Link></li>

    <Routes>
     
      <Route path="/a" element={<Exercise />} />
  
    </Routes>
  </>
 
  );
};

export default App;
