import * as request from './requester';

const baseUrl = 'http://localhost:3030/data';

export const mail = (name, sender, subject, message,date) => 
    request.post(`${baseUrl}/messages`, { name, sender, subject, message,date });


export const deleteMail = (mailId, token) => {
    return fetch(`${baseUrl}/messages/${mailId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
};

