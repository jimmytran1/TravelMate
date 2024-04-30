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
      console.log(this.props.selectedItinerary.imageUrl)

      return (
        <>
          <Nav />
          <div className="img-container"
      style={{
        backgroundImage: `url(${this.props.selectedItinerary.imageUrl})`
      }}>
            <div className="img-container">
              <div className="gradient__overlay overlay-2"></div>
              <button type="submit" className="sign-in-button add-button">
                + Add
              </button>
              <div className="img-text">
                <h6 className="img-title">{this.props.selectedItinerary.title}</h6>
                <p className="img-description">
                  {this.props.selectedItinerary.description}
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
