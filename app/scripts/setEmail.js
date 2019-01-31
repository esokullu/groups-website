import request from './request.js';
import getToken from './getToken.js';

export default function(email, callback) {
	let token = getToken();
	request('PUT', 'me.php', {
		token: token,
		email: email
	}, function(response) {
		callback(response);
	});
}