$(function() {

	// $('.callback').trigger('reset');
	// $(function() {
	//   'use strict';
	//   $('.callback').on('submit', function(e) {
	//     e.preventDefault();
	//     $.ajax({
	//       url: 'send.php',
	//       type: 'POST',
	//       contentType: false,
	//       processData: false,
	//       data: new FormData(this),
	//       success: function(msg) {
	//         console.log(msg);
	//         if (msg == 'ok') {
	//           alert('Сообщение отправлено');
	//           $('.callback').trigger('reset'); // очистка формы
	//         } else {
	//           alert('Ошибка');
	//         }
	//       }
	//     });
	//   });
	// });

	// $(function() {
	// 	$('.callback').submit(function() {
	// 		var data = $('.callback').serialize();
	// 		$.ajax({
	// 			url: 'send.php',
	// 			type: 'POST',
	// 			data: data,
	// 			success: function(msg) {

	// 			},
	// 			error: function({
	// 				alert('Ошибка');
	// 			})
	// 		});
	// 		return false;
	// 	});
	// });

	var tabs = $('#tabs');
  $('.tabs_content > div', tabs).each(function(i){
    if ( i != 0 ) $(this).hide(0);
  });
  tabs.on('click', '.tabs a', function(e){
      /* Предотвращаем стандартную обработку клика по ссылке */
    e.preventDefault();

      /* Узнаем значения ID блока, который нужно отобразить */
    var tabId = $(this).attr('href');

      /* Удаляем все классы у якорей и ставим active текущей вкладке */
    $('.tabs a',tabs).removeClass();
    $(this).addClass('active');

      /* Прячем содержимое всех вкладок и отображаем содержимое нажатой */
    $('.tabs_content > div', tabs).hide(0);
    $(tabId).show();
  });

  $("#menu, .header_bot-wrap").on("click","a:not(.lnk)", function (event) {
	// 	//отменяем стандартную обработку нажатия по ссылке
	// 	event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 500);
	});


	$('.accordion').find('.accordion_header').click(
    function()
    {
      var next = $(this).next();
      next.slideToggle('fast');
      $('.accordion_content').not(next).slideUp('fast');
      return false;
    }
  );

  $('.accordion_header').click(
  	function()
  	{
  		$(this).toggleClass('active');
  	}
  );

  $('.review-slider').slick({
  	arrows: true,
  	// autoplay: true,
  	// autoplaySpeed: 3000,
  	slidesToShow: 2,
  	slidesToScroll: 2,
  	prevArrow: '<div class="prev"><i class="fas fa-arrow-left"></i></div>',
  	nextArrow: '<div class="next"><i class="fas fa-arrow-right"></i></div>',
  	responsive: [
  		{
  			breakpoint: 767,
  			settings: {
  				slidesToShow: 1,
  				slidesToScroll: 1
  			}
  		}
  	]
  });

  var cStars = function(NowPos) {
	$('.popup .review_rait .fas').removeClass('active');
	for(var i = 0; NowPos.index()+1 > i; i++)
	  $('.popup .review_rait .fas').eq(i).toggleClass('active');
	}

	// При наведении
	$('.popup .review_rait .fas').hover(function() {
		var NowPos = $(this);
		cStars(NowPos);
	});

	// При клике
	$('.popup .review_rait .fas').click(function() {
		var NowPos = $(this);
		cStars(NowPos);
	});


	$(function() {
		$('.nav_icon').on('click', function() {
			$(this).closest('.nav').toggleClass('nav_open')
		})
	})

	$('.more_problem a').click(function(e) {
		e.preventDefault();
		$('.more_problem a').toggleClass('active');
		$('.accordion_wrap').slideToggle('.accordion_wrap-open')
	})

});
