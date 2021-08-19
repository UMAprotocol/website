import { $document, $window } from "../utils/globals";

// Sliding animation for kpi-options page
$document.ready(() => {
  function slide() {
    var curr = 0;

    setInterval(function () {
      $(`#kpi-cta-container .kpi-hero-cta:nth-of-type(${curr})`).slideUp(
        "slow"
      );

      curr += 1;
      // start
      if (curr === 7) {
        curr = 0;
        $(`#kpi-cta-container .kpi-hero-cta`).show("slow");
      }
    }, 3000);
  }
  slide();
});
