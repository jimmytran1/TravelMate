import actionTypes from '../constants/actionTypes';
//import runtimeEnv from '@mars/heroku-js-runtime-env'
const env = process.env;

function userLoggedIn(username) {
    console.log('Dispatching USER_LOGGEDIN action with username:', username);
    return {
        type: actionTypes.USER_LOGGEDIN,
        username: username
    }
}

function logout() {
    return {
        type: actionTypes.USER_LOGOUT
    }
}

export function submitLogin(data) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            console.log('Response:',response.statusText);
            return response.json()
        }).then((res) => {
            localStorage.setItem('username', data.username);
            localStorage.setItem('token', res.token);
            dispatch(userLoggedIn(data.username));
        }).catch((error) => {
            console.log('Error:', error);
        });
        
    }
}

export function submitRegister(data) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            dispatch(submitLogin(data));
        }).catch((e) => console.log(e));
    }
}

export function updateUser(username, data) {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/signup/${username}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        }).then((res) => {
            // Handle the response if needed
        }).catch((e) => console.log(e));
    }
}

export function logoutUser() {
    return dispatch => {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        dispatch(logout())
    }
}