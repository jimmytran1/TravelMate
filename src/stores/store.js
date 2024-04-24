import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger'; // Import logger directly
import authReducer from "../reducers/authReducer";
import itineraryReducer from "../reducers/itineraryReducer";
import postReducer from "../reducers/postReducer"

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(
    combineReducers({
        auth: authReducer,
        itinerary: itineraryReducer,
        post: postReducer
    }),
    applyMiddleware(thunk)

);

export default store;
