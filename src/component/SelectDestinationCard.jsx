import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SelectDestinationCard({ imageUrl, title, location, placeId, onVisitChange }) {
  const [currentImageUrl, setCurrentImageUrl] = useState(imageUrl);


  const handleClick = () => {
    // Toggle between original and new image URL
    setCurrentImageUrl((prevImageUrl) =>
      prevImageUrl === imageUrl ? 'https://www.colorhexa.com/f49f0a.png' : imageUrl
    );
  };

  return (
    <div>
        <div className="destination-card" onClick={() => { handleClick(); onVisitChange({ placeId }); }}>
        <div className="destination-image" style={{ backgroundImage: `url(${currentImageUrl})` }}>
          {/* Image is set via CSS background */}
        </div>
        <div className="destination-info">
          <h2 className="destination-title">{title}</h2>
          <p className="destination-location"><FontAwesomeIcon icon="fa-location-dot" /> {location}</p>
        </div>
      </div>
    </div>
  );
}
