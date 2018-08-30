(function ($) {
	$('.menu-button').on('click', function () {
		$(this).toggleClass('menu-button--open');
		$('body').toggleClass('open-menu');
	});

	$('body *').not('header, header *, .menu-header, .menu-header *').on('click', function () {
		$('body').removeClass('open-menu');
		$('.menu-button').removeClass('menu-button--open');
	});

	$(window).scroll(function (event) {
		var scroll = $(window).scrollTop();
		if (scroll > 150) {
			$('.scroll-to-top').fadeIn();
		}
		else {
			$('.scroll-to-top').fadeOut();
		}
	});

	if ($('.slide-home').length) {
		$('.slide-home').slick({
			infinite: true,
			arrows: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			pauseOnHover: false,
			fade: true,
			cssEase: 'linear',
			dots: false,
			asNavFor: '.slide-home-nav'
		});

		// $(".slide-home").on("afterChange", function () {
		// 	$( ".wrap-mirror" ).animate({
		// 		opacity: 1,
		// 	}, 300);
		// 	var getImage = $(".slide-home .slick-active > img").attr("src");
		// 	$(".mirror > img").attr("src", getImage);
		// });
		// $(".slide-home").on("beforeChange", function () {
		// 	$( ".wrap-mirror" ).animate({
		// 		opacity: 0,
		// 	}, 300);
		// });

		$(".slide-home .slick-active .title-slide").ready(function () {
			var getHTML = $(".slide-home .slick-active .title-slide > div").html();
			$(".center-title .append-title > div").html(getHTML);
		});

		$(".slide-home").on("afterChange", function () {
			var getHTML = $(".slide-home .slick-active .title-slide > div").html();
			$(".center-title .append-title > div").html(getHTML);
		});

		$('.slide-home-nav').slick({
			asNavFor: '.slide-home',
			dots: false,
			arrows: false,
			fade: true,
			pauseOnHover: false
		});
	}

	if ($("#background-video").length) {
		$("#background-video").ready(function () {
			var getHTML = $(".center-title .title-slide > div").html();
			$(".center-title .append-title > div").html(getHTML);
		});
	}

	if ($('.slide-gallery').length) {
		$('.slide-gallery').slick({
			infinite: true,
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			// autoplaySpeed: 5000,
			dots: false,
			fade: true,
			appendDots: $('.slide-gallery-dot'),
			// draggable: false,
			pauseOnHover: false
		});
	}

	if ($('.slide-room').length) {
		$('.slide-room').slick({
			infinite: true,
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			dots: false,
			appendDots: ".nav-dots"
		});
	}

	if ($('.slide-meet').length) {
		$('.slide-meet').slick({
			infinite: true,
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			dots: false,
			fade: true,
			cssEase: 'linear',
			draggable: false,
			pauseOnHover: false
		});

		$('.meet-the-costa .slide-meet img').ready(function () {
			setTimeout(function () {
				$('.meet-the-costa > .container').css('z-index', '3');
			}, 2000);
		})
	}

	if ($('.slide-room-buy').length) {
		$('.slide-room-buy').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			dots: false,
			fade: true,
			draggable: false,
			pauseOnHover: false,
			prevArrow: $('.arrow-custom .prev'),
			nextArrow: $('.arrow-custom .next'),
		});

		$(".room-item").on('click', function () {
			var getslideId = $(this).attr('roomId');
			$('.slide-room-buy').slick('slickGoTo', parseInt(getslideId));
			var getHTML = $(".slide-room-buy .slick-list > .slick-track > .slick-slide[data-slick-index='" + getslideId + "'] .description").html();
			$(".roomModal-right .description").html(getHTML);
		});

		$('.slide-room-for-1').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			draggable: false,
			asNavFor: '.slide-room-nav-1'
		});
		$('.slide-room-nav-1').slick({
			slidesToShow: 7,
			slidesToScroll: 1,
			asNavFor: '.slide-room-for-1',
			dots: false,
			arrows: true,
			centerMode: true,
			centerPadding: '0',
			focusOnSelect: true
		});

		$('.slide-room-for-2').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			draggable: false,
			asNavFor: '.slide-room-nav-2'
		});
		$('.slide-room-nav-2').slick({
			slidesToShow: 7,
			slidesToScroll: 1,
			asNavFor: '.slide-room-for-2',
			dots: false,
			arrows: true,
			centerMode: true,
			centerPadding: '0',
			focusOnSelect: true
		});

		$('.slide-room-for-3').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			draggable: false,
			asNavFor: '.slide-room-nav-3'
		});
		$('.slide-room-nav-3').slick({
			slidesToShow: 7,
			slidesToScroll: 1,
			asNavFor: '.slide-room-for-3',
			dots: false,
			arrows: true,
			centerMode: true,
			centerPadding: '0',
			focusOnSelect: true
		});

		$('.slide-room-for-4').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: false,
			draggable: false,
			asNavFor: '.slide-room-nav-4'
		});
		$('.slide-room-nav-4').slick({
			slidesToShow: 7,
			slidesToScroll: 1,
			asNavFor: '.slide-room-for-4',
			dots: false,
			arrows: true,
			centerMode: true,
			centerPadding: '0',
			focusOnSelect: true
		});

		$('#roomModal').on('click', function (event) {
			if (event.target.id) {
				$(this).fadeOut().css({
					'z-index': '-1'
				}).animate({
					opacity: 0,
				}, 300);
			}
		});

		$('#roomModal .close').on('click', function (event) {
			$('#roomModal').fadeOut().css({
				'z-index': '-1'
			}).animate({
				opacity: 0,
			}, 300);
		});

		$('.slide-room .slick-list').on('click', function () {

			$('#roomModal').fadeIn().css({
				'z-index': '99999'
			}).animate({
				opacity: 1,
			}, 500);
		});

		$(".slide-room-buy").on("afterChange", function () {
			var getHTML = $(".slide-room-buy .slick-active .description").html();
			$(".roomModal-right .description").html(getHTML);
		});

		$('.slide-room-buy').on('afterChange', function (event, slick, currentSlide) {
		});
	}

	if ($('.slide-blog-type').length) {
		$('.slide-blog-type').slick({
			infinite: true,
			arrows: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: false,
			// autoplaySpeed: 5000,
			dots: false,
			fade: true,
			appendDots: $('.blog-type-dot'),
			pauseOnHover: false
		});
	}

	if (jQuery('.amount-product').length) {
		jQuery('.minus').click(function () {
			var amount = parseInt(jQuery(this).next('.amount-product').val());
			jQuery(this).next('.amount-product').val(amount + 1);
			if (amount < 0) {
				jQuery(this).next('.amount-product').val(0);
			}
			else if (amount) {
				jQuery(this).next('.amount-product').val(amount - 1);
			}
			else {
				jQuery(this).next('.amount-product').val(0);
			}
		});

		jQuery('.plus').click(function () {
			var amount = parseInt(jQuery(this).prev('.amount-product').val());
			jQuery(this).prev('.amount-product').val(amount + 1);
			if (amount < 0) {
				jQuery(this).prev('.amount-product').val(0);
			}
			else if (amount >= 0) {
				jQuery(this).prev('.amount-product').val(amount + 1);
			}
			else {
				jQuery(this).prev('.amount-product').val(0);
			}
		});
	}

	if ((jQuery('#date-checkin').length === 1) && (jQuery('#date-checkout').length === 1)) {
		function eventCheckIn(event) {
			var target = jQuery(event.target);
			if (target.is(".open-checkIn, .open-checkIn *")) {
				event.stopPropagation();
				jQuery('#date-checkin').data('dateRangePicker').open();
			}
			else {
				event.stopPropagation();
				jQuery('#date-checkin').data('dateRangePicker').close();
			}
		}

		function eventCheckOut(event) {
			var target = jQuery(event.target);
			if (target.is(".open-checkOut, .open-checkOut *")) {
				event.stopPropagation();
				jQuery('#date-checkout').data('dateRangePicker').open();
			}
			else {
				event.stopPropagation();
				jQuery('#date-checkout').data('dateRangePicker').close();
			}
		}
		jQuery('#date-checkin').dateRangePicker(
			{
				startDate: new Date(),
				autoClose: true,
				singleDate: true,
				showShortcuts: false,
				singleMonth: true,
				selectForward: true,
				inline: true,
				container: '#date-checkin-container',
			});

		jQuery('#date-checkout').dateRangePicker(
			{
				startDate: new Date(),
				autoClose: true,
				singleDate: true,
				showShortcuts: false,
				singleMonth: true,
				selectForward: true,
				inline: true,
				container: '#date-checkout-container',
			});

		$('#booking-form-single').click(eventCheckIn);
		$('#booking-form-single').click(eventCheckOut);
		$("#booking-form-single").off("click", ".open-checkIn", '.open-checkIn');
	}

	if ($('#video-bg').length) {
		$('.play-video').click(function () {
			$('#video-bg').css({
				'z-index': '1',
				'position': 'absolute',
				'top': '0',
				'opacity': '1'
			});
			document.getElementById('video-bg').play();
			$(this).hide();
		});

		setTimeout(function () {
			document.getElementById('video-mirror').play();
			document.getElementById('video-bg').play();
		}, 500);
	}

	//Scroll
	var scrollbar = Scrollbar.init(document.querySelector('#inner-scrollbar'));
	Scrollbar.init(document.querySelector('#inner-scrollbar'), {
		thumbMinSize: 15,
		damping: 0.05,
	}).addListener(function (status) {
		// console.log(status);
		var arr = [];
		// var arrSection = [];

		if ($("[parallax*='parallax']")) {
			$("[parallax*='parallax']").each(function () {
				arr.push({
					$this: $(this),
					top: $(this).offset().top
				})
			});
		}

		if ($("[parallax*='parallax']")) {
			arr.forEach(function (element) {
				if (element.$this.attr('parallax') == 'parallax-1') {
					var result = (element.top - status.offset.y) / 100 * 5;
					element.$this.css("transform", `translateY(${result}px)`);
				}

				if (element.$this.attr('parallax') == 'parallax-2') {
					var result = (element.top - status.offset.y - 15) / 100 * 7;
					element.$this.css("transform", `translateY(${result}px)`);
				}

				if (element.$this.attr('parallax') == 'parallax-3') {
					var result = (element.top - status.offset.y - 30) / 100 * 6;
					element.$this.css("transform", `translateY(${result}px)`);
				}

				if (element.$this.attr('parallax') == 'parallax-background') {
					var result = (element.top - status.offset.y - 30) / 100 * 4;
					element.$this.css("transform", `translateY(${result}px)`);
				}

				if (element.$this.attr('parallax') == 'parallax-mirror') {
					var result = ($('.mirror').offset().top - status.offset.y) / 100 * 8;
					element.$this.css("transform", `translateY(${result}px)`);
				}

				if (element.$this.attr('parallax') == 'parallax-group-background') {

					var result = (element.top - status.offset.y) / 100 * 7;
					element.$this.css("background-position", `center ${result}px`);
				}
			});
		}

		if (status.offset.y > 200) {
			$('.scroll-to-top').css('right', '15px');
		}
		else {
			$('.scroll-to-top').css('right', '-55px');
		}

		// $("section").each(function () {
		// 	arrSection.push({
		// 		$this: $(this),
		// 		top: $(this).offset().top
		// 	});
		// });

		// console.log(arrSection);
		// var arraytop = [];
		// var arrayElement = [];

		// arrSection.forEach(function (element) {
		// 	if (element.top >= 0) {
		// 		arraytop.push(element.top);
		// 	}
		// });
		// console.log(status.offset.y);
		// if((status.offset.y >= 10) && (status.offset.y <= 30) ) {
		// 	scrollbar.scrollTo(0, status.offset.y + arraytop[0] - 76, 1500);
		// }
		// console.log(scrollbar.scrollTop)
	});

	$('.scroll__button').on('click', function (event) {

		if ($(".slide-home").length) {
			var heightSlide = $(".slide-home").height();
			scrollbar.scrollTo(0, heightSlide - 76, 1500);
		}

		if ($("#background-video").length) {
			var heightVideo = $("#background-video").height();
			scrollbar.scrollTo(0, heightVideo - 76, 1500);
		}
	});

	$('.scroll-to-top').on('click', function (event) {
		scrollbar.scrollTo(0, 0, 1500);
	});

	if ($('.fancybox-thumbs').length) {
		$('.fancybox-thumbs').fancybox({
			prevEffect: 'none',
			nextEffect: 'none',

			closeBtn: true,
			arrows: true,
			nextClick: true,

			helpers: {
				thumbs: {
					width: 50,
					height: 50
				}
			}
		});
	}

	if ($('#date-filter').length) {
		jQuery('#date-filter').dateRangePicker(
			{
				autoClose: true,
				singleDate: true,
				showShortcuts: false,
				singleMonth: true,
				selectForward: true,
				inline: true,
				container: '#date-filter-container',
			});
	}

	if($('.tab-booking .item-room .content').length) {
		var roomReady = [];
			$(".tab-booking .item-room .content").each(function () {
				roomReady.push($(this).height())
			});
			var maxHeight = Math.max.apply(Math,roomReady);
			$('.tab-booking .item-room .content').height(maxHeight);

		$('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
			$('.tab-booking .item-room .content').css('height', '100%');
		})
		$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
			var arrRoom = [];
			$(".tab-booking .item-room .content").each(function () {
				arrRoom.push($(this).height())
			});
			var maxHeight = Math.max.apply(Math,arrRoom);
			$('.tab-booking .item-room .content').height(maxHeight);
		})
	}
})(jQuery);

// Check Date 
jQuery(function ($) {
	$.datepicker.regional['en-GB'] = {
		closeText: 'Done',
		prevText: 'Prev',
		nextText: 'Next',
		currentText: 'Today',
		monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
			'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		weekHeader: 'Wk',
		dateFormat: 'dd-mm-yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['en-GB']);
});

jQuery(document).on("ready", function () {

	if ($('#booking-mask-wrapper').hasClass("no-slide")) {
		$('#booking-mask-wrapper').addClass('hide-check-date');
	}
	/*Function to scroll the page to the content section, when arrow is clicked on home page main visual*/
	jQuery('#home_scroll_arrow').click(function () {
		$('html, body').animate({ scrollTop: ($('#main').offset().top - 70) }, 1000, 'easeInOutQuart');
	});

	/*Function of booking mask functionality*/
	jQuery('.show-calendar').click(function () {
		if ($('#booking-mask-wrapper').hasClass("closed")) {
			$('#booking-mask-wrapper').toggleClass('open closed');
			$('html').addClass('overflow-hidden');
			$('#booking-mask-wrapper').removeClass('hide-check-date');
			$('#booking-mask-wrapper #date-in').parent().addClass('active');
			$("#booking-mask-wrapper #booking-content-area").slideToggle("500");
		}
	});
	jQuery('#booking-mask-wrapper #date-in').click(function () {
		if ($('#booking-mask-wrapper').hasClass("closed")) {
			$('#booking-mask-wrapper').toggleClass('open closed');
			$('html').addClass('overflow-hidden');
			$('#booking-mask-wrapper #date-in').parent().addClass('active');
			$("#booking-mask-wrapper #booking-content-area").slideToggle("500");
		}
	});
	jQuery('#booking-mask-wrapper #date-out').click(function () {
		if ((jQuery("#date-in").val() != "") && (jQuery('#booking-mask-wrapper').hasClass("closed"))) {
			jQuery('#booking-mask-wrapper').toggleClass('open closed');
			$('html').addClass('overflow-hidden');
			jQuery('#booking-mask-wrapper #date-out').parent().addClass('active');
			jQuery("#booking-mask-wrapper #booking-content-area").slideToggle("500");
		}
	});
	jQuery('#booking-close').click(function () {
		if ($('#booking-mask-wrapper').hasClass("no-slide")) {
			$('#booking-mask-wrapper').addClass('hide-check-date');
		}

		if ($('#booking-mask-wrapper').hasClass("open")) {
			$('#booking-mask-wrapper').toggleClass('open closed');
			$('html').removeClass('overflow-hidden');
			$('#booking-mask-wrapper #date-in, #booking-mask-wrapper #date-out').parent().removeClass('active');
			$("#booking-mask-wrapper #booking-content-area").slideToggle("500");
		}
	});

	/** SCROLL **/
	var bk = jQuery('.booking'),
		hdr = jQuery('.header'),
		bkBtn = 0,
		bkWpr = jQuery('.booking-wpr').outerHeight(),
		hdrScr = function () {
			var hH = hdr.outerHeight(),
				winPos = jQuery(window).scrollTop() + 110,
				bkTop = (bk.is('.open')) ? hH - (bkWpr + bkBtn) : hH - bkBtn;

			(winPos >= bkTop) ? hdr.addClass('fixed') : hdr.removeClass('fixed');
			/*((winPos - 70) >= bkTop) ? bk.addClass('fixed-bk') : bk.removeClass('fixed-bk');*/
		};

	jQuery('.booking-button').on('click', function () {
		mqHdrScr();
	});
});

jQuery(document).ready(function () {
	var newDate = new Date();

	var datestring = ("0" + newDate.getDate()).slice(-2) + "-" + ("0" + (newDate.getMonth() + 1)).slice(-2) + "-" + newDate.getFullYear();

	jQuery("#date-in").attr('value', datestring);
	jQuery("#date-out").attr('value', datestring);

	/** Booking mask functionality **/
	if (jQuery().datepicker) { // validation error
		jQuery(".date-helper").remove();
		jQuery('.dateInpicker').attr('data-altfield', '#date-in');
		jQuery('.dateOutpicker').attr('data-altfield', '#date-out');
	}

	function setDate(val) {
		if (val) {
			var date = jQuery.datepicker.parseDate("dd-mm-yy", val);
			var day = date.getDate();
			var month = date.getMonth() + 1;
			var year = date.getFullYear();
			var usDate = day + '-' + month + '-' + year;

			date = jQuery.datepicker.parseDate("dd-mm-yy", usDate);
			return date;
		}
		return false;
	}

	var dp1 = 0,
		dp2 = 0,
		bookingMask = function (ac) {
			$ac = jQuery(ac);
			$ac.datepicker({
				firstDay: 7,
				dateFormat: 'dd-mm-yy',
				minDate: new Date(),
				beforeShowDay: function (date) {
					var highliterCls = {
						def: 'ini-highlight',
						active: 'dp-highlight'
					},
						classFlag;
					var date1 = setDate(jQuery("#date-in").val());
					var date2 = setDate(jQuery("#date-out").val());
					if (date1) {
						if (date.getTime() == date1.getTime() || (date2 && date >= date1 && date <= date2 && !(date < date2))) {
							classFlag = highliterCls.active;
						} else if (date2 && date >= date1 && date <= date2) {
							classFlag = highliterCls.def;
						} else {
							classFlag = "";
						}
					}
					return [true, classFlag];
				},
				onSelect: function (dateText, inst) {

					var date1 = setDate(jQuery("#date-in").val());
					var date2 = setDate(jQuery("#date-out").val());

					var date = jQuery.datepicker.parseDate("dd-mm-yy", dateText);
					var day = date.getDate();
					if (day < 10) {
						var day2 = '0' + day;
					} else {
						var day2 = day;
					}
					var month = date.getMonth() + 1;
					if (month < 10) {
						var month2 = '0' + month;
					} else {
						var month2 = month;
					}

					var year = date.getFullYear();
					var usDate = day + '-' + month + '-' + year;
					var usDate2 = day2 + '' + month2 + '' + year;

					if (dp1 == 0) {
						jQuery("#date-in").val(dateText).parent().removeClass('active');
						jQuery("#us-date-in").val(usDate);
						jQuery("#bookingdate").val(usDate2);
						jQuery(this).datepicker("option", "minDate", dateText);

						// jQuery(".datein label").hide();

						setTimeout(function () {
							jQuery("#date-out").val("").parent().addClass("active");
							jQuery("#us-date-out").val('');
							dp1 = 1;
							dp2 = 0;
						}, 100);
					} else if (dp1 == 1 && dp2 == 0) {
						jQuery("#date-out").val(dateText).addClass("active");
						jQuery("#date-in").parent().removeClass("active");
						jQuery("#us-date-out").val(usDate);
						jQuery(this).datepicker("option", "minDate", "today");
						date2 = jQuery("#date-out").val(dateText);
						// jQuery(".dateout label").hide();

						setTimeout(function () {
							dp1 = 0;
							dp2 = 1;
						}, 100);
					}
					jQuery("#date-out").parent().removeClass("active");
				},
				numberOfMonths: 1
			});
		}('#availability-checker #booking-content-area .calendardate');
	/** End Booking mask functionality **/

	// jQuery("#booking-form").submit(function (e) {
	// 	if (jQuery('#availability-checker #date-in').val() == "") {
	// 		var bookingMaskAlert = "Please select Check In!";
	// 		alert(bookingMaskAlert);
	// 		return false;
	// 	}
	// 	else {
	// 		if (jQuery('#availability-checker #date-out').val() == "") {
	// 			var bookingMaskAlert = "Please select Check Out!";
	// 			alert(bookingMaskAlert);
	// 			return false;
	// 		}
	// 		else {
	// 			if (jQuery('#availability-checker #adults').val() == "ADULTS") {
	// 				var bookingMaskAlert = "Please select Adults!";
	// 				alert(bookingMaskAlert);
	// 				return false;
	// 			}
	// 			else {
	// 				if (jQuery('#availability-checker #children').val() == "CHILDREN") {
	// 					var bookingMaskAlert = "Please select Children!";
	// 					alert(bookingMaskAlert);
	// 					return false;
	// 				}
	// 			}
	// 		}
	// 	}

	// 	if (jQuery('#availability-checker #date-in').val() != "" && jQuery('#availability-checker #date-out').val() != "") {
	// 		var bookingDateIn = jQuery('#availability-checker #date-in').val().split("/")
	// 		var bookingDateOut = jQuery('#availability-checker #date-out').val().split("/")

	// 		var bookDate = new Date(bookingDateIn[2], bookingDateIn[0] - 1, bookingDateIn[1]);
	// 		var bookDateOut = new Date(bookingDateOut[2], bookingDateOut[0] - 1, bookingDateOut[1]);

	// 		var dif = new Date(bookDateOut - bookDate);
	// 		var days = Math.floor(dif / 1000 / 60 / 60 / 24);

	// 		jQuery('#nightscount').val(days);
	// 	}
	// });
});