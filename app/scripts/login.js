import request from './request.js';
import createSession from './createSession.js';

export default function(email, password, callback) {
	request('POST', 'login.php', {
		"email": email,
		"password": password
	}, function(response) {
		if(response.success) {
			createSession(response.body.user.id, response.body.access_token);
		}
		callback(response);
	});
}