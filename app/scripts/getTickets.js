import request from './request.js';
import getToken from './getToken.js';

export default function(page, limit, callback) {
	let token = getToken();
	request('GET', 'service-tickets.php?limit=' + limit + '&page=' + page, {
		token: token
	}, function(response) {
		callback(response);
	});
}