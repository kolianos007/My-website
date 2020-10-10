$(function() {

	// Custom JS

	var scrolled;
	window.onscroll = function() {
		scrolled = window.pageYOffset || document.documentElement.scrollTop;
		if(scrolled > 350){
			$(".scroll").addClass("active");
		}
		if(350 > scrolled){
			$(".scroll").removeClass("active"); 
		}
	}

	$('.slick-vertical').slick({
		mobileFirst: true,
		arrows: true,
		dots: true,
		slidesToShow: 1,
		// infinite: false,
		responsive: [
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 1365,
				settings: {
					vertical: true,
					verticalSwiping: true,
					slidesToShow: 4,
					dots: false,
					focusOnSelect: true,
					asNavFor: '.slick-big'
				}
			}
		]
	})

	$('.slick-big').slick({
		mobileFirst: true,
		slidesToShow: 1,
		dots: false,
		arrows: false,
		fade: true,
		asNavFor: '.slick-vertical'
	})



	$('.catalog_carousel').owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			568: {
				items: 2,
				margin: 15
			},
			992: {
				items: 3,
				margin: 20
			},
			1200: {
				items: 4,
				margin: 30
			}
		}
	})



	$('.owl_trust').owlCarousel({
		items: 1,
		nav: true,
		margin: 30,
		responsive: {
			0: {
				items: 1,
			},
			568: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	})

	$('.acordeon .acordeon_title').on('click', fSlToggle);

	function fSlToggle(){
		$(this).toggleClass('active')
	  $('#acordeon .acordeon_list').not($(this).next()).slideUp(500);
	  	$(this).next().slideToggle(500);
	}



	var newsCarousel = $('.news_carousel')
	newsCarousel.owlCarousel({
		items: 1,
		nav: true,
		dots: false,
	})

	$('#news_nav .news_nav-item').on('click',function(e) {
		e.preventDefault()
		const index = $(this).index()
		$('.tabs .tab').removeClass('active')
		console.log(index)
		$('.tabs .tab:nth-child(' + (index + 1) +')').addClass('active')

		var nav = $('#news_nav')
		nav.find('.news_nav-item.active').removeClass('active')

		$(this).addClass('active')
		var position = $(this).position().left
		var elementWidth = $(this).width()
		$('#news_nav-wrapper').animate({scrollLeft: position - (elementWidth / 2)}, 300)
		// newsCarousel.trigger('to.owl.carousel', [index, 300])

	})

	$('.lang .lang_item').on('click', function(e) {
		e.preventDefault()
		$(this).parent().find('.lang_item.active').removeClass('active')
		$(this).addClass('active')
	})

	$('.menu_item-toggle').on('click', function() {
		var menuItem = $(this).closest('.menu_item')
		menuItem.toggleClass('expanded')
		menuItem.find('.menu_item-submenu').slideToggle()
	})

	$('.menu_btn').on('click', function(e) {
		e.preventDefault()
		$('.menu_wrapper').addClass('active')
		$('body').addClass('hidden')
	})

	$('.menu_close-btn').on('click', function(e) {
		e.preventDefault()
		$('.menu_wrapper').removeClass('active')
		$('body').removeClass('hidden')
	})

	$('.search_btn').click(function(e){
		e.preventDefault()
		$('.search_input').toggleClass('active')
	})


	$('.desctop_category').on('click', function() {
		var image = $(this).attr('data-image')
		$('.desctop_category').removeClass('active')
		$(this).addClass('active')
		$('.category_main-image').css({'background-image': 'url( ' +image +')'})
	})

	$('.open-dropdown').on('click', function() {
		$(this).find('.dropdown').slideToggle()
	})

	if(window.matchMedia('(min-width: 1200px)').matches){
		$('.dropdown').removeClass('d-vis');
	}


	$('[data-fancybox="images"]').fancybox({
		protect    : true,
		slideClass : 'images',
		toolbar    : false,
		smallBtn   : true
	})


	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
		$('.scroll').fadeIn();
		} else {
		$('.scroll').fadeOut();
		}
		});
		$('.scroll').on('click', function() {
		$('body,html').animate({scrollTop:0},800);
	})


	// Komment

	$('.search_form .search_form-input').focus(function() {
		$(this).closest('.search_form').find('.search_form-dropdown').addClass('active')
	})

	$('.search_form .search_form-input').focusout(function() {
		$(this).closest('.search_form').find('.search_form-dropdown').removeClass('active')
	})

	$('.product-row--has-info .btn').on('click', function(e) {
		e.preventDefault()
		console.log('f')
		var parent = $(this).closest('.product-row')
		parent.find('.product-row--info').slideToggle()
		parent.toggleClass('active')
	})

	$('.filters-item--title').on('click', function() {
		var parent = $(this).parent()
		parent.find('.filters-item--wrapper').slideToggle()
		parent.toggleClass('active')
	})

	$('.more_block').on('click', function() {
		var parent = $(this).parent()
		parent.find('.more_block--wrap').slideToggle()
		parent.toggleClass('active')
	})

	$('#view, #check, #status').styler();
	
	$('input:checkbox').change(function() {
  if ($(this).is(':checked')) {
    $(this).closest('label').addClass('checked');
  } else {
    $(this).closest('label').removeClass('checked');
  }
	})

	$('.pass--log').on('click', function(e){
		e.preventDefault()
		$('.pass--log').toggleClass('active')
	})

	$('.pass--registr').on('click', function(e){
		e.preventDefault()
		$('.pass--registr').toggleClass('active')
	})

	$('.pass-check').on('click', function(e){
		e.preventDefault()
		$('.pass-check').toggleClass('active')
	})

	// var basket = $("#tab_registr--form");
	// var tab = basket.find(".tab_registr");
	// 	for (var i = 0; i < tab.length; i++) {
	// 		tab[i].addEventListener("click", function() {
	// 		var current = document.getElementsByClassName("active");
	// 		current[0].className = current[0].className.replace(" active", "");
	// 		this.className += " active";
	// 	});
	// }

	$(".tab_registr--item").not(":first").hide();
	$(".tab_registr").on('click', function() {
		$(".tab_registr").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_registr--item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active")


	$('.pass-eye').on('click', function(){
		var input = $(this).parent().find('.password')
		var inputType = input.attr('type')
		if(inputType == 'password') {
			input.attr('type', 'text')
		} else{
			input.attr('type', 'password')
		}
	})

});
