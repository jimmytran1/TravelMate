import React, { Component } from "react";
import Nav from "../component/Nav";
import LocationDropDown from "../component/LocationDropDown";
import DestinationCard from "../component/DestinationCard";
import ButtonGroup from "../component/ButtonGroup";
import { fetchItineraries } from "../actions/ItineraryActions";
import { setItinerary } from "../actions/ItineraryActions";
import { connect } from 'react-redux';

class Home extends Component {
  constructor(props) {
      super(props);
      this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
      const {dispatch} = this.props;
      dispatch(fetchItineraries());
  }

  handleSelect(selectedIndex, e) {
      const {dispatch} = this.props;
      dispatch(setItinerary(this.props.itineraries[selectedIndex]));
  }

  handleClick = (itinerary) => {
      const {dispatch} = this.props;
      dispatch(setItinerary(itinerary));
  }

  render() {
    const { itineraries } = this.props;

    if (!itineraries) {
      return <div>Loading....</div>;
    }
  
    return (
            <div>
              <Nav btn="Home"/>
              <div className="home-container">
                <div className="home-header">
                  <LocationDropDown location="Japan" />
                  <div className="btn-container">
                    <ButtonGroup text={["Swimming", "Photography", "Dance", "Cooking", "Music", "Hiking"]} />
                  </div>
                </div>
                <div className="home-section">
                    <h5 className="home-title">Recommended Itineraries</h5>
                    <div className="info-body itinerary-list">
                    {itineraries.map((itinerary) => (
                    <DestinationCard
                    key={itinerary.id}
                    imageUrl={itinerary.imageUrl}
                    title={itinerary.title}
                    location={itinerary.location}
                    />
                  ))}
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
          )
      }
  }

const mapStateToProps = state => {
  return {
      itineraries: state.itinerary.itineraries
  }
}

export default connect(mapStateToProps)(Home);