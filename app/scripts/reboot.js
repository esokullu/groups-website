import request from './request.js';
import getToken from './getToken.js';

export default function(uuid, color, callback) {
	let token = getToken();
	request('POST', 'reboot.php', {
		uuid: uuid,
		token: token
	}, function(response) {
		callback(response);
	});
}