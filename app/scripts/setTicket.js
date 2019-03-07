import request from './request.js';
import getToken from './getToken.js';

export default function(title, callback) {
	let token = getToken();
	request('POST', 'service-ticket.php', {
		token: token,
		title: title.substring(0, 45),
		text: title
	}, function(response) {
		callback(response);
	});
}