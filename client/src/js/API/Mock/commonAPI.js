export default class API {
	getConURL(url){
		return new Promise (function(resolve,reject) {
			let xhr = new XMLHttpRequest();
			xhr.open('GET', url, true);
			xhr.onload = function() {
				if (this.readyState === 4 && this.status === 200) {
					try {
						const responseJSON = JSON.parse(this.responseText);                        
						resolve(responseJSON);
					} catch (e) {
						console.warn('Error a la hora de convertir el objeto JSON.');
					}
				} else {
					reject('No se obtuvo data desde la url.');
				}
			};
			xhr.onerror = function() {                
				reject(xhr.statusText);
			};
			xhr.send();
		});
	}
}