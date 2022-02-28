/*
 * Filtration
 */

$('.js-filter').on('change', function() {
	const filter = $(this).val();

	$('.js-filter-items').find('.box').removeClass('is-hidden')
		.not(filter).addClass('is-hidden');
});
