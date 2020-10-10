$(function() {

	if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {

		// function parallax(event) {
		// 	this.querySelector('.parallax').style.transform = `translate(${event.targetTouches[0].clientX/120}px, ${event.targetTouches[0].clientY/80}px)`
		// }


		// document.addEventListener('touchmove', parallax)
	 //  let X = 0
	 //  let Y = 0

	 //   function move() {
	 //      document.querySelector('.wrapper').style.left = X + 'px';
	 //      document.querySelector('.wrapper').style.top = Y + 'px';
	 //  }

		// document.addEventListener("touchmove", function (e) {
		//   X = e.targetTouches[0].clientX;
		//   Y = e.targetTouches[0].clientY;
		// }, false);

		// if (window.matchMedia("(max-height: 1024px) and (max-width: 1024px)").matches) {
	 //  	document.addEventListener("touchmove", function (e) {
	 //      X = e.targetTouches[0].clientX - 565;
	 //      Y = e.targetTouches[0].clientY - 250;
	 //      console.log(Y)
	 //      if(Y < -250) {
	 //      	Y = -250
	 //      } else if(Y > 400) {
	 //      	Y = 400
	 //      } else {
	 //      	Y = e.targetTouches[0].clientY - 250;
	 //      }
	 //  	}, false);
	 //  }

	 //  if (window.matchMedia("(max-height: 800px) and (max-width: 1024px)").matches) {
	 //  	document.addEventListener("touchmove", function (e) {
	 //      X = e.targetTouches[0].clientX - 350;
	 //      Y = e.targetTouches[0].clientY - 170;
	 //      console.log(Y)
	 //      if(Y < -250) {
	 //      	Y = -250
	 //      } else if(Y > 400) {
	 //      	Y = 400
	 //      } else {
	 //      	Y = e.targetTouches[0].clientY - 170;
	 //      }
	 //  	}, false);
	 //  }


	  // $(document).on('touchend', function(event) {
	  // 	$('.smoke').addClass('smoke-open')
	  // 	setTimeout(function(){$('.smoke.smoke-open').removeClass('smoke-open')}, 500)
	  // })

	  
	  $('.target').css('display', 'block')

	  $('.main, .main-bg, .main-open').css({ height: window.innerHeight })



	 	$('.main').addClass('main-mob')


	  $('.door').on('touchend', function() {
	  	document.querySelector('.main-open').style.opacity = 1
	  	$('.door img').addClass('hid')
	  	$('.smoke').addClass('smoke-open')
			setTimeout(function() {
				$('.wrapper').addClass('active')
			}, 500)
	  	setTimeout(function() {
	  		$('.btn-wrap').addClass('active')
	  		$('body').css('cursor', 'auto')
	  	}, 700)
	  })

	 //  setInterval(move, 100);


    // alert("Вы используете мобильное устройство (телефон или планшет).")

	} else {

		$('.target').css('display', 'none')

		function parallax(event) {
			this.querySelector('.parallax').style.transform = `translate(${event.clientX/120}px, ${event.clientY/80}px)`
		}
		document.addEventListener('mousemove', parallax)
	  let X = 0
	  let Y = 0

	  function move() {
	      document.querySelector('.wrapper').style.left = X + 'px';
	      document.querySelector('.wrapper').style.top = Y + 'px';
	  }

	  document.addEventListener("mousemove", function (e) {
	      X = e.clientX - 410;
	      Y = e.clientY - 200;
	  }, false);

	  if (window.matchMedia("(min-height: 800px)").matches) {
	  	document.addEventListener("mousemove", function (e) {
	      X = e.clientX - 490;
	      Y = e.clientY - 250;
	  	}, false);
	  }


	  if (window.matchMedia("(min-height: 950px)").matches) {
	  	document.addEventListener("mousemove", function (e) {
	      X = e.clientX - 620;
	      Y = e.clientY - 290;
	  	}, false);
	  }

	  if (window.matchMedia("(min-height: 1250px)").matches) {
	  	document.addEventListener("mousemove", function (e) {
	      X = e.clientX - 760;
	      Y = e.clientY - 290;
	  	}, false);
	  }

	  if (window.matchMedia("(min-height: 1400px)").matches) {
	  	document.addEventListener("mousemove", function (e) {
	      X = e.clientX - 1000;
	      Y = e.clientY - 290;
	  	}, false);
	  }

	  if (window.matchMedia("(min-height: 1700px)").matches) {
	  	document.addEventListener("mousemove", function (e) {
	      X = e.clientX - 1000;
	      Y = e.clientY - 400;
	  	}, false);
	  }

	  if (window.matchMedia("(min-height: 1900px)").matches) {
	  	document.addEventListener("mousemove", function (e) {
	      X = e.clientX - 1200;
	      Y = e.clientY - 380;
	  	}, false);
	  }

	  if (window.matchMedia("(min-height: 2140px)").matches) {
	  	document.addEventListener("mousemove", function (e) {
	      X = e.clientX - 1200;
	      Y = e.clientY - 500;
	  	}, false);
	  }

	  if (window.matchMedia("(min-height: 2300px)").matches) {
	  	document.addEventListener("mousemove", function (e) {
	      X = e.clientX - 1340;
	      Y = e.clientY - 620;
	  	}, false);
	  }


	  if (window.matchMedia("(max-height: 1024px) and (max-width: 1024px)").matches) {
	  	document.addEventListener("mousemove", function (e) {
	      X = e.clientX - 565;
	      Y = e.clientY - 250;
	  	}, false);
	  }


	  setInterval(move, 100);

	  $(document).click(function() {
	  	$('.smoke').addClass('smoke-open')
	  	setTimeout(function(){$('.smoke.smoke-open').removeClass('smoke-open')}, 500)
	  })

	  $('.door').click(function() {
	  	document.querySelector('.main-open').style.opacity = 1
	  	$('.smoke').addClass('smoke-open')
			setTimeout(function() {
				$('.wrapper').addClass('active')
			}, 500)
	  	setTimeout(function() {
	  		$('.btn-wrap').addClass('active')
	  		$('body').css('cursor', 'auto')
	  	}, 700)
	  })

		// alert("Вы используете ПК.")
	}


});
