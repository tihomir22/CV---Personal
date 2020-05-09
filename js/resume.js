(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });

  document.getElementsByClassName("hoverTarjetaBadger")[0].addEventListener("click", function (event) {
    var tarjetaBadger = document.querySelector(".mostrarHoverTarjetaBadger");
    if (tarjetaBadger.style.visibility == "hidden") {
      tarjetaBadger.style.visibility = "visible";
      tarjetaBadger.style.opacity = 1;
    } else {
      tarjetaBadger.style.visibility = "hidden";
      tarjetaBadger.style.opacity = 0;
    }
  });
})(jQuery); // End of use strict
