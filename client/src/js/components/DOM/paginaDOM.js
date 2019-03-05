import Player from '../../components/Player/player';
import Search from '../Search/search';
import Artists from '../../list/Artists/artists';

const unPlayer = new Player('');
const unSearch = new Search('');
const unArtist = new Artists('');

export default class PaginaDOM {

	static paginaDOM(){
		return new Promise (function(resolve,reject) {
			unArtist.artistasDOM().then(function(divArtistas){
				if(divArtistas){
					resolve(
						`
                        <header id="cabecera">
                            <div id="menu_superior_mobile">
                                <div>Artista</div>
                                <div>Recientemente</div>
                                <div>Playlist</div>
                            </div>
                            <img id="logoGL" src="./src/images/logoGL.png">
                            ` + unSearch.buscarArtistaDOM() + `
                            <br>
                        </header>
                        <div id="container">
                            <hr class="barra">
                            <h2>Artistas</h2>
                            <div id="galeria">
                            ` + divArtistas + `
                            </div>
                            <hr class="barra">
                            <div id="ulAlbumesMobile">
                            ` + 'Canciones' + `
                            </div>
                            <hr class="barra">
                            ` + unPlayer.reproductorClass() + `
                            <hr class="barra">
                        </div>
                        <footer id="pie_pagina">
                            <div class="itemMenu">
                                <img src="./src/images/home.png">
                                <p>Inicio</p>
                            </div>
                            <div class="itemMenu">
                                <img src="./src/images/lupa.png">
                                <p>Buscar</p>
                            </div>
                            <div class="itemMenu">
                                <img src="./src/images/shuffle.png" class="repeat">
                                <p>Tu Biblioteca</p>
                            </div>
                            <div class="itemMenu">
                                <img src="./src/images/FedeD.jpg" class="imagen_mobile">
                                <p>Perfil</p>
                            </div>
                        </footer>
                        `
					);
				} else {
					reject('Error desde promesa interna paginaDOM.js');
				}
			}).catch(function(err){
				console.warn(err + ' -- Error desde promesa externa paginaDOM.js');
			});
		});
	}
}
