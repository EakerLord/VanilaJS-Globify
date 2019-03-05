import NavDOM from './components/DOM/navDOM';
import AsideDOM from './components/DOM/asideDOM';
import PaginaDOM from './components/DOM/paginaDOM';
import Search from './components/Search/search';
import Albums from './list/Albums/albums';
import Songs from './list/Songs/songs';
import Common from './utils/common';
import Loader from './utils/loader';

const miAlbum = new Albums();

export default class App {

	nav = document.getElementById('nav');
	solapa = document.getElementById('solapa');
	pagina = document.getElementById('pagina');
	aside = document.getElementById('aside');

	source = {};

	constructor() {
		this.getData();
	}

	getData() {
		// Activo el loader.
		Loader.loadingOn('loader', 'contenedor');

		// let promises = [PaginaDOM.paginaDOM()];
		let promises = [PaginaDOM.paginaDOM(), AsideDOM.asideDOM()];
		Promise.all(promises).then(resultados => {

			if (resultados) {

				this.nav.innerHTML = NavDOM.navDOM();
				this.solapa.innerHTML = NavDOM.solapaDOM();
				this.pagina.innerHTML = resultados[0];
				this.aside.innerHTML = resultados[1];

				//Buscador del DOM
				Common.invocarEventListener('id', 'inputBuscar', 'keypress', Search.buscarArtista, '');
				//Visibilidad del DOM
				Common.invocarEventListener('id', 'botonNav', 'click', NavDOM.visibilidadNav);
				Common.invocarEventListener('class', 'artista', 'click', miAlbum.seleccionAlbum, document.getElementsByClassName('artista'));
				Common.invocarEventListener('unaVariable', 'nombreAlbum', 'click', Songs.revelarCanciones, document.getElementsByClassName('nombreAlbum'));
				// Desactivo el loader

				Loader.loadingOff('loader', 'contenedor');
			} else {
				console.warn('Error interno desde el index.js con .all');
			}
		}).catch((err) =>
			console.warn(err + ' -- Error externo desde el index.js con .all'
			));
	}
}
