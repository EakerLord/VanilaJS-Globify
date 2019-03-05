export default class Search {

	static buscarArtista(){

		let artistaBuscado, filter, artistas, i, txtValue;

		artistaBuscado = document.getElementById('inputBuscar');
		filter = artistaBuscado.value.toUpperCase();
		artistas = document.getElementsByClassName('artista');

		for (i = 0; i < artistas.length; i++) {

			txtValue = artistas[i].textContent || artistas[i].innerText;

			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				artistas[i].style.display = '';
			} else {
				artistas[i].style.display = 'none';
			}
		}
	}

	buscarArtistaDOM(){
		return '<input id="inputBuscar" type="text" placeholder="Buscar" name="buscador"></input>';
	}
}
