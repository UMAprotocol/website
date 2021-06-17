import { $document } from "../utils/globals";

$(".drop-btn").on("click", function (event) {
  toggleDropdownDesktop();
});

$(".drop-btn-mobile").on("click", function (event) {
  toggleDropdownMobile();
});

$(".angle-down-mobile").on("click", function (event) {
  event.stopImmediatePropagation();
  toggleDropdownMobile();
});

$(".angle-down").on("click", function (event) {
  event.stopImmediatePropagation();
  toggleDropdownDesktop();
});

function toggleDropdownMobile() {
  $(".dropdown-content-mobile").toggleClass("dropdown-open");
  if ($(".angle-down-mobile").hasClass("fa-angle-down")) {
    $(".angle-down-mobile").addClass("fa-angle-up");
    $(".angle-down-mobile").removeClass("fa-angle-down");
  } else {
    $(".angle-down-mobile").removeClass("fa-angle-up");
    $(".angle-down-mobile").addClass("fa-angle-down");
  }
}

function toggleDropdownDesktop() {
  $(".dropdown-content").toggleClass("dropdown-open");
}

$document.click(function (event) {
  if (!$(event.target).is(".drop-btn-mobile, .dropdown-content-mobile")) {
    $(".dropdown-content-mobile").removeClass("dropdown-open");
    $(".angle-down-mobile").removeClass("fa-angle-up");
    $(".angle-down-mobile").addClass("fa-angle-down");
  }
});

$document.click(function (event) {
  if (!$(event.target).is(".drop-btn, .dropdown-content")) {
    $(".dropdown-content").removeClass("dropdown-open");
    $(".angle-down").removeClass("fa-angle-up");
    $(".angle-down").addClass("fa-angle-down");
  }
});
