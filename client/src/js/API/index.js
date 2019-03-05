import { Spotify } from './spotify';

export default class Source {
	provider = {};
	options = {
		provider: 'spotify',
		token: ''
	};

	constructor(options){
		// Assign es lo mismo que el deepmerge pero solo si tiene un nivel de datos (key: "value").
		// Las {} son la indicacion de que cree un objeto nuevo porque es una referencia a un objeto nuevo.
		this.options = Object.assign({}, this.options, options);

		switch (this.options.provider) {
		case 'spotify': 		this.provider = new Spotify(this.options.token); break;
		default:
			console.error('Provider name wrong!');
		}
	}

	getArtist(id){
		return this.provider.getArtist(id);
	}

	getMultipleArtists(ids){
		return this.provider.getMultipleArtists(ids);
	}

	getAlbums(id){
		return this.provider.getAlbums(id);
	}

	getTracks(id){
		return this.provider.getTracks(id);
	}

}
