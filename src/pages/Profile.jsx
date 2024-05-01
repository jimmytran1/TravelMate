import React, { Component } from "react";
import Nav from "../component/Nav";
import DestinationCard from "../component/DestinationCard";
import UserProfile from "../component/UserProfile";
import Biography from "../component/Biography";
import { fetchUser } from "../actions/userActions";
import { connect } from "react-redux";

class Profile extends Component {
  componentDidMount() {
    const username = localStorage.getItem("username");
    const { dispatch } = this.props;
    dispatch(fetchUser(username));
  }

  render() {
    const { user } = this.props;
    if (!user) {
      return <div>Loading...</div>; // or any other loading indicator
    }
    const placesVisited = user.placesVisited;
    console.log("User", placesVisited);
    return (
      <div>
        <Nav btn="Profile" />
        <div className="user-profile-background"></div>
        <UserProfile
          profilePicture={user.imageUrl ? user.imageUrl : "https://i.pinimg.com/474x/25/1c/e1/251ce139d8c07cbcc9daeca832851719.jpg"}
          name={user.name}
          hobbies={user.hobby.join(", ")}
        />
        <div className="user-container">
          <Biography text={user.biography} />
          <h2 className="places-visited-title ">Places You Visited</h2>
          <div className="info-body">
            {Array.from({ length: 6 }).map((_, index) => {
              const place = placesVisited[index];
              return (
                <DestinationCard
                  key={place ? place.placeId._id : `default-${index}`}
                  imageUrl={
                    place
                      ? place.placeId.imageUrl
                      : "https://garden.spoonflower.com/c/2808368/p/f/m/wz4MJ0j3cdHpOHkTN5qdj7tovQRD_FFQl_DuHWO3th-bkCbrFGzA704q/Solid%20Mid%20Grey.jpg"
                  }
                  title={place ? place.placeId.country : "N/A"}
                  location={place ? place.placeId.city : "N/A"}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Profile);
