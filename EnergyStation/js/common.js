$(function() {

	$("#up-home").click(function() {
		$('html, body').animate({scrollTop: 0},500);
		return false;
	});

	$(".slide-down").click(function(e) {
		e.preventDefault();
		var href = $(this).attr('href');
		console.log(href);
		var top = $(href).offset().top;
		console.log(top);
		$('html, body').animate({scrollTop: top - 50},500);
		return false;
	});

	// $('#my-menu').mmenu({
	// 	navbar: {
	// 		title: '<img src="img/logo-menu.png">'
	// 	}
	// });

	$(".slider-owl").owlCarousel({
		loop: true,
		items: 1,
		nav: true
	});

	// $(".has-child").click(function() {
	// 	$(".has-child").removeClass("active");         
	// 	$(this).toggleClass("active");
	// });

	$('.menu .menu-item-has-children').click(function(){
		$(this).toggleClass('active');
		$(this).find('ul').slideToggle();
	});

	// $('.menu .ico-close').click(function(){
	// 	$(this).toggleClass('close');
	// })

	// $(".close").click( function(){
	// 	$(this).parents(".menu").hide("fast")
	// });

	$('.ico-close, .overlay').click(function(){
		$('.menu').removeClass('menu_active');
		$('.overlay').hide();
	});

	$('.menu-btn').click(function(){
		$('.menu').addClass('menu_active');
		$('.overlay').show();
		
	});

	$(".tab-item").not(":first").hide();
	$(".wrapper-img .tab").click(function() {
		$(".wrapper-img .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab-item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");


	var scrolled;
	window.onscroll = function() {
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if(scrolled > 250){
			$(".header-main").addClass("header-scrolled");
		}
		if(250 > scrolled){
			$(".header-main").removeClass("header-scrolled"); 
		}

	};


	if(window.matchMedia("(max-width: 768px)").matches){
		$('.owl-mobile, .owl-mobile-xl').addClass('owl-carousel');
		$('.owl-mobile, .owl-mobile-xl').owlCarousel({
			items: 1,
			nav: false,
			dots: true
		});
	};

	// if(window.matchMedia("(max-width: 768px)").matches){
	// 	$('.owl-mobile-xl').addClass('owl-carousel');
	// 	$('.owl-mobile-xl').owlCarousel({
	// 		items: 1,
	// 		nav: false,
	// 		dots: true
	// 	});
	// };


});
