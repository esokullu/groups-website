import request from './request.js';
import createSession from './createSession.js';

export default function(email, callback) {
	request('POST', 'password-reset.php', {
		"email": email
	}, function(response) {
		callback(response);
	});
}