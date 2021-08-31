/*!
 * Start Bootstrap - Agency v6.0.5 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2021 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using anime.js
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function() {
        if (
            location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ?
                target :
                $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                anime({
                    targets: 'html, body',
                    scrollTop: target.offset().top - 72,
                    duration: 1000,
                    easing: 'easeInOutExpo'
                });
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").on('click', function() {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).on('scroll', navbarCollapse);

    // Magnific popup calls
    $('#portfolio').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
        }
    });

    // Scroll to top button appear
    $(document).scroll(function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    $('.carousel').carousel()


})(jQuery); // End of use strict

mapboxgl.accessToken = 'pk.eyJ1IjoibG9sbG8yMyIsImEiOiJjanJqMXF3dXgwN2F1NDRwdGVmcnVjZXVtIn0.b2WMGGKxDkq-pOeVntaG3Q';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [13.784163098149898, 45.65070527661624], // starting position [lng, lat]
    zoom: 15 // starting zoom
});

//block boxzoom & scrollZoom map
map.boxZoom.disable();
map.scrollZoom.disable();
map.doubleClickZoom.disable();
map.dragPan.disable();
// Set text popup
var nameOffice = "Idraulica Pasutto SAS"
var label_address = "Indirizzo: "
var address = "Via Antonio Canova, 2/a, 34129 Trieste TS"
var label_schedule = "Orario: "
var schedule = "Lunedì 08:00 - 16:00 Martedì 08:00 - 16:00 Mercoledì 08:00 - 16:00 Giovedì 08:00 - 16:00 Venerdì 08:00 - 16:00"
var schedule1 = "Lun, Mar, Mer, Gio, Ven 08:00 - 16:00 <br> Sab e Dom chiuso"

var label_mobile = "Telefono: "
var mobile = "040 360982"



//Declare popup and set style
var popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false, className: 'popup-container' })
    .setLngLat([13.784163098149898, 45.65070527661624])
    .setHTML("<strong><p class='text-center'> " + nameOffice + " </strong></p><p><strong> " + label_address + "</strong > " +
        address + " </p><p><strong>"  +label_schedule + "</strong>" +schedule1 +"</p><p><strong>" + label_mobile + "</strong>" + mobile + "</p>")
    .setMaxWidth("300px")
    .addTo(map);


var marker1 = new mapboxgl.Marker({
        color: "#dc3545",
        draggable: true
    })
    .setLngLat([13.784163098149898, 45.65070527661624])
    .setPopup(popup)
    .addTo(map);

const markerDiv = marker1.getElement();

markerDiv.addEventListener('mouseenter', () => marker1.togglePopup());
markerDiv.addEventListener('mouseleave', () => marker1.togglePopup());
