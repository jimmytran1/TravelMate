import constants from '../constants/actionTypes'

let initialState = {
      posts: [],
      selectedPost: null
}

const postReducer = (state = initialState, action) => {
      let updated = Object.assign({}, state);

      switch(action.type) {
            case constants.FETCH_POSTS:
                  updated['posts'] = action.posts;
                  updated['selectedPost'] = action.posts[0];
                  return updated;
            case constants.SET_ITINERARY:
                  updated['selectedPost'] = action.selectedPost;
                  return updated;
            case constants.FETCH_ITINERARY:
                  updated['selectedPost'] = action.selectedPost;
                  return updated;
            default:
                  return state;
      }
}

export default postReducer;