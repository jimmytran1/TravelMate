import actionTypes from '../constants/actionTypes';
const env = process.env;

function postsFetched(posts) {
    return {
        type: actionTypes.FETCH_POSTS,
        posts: posts
    }
}

function postSet(itinerary) {
    return {
        type: actionTypes.SET_POSTS,
        selectedPost: itinerary
    }
}

export function setPost(post) {
    return dispatch => {
        dispatch(postSet(post));
    }
}

export function fetchPosts() {
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/posts`, {
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
            dispatch(postsFetched(res));
        }).catch((e) => console.log(e));
    }
}

export function savePost(postData) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return dispatch => {
        return fetch(`${env.REACT_APP_API_URL}/posts`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('token')
            },
            body: JSON.stringify({
                name: postData.name,
                location: postData.location,
                content: postData.content,
                image: postData.image
            }),
            mode: 'cors'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        }).then(() => {
            dispatch(fetchPosts());
        }).catch((e) => console.log(e));
    };
}
