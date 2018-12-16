import request from './request.js';

//groups_name, groups_title, site, pass, mail, theme, color, verification, callback
export default function(groups_name, groups_title, site, pass, mail, theme, color, callback) {
    request('POST', 'signup.php', {
        groups_name: groups_name,
        groups_title: groups_title,
        site: site,
        theme: theme,
        color: color,
        mail: mail,
        pass: pass,
        groups_v2: 1
    }, function(response) {
        if(response.success) {
            callback(false);
        }
        else{
            callback(true, response);
        }
    });
}