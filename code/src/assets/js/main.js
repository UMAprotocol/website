;(function(window, document, $) {
	var $win = $(window);
	var $doc = $(document);
	var $nav = $('.nav');
	var $bodyHtml = $('body, html');

	$('.btn-menu').click(function(event) {
		event.preventDefault();
		$nav.toggleClass('is-open');
		$(this).toggleClass('is-open');
		$bodyHtml.toggleClass('prevent-scrolling');
	});


	var length  = location.pathname.split("/").length;

	var index = location.pathname.split("/")[length-1]

	$('.nav a[href^="' + index + '"]').parent().addClass('current');

	// Your code goes here...
	// jQuery.ready is no longer needed
})(window, document, window.jQuery);
