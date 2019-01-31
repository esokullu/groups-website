import requestGjs from './requestGjs.js';
export default function(pwd, uuid, graphjsHash, callback) {
	requestGjs('setFounderPassword', {password: pwd}, uuid, graphjsHash, 
		function(response) {
			if(response.success) {
				callback({
					success: true
				});
			}
			else {
				callback({
					success: false,
					reason: "Can't change the password"
				});
			}
	});
}