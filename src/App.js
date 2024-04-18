import React from 'react';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login'
import Home from './pages/Home';
import Profile from './pages/Profile'
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
          path="/signup" element={<Signup />} />
          <Route 
          path="/home" element={<Home />} />
          <Route 
          path="/profile" element={<Profile />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;
