import React from 'react'

export default function UserProfile({ profilePicture, name, friends, groups}) {
  return (
    <div className="user-profile">
      <img src={profilePicture} alt="Profile" />
      <h1>{name}</h1>
      <ul>
        <li><span className='orange'>{groups}</span> Groups</li>
        <li><span className='orange'>{friends}</span> Friends</li>
      </ul>
    </div>
  );
}
