import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const getAll = () => request.get(`${baseUrl}/reviews`);

export const getMyReviews = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/reviews?where=${query}`);
};

export const create = async (reviewData, token) => {
    console.log(JSON.stringify(reviewData))

    let response = await fetch(`${baseUrl}/reviews`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...reviewData, likes: []})
    });

    let result = await response.json();

    return result;
};

export const update = (reviewId, reviewData) => request.put(`${baseUrl}/reviews/${reviewId}`, reviewData);

export const getOne = (reviewId, signal) => {
    return fetch(`${baseUrl}/reviews/${reviewId}`, { signal })
        .then(res => res.json())
};

export const destroy = (reviewId, token) => {
    return fetch(`${baseUrl}/reviews/${reviewId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};

export const like = (reviewId, review, userId) => {
    return fetch(`${baseUrl}/reviews/${reviewId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': userId
        },
        body: JSON.stringify(review)
    }).then(res => res.json());
};