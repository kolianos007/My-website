$(function() {

	if(window.matchMedia("(max-width: 768px)").matches){
		$('.owl-mobile').addClass('owl-carousel');
		$('.owl-mobile').owlCarousel({
			items: 1,
			nav: true
		});
	};


	// $(".toggle-mnu").click(function() {
	// 	$(this).toggleClass("on");
	// 	$(".header_navbar").slideToggle();
	// });

	$('.mobile-mnu').click(function(){
		$('.header_navbar').addClass('active');
	});

	$('.ico-close').click(function(){
		$('.header_navbar').removeClass('active');
	});

	// $('.mobile-mnu').click(function(){
	// 	$('.header_navbar').removeClass('active');
	// });




	// $(".nav__ul").after("<div id='my-menu'>");
	// $(".nav__ul").clone().appendTo("#my-menu");
	// $("#my-menu").find("*").attr("style", "");
	// $("#my-menu").find("li").removeClass("nav__li");
	// $("#my-menu").mmenu({
	// 	extensions: ['position-right'],
	// 	navbar: {
	// 		title: "Меню"
	// 	}
	// });

	// var api = $("#my-menu").data("mmenu");
	
	// $('.mm-page__blocker').click(function(){
	// 	$('.toggle-mnu').removeClass('on');
	// });

	// $('.mm-page__blocker').click(function(){
	// 	$('.mm-menu').toggleClass('mm-menu_opened');
	// });

	$(".btn_go, .go_2, .btn_reg, .restor").magnificPopup();

	
})

