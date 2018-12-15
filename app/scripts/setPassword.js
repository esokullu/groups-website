import request from './request.js';
import getToken from './getToken.js';

export default function(password, callback) {
	let token = getToken();
	request('PUT', 'me.php', {
		token: token,
		password: password
	}, function(response) {
		callback(response);
	});
}