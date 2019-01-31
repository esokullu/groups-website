import {apiGjs} from './apiPaths.js';
import isHouseAccount from './isHouseAccount.js';

export default function(path, data, uuid, graphjsHash, callback) {
	// https://stackoverflow.com/questions/14525178/is-there-any-native-function-to-convert-json-to-url-parameters
	let _apiGjs = apiGjs
	if(!isHouseAccount(uuid)) {
		_apiGjs = "https://gj"+uuid.toLowerCase().substring(4).replace(/-/g,'')+".herokuapp.com";
	}
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
	.catch(error => callback({
		success: false
	})/*console.error(error)*/);
}