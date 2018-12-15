import request from './request.js';
import getToken from './getToken.js';

export default function(uuid, callback) {
	let token = getToken();
	request('POST', 'unsubscribe.php?uuid=' + uuid, {
		token: token
	}, function(response) {
		callback(response);
	});
}