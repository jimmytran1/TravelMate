import constants from '../constants/actionTypes'

let initialState = {
      places: [],
}

const placeReducer = (state = initialState, action) => {
      let updated = Object.assign({}, state);

      switch(action.type) {
            case constants.FETCH_PLACES:
                  updated['places'] = action.places;
                  return updated;
            default:
                  return state;
      }
}

export default placeReducer;