import React from 'react'

export default function UserProfile({ profilePicture, name, hobbies}) {
  return (
    <div className="user-profile">
      <img src={profilePicture} alt="Profile" />
      <h1>{name}</h1>
      <ul>
        <li>Hobbies: <span className='orange'>{hobbies}</span></li>
      </ul>
    </div>
  );
}
