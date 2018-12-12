import request from './request.js';

export default function(url, pass, mail, theme, color, callback) {
    request('POST', 'signup.php', {
        "mail": mail,
        "pass": pass,
        "theme": theme,
        "color": color,
        "site": url
    }, function(response) {
        if(response.success) {
            callback(false);
        }
        else{
            callback(true, response);
        }
    });
}


