import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const like = (userId, reviewId) => request.post(`${baseUrl}/likes`, {userId, reviewId});

export const getReviewLikes = (reviewId) => {
    const query = encodeURIComponent(`reviewId="${reviewId}"`);

    return request.get(`${baseUrl}/likes?select=userId&where=${query}`)
        .then(res => res.map(x => x.userId));
};

export const getReviewLikesIds = (reviewId) => {
    const query = encodeURIComponent(`reviewId="${reviewId}"`);

    return request.get(`${baseUrl}/likes?where=${query}`)
        .then(res => res.map(x => x._id));
};

export const deleteLike = (likeId, token) => {
    return fetch(`${baseUrl}/likes/${likeId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};
