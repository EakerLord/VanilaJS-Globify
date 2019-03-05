import Common from '../../utils/common';
// import ApiRest from '../../API/Mock/api';
import Songs from '../../list/Songs/songs';
// Spotify
import Source from '../../API/index';
const urlParams = new URLSearchParams(location.search);
let token = urlParams.get('t');
const miSource = new Source({
	// provider: 'deezer',
	token
});

// https://api.spotify.com/v1/artists/{id}/albums

const unSong = new Songs();
// const myApiRest = new ApiRest();
const unCommon = new Common();

export default class Album {

	idArtista = '';
	idAlbum = '';

	constructor(){
		this.idArtista = '1dfeR4HaWDbWqFHLkxsg1d';
		this.idAlbum = '6i6folBtxKV28WX3msQ4FE';
	}

	seleccionAlbum(){
		//---
		if( this.style.backgroundColor === 'rgb(243, 112, 55)' ){
			this.style.backgroundColor = '';
		} else {
			this.style.backgroundColor = '#f37037';
		}
		//---
		let invocacion = new Album();
		this.idArtista = this.getElementsByClassName('paddNomArtist')[0].id;
		//------------------------------------------------------
		let ul = document.getElementById('ul_albumes');
		if( ul ){
			let parentUl = ul.parentElement;
			parentUl.removeChild(ul);
		} else {
			console.warn('No existe el elemento ul_albumes!');
		}
		invocacion.albumesDOM(this.idArtista).then( data => {

			document.getElementById('contenedorAlbumes').innerHTML = `<ul id="ul_albumes">${data}</ul>`;
		});
		//------------------------------------------------------
		invocacion.visibilidadAlbum();
	}

	visibilidadAlbum(){

		let displayElementAside = document.getElementById('aside').style.display;
		let displayElementNav = document.getElementById('nav').style.display;

		if( displayElementAside === 'block' || displayElementAside === ''){
			unCommon.cambioWidth(displayElementAside);
			document.getElementById('aside').style.display = 'none';
			document.getElementById('pagina').style.width = '81%';

			if(document.getElementById('nav').style.display === 'none')
			{document.getElementById('pagina').style.width = '99%';}
		}
		else{
			unCommon.cambioWidth(displayElementAside);
			document.getElementById('aside').style.display = 'block';
			if(displayElementNav === 'block' || displayElementNav === '')
			{document.getElementById('pagina').style.width = '45%';}
			else
			{document.getElementById('pagina').style.width = '81%';}
		}
	}

	albumesDOM( artistaIdParametro ){

		let artistaID = '';
		if(artistaIdParametro){
			artistaID = artistaIdParametro;
		} else {
			artistaID = this.idArtista;
		}
		return miSource.getAlbums(artistaID).then(albumes => albumes.map(album =>
			`<li>
			<img src="${album.image}" class="imagen_mobile">
			<span id="${album.id}" class="nombreAlbum">${album.name}</span>
			<br><br>
			<div id="${album.name}" class="div_canciones">
			<ul> ` + unSong.cancionesDOM(this.idAlbum).then(data => {
				return data;
			}) + '</ul>'
		).join('')).catch(function(err){
			console.warn(err + ' -- Error desde promesa externa albums.js');
		});
	}
}
