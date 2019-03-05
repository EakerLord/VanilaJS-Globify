import Common from '../../utils/common';
import Profile from '../Profile/profile';

const unCommon = new Common();
const unProfile = new Profile();

export default class NavDOM {

	static navDOM(){
		return unProfile.perfilDOM() + `
            <h4>Explorar</h4>
            <h3>Tu biblioteca</h3>
            <div id="flex_menu">
            <p class="selected option_selected pad">Artistas</p>
            <p class="pad">Playlist</p>
            <p class="pad">Videos</p>
            <p class="pad">Escuchado recientemente</p>
            </div>
        `;
	}

	static solapaDOM(){
		return `
            <img src="./src/images/flecha_barra.png" id="botonNav">
        `;
	}

	static visibilidadNav(){
		console.log('funcionNav');

		let displayElementNav = document.getElementById('nav').style.display;
		let displayElementAside = document.getElementById('aside').style.display;
		document.getElementById('botonNav').classList.add('iconRotate');

		if( displayElementNav === 'block' || displayElementNav === '' ){
			unCommon.cambioWidth(displayElementNav);
			document.getElementById('nav').style.display = 'none';
			document.getElementById('pagina').style.width = '63%';

			if(document.getElementById('aside').style.display === 'none')
			{document.getElementById('pagina').style.width = '99%';}
		}
		else{
			document.getElementById('botonNav').classList.remove('iconRotate');
			unCommon.cambioWidth(displayElementNav);
			document.getElementById('nav').style.display = 'block';
			if(displayElementAside === 'block' || displayElementAside === '')
			{document.getElementById('pagina').style.width = '45%';}
			else
			{document.getElementById('pagina').style.width = '81%';}
		}
	}

}
