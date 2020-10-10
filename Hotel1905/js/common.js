$(function() {

	$('.owl-rooms').owlCarousel({
    items: 2,
    margin: 100,
		nav: true,
		dots: false,
		responsive: {
			0: {
				items: 1,
				margin: 0
			},
			992: {
				items: 2,
				margin: 100
			}
		}
  })

	$('.owl-events').owlCarousel({
		items: 1,
		dots: true,
		nav: true
	})

	$('.owl-double').owlCarousel({
		items: 1,
		dots: true,
		nav: true
	})

	$('.owl-full').owlCarousel({
		items: 1,
		dots: true,
		nav: true
	})


	$('.menu-btn').click(function(e){
		$('.header-line--second').toggleClass('menu-opened');
	})


	$(window).scroll(function() {
		if($(window).scrollTop() > 250){
			$('.header-line--second').addClass('scrolled');
		}else{
			$('.header-line--second').removeClass('scrolled');
		}
	});

	$(".btn-thank, .btn-reserv").magnificPopup();

	$('.open-f').click(function(e) {
		e.preventDefault();
		$(this).closest('.mini-post').find('.wrapper-img').toggleClass('wrapper-active');
	})

	$('.ico-close').click(function(){
		$(this).closest('.mini-post').find('.wrapper-img').removeClass('wrapper-active');
	});


	$('.price-item--title').click(function(){
		$(this).parent().find('.price-item--content').slideToggle();
	})

	$('.price-item--list li').click(function(){
		$('.price-item--list li').removeClass('active');
		$(this).addClass('active');
		var index = $(this).index() + 1;
		$('.price-item--mini__list .price-item--mini.active').removeClass('active');
		$('.price-item--mini__list .price-item--mini:nth-child(' + index + ')').addClass('active');
	})


	$('.btn-open-booking').click(function(e){
		e.preventDefault();
		$('.modal-booking').addClass('active');

	})

	$('.modal-close').click(function(){
		$(this).closest('.modal').removeClass('active');
	})

	$('.guest-calc').click(function(){
		var numItem = $(this).closest('.date-item__guest').find('.num');
		var num = Number(numItem.text());
		console.log(num);
		if($(this).hasClass('guest-calc--plus')){
			num += 1;
		}else {
			if(num!=1){
				num -=1
			}

		}
		numItem.text(num);
	})

var monthNames = ['Январь','Февраль','Март','Апрель','Май','Июнь',
		'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];

	$.datepicker.setDefaults(
                {
                closeText: 'Закрыть',
                prevText: '',
                currentText: 'Сегодня',
                monthNames:  monthNames,
                monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                    'Июл','Авг','Сен','Окт','Ноя','Дек'],
                dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
                dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
                dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
            });



	$('.date-item--date .date-item--content').click(function(){
		$(this).find('.datepicker').datepicker({
			onSelect : function(dateText, inst){
				var date = new Date(dateText);
				var monthNum = date.getMonth();
				$(this).closest('.date-item--date').find('.num').text(date.getDate());
				$(this).closest('.date-item--date').find('.month').text(monthNames[monthNum]);
				$('.ui-datepicker').removeClass('active');
	    }
		});
	})

	$(document).mouseup(function (e) {
	    var container = $(".ui-datepicker");
	    if (container.has(e.target).length === 0){
	        container.hide();
	    }
	});


	$('.modal-booking .btn').click(function(e){
		e.preventDefault();
		$(this).closest('.modal').removeClass('active');
	})



});
