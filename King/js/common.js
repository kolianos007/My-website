$(function() {

	$('.tabs a').click(function() {
		let id  = $(this).attr('data-tab')
		let content = $('.tab[data-tab="'+ id +'"]')

		$('.tabs a.active').removeClass('active')
		$(this).addClass('active')

		$('.tab.active').removeClass('active')
		content.addClass('active')
	})



	$('#form-registration-js .form_tab-item').click(function(){
		let id = $(this).attr('data-tab')
		let cont = $('#form-registration-js .form_tab-content[data-tab="'+ id +'"]')


		$('#form-registration-js .form_tab-item.active').removeClass('active')
		$(this).addClass('active')

		$('#form-registration-js .form_tab-content.active').removeClass('active')
		cont.addClass('active')
	})

	$('#form-log-js .form_tab-item').click(function(){
		let id = $(this).attr('data-tab')
		let cont = $('#form-log-js .form_tab-content[data-tab="'+ id +'"]')


		$('#form-log-js .form_tab-item.active').removeClass('active')
		$(this).addClass('active')

		$('#form-log-js .form_tab-content.active').removeClass('active')
		cont.addClass('active')
	})

	$('.checkbox').styler()



	$('.btn_slide').click(function() {
		let act = $(this).closest('.bonus-item').find('.bonus_slide')
			$(act).addClass('active')
	})

	$('.close-js').click(function() {
		let act = $(this).closest('.bonus-item').find('.bonus_slide')
		$(act).removeClass('active')
	})

	$('.slider-review').slick({
		slidesToShow: 3,
		dots: true,
		nextArrow: '<div class="next"></div>',
		prevArrow: '<div class="prev"></div>',
		infinite: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
				},
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				},
			}
		]
	})

	$('.text-wrap').mCustomScrollbar({
		axis: 'y',
		theme: 'dark'
	})

	$('.js-menu').click(function() {
		$('.js-menu, nav, body').toggleClass('active')
		// $('nav.active').slideToggle()
	})

	$('#form-registration-js').validate({
		errorPlacement: function(error, element) {
			if(element.attr('name') == 'check') {
				error.insertAfter('.input-wrap-checkbox')
			} else {
				error.insertAfter(element)
			}
		},
		rules: {
			email:{
				// required: true,
				email: true
			},
			pass:{
				required: true,
			},
			phone:{

			},
			check:{
				required: true,
			}
		},
		messages: {
			email:{
				required: 'Это поле обязательно для заполнения',		
				email: 'Введите правильное название почты'	
			},
			pass:{
				required: 'Это поле обязательно для заполнения',
			},
			check:{
				required: 'Это поле обязательно для заполнения',
			},
		}
	})

	$('#form-log-js').validate({
		rules: {
			email2:{
				// required: true,
				email: true
			},
			pass2:{
				required: true,
			},
			phone2:{

			},
		},
		messages: {
			email2:{
				required: 'Это поле обязательно для заполнения',		
				email: 'Введите правильное название почты'	
			},
			pass2:{
				required: 'Это поле обязательно для заполнения',
			},
		}
	})

	$.validator.addClassRules(('email' || 'phone'), {
		required: true
	})

	$('input[name="phone"], input[name="phone2"]').mask('+38099-99-99-999')

	$('.eye').click(function() {
		let pass = $('#pass')
		$(this).toggleClass('active')
		$('.eye').toggleClass('hidden')
		if(pass.attr('type') === 'password') {
			pass.attr('type', 'text') 
		} else {
			pass.attr('type', 'password') 
		}
	})


});
