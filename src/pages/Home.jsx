import React, { Component } from "react";
import Nav from "../component/Nav";
import LocationDropDown from "../component/LocationDropDown";
import DestinationCard from "../component/DestinationCard";
import ButtonGroup from "../component/ButtonGroup";
import { fetchItineraries } from "../actions/ItineraryActions";
import { setItinerary } from "../actions/ItineraryActions";
import { connect } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
import { fetchPlaces } from "../actions/PlacesActions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      selectedCountry: "Japan" // Initially no continent selected
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchItineraries());
    dispatch(fetchPlaces());
  }


  handleSelect(selectedIndex, e) {
    const { dispatch } = this.props;
    dispatch(setItinerary(this.props.itineraries[selectedIndex]));
  }

  handleClick = (itinerary) => {
    const { dispatch } = this.props;
    dispatch(setItinerary(itinerary));
  };

  render() {
    const { itineraries, places } = this.props;
    const { selectedCountry, selectedCategory } = this.state;

    const filteredPlaces = places.filter(place => place.country === selectedCountry);
    let filteredItineraries = itineraries;

    if (selectedCategory) {
        filteredItineraries = itineraries.filter(itinerary => itinerary.category === selectedCategory);
        console.log(selectedCategory)
        }

    if (!itineraries) {
        return <div>Loading....</div>;
    }

    return (
        <div>
            <Nav btn="Home" />
            <div className="home-container">
                <div className="home-header">
                    <LocationDropDown 
                    location={selectedCountry} />
                    <div className="btn-container">
                        <ButtonGroup
                            text={[
                                "Swimming",
                                "Photography",
                                "Dance",
                                "Cooking",
                                "Music",
                                "Hiking",
                            ]}
                            filterItineraries={(category) => {
                                this.setState({ selectedCategory: category });
                            }}
                        />
                    </div>
                </div>
                <div className="home-section">
                    <h5 className="home-title">All Itineraries</h5>
                    <div className="info-body itinerary-list">
                        <div className="info-body itinerary-list">
                            {Array.from({ length: Math.max(6, filteredItineraries.length) }).map(
                                (_, index) => {
                                    const itinerary = filteredItineraries[index];
                                    return (
                                        <LinkContainer
                                            key={itinerary ? itinerary.id : index}
                                            to={itinerary ? `/itinerary/${itinerary._id}` : "/home"}
                                        >
                                            <div
                                                onClick={() =>
                                                    itinerary && this.handleClick(itinerary)
                                                }
                                            >
                                                <DestinationCard
                                                    imageUrl={
                                                        itinerary
                                                            ? itinerary.imageUrl
                                                            : "https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gray-solid-color-background-image_557027.jpg"
                                                    }
                                                    title={itinerary ? itinerary.title : "Coming Soon"}
                                                    location={itinerary ? itinerary.location : "TBA"}
                                                    onSelect={this.handleSelect}
                                                />
                                            </div>
                                        </LinkContainer>
                                    );
                                }
                            )}
                        </div>
                    </div>

                    <div className="home-section">
                        <h5 className="home-title">All Activities</h5>
                        <div className="info-body itinerary-list">
                            {Array.from({ length: 6 }).map((_, index) => {
                                const place = filteredPlaces[index];
                                return (
                                    <DestinationCard
                                        key={place ? place._id : `default-${index}`}
                                        imageUrl={
                                            place
                                                ? place.activities.map((activity) => activity.imageUrl).join(", ")
                                                : "https://garden.spoonflower.com/c/2808368/p/f/m/wz4MJ0j3cdHpOHkTN5qdj7tovQRD_FFQl_DuHWO3th-bkCbrFGzA704q/Solid%20Mid%20Grey.jpg"
                                        }
                                        title={
                                            place
                                                ? place.activities.map((activity) => activity.activityName).join(", ")
                                                : "Coming Soon"
                                        }
                                        location={place ? `${place.city}, ${place.country}` : "TBA"}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

const mapStateToProps = (state) => {
  return {
    itineraries: state.itinerary.itineraries,
    places: state.place.places
  };
};

export default connect(mapStateToProps)(Home);
