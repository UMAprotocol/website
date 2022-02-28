
/**
 * Handle smooth scroll.
 *
 */


$('.list-category').on('click', 'a', function() {
	const $this = $(this);
	const $target = $this.attr('href');

	$('html, body').animate({
		scrollTop: $($target).offset().top + 'px'
	}, 500);

	return false;
});
