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
            <div className="info-body itinerary-list">
              <DestinationCard
                imageUrl="https://exploreshizuoka.jp/activities/wp-content/uploads/sites/2/2022/04/2.jpg"
                title="A Day in the Sky"
                location="Tokyo, Japan"
              ></DestinationCard>
              <DestinationCard
                imageUrl="https://res.klook.com/image/upload/c_fill,w_750,h_560/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/p1otb2ou44zhrbwzagkb.jpg"
                title="Feel the Ocean"
                location="Osaka, Japan"
              ></DestinationCard>
              <DestinationCard
                imageUrl="https://i.pinimg.com/originals/5b/8d/0f/5b8d0f8bb7bc5b8240c29bcbd08e9c3b.jpg"
                title="Breezy Day"
                location="Kyoto, Japan"
              ></DestinationCard>
              <DestinationCard
                imageUrl="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gray-solid-color-background-image_557027.jpg"
                title="Coming soon"
                location="TBA"
              ></DestinationCard>
              <DestinationCard
                imageUrl="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gray-solid-color-background-image_557027.jpg"
                title="Coming soon"
                location="TBA"
              ></DestinationCard>
              <DestinationCard
                imageUrl="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gray-solid-color-background-image_557027.jpg"
                title="Coming soon"
                location="TBA"
              ></DestinationCard>
          </div>
          <div className="home-section">
          <h5 className="home-title">All Activities</h5>
            <div className="info-body itinerary-list">
              <DestinationCard
                imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_OKmsAsiBbGxA8bqTEAK0iJ6I4d-0Moq_UEAoyVgc3w&s"
                title="Cherry Blossoms"
                location="Tokyo, Japan"
              ></DestinationCard>
              <DestinationCard
                imageUrl="https://gaijinpot.scdn3.secure.raxcdn.com/app/uploads/sites/6/2016/01/Miyajima-Floating-shrine.jpg"
                title="Itsukushima Shrine"
                location="Itsukushima, Japan"
              ></DestinationCard>
              <DestinationCard
                imageUrl="https://media-cdn.tripadvisor.com/media/photo-s/11/98/aa/c0/makishi-public-market.jpg"
                title="Makishi Public Market"
                location="Naha, Japan"
              ></DestinationCard>
              <DestinationCard
                imageUrl="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gray-solid-color-background-image_557027.jpg"
                title="Coming soon"
                location="TBA"
              ></DestinationCard>
              <DestinationCard
                imageUrl="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gray-solid-color-background-image_557027.jpg"
                title="Coming soon"
                location="TBA"
              ></DestinationCard>
              <DestinationCard
                imageUrl="https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gray-solid-color-background-image_557027.jpg"
                title="Coming soon"
                location="TBA"
              ></DestinationCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
