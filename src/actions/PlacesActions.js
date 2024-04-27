import actionTypes from '../constants/actionTypes';
const env = process.env;

function placesFetched(places) {
    return {
        type: actionTypes.FETCH_PLACES,
        places: places
    };
}

export function fetchPlaces() {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/places`, {
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
            dispatch(placesFetched(res));
        }).catch((e) => console.log(e));
    }
}