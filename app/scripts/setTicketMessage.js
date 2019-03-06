import request from './request.js';
import getToken from './getToken.js';

export default function(uuid, text, callback) {
	let token = getToken();
	request('POST', 'service-ticket-reply.php', {
		token: token,
		uuid,
		text
	}, function(response) {
		callback(response);
	});
}