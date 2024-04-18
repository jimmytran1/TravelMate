import React from "react";
import Nav from "../component/Nav";
import DetailedItinerary from "../component/DetailedItinerary";

export default function itinerary() {
  return (
    <>
      <Nav />
      <div className="itinerary-container">
        <div className="img-container">
          <div className="gradient__overlay overlay-2"></div>
          <button type="submit" className="sign-in-button add-button">
            + Add
          </button>
          <div className="img-text">
            <h6 className="img-title">A Day in the Sky</h6>
            <p className="img-description">
              Enjoy a heart-filled day looking at the beautiful view of Mt. Fuji
            </p>
          </div>
        </div>
        <div className="itinerary-body-container">
          <div className="itinerary-body">
            <div className="vl"></div>
            <div className="detailed-itinerary-list">
              <DetailedItinerary
                time="06:00 - 07:00"
                imageUrl="https://media.istockphoto.com/id/1390815938/photo/tokyo-city-in-japan.webp?b=1&s=170667a&w=0&k=20&c=YVI8iGWf-w_cLyQNcWA57Ll9eXv_s_SHfoM0MufEMMQ="
                title="Departure"
                text="Depart from Tokyo towards Mount Fuji."
              />
              <DetailedItinerary
                time="07:00 - 08:30"
                imageUrl="https://media-cdn.tripadvisor.com/media/daodao/photo-s/0f/03/87/62/photo2jpg.jpg"
                title="Sunrise View"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ligula in turpis vestibulum, ornare rhoncus lorem fermentum. Sed molestie aliquet quam, a hendrerit turpis imperdiet sed. Maecenas justo felis, pharetra ac viverra eleifend, dapibus id urna. Integer tempus lectus dui, dapibus vehicula enim aliquam id. Duis ante orci, posuere."
              />
              <DetailedItinerary
                time="08:30 - 10:00"
                imageUrl="https://media-cdn.tripadvisor.com/media/daodao/photo-s/0f/03/87/62/photo2jpg.jpg"
                title="Travel to Fuji Five Lakes"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ligula in turpis vestibulum, ornare rhoncus lorem fermentum. Sed molestie aliquet quam, a hendrerit turpis imperdiet sed. Maecenas justo felis, pharetra ac viverra eleifend, dapibus id urna. Integer tempus lectus dui, dapibus vehicula enim aliquam id. Duis ante orci, posuere."
              />
              <DetailedItinerary
                time="10:00 - 12:00"
                imageUrl="https://media-cdn.tripadvisor.com/media/daodao/photo-s/0f/03/87/62/photo2jpg.jpg"
                title="Lake Kawaguchi and Oishi Park"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ligula in turpis vestibulum, ornare rhoncus lorem fermentum. Sed molestie aliquet quam, a hendrerit turpis imperdiet sed. Maecenas justo felis, pharetra ac viverra eleifend, dapibus id urna. Integer tempus lectus dui, dapibus vehicula enim aliquam id. Duis ante orci, posuere."
              />
              <DetailedItinerary
                time="12:00 - 13:00"
                imageUrl="https://media-cdn.tripadvisor.com/media/daodao/photo-s/0f/03/87/62/photo2jpg.jpg"
                title="Lunch"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ligula in turpis vestibulum, ornare rhoncus lorem fermentum. Sed molestie aliquet quam, a hendrerit turpis imperdiet sed. Maecenas justo felis, pharetra ac viverra eleifend, dapibus id urna. Integer tempus lectus dui, dapibus vehicula enim aliquam id. Duis ante orci, posuere."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
