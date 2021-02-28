(function($) {
    'use strict';





    /* -------------------------------------------------------
     PORTFOLIO FILTER SET ACTIVE CLASS FOR STYLE
    ----------------------------------------------------------*/
    $('.portfolio-filter li').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });


    /* -------------------------------------------------------
     PORTFOLIO FILTER SET ACTIVE CLASS FOR STYLE
    ----------------------------------------------------------*/
    $('.footer-menu nav ul li').on('click', function(event) {
        $(this).siblings('.active').removeClass('active');
        $(this).addClass('active');
        event.preventDefault();
    });

    /* ----------------------------------------------------
     PORTFOLIO MASONRY STYLE ISOTOPE
    ------------------------------------------------------*/
    var $maxivePortfolioMasonry = $('.portfolio-masonry');
    if (typeof imagesLoaded === 'function') {
        imagesLoaded($maxivePortfolioMasonry, function() {
            setTimeout(function() {
                $maxivePortfolioMasonry.isotope({
                    itemSelector: '.portfolio-item',
                    resizesContainer: false,
                    layoutMode: 'masonry',
                    filter: '*'
                });
            }, 500);

        });
    };

    /* ---------------------------------------------------
     PORTFOLIO FILTERING
     ---------------------------------------------------- */
    $('.portfolio-filter').on('click', 'a', function() {
        $(this).addClass('current');
        var filterValue = $(this).attr('data-filter');

        $(this).parents(".portfolio-filter-wrap").parents(".portfolio-wrapper").find(".portfolio").isotope({
            filter: filterValue
        });
    });




    /*--------------------------------
        WOW JS
    -----------------------------------*/
    new WOW().init();

    /*--------------------------------
    MOBILE MENU ACTIVE
    -----------------------------------*/
    $('.mobile-menu').meanmenu();

    /*----------------------------------
    COUNTUP JS ACTIVE 
    ------------------------------------*/
    $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
    // MAIN SLIDER JS
    $('.main-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        infinite: true,
        prevArrow: false,
        nextArrow: false
    });
    // MAIN SLIDER TWO JS
    $('.main-slider-two').slick({
        dots: true,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        infinite: true,
        arrows: true,
        responsive: [{
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
            }
        }]
    });

    // TESTIMONIAL SLIDER
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: false,
        arrows: false,
    });

    /* CLIENT LOGO JS */
    $(".client-logo-wrapper").slick({
        dots: false,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 800,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    /* ---------------------------------------------
     MENU HAMBURGER AND FULL SCREEN  OVERLAY.
    --------------------------------------------- */
    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
        $(this).next().toggleClass('nav-show')
    });
    $('.menu-button a').on('click', function() {
        $('.overlay').fadeToggle(300);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
    $('.overlay').on('click', function() {
        $('.menu-button').fadeToggle(300);
        $('.button a').toggleClass('btn-open').toggleClass('btn-close');
        open = false;
    });

    /* ---------------------------------------------
     MENU TREE VIEW.
    --------------------------------------------- */
    $('#sidebar-menu').treeview({
        animated: 'medium',
        collapsed: true,
        unique: true,
        toggle: function() {
            window.console && console.log('%o was toggled', this);
        }
    });
    /* ---------------------------------------------
     OFF CANVASS MENU HANDLER
    --------------------------------------------- */
    $('.flay-out-menu-btn').on('click', function() {
        $('.header-left').toggleClass('flay-header-in');
        $(this).toggleClass('flay-close');
    });

    /* ==========================
        Portfolio Details SLIDER 
    =============================*/

    $('.portfolio-project-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.project-slider-nav'
    });
    $('.project-slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.portfolio-project-slider',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
    });

    // Video Slider
    $('.video-project-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.video-slider-nav'
    });
    $('.video-slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.video-project-slider',
        dots: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true
    });
    /* ---------------------------------------------
     MASONRY STYLE BLOG.
    ------------------------------------------------ */
    $('.blog-area').imagesLoaded(function() {

        var $blogContainer = $('.blog-masonry-wrapper');
        $blogContainer.isotope({
            itemSelector: '.single-blog-post',
            layoutMode: 'masonry'
        });

    });
    /* parallax Active*/
    $.stellar({
        horizontalScrolling: false,
        verticalOffset: 40
    });

    // Coming Soon
    // comming soon countdown
    $('[data-countdown]').each(function() {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime(
                '<div class="cdown"><span class="days"><strong>%-D</strong><p>Days</p></span></div><div class="cdown"><span class="hour"><strong> %-H</strong><p>Hours</p></span></div> <div class="cdown"><span class="minutes"><strong>%M</strong> <p>MINUTES</p></span></div><div class="cdown"><span class="second"><strong> %S</strong><p>SECONDS</p></span></div>'
            ));
        });
    });

    /*-------------------------------------------
     SCROLL TO TOP BUTTON ADDED
    ---------------------------------------------*/
    $('body').append('<a id="scroll-btn" class="scroll-btn" href="#"><i class="ti-arrow-up"></i></a>');
    if ($('#scroll-btn').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#scroll-btn').addClass('btn-show');
                } else {
                    $('#scroll-btn').removeClass('btn-show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#scroll-btn').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
    };



})(jQuery);
