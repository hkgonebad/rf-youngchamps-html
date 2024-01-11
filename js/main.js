$(window).on('load', function () {
    'use strict';

    //setTimeout(function(){
    // $('#preloader').delay(350).addClass('loaded');
    //},preloaderTimeout);
    // new WOW().init();

    $('body').addClass('page-loaded');   
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;

    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
        $("body").addClass("scrolled");
        // $('.logo img').attr('src', 'assets/img/logo.png');
    } else {
        $("body").removeClass("scrolled");
        // $('.logo img').attr('src', 'assets/img/logo-bg.png');
    }

    if (scroll >= 800) {
        $(".go-top").addClass("active");
    } else {
        $(".go-top").removeClass("active");
    }
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

//
new WOW().init();


/////////////////////////////////////

///////////////////////////////////
$(function() {

    /* init Jarallax */
    jarallax(document.querySelectorAll('.jarallax'));

    // ScrollAnchor
    // $('[data-scroll]').on('click',function (e) {
	//     e.preventDefault();

	//     var target = this.hash;
	//     var $target = $(target);

	//     $('html, body').stop().animate({
	//         'scrollTop': $target.offset().top
	//     }, 900, 'swing', function () {
	//         window.location.hash = target;
	//     });
    // });

    ////////////////////////////////
    //Push Menu
    ////////////////////////////////
    // Push
    var overlay = $(".sidebar-overlay");

    

    // Header
    $( "#header" ).load( "header.html", function() {

        // ScrollAnchor
        $('[data-scroll]').on('click',function (e) {
            e.preventDefault();
            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });
        
        // Active
        var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $('.navbar-nav .nav-link, .navbar-nav .dropdown-item').each(function() {
            if (this.href === path) {
                $(this).addClass('active');
            }
        });

        $(".mainHeader .navbar-toggler").on("click", function () {
            var sidebar = $("#mainMenu");
            sidebar.toggleClass("show");
            if (sidebar.hasClass("navbar-collapse") && sidebar.hasClass("show")) {
                overlay.addClass("active");
                $('body').addClass('overflowH');
            } else {
                overlay.removeClass("active");
                $('body').removeClass('overflowH');
            }
        });

        overlay.on("click", function () {
            $(this).removeClass("active");
            $("#mainMenu").removeClass("show");
            $("#mainMenu").removeClass("show");
            $('body').removeClass('overflowH');
        });

        // // NavToggle
        // $(function() {
        //     $(document).click(function (event) {
        //         $('.navbar-collapse').collapse('hide');
        //     });
        // });

        $('.searchToggle').on('click', function () {
            $('.searchWrap').addClass('show');
        })
        $('.closeSearch').on('click', function () {
            $('.searchWrap').removeClass('show');
        })
        
    });


    // Footer
    // Header
    $( "#footer" ).load( "footer.html", function() {

        // ScrollAnchor
        $('[data-scroll]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash;
            var $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        });

    });
    

    // Main Slider
    if ($('.mainSlider').length > 0) {

        $('.mainSlider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            // autoplay: true,
            autoplayDuration: 2000,
            arrows: false,
            pauseOnHover: false,

            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    // Staff Slider
    if ($('.staffSlider').length > 0) {

        $('.staffSlider').slick({
            slidesToShow: 7,
            dots: false,
            arrows: true,
            autoplay: true,
            autoplayDuration: 2000,
            prevArrow:"<button type='button' class='slick-prev pull-left arrowClr'><i class='fas fa-chevron-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right arrowClr'><i class='fas fa-chevron-right'></i></button>",
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplayDuration: 2000,
                        dots: true,
                        arrows: true,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplayDuration: 2000,
                        dots: true,
                        arrows: true,
                    }
                }
            ]
        });
    }


    // Meet Champs Slider
    if ($('.meetYcCarousel').length > 0) {

        $('.meetYcCarousel').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            autoplay: false,
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",

            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    // News Slider
    if ($('.newsSlider').length > 0) {

        $('.newsSlider').slick({
            slidesToShow: 2,
            dots: false,
            arrows: false,

            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplayDuration: 2000,
                        dots: true,
                        arrows: true,
                        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
                    }
                }
            ]
        });
    }

    // Video Slider
    if ($('.videoSlider').length > 0) {

        $('.videoSlider').slick({
            slidesToShow: 3,
            dots: false,
            arrows: false,
            dots: true,
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev text-dark pull-left'><i class='fas fa-chevron-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next text-dark pull-right'><i class='fas fa-chevron-right'></i></button>",

            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplayDuration: 2000,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    // Gallery Slider
    if ($('.galleryCarousel').length > 0) {

        $('.galleryCarousel').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            autoplay: false,
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left text-dark'><i class='fas fa-chevron-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right text-dark'><i class='fas fa-chevron-right'></i></button>",

            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    // News slider
    if ($('.testiSlider').length > 0) {
        $('.testiSlider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            autoplay: false,

            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left text-dark arrowClr'><i class='fas fa-chevron-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right text-dark arrowClr'><i class='fas fa-chevron-right'></i></button>",

            // fade: false,
            // adaptiveHeight: true,
            // infinite: false,
            // useTransform: true,
            // speed: 400,
            // cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        });
    }

    // Slick slider
    $('.slider-single').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
    });

    $('.slider-nav')
        .on('init', function (event, slick) {
            $('.slider-nav .slick-slide.slick-current').addClass('is-active');
        })
        .slick({
            slidesToShow: 4,
            dots: false,
            focusOnSelect: false,
            infinite: true,
            centerMode: true,
            centerPadding: '60px',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                }
            }]
        });

    $('.slider-single').on('afterChange', function (event, slick, currentSlide) {
        $('.slider-nav').slick('slickGoTo', currentSlide);
        var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
        $('.slider-nav .slick-slide.is-active').removeClass('is-active');
        $(currrentNavSlideElem).addClass('is-active');
    });

    $('.slider-nav').on('click', '.slick-slide', function (event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $('.slider-single').slick('slickGoTo', goToSingleSlide);
    });


    /////////////////////////////
    // Change Tab
    /////////////////////////////
    // Javascript to enable link to tab
    var hash = location.hash.replace(/^#/, '');  // ^ means starting, meaning only match the first hash

    if (hash) {
        $('html, body').animate({ scrollTop: $("#teamTab").offset().top}, 1000);
        $('.nav-tabs a[href="#' + hash + '"]').tab('show');
    } 

    // Change hash for page-reload
    $('.nav-tabs a').on('shown.bs.tab', function (e) {
        window.location.hash = e.target.hash;
    })


    /////////////////////////////
    // Custom File Input
    /////////////////////////////
    bsCustomFileInput.init();

    
    /////////////////////////////
    // Gallery
    /////////////////////////////
    if ($('.grid').length > 0) {
        //********************
        // Isotope
        //********************
        var $grid = $('.grid').isotope({
            containerStyle: null,
            percentPosition: true,
            masonry: {
                gutter: 0,
                columnWidth: $('.grid').width() / 4
            },
            itemSelector: '.element-item',
            // filter: '*',
            transitionDuration: '0.4s',
            // sortBy: 'data-number',
            // sortAscending: false
        });

        // layout Isotope after each image loads
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });
        

        //****************************
        // Isotope Load more button
        //****************************
        var initShow = 8; //number of images loaded on init & onclick load more button
        var counter = initShow; //counter for load more button
        var iso = $grid.data('isotope'); // get Isotope instance

        console.log(iso)

        loadMore(initShow); //execute function onload

        function loadMore(toShow) {
            $grid.find(".hidden").removeClass("hidden");

            var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
            return item.element;
            });
            $(hiddenElems).addClass('hidden');
            $grid.isotope('layout');

            //when no more to load, hide show more button
            if (hiddenElems.length == 0) {
            $("#load-more").hide();
            } 
            else {
            $("#load-more").show();
            };

        }

        //append load more button
        $grid.after('<div class="mt-5 text-center btns"><button id="load-more" class="btn btn-outline-primary btn-animated">View More</button></div>');

        //when load more button clicked
        $("#load-more").on('click', function() {
            
            if ($('.filter-button-group .nav-link').data('clicked')) {
            //when filter button clicked, set initial value for counter
            counter = initShow;
            console.log(counter);
            j$('.filter-button-group .nav-link').data('clicked', false);
            } else {
            counter = counter;
            };

            counter = counter + initShow;

            loadMore(counter);
        });


        //********************
        // Masonary
        //********************
        $('.filter-button-group').on('click', '.nav-link', function (e) {
            e.preventDefault();

            $('.filter-button-group .nav-link').removeClass('active');
            $(this).addClass('active');

            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });

            loadMore(initShow);
            
        });

    }


});


