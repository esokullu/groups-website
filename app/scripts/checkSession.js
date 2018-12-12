export default function(callback) {
	let id;
	let cookies = document.cookie.replace(/\s+/g, '').split(';');
	if (cookies.filter(
		function(item) {
	    	return item.indexOf('graphjscom_id=') >= 0;
		}
	).length) {
		for(let cookie of cookies) {
			let data = cookie.split('=');
			if(data[0] == 'graphjscom_id') {
				id = data[1];
			}
		}
		callback({
			success: true,
			id: id
		});
	} else {
		callback({
			success: false,
			reason: 'There is no session.'
		});
	}
}