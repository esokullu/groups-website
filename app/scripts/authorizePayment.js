import request from './request.js';

export default function(data, callback) {
	request('POST', 'authorize-payment.php', data, function(response) {
		callback(response);
	});
}