$(function() {

	$('.flexslider').flexslider({
		animation: "slide",
		directionNav: false,
		touch: true
	});

	//   $('.last-wrap').flexslider({
	// 	animation: "slide",
	// 	directionNav: false,
	// 	touch: false,
	// 	controlNav: false,
	// 	animationLoop: false,
	// 	slideshow: false,
	// 	itemWidth: 263,
	// 	itemMargin: 29,
	// 	touch: true,
	// 	maxItems: 4
	//   });

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:29,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			768:{
				items:3
			},
			992:{
				items:4
			},
		}
	});

	$('select').styler();


	$(document).mouseup(function (e){
		var div = $(".top-catalog-wrap .top-catalog-wrap-menu");
		if (!div.is(e.target)
			&& div.has(e.target).length === 0
			&& $('.top-catalog-wrap').hasClass('open-menu')) {
			setTimeout(function(){
				$('.top-catalog-title').removeClass('open');
				$('.top-catalog-wrap').removeClass('open-menu');
			},1)
	}
});
	$('.top-catalog-title').click(function(){
		$('.top-catalog-title').toggleClass('open');
		$('.top-catalog-wrap').toggleClass('open-menu');
	});



	$('.dropdown-title').click(function(){
		var element = $(this);
			$(this).find('+ .dropdown-wrap').toggle();
			$(document).mouseup(function (e){ // событие клика по веб-документу
				var div = element; // тут указываем ID элемента
				if (!div.is(e.target) // если клик был не по нашему блоку
						&& div.has(e.target).length === 0) { // и не по его дочерним элементам
						element.parent().find('.dropdown-wrap').hide(); // скрываем его
				}
			});
	});





	$('.moreless-button').click(function() {
		$(this).closest('.instruction-text').find('.moretext').slideToggle();
		if ($(this).closest('.instruction-text').find('.moreless-button').text() == "читать полностью") {
			$(this).text("скрыть")
		} else {
			$(this).text("читать полностью");
		}
	});

	if(window.matchMedia("(max-width: 768px)").matches){
		$('.owl-mobile').addClass('owl-carousel');
		$('.owl-mobile').owlCarousel({
			items: 2,
			nav: false,
			dots: true,
			margin:15
		});
		$('.menu-item-title').click(function(){
			$(this).find('+ .sub-menu').toggle();
		})
	};


	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})



	$('.more-dropdown-bottom-counter').each(function(){
		var element = $(this);
		var amountEl = element.find('.amount');
		var amount = Number(amountEl.text());
		$(this).find('.minus').click(function(){
			if(amount > 0){
				amount--;
				amountEl.text(amount);
			}
		})
		$(this).find('.plus').click(function(){
			amount++;
			amountEl.text(amount);
		})
	})

	$('.more-dropdown-wrap li').each(function(){
		var plusCount = Number($(this).attr('plus'));
		var amountEl = $(this).parent().parent().find('.more-dropdown-bottom-counter .amount');
		$(this).find('.plus a').click(function(e){
			e.preventDefault();
			var amountVal = Number(amountEl.text());
			console.log(amountVal);
			amountEl.text(amountVal + plusCount)
		})
		// console.log(plusCount)
	})


	$('.owl-carousel .item').hover(function(){
    var carousel = $(this).closest('section')
    carousel.css({'z-index': '999'})
    carousel.find('.owl-carousel').css({'padding-bottom': '200px'})
    carousel.find('+ *').css({'margin-top': '-200px'})
  }, function() {
    var carousel = $(this).closest('section')
    carousel.css({'z-index': '1'})
    carousel.find('.owl-carousel').css({'padding-bottom': '0'})
    carousel.find('+ *').css({'margin-top': '0'})
  })

	$(window).scroll(function() {
    var top = $(document).scrollTop();
    if (top > 50){
			$(".top").addClass('fixed');
			$('.header').css({'padding-top': 50});
			setTimeout(() => {
				$(".top").addClass('fixed-anim');

			},1)

		} else {
			$(".top").removeClass('fixed');
			$(".top").removeClass('fixed-anim');
			$('.header').css({'padding-top': 0});
		}
	});

	if (window.matchMedia("(max-width: 768px)").matches) {
		$('.top-search-input > .input-btn').click(function(e){
			e.preventDefault();
			$('.top-search-input').addClass('active');
			$('.top-catalog-title').addClass('hide');
		})

		$(document).mouseup(function (e){ // событие клика по веб-документу
			var div = $(".top-search-input"); // тут указываем ID элемента
			if (!div.is(e.target) // если клик был не по нашему блоку
			    && div.has(e.target).length === 0) { // и не по его дочерним элементам
				div.removeClass('active'); // скрываем его
				$('.top-catalog-title').removeClass('hide');
			}
		});
	}


	$('.cart-table--item .delete').click(function(){
		var parentItem = $(this).closest('.cart-table--item');
		parentItem.remove();
	})




});
