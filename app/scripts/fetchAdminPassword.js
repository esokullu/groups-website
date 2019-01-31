import request from './request.js';
import getToken from './getToken.js';

export default function(callback) {
	let token = getToken();
	request('GET', 'admin-password.php', {
		token: token
	}, function(response) {
		callback(response);
	});
}