import requestGjs from './requestGjs.js';
export default function(uuid, graphjsHash, callback) {
	requestGjs('getPendingComments', {}, uuid, graphjsHash, 
		function(response) {
			if(response.success) {
				callback({
					success: true,
					body: Array.isArray(response.body.pending_comments) ? response.body.pending_comments : [response.body.pending_comments]
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