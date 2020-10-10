$(function() {

	$('.main-slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		infinite: true,
	})

	$('.event-stream-list').slick({
		arrows: false,
		dots: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		infinite: true,
		draggable: false,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 1220,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			},
		],
	})

	$('.head-control-panel__nav-bar').click(function(){
		$('.side-menu').addClass('active')
		$('body').addClass('active')
	})

	$('.icon-close-menu').click(function(){
		$('.side-menu').removeClass('active')
		$('body').removeClass('active')
	})

	setInterval(function(){
		let val = $('.jackpot__total').attr('data-value')
		let plusR = (10 + Math.random() * (100 + 1 - 10)).toFixed(2)
		console.log(plusR)
		val = (+val + +plusR).toFixed(2).toString()
		console.log(val)
		let modern = val.slice(0,2) + ',' + val.slice(2,5) + ',' + val.slice(5,8)  +  val.slice(8)
		$('.jackpot__total').text(modern)
		val = $('.jackpot__total').attr('data-value', val)
	},3000)
});
