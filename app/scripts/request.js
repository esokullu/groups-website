import {apiWeb, apiSandbox} from './apiPaths.js';

export default function(method, path, data, callback) {
	// The original endpoint: let target = apiWeb + '/' + path;
	let target = apiWeb + '/' + path;
	let requestHeaders = new Headers();
	requestHeaders.append('Content-Type', 'application/json');

	if(data.hasOwnProperty('token')) {
		requestHeaders.append('Authorization', 'Bearer ' + data.token);
		delete data.token;
	}
	if(data.hasOwnProperty('resetToken')) {
		data.token = data.resetToken
		delete data.resetToken;
	}
	let parameters = {
	    method: method,
	    mode: "cors",
	    headers: requestHeaders
	}
	if(data && Object.keys(data).length > 0) {
		parameters['body'] = JSON.stringify(data);
	}
	fetch(target, parameters)
	.then(response => response.json())
	.then(response => {
		if(response.status.code == 'success') {
			callback({
				success: true,
				body: response.body
			})
		} else {
			callback({
				success: false,
				reason: response.status.message,
				body: response.body ? response.body : null
			})
		}
	})
	.catch(error => callback({
		success: false,
		reason: "There is some error. Please try again later.",
		body: null
	}));
}