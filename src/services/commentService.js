import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const comment = (userId, writer, reviewId, content,date) => 
    request.post(`${baseUrl}/comments`, { userId, writer, reviewId, content, date });
    
export const getReviewComments = (reviewId) => {
    const query = encodeURIComponent(`reviewId="${reviewId}"`);

    return request.get(`${baseUrl}/comments?where=${query}`);

};

export const deleteComment = (commentId, token) => {
    return fetch(`${baseUrl}/comments/${commentId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};
// export const removeComments= (reviewId,token)=>{

//     let query = encodeURIComponent(`reviewId="${reviewId}`);

//     return fetch(`${baseUrl}/likes?where=${query}`, {
//         method: 'DELETE',
//         headers: {
//             'X-Authorization': token
//         }
//     }).then(res => res.json());
// };
