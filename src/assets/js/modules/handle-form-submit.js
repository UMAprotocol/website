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

			if ($embedError.css('display') !== 'none') {
				$msgContainer.text($embedError.text());
				$this.find('.subscribe__field').val('');
			}

			if ($embedSuccess.css('display') !== 'none') {
				const text = 'Thanks! ' + value + ' is on our mailing list.';
				$msgContainer.text(text);
				$this.find('.subscribe__field').val('');
			}
		}, 300);
	});
}

export default formsubmit;
