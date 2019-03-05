import Albums from '../../list/Albums/albums';

const unAlbum = new Albums();

export default class AsideDOM {

	static asideDOM(){

		return new Promise ((resolve,reject) => {
			unAlbum.albumesDOM().then((divAlbumes) => {

				if(divAlbumes){
					resolve(
						`<br>
                        <h2>Álbumes</h2>
						<br>
						<div id="contenedorAlbumes">
                        <ul id="ul_albumes">
                        ` + divAlbumes + `
						</ul>
						</div>`
					);
				} else {
					reject('Error desde promesa interna asideDOM.js');
				}

			}).catch(function(err){
				console.warn(err + ' -- Error desde promesa albumes externa asideDOM.js');
			});
		});
	}
}
