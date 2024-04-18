import React from 'react';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
     return  (
    <Router>
      <div className="App">
        <Routes>
          <Route 
          path="/" element={<Landing />} />
          <Route 
          path="/login" element={<Login />} />
          <Route 
          path="/signup" element={<Login />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;
