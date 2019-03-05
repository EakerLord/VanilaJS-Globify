import { Utils } from '../utils/utils';
import { Artist, Album, Track } from '../entities';
// Falta importar el user - profile.

export class Spotify {
	url_base = 'https://api.spotify.com/v1';
	headers = {};

	constructor(token){
		this.headers = {
			'Authorization': `Bearer ${token}`
		};
	}

	getArtist(id){
		return Utils.xhr(
			`${this.url_base}/artists/${id}?market=ar`,
			{ headers: this.headers })
			.then(artist => {
				return new Artist(artist.name, artist.images[0].url);
			});
	}

	getMultipleArtists(ids){
		return Utils.xhr(
			`${this.url_base}/artists/?ids=${ids}`,
			{ headers: this.headers })
			.then(artists => {
				return artists.artists.map(artist => {
					return new Artist(artist.name, artist.images[2].url, artist.id);
				});
			});
	}

	getAlbums(id){
		return Utils.xhr(
			`${this.url_base}/artists/${id}/albums?market=ar`,
			{ headers: this.headers })
			.then(albums => {
				return albums.items.map(album => {
					return new Album(album.name, album.images[0].url, album.id);
				});
			});
	}

	getTracks(id){
		return Utils.xhr(
			`${this.url_base}/albums/${id}/tracks?market=ar`,
			{ headers: this.headers })
			.then(tracks => {
				return tracks.items.map(track => {
					return new Track(track.name, track.track_number);
				});
			});
	}
}
