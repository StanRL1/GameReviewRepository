import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const getAll = () => request.get(`${baseUrl}/games2`);

export const getMyReviews = (ownerId) => {
    let query = encodeURIComponent(`_ownerId="${ownerId}"`);

    return request.get(`${baseUrl}/games2?where=${query}`);
};

export const create = async (gameData, token) => {
    console.log(JSON.stringify(gameData))

    let response = await fetch(`${baseUrl}/games2`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify({...gameData})
    });

    let result = await response.json();

    return result;
};