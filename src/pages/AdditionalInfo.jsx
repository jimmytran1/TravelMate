import React, { Component } from "react";
import SelectDestinationCard from "../component/SelectDestinationCard";
import MultiButtonGroup from "../component/MultiButtonGroup";
import { fetchPlaces } from "../actions/PlacesActions";
import { updateUser } from "../actions/authActions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

// Functional component to use useNavigate hook
const NavigateHandler = ({ children }) => {
  const navigate = useNavigate();
  return children(navigate);
};

class AdditionalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        biography: "",
        imageUrl: "",
        hobby: "",
        placesToVisit: [],
        placesVisited: [],
      },
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchPlaces()).then(() => {});
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      formData: {
        ...this.state.formData,
        [name]: value,
      },
    });
  };

  handleHobbyChange = (hobby) => {
    this.setState({
      formData: {
        ...this.state.formData,
        hobby: [hobby],
      },
    });
  };

  handleVisitChange = (place) => {
    const { placesToVisit } = this.state.formData;
    const index = placesToVisit.indexOf(place);
    let updatedPlacesToVisit;

    if (index === -1) {
      // If not already selected, add to the array
      updatedPlacesToVisit = [...placesToVisit, place];
    } else {
      // If already selected, remove from the array
      updatedPlacesToVisit = [
        ...placesToVisit.slice(0, index),
        ...placesToVisit.slice(index + 1),
      ];
    }

    this.setState({
      formData: {
        ...this.state.formData,
        placesToVisit: updatedPlacesToVisit,
      },
    });
  };

  handleVisitedChange = (place) => {
    const { placesVisited } = this.state.formData;
    const index = placesVisited.indexOf(place);
    let updatedPlacesVisited;

    if (index === -1) {
      // If not already selected, add to the array
      updatedPlacesVisited = [...placesVisited, place];
    } else {
      // If already selected, remove from the array
      updatedPlacesVisited = [
        ...placesVisited.slice(0, index),
        ...placesVisited.slice(index + 1),
      ];
    }
    this.setState({
      formData: {
        ...this.state.formData,
        placesVisited: updatedPlacesVisited,
      },
    });
  };

  handleSubmit = (e, navigate) => {
    e.preventDefault();
    const username = localStorage.getItem("username");
    const { biography, imageUrl, hobby, placesToVisit, placesVisited } =
      this.state.formData;

    // Validate and format hobby, placesToVisit, and placesVisited
    const validateArray = (array) =>
      Array.isArray(array)
        ? array.filter((item) => typeof item === "string")
        : [];

    const userData = {
      biography,
      imageUrl,
      hobby: validateArray(hobby[0]),
      placesToVisit: placesToVisit,
      placesVisited: placesVisited,
    };

    this.props.dispatch(updateUser(username, userData)).then(() => {
      navigate("/home"); // Redirect to /home after form is submitted
    });
  };

  render() {
    const { places } = this.props;
    const { biography, imageUrl } = this.state.formData;

    if (!places) {
      return <div>Loading....</div>;
    }
    return (
      <div className="info-container">
        <div className="info-header">
          <h1 className="info-header-title">Let's get to know you!</h1>
        </div>
        <div className="info-body-container">
          <div className="info-bio">
            <div className="info-body-header info-visit">
              <h3 className="info-title">Biography</h3>
            </div>
            <form className="new-post-form">
              <input
                type="text"
                name="biography"
                placeholder="Enter a small biography about yourself"
                value={biography}
                onChange={this.handleInputChange}
                required
              />
            </form>
          </div>
          <div className="info-bio">
            <div className="info-body-header info-visit">
              <h3 className="info-title">Profile Picture</h3>
            </div>
            <form className="new-post-form">
              <input
                type="text"
                name="imageUrl"
                placeholder="Enter link to image"
                value={imageUrl}
                onChange={this.handleInputChange}
                required
              />
            </form>
          </div>
          <div className="info-hobby">
            <div className="info-body-header info-visit">
              <h3 className="info-title">What are your hobbies?</h3>
              <h4 className="info-description">Choose one or more</h4>
            </div>
            <div className="info-hobby-body">
              <MultiButtonGroup
                text={[
                  "Swimming",
                  "Photography",
                  "Dance",
                  "Cooking",
                  "Music",
                  "Hiking",
                ]}
                onSelect={this.handleHobbyChange}
              />
            </div>
          </div>
          <div className="info-visited info-visit">
            <div className="info-body-header">
              <h3 className="info-title">
                What places have you visited already?
              </h3>
            </div>
            <div className="info-body">
              {places.map((place) => (
                <SelectDestinationCard
                  placeId={place._id}
                  imageUrl={place.imageUrl}
                  title={place.country}
                  location={place.city}
                  onVisitChange={this.handleVisitedChange}
                />
              ))}
            </div>
          </div>
          <div className="info-visit">
            <div className="info-body-header">
              <h3 className="info-title">
                What places would you like to visit?
              </h3>
            </div>
            <div className="info-body">
              {places.map((place) => (
                <SelectDestinationCard
                  placeId={place._id}
                  imageUrl={place.imageUrl}
                  title={place.country}
                  location={place.city}
                  onVisitChange={this.handleVisitChange}
                />
              ))}
            </div>
            <NavigateHandler>
              {(navigate) => (
                <button
                  type="submit"
                  className="sign-in-button next-button"
                  onClick={(e) => this.handleSubmit(e, navigate)}
                >
                  Next
                </button>
              )}
            </NavigateHandler>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  places: state.place.places, // Assuming places is your reducer key
});

export default connect(mapStateToProps)(AdditionalInfo);
