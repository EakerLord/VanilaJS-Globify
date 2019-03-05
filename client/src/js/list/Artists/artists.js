// Spotify
import Source from '../../API/index';

const urlParams = new URLSearchParams(location.search);
let token = urlParams.get('t');

const miSource = new Source({
	// provider: 'deezer',
	token
});

export default class Artists {

	artistasDOM(){
		return miSource.getMultipleArtists('1dfeR4HaWDbWqFHLkxsg1d,4tZwfgrHOc3mvqYlEYSvVi,0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin,1dfeR4HaWDbWqFHLkxsg1d,4tZwfgrHOc3mvqYlEYSvVi,0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin,1dfeR4HaWDbWqFHLkxsg1d').then(data => data.map(artist =>
			`<div class="artista">
                <img src="${artist.image}" class="imagen_artista">
                <p id="${artist.id}" class="paddNomArtist">${artist.name}</p>
            </div>`
		).join('')).catch(function(err){
			console.warn(err + ' -- Error desde promesa externa artists.js');
		});
	}
}
