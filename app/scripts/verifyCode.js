import request from './request.js';
import login from './login.js';

export default function(groupsId, name, url, password, email, theme, color, verification, callback) {
    request('POST', 'verify.php', {
        groups_name: groups_name,
        groups_title: groups_title,
        site: site,
        theme: theme,
        color: color,
        mail: mail,
        pass: pass,
        verification: verification,
        groups_v2: 1
    }, function(response) {
        if(response.success) {
            login(mail, pass, function() {
                callback(false);
            });
        }
        else{
            callback(true, response);
        }
    });
}


