import React from 'react';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login'
import Home from './pages/Home';
import Profile from './pages/Profile'
import AdditionalInfo from './pages/AdditionalInfo';
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
          <Route path="/signupinfo" element={<AdditionalInfo />} />
        </Routes>
      </div>
      </Router>
  );
}

export default App;
