( function ( $ ) {
    "use strict";

    // Dropdown on mouse hover
    $( document ).ready( function () {
        function toggleNavbarMethod() {
            if ( $( window ).width() > 992 ) {
                $( '.navbar .dropdown' ).on( 'mouseover', function () {
                    $( '.dropdown-toggle', this ).trigger( 'click' );
                } ).on( 'mouseout', function () {
                    $( '.dropdown-toggle', this ).trigger( 'click' ).blur();
                } );
            } else {
                $( '.navbar .dropdown' ).off( 'mouseover' ).off( 'mouseout' );
            }
        }
        toggleNavbarMethod();
        $( window ).resize( toggleNavbarMethod );
    } );


    // Back to top button
    $( window ).scroll( function () {
        if ( $( this ).scrollTop() > 100 ) {
            $( '.back-to-top' ).fadeIn( 'slow' );
        } else {
            $( '.back-to-top' ).fadeOut( 'slow' );
        }
    } );
    $( '.back-to-top' ).click( function () {
        $( 'html, body' ).animate( { scrollTop: 0 }, 1500, 'easeInOutExpo' );
        return false;
    } );


    // Portfolio isotope and filter
    var portfolioIsotope = $( '.portfolio-container' ).isotope( {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    } );

    $( '#portfolio-flters li' ).on( 'click', function () {
        $( "#portfolio-flters li" ).removeClass( 'active' );
        $( this ).addClass( 'active' );

        portfolioIsotope.isotope( { filter: $( this ).data( 'filter' ) } );
    } );


    // Post carousel
    $( ".post-carousel" ).owlCarousel( {
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    } );


    // Testimonials carousel
    $( ".testimonial-carousel" ).owlCarousel( {
        center: true,
        autoplay: true,
        smartSpeed: 2000,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    } );

} )( jQuery );


//Counter

let counts = setInterval( updated );
let upto = 0;
function updated() {
    var count = document.getElementById( "counter" );
    count.innerHTML = ++upto;
    if ( upto === 1500 ) {
        clearInterval( counts );
    }
}


let counts1 = setInterval( updated1 );
let upto1 = 0;
function updated1() {
    var count1 = document.getElementById( "act-count" );
    count1.innerHTML = ++upto1;
    if ( upto1 === 100 ) {
        clearInterval( counts1 );
    }
}

let counts2 = setInterval( updated2 );
let upto2 = 0;
function updated2() {
    var count2 = document.getElementById( "vid-count" );
    count2.innerHTML = ++upto2;
    if ( upto2 === 500 ) {
        clearInterval( counts2 );
    }
}


//Read more


function readMore() {
    var dots = document.getElementById( "dots" );
    var moreText = document.getElementById( "more" );
    var btnText = document.getElementById( "myBtn" );

    if ( dots.style.display === "none" ) {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

function readMore1() {
    var dots1 = document.getElementById( "dots1" );
    var moreText1 = document.getElementById( "more1" );
    var btnText1 = document.getElementById( "myBtn1" );

    if ( dots1.style.display === "none" ) {
        dots1.style.display = "inline";
        btnText1.innerHTML = "Read more";
        moreText1.style.display = "none";
    } else {
        dots1.style.display = "none";
        btnText1.innerHTML = "Read less";
        moreText1.style.display = "inline";
    }
}


function readMore2() {
    var dots2 = document.getElementById( "dots2" );
    var moreText2 = document.getElementById( "more2" );
    var btnText2 = document.getElementById( "myBtn2" );

    if ( dots2.style.display === "none" ) {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read more";
        moreText2.style.display = "none";
    } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "Read less";
        moreText2.style.display = "inline";
    }
}


//Registration 







