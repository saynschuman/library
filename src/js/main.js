(function($) {
    
	$('.slider').slick({
		arrows: false,
		fade: true,
	  	cssEase: 'linear',
	  	autoplay: true,
	  	autoplaySpeed: 3000
	})

	$('.sh-m').click(function(){
		$('.text-inner').addClass('norm-size');
		$(this).hide();
	})

	$('.up').click(function(){
		$('body,html').animate({
				scrollTop: 0
			}, 800);
	})

})(jQuery);