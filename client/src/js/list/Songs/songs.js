// Spotify
import Source from '../../API/index';
const urlParams = new URLSearchParams(location.search);
let token = urlParams.get('t');
const miSource = new Source({
	// provider: 'deezer',
	token
});

export default class Songs {

	static revelarCanciones(){

		// alert( this.id );

		let divAlbum = document.getElementById(this.textContent).style.display;

		if(divAlbum === 'none' || divAlbum === '')
		{document.getElementById(this.textContent).style.display = 'block';}
		else
		{document.getElementById(this.textContent).style.display = 'none';}
	}

	cancionesDOM(idAlbum){
		return new Promise (function(resolve,reject) {
			miSource.getTracks(idAlbum).then(songsAPI => {
				if(songsAPI){
					let cadenaDeLI = '';
					songsAPI.forEach(element => {
						cadenaDeLI = cadenaDeLI +
						`<li class="li_canciones">
							<div class="cancion">
								<span class="selected">${element.name}</span>
								<span>Num: ${element.track_number}</span>
								<span class="tiempo">xx:xx</span>
							</div>
						</li>`;
					});
					resolve(cadenaDeLI);
				} else {
					reject('Error interno desde songs.js');
				}
			}).catch(function(err){
				console.warn(err + ' -- Error desde promesa songs.js');
			});
		});
	}
}
