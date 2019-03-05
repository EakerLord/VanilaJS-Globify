export default class Common {

	cambioWidth(display){

		let divsArtistas = document.getElementsByClassName('artista');

		if(display === 'block' || display === ''){
			for (let index = 0; index < divsArtistas.length; index++)
			{divsArtistas[index].style.width = '20%';}
		}
		else{
			for (let index = 0; index < divsArtistas.length; index++) {
				divsArtistas[index].style.width = '30%';
			}
		}

	}

	static invocarEventListener(tipo, idElemento, accion, funcion, arrayClass){

		if( tipo === 'id' )
		{document.getElementById(idElemento).addEventListener(accion, funcion);}
		else
		{for (let i = 0; i < arrayClass.length; i++)
		{arrayClass[i].addEventListener(accion, funcion);}}
	}

}
