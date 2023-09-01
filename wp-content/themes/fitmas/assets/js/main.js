(function($) {
    "use strict";
    /*=================================
      JS Index Here
    ==================================*/
    /*
    01. On Load Function
    02. Preloader
    03. Mobile Menu Active
    04. Sticky fix
    05. Scroll To Top
    06. Set Background Image
    07. Global Slider
    08. Custom Animaiton For Slider
    09. 
    10. Ajax Contact Form
    11. Search Box Popup
    12. Popup Sidemenu
    13. Magnific Popup
    14. Section Position
    15. Filter
    16. Counter Up
    17. Default Tab
    18. Shape Mockup
    19. Countdown
    20. Progress Bar Animation
    21. Price Slider
    22. One Page Nav
    23. Indicator
    00. Woocommerce Toggle
    00. Right Click Disable
  */
    /*=================================
      JS Index End
  ==================================*/
    /*

  /*---------- 01. On Load Function ----------*/
    $(window).on("load", function() {
        $(".preloader").fadeOut();
    });

    $(window).on('resize', function() {
        $(".slick-slider").slick("refresh");
    });

    /*---------- 02. Preloader ----------*/
    if ($(".preloader").length > 0) {
        $(".preloaderCls").each(function() {
            $(this).on("click", function(e) {
                e.preventDefault();
                $(".preloader").css("display", "none");
            });
        });
    }

    /*---------- 03. Mobile Menu Active ----------*/
    $.fn.mobilemenu = function(options) {
        var opt = $.extend({
                menuToggleBtn: ".menu-toggle",
                bodyToggleClass: "body-visible",
                subMenuClass: "submenu-class",
                subMenuParent: "submenu-item-has-children",
                subMenuParentToggle: "active-class",
                meanExpandClass: "mean-expand-class",
                appendElement: '<span class="mean-expand-class"></span>',
                subMenuToggleClass: "menu-open",
                toggleSpeed: 400,
            },
            options
        );

        return this.each(function() {
            var menu = $(this); // Select menu

            // Menu Show & Hide
            function menuToggle() {
                menu.toggleClass(opt.bodyToggleClass);

                // collapse submenu on menu hide or show
                var subMenu = "." + opt.subMenuClass;
                $(subMenu).each(function() {
                    if ($(this).hasClass(opt.subMenuToggleClass)) {
                        $(this).removeClass(opt.subMenuToggleClass);
                        $(this).css("display", "none");
                        $(this).parent().removeClass(opt.subMenuParentToggle);
                    }
                });
            }

            // Class Set Up for every submenu
            menu.find("li").each(function() {
                var submenu = $(this).find("ul");
                submenu.addClass(opt.subMenuClass);
                submenu.css("display", "none");
                submenu.parent().addClass(opt.subMenuParent);
                submenu.prev("a").append(opt.appendElement);
                submenu.next("a").append(opt.appendElement);
            });

            // Toggle Submenu
            function toggleDropDown($element) {
                if ($($element).next("ul").length > 0) {
                    $($element).parent().toggleClass(opt.subMenuParentToggle);
                    $($element).next("ul").slideToggle(opt.toggleSpeed);
                    $($element).next("ul").toggleClass(opt.subMenuToggleClass);
                } else if ($($element).prev("ul").length > 0) {
                    $($element).parent().toggleClass(opt.subMenuParentToggle);
                    $($element).prev("ul").slideToggle(opt.toggleSpeed);
                    $($element).prev("ul").toggleClass(opt.subMenuToggleClass);
                }
            }

            // Submenu toggle Button
            var expandToggler = "." + opt.meanExpandClass;
            $(expandToggler).each(function() {
                $(this).on("click", function(e) {
                    e.preventDefault();
                    toggleDropDown($(this).parent());
                });
            });

            // Menu Show & Hide On Toggle Btn click
            $(opt.menuToggleBtn).each(function() {
                $(this).on("click", function() {
                    menuToggle();
                });
            });

            // Hide Menu On out side click
            menu.on("click", function(e) {
                e.stopPropagation();
                menuToggle();
            });

            // Stop Hide full menu on menu click
            menu.find("div").on("click", function(e) {
                e.stopPropagation();
            });
        });
    };

    $(".mobile-menu-wrapper").mobilemenu();

    /*---------- 04. Sticky fix ----------*/
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 500) {
            $('.sticky-wrapper').addClass('sticky');
        } else {
            $('.sticky-wrapper').removeClass('sticky')
        }
    })

    /*---------- 04. Sticky fix ----------*/
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 920) {
            $('.sticky-wrapper2').addClass('sticky');
        } else {
            $('.sticky-wrapper2').removeClass('sticky')
        }
    })

    /*---------- 05. Scroll To Top ----------*/
    // progressAvtivation
    if ($('.scroll-top')) {
        var scrollTopbtn = document.querySelector('.scroll-top');
        var progressPath = document.querySelector('.scroll-top path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 750;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery(scrollTopbtn).addClass('show');
            } else {
                jQuery(scrollTopbtn).removeClass('show');
            }
        });
        jQuery(scrollTopbtn).on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({
                scrollTop: 0
            }, 1);
            return false;
        })
    }

    /*---------- 06. Set Background Image ----------*/
    if ($("[data-bg-src]").length > 0) {
        $("[data-bg-src]").each(function() {
            var src = $(this).attr("data-bg-src");
            $(this).css("background-image", "url(" + src + ")");
            $(this).removeAttr("data-bg-src").addClass("background-image");
        });
    }


    // Video Post PopUp
    if ($('.video-popup').length) {
        $('.video-popup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
    // Post gallery 
    if ($('.post-gallerys').length) {
        $('.post-gallerys').slick({
            dots: false,
            infinite: true,
            speed: 700,
            cssEase: 'linear',
            autoplay: true,
            autoplaySpeed: 2000,
        });
    }

    /*---------- 11. Search Box Popup ----------*/
    function popupSarchBox($searchBox, $searchOpen, $searchCls, $toggleCls) {
        $($searchOpen).on("click", function(e) {
            e.preventDefault();
            $($searchBox).addClass($toggleCls);
        });
        $($searchBox).on("click", function(e) {
            e.stopPropagation();
            $($searchBox).removeClass($toggleCls);
        });
        $($searchBox)
            .find("form")
            .on("click", function(e) {
                e.stopPropagation();
                $($searchBox).addClass($toggleCls);
            });
        $($searchCls).on("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            $($searchBox).removeClass($toggleCls);
        });
    }
    popupSarchBox(
        ".popup-search-box",
        ".searchBoxToggler",
        ".searchClose",
        "show"
    );

    /*---------- 12. Popup Sidemenu ----------*/
    function popupSideMenu($sideMenu, $sideMunuOpen, $sideMenuCls, $toggleCls) {
        // Sidebar Popup
        $($sideMunuOpen).on('click', function(e) {
            e.preventDefault();
            $($sideMenu).addClass($toggleCls);
        });
        $($sideMenu).on('click', function(e) {
            e.stopPropagation();
            $($sideMenu).removeClass($toggleCls)
        });
        var sideMenuChild = $sideMenu + ' > div';
        $(sideMenuChild).on('click', function(e) {
            e.stopPropagation();
            $($sideMenu).addClass($toggleCls)
        });
        $($sideMenuCls).on('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            $($sideMenu).removeClass($toggleCls);
        });
    };
    popupSideMenu('.sidemenu-wrapper', '.sideMenuToggler', '.sideMenuCls', 'show');

    /*----------- 13. Magnific Popup ----------*/
    /* magnificPopup img view */
    $(".popup-image").magnificPopup({
        type: "image",
        mainClass: 'mfp-zoom-in',
        removalDelay: 260,
        gallery: {
            enabled: true,
        },
    });

    /* magnificPopup video view */
    $(".popup-video").magnificPopup({
        type: "iframe",
        mainClass: 'mfp-zoom-in',
        removalDelay: 260,
    });

    /* magnificPopup video view */
    $(".popup-content").magnificPopup({
        type: "inline",
        midClick: true,
    });

    $(".popup-content").on("click", function() {
        $(".slick-slider").slick("refresh");
    });

    /*---------- 14. Section Position ----------*/
    // Interger Converter
    function convertInteger(str) {
        return parseInt(str, 10);
    }

    $.fn.sectionPosition = function(mainAttr, posAttr) {
        $(this).each(function() {
            var section = $(this);

            function setPosition() {
                var sectionHeight = Math.floor(section.height() / 2), // Main Height of section
                    posData = section.attr(mainAttr), // where to position
                    posFor = section.attr(posAttr), // On Which section is for positioning
                    topMark = "top-half", // Pos top
                    bottomMark = "bottom-half", // Pos Bottom
                    parentPT = convertInteger($(posFor).css("padding-top")), // Default Padding of  parent
                    parentPB = convertInteger($(posFor).css("padding-bottom")); // Default Padding of  parent

                if (posData === topMark) {
                    $(posFor).css(
                        "padding-bottom",
                        parentPB + sectionHeight + "px"
                    );
                    section.css("margin-top", "-" + sectionHeight + "px");
                } else if (posData === bottomMark) {
                    $(posFor).css(
                        "padding-top",
                        parentPT + sectionHeight + "px"
                    );
                    section.css("margin-bottom", "-" + sectionHeight + "px");
                }
            }
            setPosition(); // Set Padding On Load
        });
    };

    var postionHandler = "[data-sec-pos]";
    if ($(postionHandler).length) {
        $(postionHandler).imagesLoaded(function() {
            $(postionHandler).sectionPosition("data-sec-pos", "data-pos-for");
        });
    }

    /*----------- 15. Filter ----------*/
    $(".filter-active").imagesLoaded(function() {
        var $filter = ".filter-active",
            $filterItem = ".filter-item",
            $filterMenu = ".filter-menu-active";

        if ($($filter).length > 0) {
            var $grid = $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
            });

            // filter items on button click
            $($filterMenu).on("click", "button", function() {
                var filterValue = $(this).attr("data-filter");
                $grid.isotope({
                    filter: filterValue,
                });
            });

            // Menu Active Class
            $($filterMenu).on("click", "button", function(event) {
                event.preventDefault();
                $(this).addClass("active");
                $(this).siblings(".active").removeClass("active");
            });
        }
    });

    $(".masonary-active").imagesLoaded(function() {
        var $filter = ".masonary-active",
            $filterItem = ".filter-item",
            $filterMenu = ".filter-menu-active";

        if ($($filter).length > 0) {
            var $grid = $($filter).isotope({
                itemSelector: $filterItem,
                filter: "*",
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1,
                },
            });

            // filter items on button click
            $($filterMenu).on("click", "button", function() {
                var filterValue = $(this).attr("data-filter");
                $grid.isotope({
                    filter: filterValue,
                });
            });

            // Menu Active Class
            $($filterMenu).on("click", "button", function(event) {
                event.preventDefault();
                $(this).addClass("active");
                $(this).siblings(".active").removeClass("active");
            });
        }
    });

    // Active specifix
    $('.filter-active-cat1').imagesLoaded(function() {
        var $filter = '.filter-active-cat1',
            $filterItem = '.filter-item',
            $filterMenu = '.filter-menu-active';

        if ($($filter).length > 0) {
            var $grid = $($filter).isotope({
                itemSelector: $filterItem,
                filter: '.cat1',
                masonry: {
                    // use outer width of grid-sizer for columnWidth
                    columnWidth: 1
                }
            });

            // filter items on button click
            $($filterMenu).on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });

            // Menu Active Class 
            $($filterMenu).on('click', 'button', function(event) {
                event.preventDefault();
                $(this).addClass('active');
                $(this).siblings('.active').removeClass('active');
            });
        };
    });

    /*----------- 16. Counter Up ----------*/
    $(".counter-number").counterUp({
        delay: 10,
        time: 1000,
    });

    /*----------- 18. Shape Mockup ----------*/
    $.fn.shapeMockup = function() {
        var $shape = $(this);
        $shape.each(function() {
            var $currentShape = $(this),
                shapeTop = $currentShape.data("top"),
                shapeRight = $currentShape.data("right"),
                shapeBottom = $currentShape.data("bottom"),
                shapeLeft = $currentShape.data("left");
            $currentShape
                .css({
                    top: shapeTop,
                    right: shapeRight,
                    bottom: shapeBottom,
                    left: shapeLeft,
                })
                .removeAttr("data-top")
                .removeAttr("data-right")
                .removeAttr("data-bottom")
                .removeAttr("data-left")
                .parent()
                .addClass("shape-mockup-wrap");
        });
    };

    if ($(".shape-mockup")) {
        $(".shape-mockup").shapeMockup();
    }

    /*----------- 19. Countdown ----------*/

    $.fn.countdown = function() {
        $(this).each(function() {
            var $counter = $(this),
                countDownDate = new Date($counter.data("offer-date")).getTime(), // Set the date we're counting down toz
                exprireCls = "expired";

            // Finding Function
            function s$(element) {
                return $counter.find(element);
            }

            // Update the count down every 1 second
            var counter = setInterval(function() {
                // Get today's date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                var minutes = Math.floor(
                    (distance % (1000 * 60 * 60)) / (1000 * 60)
                );
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Check If value is lower than ten, so add zero before number
                days < 10 ? (days = "0" + days) : null;
                hours < 10 ? (hours = "0" + hours) : null;
                minutes < 10 ? (minutes = "0" + minutes) : null;
                seconds < 10 ? (seconds = "0" + seconds) : null;

                // If the count down is over, write some text
                if (distance < 0) {
                    clearInterval(counter);
                    $counter.addClass(exprireCls);
                    $counter.find(".message").css("display", "block");
                } else {
                    // Output the result in elements
                    s$(".day").html(days);
                    s$(".hour").html(hours);
                    s$(".minute").html(minutes);
                    s$(".seconds").html(seconds);
                }
            }, 1000);
        });
    };

    if ($(".counter-list").length) {
        $(".counter-list").countdown();
    }

    /*----------- 20. Progress Bar Animation ----------*/
    $('.progress-bar').waypoint(function() {
        $('.progress-bar').css({
            animation: "animate-positive 1.8s",
            opacity: "1"
        });
    }, {
        offset: '75%'
    });

    /*----------- 21. Price Slider ----------*/
    $(".price_slider").slider({
        range: true,
        min: 10,
        max: 100,
        values: [10, 75],
        slide: function(event, ui) {
            $(".from").text("$" + ui.values[0]);
            $(".to").text("$" + ui.values[1]);
        }
    });
    $(".from").text("$" + $(".price_slider").slider("values", 0));
    $(".to").text("$" + $(".price_slider").slider("values", 1));

    /*----------- 22. One Page Nav ----------*/
    function onePageNav(element) {
        if ($(element).length > 0) {
            $(element).each(function() {
                var link = $(this).find('a');
                $(this).find(link).each(function() {
                    $(this).on('click', function() {
                        var target = $(this.getAttribute('href'));
                        if (target.length) {
                            event.preventDefault();
                            $('html, body').stop().animate({
                                scrollTop: target.offset().top - 10
                            }, 1000);
                        };

                    });
                });
            })
        }
    };
    onePageNav('.onepage-nav');

    //one page sticky menu  
    $(window).on('scroll', function() {
        if ($('.onepage-nav').length > 0) {
            if ($(window).scrollTop() > 0) {
                $('.nav-header .sticky-active').addClass('sticky');
            } else {
                $('.nav-header .sticky-active').removeClass('sticky');
            }
        };
    });


    // WooCommerce product Popup
    var $rtl = $('body').hasClass("rtl") ? true : false;
    if ($('.woo-spimg').length) {
        $('.woo-spimg').magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-zoom-out', // this class is for CSS animation below
            gallery: {
                enabled: true
            },
            zoom: {
                enabled: true,
                duration: 300,
                easing: 'ease-in-out',
                opener: function(openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }
    // WooCommerce Big Image
    if ($('.woo-product-big-img').length) {
        $('.woo-product-big-img').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.woo-product-small-img',
            rtl: $rtl,
        });
    }

    // WooCommerce Small Image
    if ($('.woo-product-small-img').length) {
        $('.woo-product-small-img').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.woo-product-big-img',
            dots: true,
            arrows: false,
            focusOnSelect: true,
            centerMode: true,
            centerPadding: '60px',
            rtl: $rtl,
        });
    }
    // Grid View and List View
    if ($('#fitmas-shop-view-mode li').length) {
        $('#fitmas-shop-view-mode li').on('click', function() {
            $('body').removeClass('fitmas-product-grid-view').removeClass('fitmas-product-list-view');

            if ($(this).hasClass('fitmas-shop-list')) {
                $('body').addClass('fitmas-product-list-view');
                Cookies.set('fitmas-shop-view', 'list');
            } else {
                $('body').addClass('fitmas-product-grid-view');
                Cookies.remove('fitmas-shop-view');
            }
            return false;
        });
    }
})(jQuery);