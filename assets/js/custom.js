(function ($) {
    "use strict";

    // MENU
    $(".navbar-collapse a").on("click", function () {
        $(".navbar-collapse").collapse("hide");
    });

    // CUSTOM LINK
    $(".smoothscroll").click(function () {
        var el = $(this).attr("href");
        var elWrapped = $(el);
        var header_height = $(".navbar").height();

        scrollToDiv(elWrapped, header_height);
        return false;

        function scrollToDiv(element, navheight) {
            var offset = element.offset();
            var offsetTop = offset.top;
            var totalScroll = offsetTop - 0;

            $("body,html").animate(
                {
                    scrollTop: totalScroll,
                },
                300
            );
        }
    });

    $(".owl-carousel").owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        autoplay: true,
        responsiveClass: true,
        rtl: true,
        responsive: {
            0: {
                items: 1,
            },
            767: {
                items: 2,
            },
            1200: {
                items: 2,
            },
        },
    });
})(window.jQuery);


document.addEventListener("DOMContentLoaded", function(){
    var myOffcanvas = document.getElementById('offcanvasNavbar');
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    document.getElementById("navbar-button").addEventListener('click',function (e){
      e.preventDefault();
      e.stopPropagation();
      bsOffcanvas.toggle();
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
          e.preventDefault(); // Prevent the default anchor click behavior
          e.stopPropagation();
          bsOffcanvas.hide();
          var targetId = this.getAttribute('href').substring(1); // Get the target ID
          var targetElement = document.getElementById(targetId);
      
          // Scroll to the target element
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });      
  });
