import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import logger from 'redux-logger'; // Import logger directly
import authReducer from "../reducers/authReducer";
import itineraryReducer from "../reducers/itineraryReducer";
import postReducer from "../reducers/postReducer"
import placeReducer from '../reducers/placeReducer';
import userReducer from '../reducers/userReducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(
    combineReducers({
        auth: authReducer,
        itinerary: itineraryReducer,
        post: postReducer,
        place: placeReducer,
        user: userReducer
    }),
    applyMiddleware(thunk)

);

export default store;
