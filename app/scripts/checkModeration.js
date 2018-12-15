
import requestGjs from './requestGjs.js';
export default function(uuid, graphjsHash, callback) {
	requestGjs('getCommentModeration', {}, uuid, graphjsHash, 
		function(response) {
			if(response.success) {
				callback({
					success: true,
					body: response.body.is_moderated
				});
			}
			else {
				callback({
					success: false,
					reason: "Can't fetch moderation status"
				});
			}
	});
}