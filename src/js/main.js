(function($) {

	// menu

	$('.main-screen .block').click(function(){
		$('.main-screen .block').removeClass('active');
		$(this).addClass('active');
	})

	$('#search-cat input').focus(function(){
		$('#search-cat').addClass('focus');
	})

	$('#search-cat input').blur(function(){
		$('#search-cat').removeClass('focus');
	})

	 $('input,textarea').focus(function(){
	   $(this).data('placeholder',$(this).attr('placeholder'))
	   $(this).attr('placeholder','');
	 });
	 $('input,textarea').blur(function(){
	   $(this).attr('placeholder',$(this).data('placeholder'));
	 });	

})(jQuery);