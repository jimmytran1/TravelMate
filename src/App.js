import React from 'react';
import Landing from './pages/Landing';
import Signup from './pages/Signup';
import Login from './pages/Login'
import Home from './pages/Home';
import Discover from './pages/Discover';
import Profile from './pages/Profile'
import AdditionalInfo from './pages/AdditionalInfo';
import Itinerary from './pages/Itinerary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';

function App() {
     return  (
    <Router>
      <div className="App">
      <Provider store={store}>
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
          <Route path="/itinerary/:itineraryId" element={<Itinerary />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
        </Provider>
      </div>
      </Router>
  );
}

export default App;
