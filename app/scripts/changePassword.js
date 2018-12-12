import request from './request.js';

export default function(email,token,password, callback) {
	request('POST', 'password-reset-complete.php', {
		 email,
		 resetToken:token,
		 password
	}, function(response) {
		callback(response);
	});
}