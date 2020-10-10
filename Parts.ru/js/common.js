$(function() {

	$('.header-slider--js').show().slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		arrows: false,
		// appendDots: $('.header-slider_slide .slider-info')
	});

	$('.slider-multi--js').show().slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		arrows: false,
	});

	$('.slider-multi .arr-left').click(function(){
  	$('.slider-multi--js').slick('slickPrev');
	});

	$('.slider-multi .arr-right').click(function(){
  	$('.slider-multi--js').slick('slickNext');
	});



	$('.model-slider--js').show().slick({
		dots: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		infinite: false,
		arrows: true,
		prevArrow: '<div class="prev"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
		nextArrow: '<div class="next"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true,
					arrows: false
				}
			}
		]
	});

	$('.sertificat-slider--js').slick({
		dots: false,
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		prevArrow: '<div class="prev"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
		nextArrow: '<div class="next"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
		// autoplay: true,
		// autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					sliderToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
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

	// $(window).resize(function() {
 //    if ($(window).width() < 768) {
 //     $('.row.acord').addClass('mobile');
 //    }
 //    else {$('.row.acord').removeClass('mobile');}
 // 	});

	$(".accordion--js").click(function(){
    $(".acord-button--js").slideToggle({
      direction: "up"
   	}, 3000);
   	$(".accordion--js").toggleClass("hidden");
  });

  // $(".table_row .table_row-title, .drop-up--js").click(function(){
  //   $(".table_row .table-mob_wrap").slideToggle();
  // });

  // $('.accordion').find('.content').hide();

    //Аккордеон
  $('.table_row').find('.table_row-title, .drop-up--js').click(
    function()
    {
      var next = $(this).next();
      next.slideToggle('fast');
      $('.table-mob_wrap').not(next).slideUp('fast');
      return false;
    }
  );

  $('#callback-popup button').click(function(){
  	$.fancybox.close();
	});


 //  if ($(window).width() < 992) {
 //  	$('a.no-link').click(
 //  		function(e) {
 //    		e.preventDefault();
 //  		}
	// 	);
	// };

	// var button = $('#button-menu');
	//     menu        = $('nav .nav_list');
	//     menuHeight  = menu.height();
	// $(button).on('click', function(e) {
 //    e.preventDefault();
 //    menu.slideToggle();
	// });

	// $('.nav_item-sub').click(function(){
	// 	$(this).toggleClass('active');
	// 	$(this).find('ul').slideToggle();
	// });

  var ww = document.body.clientWidth;
  $(".mobile-menu--js").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav_list").toggle();
	});
  if (ww < 992) {
      $(".mobile-menu--js").css("display", "inline-block");
      $(".nav_list .no-link").click(function(e) {
      		e.preventDefault();
          $(this).parent("li").toggleClass('hover');
      });
  } else {
      $(".mobile-menu--js").css("display", "none");
      $(".nav_list li").hover(function() {
          $(this).addClass('hover');
      }, function() {
          $(this).removeClass('hover');
      });
  };

  $('select').styler();

  $('.card-for').slick({
  	slidesToShow: 1,
  	slidesToScroll: 1,
  	arrows: false,
  	asNavFor: '.card-nav'
  });
  $('.card-nav').slick({
  	slidesToShow: 3,
  	slidesToScroll: 1,
  	asNavFor: '.card-for',
  	arrows: true,
  	prevArrow: '<div class="prev"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
		nextArrow: '<div class="next"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					sliderToScroll: 1,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					sliderToScroll: 1,
				}
			},
		]
  });

  $('.slider-others').slick({
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	arrows: true,
   	prevArrow: '<div class="prev"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
		nextArrow: '<div class="next"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					sliderToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					sliderToScroll: 1,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					sliderToScroll: 1,
				}
			},
		]
  });

  $('.series-slider').slick({
  	slidesToShow: 4,
  	slidesToScroll: 1,
  	arrows: true,
  	prevArrow: '<div class="prev"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
		nextArrow: '<div class="next"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
		focusOnSelect: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 3,
					sliderToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					sliderToScroll: 1,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					sliderToScroll: 1,
				}
			},
		]
  });

  new WOW().init();

	$('.carousel').carousel({
		padding: 120,
		numVisible: 7,
	});

	setInterval(function(){
		$('.carousel').carousel('next');
	}, 3000);


	// var carousel_interval = 2000;
 //  var int;
 //  function run(){
 //    int = setInterval(function()
 //    { 
 //      $('.carousel').carousel('next');
 //    }, carousel_interval);
 //  }
 //  function stop(){
 //    clearInterval(int);
 //  }
 //  $('.carousel').hover(stop, run);  
 

 	if(window.matchMedia('(max-width: 1200px) and (min-width: 993px)').matches){
		$('.slider-advantage--js').slick({
			dots: true,
			arrows: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			prevArrow: '<div class="prev"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
			nextArrow: '<div class="next"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
			focusOnSelect: true,
						// autoplay: true,
  	// 	autoplaySpeed: 2000
		})
	};

	if(window.matchMedia('(max-width: 992px) and (min-width: 769px)').matches){
		$('.slider-advantage--js').slick({
			dots: true,
			arrows: true,
			slidesToShow: 3,
			slidesToScroll: 3,
			prevArrow: '<div class="prev"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
			nextArrow: '<div class="next"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
			focusOnSelect: true,
						// autoplay: true,
  	// 	autoplaySpeed: 2000
		})
	};

	if(window.matchMedia('(max-width: 768px) and (min-width: 577px)').matches){
		$('.slider-advantage--js').slick({
			dots: true,
			arrows: true,
			slidesToShow: 2,
			slidesToScroll: 2,
			prevArrow: '<div class="prev"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
			nextArrow: '<div class="next"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
			focusOnSelect: true,
						// autoplay: true,
  	// 	autoplaySpeed: 2000
		})
	};

	 	if(window.matchMedia('(max-width: 576px)').matches){
		$('.slider-advantage--js').slick({
			dots: true,
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: '<div class="prev"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
			nextArrow: '<div class="next"><svg class="arr"><use xlink:href="../img/arrow-right.svg#arr"></svg></div>',
			focusOnSelect: true,
						// autoplay: true,
  	// 	autoplaySpeed: 2000
		})
	};

});
