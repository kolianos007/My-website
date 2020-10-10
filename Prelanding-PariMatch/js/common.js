$(function() {

	let tab = document.querySelectorAll('.tab')
	let tabGif = document.querySelectorAll('#android--js .gif-mob')
	let tabGifIOS = document.querySelectorAll('#ios--js .gif-mob')

	function init() {
		for(let i = 1; i < tabGif.length; i++) {
			tabGif[i].style.display = 'none'
			tabGifIOS[i].style.display = 'none'
		}
	}

	init()

	tab.forEach(function(el) {
		el.onclick = showTabs
	})

	function showTabs(){
		let data = this.getAttribute('data-id')
		for(let i = 0; i < tabGif.length; i++) {
			tabGif[i].style.display = 'none'
			tabGifIOS[i].style.display = 'none'
			tab[i].classList.remove('active')
		}
		document.querySelector(`.gif-mob[data-id="${data}"]`).style.display = 'block'
		this.classList.add('active')
	}


	if (/Android|webOS|Windows|Linux/i.test(navigator.userAgent)) {
    document.querySelector('#ios--js').style.display = 'none'
  } else if(/iPhone|iPad|iPod|Mac/i.test(navigator.userAgent)) {
    document.querySelector('#android--js').style.display = 'none'
  }

});
