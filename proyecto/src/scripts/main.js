(function () {

	var loadCSS = require('./lib/loadCSS');

		document.addEventListener('DOMContentLoaded', onDOMLoad);

		var headerElem = document.querySelector('.header');
		headerElem.addEventListener('scroll', onScroll);

		function onScroll() {
			if(window.scrollY >= 50) {
				headerElem.classList.toogle('.header--ligth');
			}else {
				headerElem.classList.toogle('header--ligth');
			}
		}

		function onDOMLoad() {
			var btnMenu = document.getElementById('btnMenu');
			var navbarMenu  = document.getElementById('navbarMenu');
			
			btnMenu.addEventListener('click', onClickMenu);

			loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css');
			loadCSS('https://fonts.googleapis.com/css?family=Indie+Flower|Lobster');

			function onClickMenu() {	
				navbarMenu.classList.toggle('header-menu-list--show')
			}
		}
	}());