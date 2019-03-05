export default class Player {

	reproductorClass(){
		return `
        <div class="reproductor">
            <div class="reproductorArtista">
                <h5>Nombre del Artista Aleatorio</h5>
                <h5>Nombre de la Cancion</h5>
            </div>
            <div class="barraTiempo"></div>
            <div class="duration">
                <span class="tiempoReproducido">0:45</span>
                <span class="tiempoTotal">4:53</span>
            </div>
            <div class="botonesReproductor">
                <span class="material-icons teclas">repeat</span>
                <span class="material-icons teclas">skip_previous</span>
                <span class="material-icons teclas botonPlay">play_circle_filled</span>
                <span class="material-icons teclas">skip_next</span>
                <span class="material-icons teclas">shuffle</span>
            </div>
        </div>
        `;
	}
}
