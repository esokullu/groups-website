import request from './request.js';
import getToken from './getToken.js';

export default function(id, reason, explanation, callback) {
	let token = getToken();
	request('POST', 'cancel.php', {
		id: id,
		reason: reason,
		explanation: explanation,
		token: token
	}, function(response) {
		callback(response);
	});
}