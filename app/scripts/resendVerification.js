import request from './request.js';

export default function( mail, callback) {
    request('POST', 'resend-verification.php', {
        "mail": mail
    }, function(response) {
        if(response.success) {
            callback(false);
        }
        else{
            callback(true, response);
        }
    });
}


