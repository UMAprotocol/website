import { isIe } from '../utils/is-ms';

if (isIe()) {
	$('.js-image-fit').each((i, container) => {
		const $container = $(container);
		const $image = $container.find('img');
		const imageSource = $image.attr('src') || $image.data('src');

		$container.css('background-image', `url(${imageSource})`);
		$image.addClass('sr-only');
	});
}
