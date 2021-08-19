import { $document, $window } from "../utils/globals";

console.log($document, $window);
$document.ready(() => {
  console.log("hello?");
  // console.log("event", event);
  // function roll() {
  //   var curr = 2;
  //   var count = 4;
  //   $("#testimonials .testimonial:nth-child(1)").show(
  //     "slide",
  //     { direction: "down" },
  //     500
  //   );
  //   setInterval(function () {
  //     $("#testimonials .testimonial").hide("slide", { direction: "up" }, 500);
  //     $("#testimonials .testimonial:nth-child(" + curr + ")")
  //       .delay(750)
  //       .show("slide", { direction: "down" }, 500);
  //     curr++;
  //     if (curr == count + 1) {
  //       // 5000 - 500 - 750 - 500 = 3250    =>    delay = 3000
  //       $("#testimonials .testimonial:nth-child(4)")
  //         .delay(3000)
  //         .hide("slide", { direction: "up" }, 500);
  //       curr = 1;
  //     }
  //   }, 5000);
  // }
  // roll();

  function slide() {
    var curr = 0;

    setInterval(function () {
      $(`#kpi-cta-container .kpi-hero-cta:nth-of-type(${curr})`).slideUp(
        "slow"
      );

      curr += 1;
      console.log("curr", curr);
      // start
      if (curr === 7) {
        curr = 0;
        $(`#kpi-cta-container .kpi-hero-cta`).show("slow");
      }
    }, 3000);
  }
  slide();
});
