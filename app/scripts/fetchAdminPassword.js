import request from './request.js';
import getToken from './getToken.js';

export default function(uuid, callback) {
	let token = getToken();
	request('GET', 'admin-password.php', {
		token: token
	}, function(response) {
		callback(response);
	});
}