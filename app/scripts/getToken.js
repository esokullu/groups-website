export default function() {
	let cookies = document.cookie.replace(/\s+/g, '').split(';');
	if (cookies.filter(
		function(item) {
	    	return item.indexOf('graphjscom_token=') >= 0;
		}
	).length) {
		for(let cookie of cookies) {
			let data = cookie.split('=');
			if(data[0] == 'graphjscom_token') {
				return data[1];
			}
		}
	} else {
		return undefined;
	}
}