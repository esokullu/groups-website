import request from './request.js';
import getToken from './getToken.js';

export default function(uuid, reason, explanation, callback) {
	let token = getToken();
	request('POST', 'unsubscribe.php?uuid=' + uuid, {
		reason: reason,
		explanation: explanation,
		token: token
	}, function(response) {
		callback(response);
	});
}