;(function(window, document, $) {
	var $win = $(window);
	var $doc = $(document);
	var $nav = $('.nav');
	var $bodyHtml = $('body, html');

	function subscribeHelper() {
		var $embedInput = $('#mce-EMAIL');
		var $embedError = $('#mce-error-response');
		var $embedSuccess = $('#mce-success-response');
		var $embedButton = $('#mc-embedded-subscribe');
		var $subscribeForm = $('.subscribe form');
		var isValid = null;

		$subscribeForm.on('submit', function(event) {
			event.preventDefault();
			var $this = $(this);
			var value = $this.find('.subscribe__field').val();

			$embedInput.val(value);
			$embedButton.trigger('click');

			var $msgContainer = $this.closest('.subscribe').find('.subscribe__message')

			setTimeout(function() {
				$this.closest('.subscribe').addClass('has-submitted');

				if ($embedError.is(':visible')) {
					$msgContainer.text($embedError.text());
				}

				if ($embedSuccess.is(':visible')) {
					var text = 'Thanks! ' + value + ' is on our mailing list.';
					$msgContainer.text(text);
				}
			}, 300);
		});
	}

	$('.btn-menu').click(function(event) {
		event.preventDefault();
		$nav.toggleClass('is-open');
		$(this).toggleClass('is-open');
		$bodyHtml.toggleClass('prevent-scrolling');
	});

	var length  = location.pathname.split("/").length;

	var index = location.pathname.split("/")[length-1]

	$('.nav a[href^="' + index + '"]').parent().addClass('current');

	subscribeHelper();

	// Your code goes here...
	// jQuery.ready is no longer needed
})(window, document, window.jQuery);
