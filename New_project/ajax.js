/*https://next.json-generator.com/api/json/get/EkllqdIA7*/


document.getElementById("btn1").addEventListener("click", function() {

	function callApi(url, o) {


	var options = Object.assign({
		credentials: 'same-origin',
		mode: 'cors',
		headers: {
			'Accept': 'application/json',
			'Content-type': 'application/json'
		}
	}, o);

	return fetch(url, options) 
		.then(function(response) {
			if (response.status >= 200 && response.status < 300) {
				return response.json();
			} else {
				var error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
		})
	}



function makeRequest() {
	return callApi('https://next.json-generator.com/api/json/get/EkllqdIA7', {
		method: 'GET'
	}).then(function(result) {
		return result;
	}).catch(function(error) {
		throw new Error(error);
	})
	}

function doSomething(data) {
	console.info('get something', 'data:', data);
	const promise = new Promise(function(resolve, reject) {

		const container = document.getElementById('company');
		container.innerHTML = "";
		const  array = [];

		data.forEach(function(item) {
			
			array.push(item.phone);
			array.forEach(function(textData){
			const createElement = document.createElement('li');
			const node = document.createTextNode(textData);
			const HTMLElement = createElement.appendChild(node);
			container.appendChild(createElement);
				
			})

			/*console.log(item.company);*/
			
			
		})
		resolve({test: data});
	})
	return promise;

}

function getData(data) {
	setTimeout(function() {
		console.log('test', data);
	}, 2000)

}

makeRequest()
.then(doSomething)
.then(getData);


});


document.getElementById("btn2").addEventListener("click", function() {

	function callApi(url, o) {


	var options = Object.assign({
		credentials: 'same-origin',
		mode: 'cors',
		headers: {
			'Accept': 'application/json',
			'Content-type': 'application/json'
		}
	}, o);

	return fetch(url, options) 
		.then(function(response) {
			if (response.status >= 200 && response.status < 300) {
				return response.json();
			} else {
				var error = new Error(response.statusText);
				error.response = response;
				throw error;
			}
		})
	}



function makeRequest() {
	return callApi('https://next.json-generator.com/api/json/get/EkllqdIA7', {
		method: 'GET'
	}).then(function(result) {
		return result;
	}).catch(function(error) {
		throw new Error(error);
	})
	}

function doSomething(data) {
	console.info('get something', 'data:', data);
	const promise = new Promise(function(resolve, reject) {

		const container = document.getElementById('company');
		container.innerHTML = "";
		const  array = [];

		data.forEach(function(item) {
			
			array.push(item.company);
			array.forEach(function(textData){
			const createElement = document.createElement('li');
			const node = document.createTextNode(textData);
			const HTMLElement = createElement.appendChild(node);
			container.appendChild(createElement);
				
			})

			/*console.log(item.company);*/
			
			
		})
		resolve({test: data});
	})
	return promise;

}

function getData(data) {
	setTimeout(function() {
		console.log('test', data);
	}, 2000)

}

makeRequest()
.then(doSomething)
.then(getData);


});



