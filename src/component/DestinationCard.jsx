import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function DestinationCard({ imageUrl, title, location }) {
  return (
    <div>
      <div className="destination-card">
      <div className="destination-image" style={{ backgroundImage: `url(${imageUrl})` }}>
        {/* Image is set via CSS background */}
      </div>
      <div className="destination-info">
        <h2 className="destination-title">{title}</h2>
        <p className="destination-location"><FontAwesomeIcon icon="fa-location-dot" /> {location}</p>
      </div>
    </div>
    </div>
  )
}
