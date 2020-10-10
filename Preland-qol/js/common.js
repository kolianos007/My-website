$(function() {

	$('.gift div:odd').on('click', function(){
		$('.popup-win-wrap, .overlay').fadeIn()
	})

	$('.gift div:even').on('click', function(){
		$('.popup-nowin-wrap, .overlay').fadeIn()
	})

	$('.overlay, .btn-nowin').on('click', function(){
		// $('.overlay').removeClass('active')
		$('.popup-win-wrap, .overlay, .popup-nowin-wrap').fadeOut()
	})


});
