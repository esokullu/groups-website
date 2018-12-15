import requestGjs from './requestGjs.js';
export default function(uuid, graphjsHash, callback) {
	requestGjs('getMembers', {}, uuid, graphjsHash, 
		function(response) {
			if(response.success) {
				callback({
					success: true,
					body: Array.isArray(response.body.members) ? response.body.members : [response.body.members]
				});
			}
			else {
				callback({
					success: false,
					reason: "Can't fetch pending comments"
				});
			}
	});
}