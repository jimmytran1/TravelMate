import React, { Component } from "react";
import Nav from "../component/Nav";
import DetailedItinerary from "../component/DetailedItinerary";
import { connect } from "react-redux";
import { fetchItinerary } from "../actions/ItineraryActions";

class Itinerary extends Component {
  componentDidMount() {
    const { dispatch, itineraryId } = this.props;
    console.log(this.props)
    if (!this.props.selectedItinerary) {
      dispatch(fetchItinerary(itineraryId));
    }
  }

  render() {
    const DetailInfo = () => {
      if (!this.props.selectedItinerary) {
        return <div>Loading....</div>;
      }
      const itineraryList = this.props.selectedItinerary.itinerary;

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
                  Enjoy a heart-filled day looking at the beautiful view of Mt.
                  Fuji
                </p>
              </div>
            </div>
            <div className="itinerary-body-container">
              <div className="itinerary-body">
                <div className="vl"></div>
                <div className="detailed-itinerary-list">
                  {itineraryList.map((itinerary) => (
                    <DetailedItinerary
                      key={itinerary.id}
                      time={itinerary.time}
                      imageUrl={itinerary.subImageUrl}
                      title={itinerary.header}
                      text={itinerary.description}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    };
    return <DetailInfo />;
  }
}

const mapStateToProps = (state) => {
    return {
      selectedItinerary: state.itinerary.selectedItinerary 
    };
  };  

export default connect(mapStateToProps)(Itinerary);
