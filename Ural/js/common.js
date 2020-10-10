$(function() {

	var owl2 = $(".owl-2");
	var owl3 = $(".owl-3");
	$(".owl-1").owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		// autoplay: true,
		autoplayTimeout: 3000,
		autoplaySpeed: 1500,
		loop: true
	});

	owl2.owlCarousel({
		items: 1,
		nav: true,
		dots: false
	});

	owl3.owlCarousel({
		items: 6,
		nav: false,
		dots: false,
		margin: 30, 
		responsive:{
			0:{
				items: 4,
				margin: 10
			},
			480:{
				items: 4,
				margin: 10
			},
			992:{
				items: 6,
				margin: 10
			}
		}
	});


	owl2.on('change.owl.carousel', function(event) {
		var index = event.property.value
		$('.owl-3 .owl-item').removeClass('selected')
		$('.owl-3 .owl-item:nth-child(' +(index +1) + ')').addClass('selected')
		owl3.trigger('to.owl.carousel', [index -2, 300])
	})

	owl3.find('.owl-item:nth-child(1)').addClass('selected')


	owl3.find('.owl-item').click(function(){
		var index = $(this).index()
		owl2.trigger('to.owl.carousel', [index, 300]);
	})

	$('.mobile_menu').click(function(){
		$('.mobile_menu, div.navbar').toggleClass('active');
		$('body').toggleClass('over-hid');
		// $('.header').toggleClass('stat');
	});

	// $(".show_galle").not(":first").hide();
	// $(".tabs .thumb").click(function() {
	// 	$(".tabs .thumb").removeClass("active").eq($(this).index()).addClass("active");
	// 	$(".show_galle").hide().eq($(this).index()).fadeIn()
	// }).eq(0).addClass("active");

	$('.color').click(function(e){
		e.preventDefault()
		var href = $(this).attr('href');
		$('.color').removeClass('active')
		$('.color_model').removeClass('active')
		$(this).addClass('active')
		$(href).addClass('active')
		return;
	})

	$('select').styler();


	if(window.matchMedia("(max-width: 768px)").matches){
		$('.owl_mobile, .owl_mobile_spec, .owl_mobile_compar').addClass('owl-carousel');
		$('.owl_mobile, .owl_mobile_spec, .owl_mobile_compar').owlCarousel({
			items: 1,
			nav: true,
			dots: false
		});
	};


	// $('.mobile_menu').click(function(){
	// 	$('.header .navbar').addClass('active');
	// });

	// $('.mobile_menu').click(function(){
	// 	$('.header .navbar').removeClass('active');
	// });



	// the following to the end is whats needed for the thumbnails.
// jQuery( document ).ready(function() {


	// 1) ASSIGN EACH 'DOT' A NUMBER
	// dotcount = 1;

	// jQuery('.owl-2 .owl-dot').each(function() {
	// 	jQuery( this ).addClass( 'dotnumber' + dotcount);
	// 	jQuery( this ).attr('data-info', dotcount);
	// 	dotcount=dotcount+1;
	// });

	// // 2) ASSIGN EACH 'SLIDE' A NUMBER
	// slidecount = 1;

	// jQuery('.owl-2 .owl-item').not('.cloned').each(function() {
	// 	jQuery( this ).addClass( 'slidenumber' + slidecount);
	// 	slidecount=slidecount+1;
	// });

	// // SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
	// jQuery('.owl-2 .owl-dot').each(function() {

	// 	grab = jQuery(this).data('info');

	// 	slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
	// 	console.log(slidegrab);

	// 	jQuery(this).css("background-image", "url("+slidegrab+")");  

	// });

	// THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
	// TO MAKE IT ALL NEAT 
	// amount = jQuery('.owl-2. owl-dot').length;
	// gotowidth = 100/amount;

	// jQuery('.owl-2 .owl-dot').css("width", gotowidth+"%");
	// newwidth = jQuery('.owl-dot').width();
	// jQuery('.owl-2 .owl-dot').css("height", newwidth+"px");



	// });



});
