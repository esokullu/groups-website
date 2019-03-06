import request from './request.js';
import getToken from './getToken.js';

export default function(page, callback) {
	let token = getToken();
	request('GET', 'service-tickets.php?limit=6&page=' + (page+1), {
		token: token
	}, function(response) {
		callback(response);
	});
}