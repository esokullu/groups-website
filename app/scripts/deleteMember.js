import requestGjs from './requestGjs.js';
export default function(userID, uuid, graphjsHash, callback) {
	requestGjs('deleteMember', {id: userID}, uuid, graphjsHash, 
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