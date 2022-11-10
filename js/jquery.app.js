/* Theme Name: Sunroy - Responsive Bootstrap 4 Construction Template
   Author: Thamesbrand
   Version: 1.0.0
   Created: April 2018
   File Description:Main JS file of the template
*/


(function ($) {

    'use strict';

    function initNavbar() {

        var scroll = $(window).scrollTop();

        $('.navbar-toggle').on('click', function (event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });

        $('.navigation-menu>li').slice(-2).addClass('last-elements');

        $('.menu-arrow,.submenu-arrow').on('click', function (e) {
            if ($(window).width() < 992) {
                e.preventDefault();
                $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
            }
        });
    }

    function initNavitemActive() {
        $(".navigation-menu a").each(function () {
            if (this.href == window.location.href) {
                $(this).parent().addClass("active"); // add active to li of the current link
                $(this).parent().parent().parent().addClass("active"); // add active class to an anchor
                $(this).parent().parent().parent().parent().parent().addClass("active"); // add active class to an anchor
            }
        });
    }

    
    function initPortfolioFilter() {
       $(window).on('load', function () {
            //PORTFOLIO FILTER 
            var $container = $('.projects-wrapper');
            var $filter = $('#filter');
            // Initialize isotope 
            $container.isotope({
                filter: '*',
                layoutMode: 'masonry',
                animationOptions: {
                    duration: 750,
                    easing: 'linear'
                }
            });

            // Filter items when filter link is clicked
            $filter.find('a').on("click",function() {
                var selector = $(this).attr('data-filter');
                $filter.find('a').removeClass('active');
                $(this).addClass('active');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        animationDuration: 750,
                        easing: 'linear',
                        queue: false,
                    }
                });
                return false;
            });
        });
    }


  function initMagnificPopup() {
        $('.mfp-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
                    // Will preload 0 - before current, and 1 after the current image 
            }
        });
        $('.video-play-icon-trigger').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

    }

    function initTesti(){
         $(document).ready(function() {
            $("#testi").owlCarousel({
            autoPlay: 28000, //Set AutoPlay to 3 seconds     
            items: 2,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]
            });
        });

    }

    function initScrollClass(){
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 80) {
                $(".defaultscroll").addClass("scroll");
            } else {
                $(".defaultscroll").removeClass("scroll");
            }
        });
    }


    function init() {
        initNavbar();
        initNavitemActive();
        initPortfolioFilter();
        initMagnificPopup();
        initTesti();
        initScrollClass();
    }

    init();

})(jQuery)
