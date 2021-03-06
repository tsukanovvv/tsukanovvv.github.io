$(function () {
    $(document).tooltip();
});


$(document).ready(function () {


    $('#two').delay(1000).animate({opacity: 1}, 2000)


})


$(document).ready(function () {

    $("#phone").inputmask("+99(999)999-99-99")
    $("#name").inputmask("aaaaaaaaaaaaaa", {placeholder: " "})
    $("#surname").inputmask("aaaaaaaaaaaaaa", {placeholder: " "})

})


$(document).ready(function () {

    $('#feedback').validate({ // initialize the plugin


        highlight: function (element, errorClass) {
            return false;
        },

        rules: {


            name: {
                required: true
            },
            surname: {
                required: true
            },
            phone: {
                required: true
            },
            email: {
                email: true,
                required: true
            },
            message: {

                required: true

            }
        },


        errorPlacement: function (error, element) {
            error.insertBefore(element);
        }
    });

    $('#feedback input, textarea').on('keyup blur', function () {
        if ($('#feedback').valid()) {
            $('#submit').prop('disabled', false);
        } else {
            $('#submit').prop('disabled', 'disabled');
        }
    });

});


function init_map() {
    var myOptions = {
        zoom: 10,
        center: new google.maps.LatLng(50.0052938, 36.24293090000003),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
    marker = new google.maps.Marker({map: map, position: new google.maps.LatLng(50.0052938, 36.24293090000003)});
    infowindow = new google.maps.InfoWindow({content: '<strong>Oriole Ltd.</strong><br>ул. Алчевских 31, Харьков, Харьковская область<br>'});
    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    infowindow.open(map, marker);
}
google.maps.event.addDomListener(window, 'load', init_map);


$(document).ready(function () {
    $('#pslider').owlCarousel({

        nav: true,
        dots: false,
        loop: true,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        autoHeight: true,
        autoWidth: true,
        items: 1,
        margin: 40,
        center: true,
        dotsEach: true,
        responsive: {
            // breakpoint from 0 up
            0: {

                items: 3,

            },
            // breakpoint from 480 up
            480: {

                items: 3,

            },
            // breakpoint from 768 up
            1000: {

                items: 5,

            }
        }
    });
});


(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-82831513-1', 'auto');
ga('send', 'pageview');


(function (d, w, c) {
    (w[c] = w[c] || []).push(function () {
        try {
            w.yaCounter39143700 = new Ya.Metrika({
                id: 39143700,
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true
            });
        } catch (e) {
        }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () {
            n.parentNode.insertBefore(s, n);
        };
    s.type = "text/javascript";
    s.async = true;
    s.src = "https://mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else {
        f();
    }
})(document, window, "yandex_metrika_callbacks");


///FEEDBACK AJAX


$(document).ready(function () {


    $('#feedback').submit(function (e) {
        e.preventDefault();
        modal.style.display = "block";
        for (var i = 0; i < $("#feedback").length; i++) {
            $("#feedback")[i].reset();
        }


    });

    // Get the modal
    var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    var ok = document.getElementById("ok");

    ok.onclick = function () {
        modal.style.display = "none";
    }
// When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }


// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


})


//$(document).ready(function () {
//
//
//    $('#slider').owlCarousel({
//
//
//
//
//        grabClass: 'owl-grab',
//        margin: 40,
//        items: 3,
//        autoWidth: true,
//        responsive:{
//            0:{
//                items:1,
//                nav:true
//            },
//            600:{
//                items:3,
//                nav:false
//            },
//            1000:{
//                items:5,
//                nav:true,
//                loop:false
//            }
//        }
//
//
//    });
//
//
//});