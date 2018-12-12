import request from './request.js';
import getToken from './getToken.js';
import destroySession from './destroySession.js';

export default function(id, callback) {
	let token = getToken();
	request('POST', 'logout.php', {
		token: token
	}, function(response) {
		if(response.success) {
			destroySession();
		}
		callback(response);
		window.location.href = "/"
	});
}