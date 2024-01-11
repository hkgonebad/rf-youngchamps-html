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
            autoplay: true,
            autoplayDuration: 2000,
            arrows: false,
            

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


    // Meet Champs Slider
    if ($('.meetYcCarousel').length > 0) {

        $('.meetYcCarousel').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: false,
            autoplay: false,
            arrows: true,
            prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-arrow-left'></i></button>",
            nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-arrow-right'></i></button>",

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



});


$(document).ready(function() {

  // init Isotope
  var $container = $('.isotope').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    getSortData: {
      name: '.name',
      symbol: '.symbol',
      number: '.number parseInt',
      category: '[data-category]',
      weight: function(itemElem) {
        var weight = $(itemElem).find('.weight').text();
        return parseFloat(weight.replace(/[\(\)]/g, ''));
      }
    }
  });

  // filter functions
  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt(number, 10) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      return name.match(/ium$/);
    }
  };

  // bind filter button click
  $('#filters').on('click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $container.isotope({
      filter: filterValue
    });
  });

  // bind sort button click
  $('#sorts').on('click', 'button', function() {
    var sortByValue = $(this).attr('data-sort-by');
    $container.isotope({
      sortBy: sortByValue
    });
  });

  // change is-checked class on buttons
  $('.button-group').each(function(i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
    });
  });

  //****************************
  // Isotope Load more button
  //****************************
  var initShow = 3; //number of items loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $container.data('isotope'); // get Isotope instance

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $container.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length == 0) {
      jQuery("#load-more").hide();
    } else {
      jQuery("#load-more").show();
    };

  }

  //append load more button
  $container.after('<button id="load-more"> Load More</button>');

  //when load more button clicked
  $("#load-more").click(function() {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    };

    counter = counter + initShow;

    loadMore(counter);
  });

  //when filter button clicked
  $("#filters").click(function() {
    $(this).data('clicked', true);

    loadMore(initShow);
  });

  
  
});