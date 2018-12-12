export default function(id, token) {
	let expiry = new Date();
	expiry.setTime(expiry.getTime() + (24 * 60 * 60 * 1000));
	document.cookie = 'graphjscom_id=' + id + '; path=/; expires=' + expiry.toGMTString();
	document.cookie = 'graphjscom_token=' + token + '; path=/; expires=' + expiry.toGMTString();
}