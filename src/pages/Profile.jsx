import React from 'react'
import Nav from '../component/Nav'
import DestinationCard from '../component/DestinationCard'

export default function Profile() {
  return (
    <div>
        <Nav />
        <DestinationCard imageUrl="https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-city_header-141511.jpeg" title="New York" location="Manhattan" />
    </div>
  )
}
