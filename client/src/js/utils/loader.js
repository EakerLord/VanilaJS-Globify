export default class Loader {

	static refreshLoading(loader, container, status) {
		document.getElementById(loader).style.display = status ? '' : 'none';
		document.getElementById(container).style.display = status ? 'none' : '';
	}

	static loadingOff(loader, container) {
		this.refreshLoading(loader, container, false);
	}

	static loadingOn(loader, container) {
		this.refreshLoading(loader, container, true);
	}
}