$(function() {

	$('.lang--js').click(function(){
		$(this).toggleClass('active')
		$(this).next().slideToggle()
	})

	$('.text-drop--js').click(function(){
		$('.main_text .hid').slideToggle()
		$(this).css('display', 'none')
	})

	$('.best-game-arrow-scroll1').on('click', function () {
	  $('.game-slider--js').slick('slickNext')
	});

	$('.game-slider--js').slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: true,
		lazyLoad: 'progressive',
		prevArrow: $('.prev'),
		nextArrow: $('.next'),
		appendArrows: $('.best-game-arrow'),
		infinite: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 5,
					slidesToScroll: 5,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
		]
	})

	$('.tab').on('click', function(e){
		e.preventDefault()
		var bLazy = new Blazy()
		$('.tab').removeClass('active')
		$(this).toggleClass('active')
		$('.best-avtomat').removeClass('active')
		$('.best-avtomat[data-index ='+$(this).attr('data-index')+']').toggleClass('active')
	})

	$('.select-providers').selectric()

	var bLazy = new Blazy({
    success: function(element) {
	    setTimeout(function() {
	        // Удаляем прелодер gif-картинку
	        // Сначала определим родительский контейнер
	        // затем удалим класс "loading", когда картинка была загружена
	        var parent = element.parentNode;
	        parent.className = parent.className.replace(/\bloading\b/, '');
	    }, 1000);
	  }
	})


	$('.foot-drop--js').click(function(){
		$(this).toggleClass('active')
		$('.footer_drop-text').slideToggle()
	})

	$('.menu').on('click', 'a', function(e){
		e.preventDefault()
		let id = $(this).attr('href')
		let top = $(id).offset().top
		$('body, html').animate({scrollTop: top}, 500)
	})

	$('.btn-scroll-providers').click(function(e){
		e.preventDefault()
		let id = $(this).attr('href')
		let top = $(id).offset().top
		$('body, html').animate({scrollTop: top - 80}, 500)
	})

	$('#scroll-up').click(function(e){
		e.preventDefault()
		$('body, html').animate({scrollTop: 0}, 800)
	})

	$('.hamburger').click(function(){
		$(this).toggleClass('active')
		$('.header_right').toggleClass('active')
	})



});
