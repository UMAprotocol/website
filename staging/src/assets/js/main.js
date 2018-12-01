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

	// Your code goes here...
	// jQuery.ready is no longer needed
})(window, document, window.jQuery);
