function inner() {
	var w = $('section').width()-80;
	var h = $('section').height()-138;
	$('section > div').css({
		'width': $(this).width()-80+'px',
		'height': $(this).height()-138+'px',
	});
	$('.benefits .content').css({
		'margin-top': -$('.benefits .content').outerHeight()/2-18+'px'
	});
	$('.design .content').css({
		'margin-top': -$('.design .content').outerHeight()/2-18+'px'
	});
	$('.partnership .content').css({
		'margin-top': -$('.partnership .content').outerHeight()/2-18+'px'
	});
}
$(document).ready(function() {
	var speed = 1000;
	$('.wrapper').fullpage({
		anchors: ['welcome', 'benefits', 'design', 'russian', 'nordic', 'monochrome', 'decoration', 'partnership'],
		menu: '.nav',
		css3: true,
        sectionSelector: 'section',
		scrollingSpeed: speed,
		resize: true,
        onLeave: function(index, nextIndex, direction){
			//$('.nav li:nth-child('+nextIndex+')').addClass('active').siblings().removeClass('active');
			console.log(nextIndex);
            if ( index == 1 && direction =='down' ) {
                $('.welcome .logo').stop().animate({
					'top': '-31%'
				}, speed);
                $('.welcome .phone').stop().animate({
					'bottom': '42%'
				}, speed);
                $('.welcome .gloves').stop().animate({
					'top': '-25%'
				}, speed);
                $('.welcome .photo1').stop().animate({
					'bottom': '75%'
				}, speed);
				$('.tip').stop().animate({
					'right': -$('.tip').outerWidth()+'px'
				}, speed);
            }
            if ( index == 2 && direction == 'up' ) {
                $('.welcome .logo').stop().animate({
					'top': '18%'
				}, speed);
                $('.welcome .phone').stop().animate({
					'bottom': '-7%'
				}, speed);
                $('.welcome .gloves').stop().animate({
					'top': '50%'
				}, speed);
                $('.welcome .photo1').stop().animate({
					'bottom': '0'
				}, speed);
				$('.tip').stop().animate({
					'right': '0'
				}, speed);
            }
            if ( index == 3 && direction == 'down' ) {
                $('.type1 .phone').stop().animate({
					'top': '-23%'
				}, speed);
                $('.type1 .photo1').stop().animate({
					'bottom': '5%'
				}, speed);
            }
            if ( index == 4 && direction == 'up' ) {
                $('.type1 .phone').stop().animate({
					'top': '27%'
				}, speed);
                $('.type1 .photo1').stop().animate({
					'bottom': '-25%'
				}, speed);
            }
            if ( index == 4 && direction == 'down' ) {
                $('.type1 .phone').stop().animate({
					'top': '-43%'
				}, speed);
                $('.type1 .photo1').stop().animate({
					'bottom': '35%'
				}, speed);
                $('.type2 .photo1').stop().animate({
					'top': '-10%'
				}, speed);
                $('.type2 .photo2').stop().animate({
					'bottom': '-10%'
				}, speed);
            }
            if ( index == 5 && direction == 'up' ) {
                $('.type1 .phone').stop().animate({
					'top': '-23%'
				}, speed);
                $('.type1 .photo1').stop().animate({
					'bottom': '5%'
				}, speed);
                $('.type2 .photo1').stop().animate({
					'top': '50%'
				}, speed);
                $('.type2 .photo2').stop().animate({
					'bottom': '-50%'
				}, speed);
            }
            if ( index == 5 && direction == 'down' ) {
                $('.type2 .photo1').stop().animate({
					'top': '-40%'
				}, speed);
                $('.type2 .photo2').stop().animate({
					'bottom': '30%'
				}, speed);
                $('.type3 .photo1').stop().animate({
					'top': '3%'
				}, speed);
                $('.type3 .photo2').stop().animate({
					'bottom': '-12%'
				}, speed);
			}
            if ( index == 6 && direction == 'up' ) {
                $('.type2 .photo1').stop().animate({
					'top': '-10%'
				}, speed);
                $('.type2 .photo2').stop().animate({
					'bottom': '-10%'
				}, speed);
                $('.type3 .photo1').stop().animate({
					'top': '43%'
				}, speed);
                $('.type3 .photo2').stop().animate({
					'bottom': '-42%'
				}, speed);
			}
            if ( index == 6 && direction == 'down' ) {
                $('.type3 .photo1').stop().animate({
					'top': '-37%'
				}, speed);
                $('.type3 .photo2').stop().animate({
					'bottom': '18%'
				}, speed);
                $('.type4 .photo1').stop().animate({
					'bottom': '-8%'
				}, speed);
                $('.type4 .photo2').stop().animate({
					'top': '-15%'
				}, speed);
			}
            if ( index == 7 && direction == 'up' ) {
                $('.type3 .photo1').stop().animate({
					'top': '3%'
				}, speed);
                $('.type3 .photo2').stop().animate({
					'bottom': '-12%'
				}, speed);
                $('.type4 .photo1').stop().animate({
					'bottom': '-48%'
				}, speed);
                $('.type4 .photo2').stop().animate({
					'top': '36%'
				}, speed);
			}
        }
	});
	inner();
	$('.carousel > ul').jcarousel({
		scroll: 1,
		animation: 500,
		easing: 'easeInOutQuad',
		wrap: 'circular'
	});
	$('.carousel').each(function() {
		$(this).children('div').bind('swipeleft', function() {
			$(this).find('.jcarousel-next').trigger('click');
		});
		$(this).children('div').bind('swiperight', function() {
			$(this).find('.jcarousel-prev').trigger('click');
		});
	});
	$('.modal').append('<span class="close"></span>');
	$('[data-open]').bind('click', function(event) {
		var t = $('.modal[data-modal="'+$(this).attr('data-open')+'"]');
		t.stop(true,true).fadeIn(200);
		$('.fade').stop(true,true).fadeIn(200);
		$.fn.fullpage.setMouseWheelScrolling(false);
		event.preventDefault();
	});
	$('.modal .close, .fade').bind('click', function(event) {
		$('.modal, .fade').stop(true,true).fadeOut(200);
		$.fn.fullpage.setMouseWheelScrolling(true);
		event.preventDefault();
	});
	$('.quantity .minus').bind('click', function(event) {
		var $input = $(this).parent().find('h6');
		var count = parseInt($input.attr('data-val')) - 1;
		count = count < 1 ? 1 : count;
		$input.attr('data-val',count);
		$input.text($input.attr('data-val'));
		event.preventDefault();
	});
	$('.quantity .plus').bind('click', function(event) {
		var $input = $(this).parent().find('h6');
		$input.attr('data-val',parseInt($input.attr('data-val')) + 1);
		$input.text($input.attr('data-val'));
		event.preventDefault();
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
});
$(window).resize(function() {
	inner();
});