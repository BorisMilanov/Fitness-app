
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Exersice from './Pages/Exercise'
import Time from './Pages/Time'
function App() {
  return (
    <Router>
      <Routes>
      
        <Route path="/exercise" element={<Exersice />} />
        <Route path="/Fitness-app" element={<Time />} />
      </Routes>
    </Router>
  );
}

export default App;
