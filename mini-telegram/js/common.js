$(function() {

	// $("#mcs_container").mCustomScrollbar({
	//  	scrollInertia: 200
	// });

	// $(".tab-content_post-scroll--js").mCustomScrollbar({
	//  	scrollInertia: 200,
	//  	setTop: '-9999px'
	// });

	(function lastTime(){
		let tabIndex = Array.from(document.querySelectorAll('.tab .tab_time span:first-child'))
		let tabContentIndex = Array.from(document.querySelectorAll('.tab-content .posts-item-wrap:last-child .post_time-tick'))
		tabContentIndex.forEach(function(item, i){
			let dataVal = item.dataset.time
			tabIndex[i].innerHTML = dataVal
		})
	})()

	function amountPost(){
		let tabContent = Array.from(document.querySelectorAll('.tab-content'))
		let tabAmountPost = Array.from(document.querySelectorAll('.tab .tab_time span:last-child'))
		tabContent.forEach((item, i)=>{
			let lengthPost = item.querySelectorAll('.posts-item-wrap').length
			tabAmountPost[i].textContent = lengthPost
		})
	}

	amountPost()


	//генерим чтобы дата была не старее 4 дней

	let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

	let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

	let date = new Date()


	function getDate(){
		$('.posts_data').each(function(i,el){
			let date = new Date()
			if($(el).hasClass('posts_data-3')) {
				date.setDate(date.getDate() - 3)
				month = date.getMonth()
				day = date.getDay()
				dateNumber = date.getDate()
				year = date.getFullYear()
				let format = week[day] + ', ' + months[month] + ' ' + dateNumber + ', ' + year
				$(el).text(format)
			} else if($(el).hasClass('posts_data-2')){
				date.setDate(date.getDate() - 2)
				month = date.getMonth()
				day = date.getDay()
				dateNumber = date.getDate()
				year = date.getFullYear()
				let format = week[day] + ', ' + months[month] + ' ' + dateNumber + ', ' + year
				$(el).text(format)
			} else if($(el).hasClass('posts_data-1')){
				date.setDate(date.getDate() - 1)
				month = date.getMonth()
				day = date.getDay()
				dateNumber = date.getDate()
				year = date.getFullYear()
				let format = week[day] + ', ' + months[month] + ' ' + dateNumber + ', ' + year
				$(el).text(format)
			} else {
				let date = new Date()
				month = date.getMonth()
				day = date.getDay()
				dateNumber = date.getDate()
				year = date.getFullYear()
				let format = week[day] + ', ' + months[month] + ' ' + dateNumber + ', ' + year
				$(el).text(format)
			}
		})

		// if($('.posts_data').hasClass('posts_data-3')) {
		// 	date.setDate(date.getDate() - 3)
		// 	let format = week[day] + ', ' + months[month] + ' ' + dateNumber + ', ' + year
		// 	$('.posts_data').text(format)
		// }
	}

	// 	$('.posts_data-3').text(week[day] + ', ' + months[month] + ' ' + (dateNumber - 3) + ', ' + year)
	// }

	getDate()



	// let timeLastPost = $('.tab-content .posts-item-wrap:last .post_time-tick').attr('data-time')
	// console.log(timeLastPost)
	// $('.tab .tab_time span:first').text(timeLastPost)


	function generate() {
		let indexChat = $('.tab.active').attr('data-tab')
		let chatImg = $('.tab.active img').attr('src')
		let indexContent = $('.tab-content.active').attr('data-tab')
		let contentImg = $('.tab-content.active .post_img img')
		let contentImportantImg = $('.tab-content.active  .tab-content_important__img img')
		let name = $('.tab.active .tab_mess span:first-child').text()

		contentImg.text('')
		$('.tab-content.active .tab-content_important__text span:first-child').text('')
		$('.tab-content.active .post_body .name').text('')
		$('.header_title .header_title-chat').text('')




		if(indexChat == indexContent) {
			$('.tab-content.active .tab-content_important__text span:first-child').append(name)
			$(contentImportantImg).attr('src', chatImg)
			$('.tab-content.active .post_body .name').append(name)
			$('.header_title .header_title-chat').append(name)
			$(contentImg).attr('src', chatImg)
			let sub = $('.tab.active').attr('data-sub')
			$('.header_title-sub').text(sub)
		}

	}



	if($(window).width() >= 600) {

		$("#mcs_container").mCustomScrollbar({
	 		scrollInertia: 200
		});

		$(".tab-content_post-scroll--js").mCustomScrollbar({
		 	scrollInertia: 200,
		 	setTop: 0
		 	// setTop: '-9999px'
		});


		let heightAll = $(document).height()
		$('.posts_wrap').height(heightAll - 123)

		generate()

		$('.tab').click(function(){
			var ind = $(this).attr('data-tab')
					cont = $('.tab-content[data-tab="'+ ind +'"]')

			$('.tab.active').removeClass('active')
			$(this).addClass('active')

			$('.tab-content.active').removeClass('active')
			cont.addClass('active')

			if($(this).not('.uploaded')) {
				$(this).addClass('uploaded')
				generate()
			} else {
				console.log($(this).hasClass('uploaded'))
			}

		})
	} else {


		generate()

		$('.tab').click(function(){
			var ind = $(this).attr('data-tab')
					cont = $('.tab-content[data-tab="'+ ind +'"]')

			$('.content_right').addClass('active')
			$('.content_left').removeClass('active')
			$('.header').addClass('active')

			$('.tab.active').removeClass('active')
			$(this).addClass('active')

			$('.tab-content.active').removeClass('active')
			cont.addClass('active')

			if($(this).not('.uploaded')) {
				$(this).addClass('uploaded')
				generate()
			} else {
				console.log($(this).hasClass('uploaded'))
			}

			let chatImg = $('.tab.active img').attr('src')
			$('.header-chat-logo img').attr('src', chatImg)

			$(this).removeClass('active')

		})	

		$('.header_title').click(function(){
			$('.content_right').removeClass('active')
			$('.content_left').addClass('active')
			$('.header').removeClass('active')
		})


		let heightAll = $(document).height()
		$('.posts_wrap').height(heightAll - 88)  

		$('.tab.active').removeClass('active')
	}

	// function generate() {
	// 	let indexChat = $('.tab.active').attr('data-tab')
	// 	let chatImg = $('.tab.active img').attr('src')
	// 	let indexContent = $('.tab-content.active').attr('data-tab')
	// 	let contentImg = $('.tab-content.active .post_img img')
	// 	let name = $('.tab.active .tab_mess span:first-child').text()

	// 	contentImg.text('')
	// 	$('.tab-content.active .tab-content_important__text span:first-child').text('')
	// 	$('.tab-content.active .post_body .name').text('')
	// 	$('.header_title .header_title-chat').text('')


	// 	if(indexChat == indexContent) {
	// 		$('.tab-content.active .tab-content_important__text span:first-child').append(name)
	// 		$('.tab-content.active .post_body .name').append(name)
	// 		$('.header_title .header_title-chat').append(name)
	// 		$(contentImg).attr('src', chatImg)
	// 	}
	// }

	// generate()


	//Генерация времени поста из дата атрибута

	let time = $('.post_time-tick')
	$(time).each(function(i, el){
		$(el).text($(el).attr('data-time'))
	})
	console.log(time)
	$('.post_time-tick').append(time)



	//height posts


	$('.btn-close').click(function(){
		let heightAll = $(document).height()
		$(this).parent('.tab-content_important').css('display', 'none')
		$('.posts_wrap').height(heightAll - ($('.header').height()))
	})


	// $('.tab').click(function(){
	// 	var ind = $(this).attr('data-tab')
	// 			cont = $('.tab-content[data-tab="'+ ind +'"]')

	// 	$('.tab.active').removeClass('active')
	// 	$(this).addClass('active')

	// 	$('.tab-content.active').removeClass('active')
	// 	cont.addClass('active')

	// 	if($(this).not('.uploaded')) {
	// 		$(this).addClass('uploaded')
	// 		generate()
	// 	} else {
	// 		console.log($(this).hasClass('uploaded'))
	// 	}
	// })

	$('.tab-nonactive').off('click')

});
