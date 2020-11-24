const formsubmit = () => {
	const $embedInput = $('#mce-EMAIL');
	const $embedError = $('#mce-error-response');
	const $embedSuccess = $('#mce-success-response');
	const $embedButton = $('#mc-embedded-subscribe');
	const $subscribeForm = $('.subscribe form');
	let isValid = null;

	$subscribeForm.on('submit', function(event) {
		event.preventDefault();


		const $this = $(this);
		const value = $this.find('.subscribe__field').val();

		$embedInput.val(value);
		$embedButton.trigger('click');

		const $msgContainer = $this.closest('.subscribe').find('.subscribe__message');

		setTimeout(function() {
			$this.closest('.subscribe').addClass('has-submitted');

			if ($embedError.is(':visible')) {
				$msgContainer.text($embedError.text());
			}

			if ($embedSuccess.is(':visible')) {
				const text = 'Thanks! ' + value + ' is on our mailing list.';
				$msgContainer.text(text);
			}
		}, 300);
	});
}

export default formsubmit;
