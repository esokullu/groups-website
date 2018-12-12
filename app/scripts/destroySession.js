export default function() {
	let expiry = new Date();
	expiry.setTime(0);
	document.cookie = 'graphjscom_id=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
	document.cookie = 'graphjscom_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT';
}