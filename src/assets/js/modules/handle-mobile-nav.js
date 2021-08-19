import { $document, $window } from "../utils/globals";
$(".js-mobile-nav").on("click", function (event) {
  $(this).toggleClass("mobile-nav--active");

  $(".header .header__content").toggleClass("is-active");

  event.preventDefault();
});

$document.on("click", function (e) {
  const $target = $(e.target);

  if (!$target.closest(".header").length) {
    $(".js-mobile-nav").removeClass("mobile-nav--active");
    $(".header .header__content").removeClass("is-active");
  }
});
