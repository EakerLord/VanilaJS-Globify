import commonAPI from './commonAPI';

const unCommonAPI = new commonAPI();

const urlArtists = 'http://localhost:3000/API/artists';
const urlAlbums = 'http://localhost:3000/API/albums';
const urlTracks = 'http://localhost:3000/API/tracks';

export default class API {
	getAllArtists(){
		return new Promise (function(resolve,reject) {
			unCommonAPI.getConURL(urlArtists).then(function(artistas){
				if(artistas){
					resolve(artistas.artists);
				} else {
					reject('Error desde promesa interna api.js');
				}
			}).catch(function(){
				console.warn('Error desde promesa externa api.js');
			});
		});
	}

	getAllAlbums(){
		return new Promise (function(resolve,reject) {
			unCommonAPI.getConURL(urlAlbums).then(function(albums){
				if(albums){
					resolve(albums.items);
				} else {
					reject('Error desde promesa interna api.js');
				}
			}).catch(function(){
				console.warn('Error desde promesa externa api.js');
			});
		});
	}

	getAllTracks(){
		return new Promise (function(resolve,reject) {
			unCommonAPI.getConURL(urlTracks).then(function(tracks){
				if(tracks){
					resolve(tracks.items);
				} else {
					reject('Error desde promesa interna api.js');
				}
			}).catch(function(){
				console.warn('Error desde promesa externa api.js');
			});
		});
	}
}
