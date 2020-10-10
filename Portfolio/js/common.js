$(function() {


  $(function() {
    $('.menu_icon').on('click', function() {
      $(this).closest('.nav').toggleClass('nav_open');
    });
  });

  $(".menu").on("click","a", function (event) {
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 800 мс
		$('body,html').animate({scrollTop: top}, 800);
	});

	$('document').ready(function() {
		var typed = new Typed('#typed' , {
			strings:["WEB-РАЗРАБОТЧИК"],
			typeSpeed: 40,
			backSpeed: 40,
			showCursor: false
		});
	});

	$('document').ready(function() {
		var typed = new Typed('#typed-bloquote' , {
			strings:["Начните свой успешный бизнес с разработки сайта"],
			typeSpeed: 40,
			backSpeed: 40,
			showCursor: false
		});
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		asNavFor: '.slider-nav',
		prevArrow: '<div class="prev"><i class="fas fa-long-arrow-alt-left"></i></div>',
		nextArrow: '<div class="next"><i class="fas fa-long-arrow-alt-right"></i></div>'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		arrows: true,
		focusOnSelect: true,
		prevArrow: '<div class="prev"><i class="fas fa-long-arrow-alt-left"></i></div>',
		nextArrow: '<div class="next"><i class="fas fa-long-arrow-alt-right"></i></div>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.skill-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		infinite: true,
		speed: 300,
		autoplay: true,
		prevArrow: '<div class="prev"><i class="fas fa-long-arrow-alt-left"></i></div>',
		nextArrow: '<div class="next"><i class="fas fa-long-arrow-alt-right"></i></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

});
