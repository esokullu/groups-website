import request from './request.js';
import getToken from './getToken.js';

export default function(uuid, basics, callback) {
	let token = getToken();
	request('PUT', 'instances.php', {
		uuid: uuid,
		token: token,
		groups_title: basics.title,
		groups_description: basics.description,
		theme: basics.theme,
		color: basics.color
	}, function(response) {
		callback(response);
	});
}