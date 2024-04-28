import constants from '../constants/actionTypes'

let initialState = {
      user: null,
}

const userReducer = (state = initialState, action) => {
      let updated = Object.assign({}, state);

      switch(action.type) {
            case constants.FETCH_USER:
                  updated['user'] = action.user;
                  return updated;
            default:
                  return state;
      }
}

export default userReducer;