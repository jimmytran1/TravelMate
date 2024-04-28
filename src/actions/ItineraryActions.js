import actionTypes from '../constants/actionTypes';
const env = process.env;

function itinerariesFetched(itineraries) {
    return {
        type: actionTypes.FETCH_ITINERARIES,
        itineraries: itineraries
    }
}

function itineraryFetched(itinerary) {
    return {
        type: actionTypes.FETCH_ITINERARY,
        selectedItinerary: itinerary
    }
}

function itinerarySet(itinerary) {
    return {
        type: actionTypes.SET_ITINERARY,
        selectedItinerary: itinerary
    }
}

export function setItinerary(itinerary) {
    return dispatch => {
        dispatch(itinerarySet(itinerary));
    }
}

export function fetchItinerary(itineraryId) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/itinerary/${itineraryId}`,{
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(itineraryFetched(res));
        }).catch((e) => console.log(e));
    }
} 

export function fetchItineraries() {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/itinerary`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(itinerariesFetched(res));
        }).catch((e) => console.log(e));
    }
}