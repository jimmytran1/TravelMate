import actionTypes from '../constants/actionTypes';
const env = process.env;

function userFetched(user) {
    return {
        type: actionTypes.FETCH_USER,
        user: user
    };
}

export function fetchUser(username) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/profile/${username}`, {
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
            console.log(dispatch(userFetched(res)));
        }).catch((e) => console.log(e));
    }
}