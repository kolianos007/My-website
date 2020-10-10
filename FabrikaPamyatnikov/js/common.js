$(function() {

	if(window.matchMedia("(max-width: 576px)").matches){
		$('.list__item').addClass('list');
	};

	// меня акордеон
	var mainNav = $('.acordeon');
	$('.list').hide();
	$('.acordeon').click(function(e) {
		e.preventDefault();
	});
	mainNav.click(function() {
		$(this).siblings('.list').slideToggle(1000, 'swing');
	});



	//всплывающие окна
	$(".communications__link").magnificPopup();
	$(".basket-main__thank").magnificPopup();



	//Owl-carousel
	$(".slider-owl").owlCarousel({
		loop: true,
		items: 1,
		nav: true,
		dots: false
	});

	$(".slider-goods").owlCarousel({
		loop: true,
		items: 4,
		margin: 15,
		nav: false,
		dots: true,
		responsive:{
			0:{
				items: 1
			},
			576:{
				items: 3
			},
			992:{
				items: 4
			}
		},
		// autoplay: true
	});

	$(".slider-card").owlCarousel({
		loop: true,
		items: 3,
		margin: 30,
		nav: false,
		dots: true,
		responsive:{
			0:{
				items: 2
			},
			576:{
				items: 2
			},
			768:{
				items: 2
			},
			992:{
				items: 3
			}
		},
		// autoplay: true
	});


	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");




 // $(".tab_item").not(":first").hide();
 // $(".wrapper .tab").click(function() {
 // 	$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
 // 	$(".tab_item").hide().eq($(this).index()).fadeIn()
 // }).eq(0).addClass("active");



// 	if(window.matchMedia('(max-width: 576px)').matches)
// {
// 	$('.top-line__item-button').click(function(){
// 		$('.contacts-item p').hide();
// 		$(this).closest('.contacts-item').find('p').show();
// 	})
// }






	//мменю
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

	// $(".mobile-mnu").click(function() {
	// 	var mmAPI = $("#my-menu").data("mmenu");
	// 	mmAPI.open();
	// 	var thiss = $(this).find(".toggle-mnu");
	// 	thiss.toggleClass("on");
	// 	$(".main-mnu").slideToggle();
	// 	return false;
	// });


	//  $(".toggle-mnu").click(function() {
	// 	$(this).toggleClass("on");
	// });

	$('.mobile-mnu').click(function(){
		$('.nav-m').toggleClass('active');
		$(".toggle-mnu").toggleClass("on");
		// $('.overlay').show();	
	});


	$('.ico-close').click(function(){
		$('.nav-m').removeClass('active');
		// $('.overlay').hide();
	});
	//  $(".toggle-mnu").click(function() {
	// 	$(this).removeClass("on");
	// });

	// $('.mobile-mnu').click(function(){
	// 	$('.nav').removeClass('active');
	// });




		// active
		var basket = document.getElementById("basket__act");
		var tab = basket.getElementsByClassName("basket__tab");
		for (var i = 0; i < tab.length; i++) {
			tab[i].addEventListener("click", function() {
				var current = document.getElementsByClassName("active");
				current[0].className = current[0].className.replace(" active", "");
				this.className += " active";
			});
		};




	});
