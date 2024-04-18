import React from "react";
import Dot from "./Dot";

export default function DetailedItinerary({ time, imageUrl, title, text }) {
  return (
    <>
      <div className="detailed-itinerary-body">
        <Dot />
        <div className="detailed-itinerary-container">
          <p className="time">{time}</p>
          <div className="detailed-itinerary">
            <figure className="detailed-img-container">
              <img src={imageUrl} alt="" className="detailed-img" />
            </figure>
            <div className="detailed-description">
              <div className="detailed-title">{title}</div>
              <p className="detailed-text">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
