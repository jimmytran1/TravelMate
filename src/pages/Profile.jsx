import React from 'react'
import Nav from '../component/Nav'
import DestinationCard from '../component/DestinationCard'
import UserProfile from '../component/UserProfile'
import Biography from '../component/Biography'

export default function Profile() {
  return (
    <div>
        <Nav />
        <div className="user-profile-background">
        </div>
        <UserProfile profilePicture="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg" name="Tyrone Reeves" friends="24" groups="3" />
        <div className="profile-placeholder"></div>
        <div className="user-container">
            <Biography text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"/>
            <h2 className="places-visited-title ">Places You Visited</h2>
            <div className="info-body">
                <DestinationCard imageUrl="https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg" title="New York" location="Manhattan" />
                <DestinationCard imageUrl="https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg" title="New York" location="Manhattan" />
                <DestinationCard imageUrl="https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg" title="New York" location="Manhattan" />
                <DestinationCard imageUrl="https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg" title="New York" location="Manhattan" />
                <DestinationCard imageUrl="https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg" title="New York" location="Manhattan" />
                <DestinationCard imageUrl="https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg" title="New York" location="Manhattan" />
            </div>
        </div>
    </div>
  )
}
