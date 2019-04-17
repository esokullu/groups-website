import request from './request.js';
import login from './login.js';

export default function(groupsId, name, url, password, email, theme, color, verification, groups_description, callback) {
    request('POST', 'verify.php', {
        groups_name: groupsId,
        groups_title: name,
        groups_description: groups_description,
        site: url,
        theme: theme,
        color: color,
        mail: email,
        pass: password,
        verification: verification,
        groups_v2: 1
    }, function(response) {
        if(response.success) {
            login(email, password, function() {
                callback(false);
            });
        }
        else{
            callback(true, response);
        }
    });
}


