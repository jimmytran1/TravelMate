import React from "react";
import Nav from "../component/Nav";
import LocationDropDown from "../component/LocationDropDown";
import DestinationCard from "../component/DestinationCard";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="home-container">
        <div className="home-header">
          <LocationDropDown location="Japan" />
          <div className="btn-container">
            <button className="category">Swimming</button>
            <button className="category">Photography</button>
            <button className="category">Dance</button>
            <button className="category">Cooking</button>
            <button className="category">Music</button>
            <button className="category">Hiking</button>
          </div>
        </div>
        <div className="home-section">
          <h5 className="home-title">Recommended Itineraries</h5>

        </div>
      </div>
      Home
    </div>
  );
}
