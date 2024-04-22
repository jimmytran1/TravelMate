import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Post({ name, location, content, image, likes, date }) {
  return (
    <div className="post-card">
      <div className="header">
        <div className="user-info">
          <div className="profile-placeholder"></div>
          <div className="user-details">
            <p className="name">{name}</p>
            <p className="location">{location}</p>
          </div>
        </div>
        <div className="date">{date}</div>
      </div>
      <img src={image} alt="Post" className="post-image" />
      <div className="post-content">
        <p>{content}</p>
      </div>
      <div className="footer">
        <div className="likes">
          <FontAwesomeIcon icon="fa-heart" />
          <span className="likes-count">{likes}</span>
        </div>
      </div>
    </div>
  )
}
