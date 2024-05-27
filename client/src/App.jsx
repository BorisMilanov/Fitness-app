// import React from 'react';
// import { BrowserRouter as Router, Routes, Route,Link } from 'react-router-dom';
// import "./App.css"

// // import Program from './Pages/Programs';
// import Exercise from './Pages/Exercise';
// const App = () => {
//   return (<>   <li className='fatherDiv'><Link className='cat' to='/a'>A</Link></li>

//     <Routes>
     
//       <Route path="/a" element={<Exercise />} />
  
//     </Routes>
//   </>
 
//   );
// };

// export default App;
// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/LInkOne';
import Exersice from './Pages/Exercise'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise" element={<Exersice />} />
      </Routes>
    </Router>
  );
}

export default App;
