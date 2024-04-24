import constants from '../constants/actionTypes'

let initialState = {
      itineraries: [],
      selectedItinerary: null
}

const itineraryReducer = (state = initialState, action) => {
      let updated = Object.assign({}, state);

      switch(action.type) {
            case constants.FETCH_ITINERARIES:
                  updated['itineraries'] = action.itineraries;
                  updated['selectedItinerary'] = action.itineraries[0];
                  return updated;
            case constants.SET_ITINERARY:
                  updated['selectedItinerary'] = action.selectedItinerary;
                  return updated;
            case constants.FETCH_ITINERARY:
                  updated['selectedItinerary'] = action.selectedItinerary;
                  return updated;
            default:
                  return state;
      }
}

export default itineraryReducer;