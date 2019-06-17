import {apiWeb} from './apiPaths.js';

export default function(path, data, uuid, graphjsHash, callback) {
	// https://stackoverflow.com/questions/14525178/is-there-any-native-function-to-convert-json-to-url-parameters
	let _apiGjs = apiWeb;
    let target = _apiGjs+'/'+path+'?hash='+graphjsHash+'&public_id='+uuid+'&'+Object.entries(data).map(e => e.join('=')).join('&');
	let parameters = {
	    method: "GET",
	    mode: "cors"
	}
	fetch(target, parameters)
	.then(response => response.json())
	.then(response => {
		if(response.success) {
			callback({
				success: true,
				body: response
			})
		} else {
			callback({
				success: false
			})
		}
	})
	.catch(error => console.log(error) && callback({
		success: false
	}));
}