import request from './request.js';
import getToken from './getToken.js';

export default function(uuid, callback) {
	let token = getToken();
	request('GET', 'service-ticket.php?&uuid=' + uuid, {
		token: token
	}, function(response) {
		callback(response);
	});
}