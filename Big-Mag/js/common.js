$(function() {

	// $('.category_arr').click(function(){
	// 	$('.category_content').slideToggle();
	// })

	$('.owl-long').owlCarousel({
		items: 1,
		dots: true,
		nav: true
	});

	$('.owl-products').owlCarousel({
		items: 3,
		dots: false,
		nav: true,
		margin: 20,
		responsive:{
			0:{
				items: 1
			},
			480:{
				items: 2
			},
			992:{
				items: 3,
				margin: 10
			}
		},
	});

	var num = $('#number');
	$('.minmax').on('click', function(){
		var newVal = +num.val() - ($(this).val().charCodeAt(0) -44);
		if( newVal < 0) newVal = 0;
		num.val( newVal);
	});

	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});

	// $('.catalog-sm').click(function(){
	// 	$('.menu')toggleClass('active');
	// });

	$('.catalog-sm').click(function(){
		$('body').addClass('over-hid');
	});

	$('.overlay, .catalog').click(function(){
		$('body').removeClass('over-hid');
	});

	$('.catalog-sm').click(function(){
		$('.menu').addClass('active');
		$('.overlay').show();
	});

	$('.overlay, .catalog').click(function(){
		$('.menu').removeClass('active');
		$('.overlay').hide();
	});

	$('select').styler();



});
