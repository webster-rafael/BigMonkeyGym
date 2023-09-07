;
(function($) {
    'use strict';

    $(window).on('elementor/frontend/init', function() {


        var GlobalJSLoad = function() {

            /*---------- Set Background Image ----------*/
            if ($("[data-bg-src]").length > 0) {
                $("[data-bg-src]").each(function() {
                    var src = $(this).attr("data-bg-src");
                    $(this).css("background-image", "url(" + src + ")");
                    $(this).removeAttr("data-bg-src").addClass("background-image");
                });
            }

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

            /*----------- Flip Slider ----------*/


            /*----------- Filter ----------*/
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

        };
        elementorFrontend.hooks.addAction('frontend/element_ready/global', GlobalJSLoad);



        var GlobalSlider = function() {

            $(".global-carousel").each(function() {
                var carouselSlide = $(this);

                // Collect Data
                function d(data) {
                    return carouselSlide.data(data);
                }

                // Custom Arrow Button
                var prevButton =
                    '<button type="button" class="slick-prev"><i class="' +
                    d("prev-arrow") +
                    '"></i></button>',
                    nextButton =
                    '<button type="button" class="slick-next"><i class="' +
                    d("next-arrow") +
                    '"></i></button>';

                // Function For Custom Arrow Btn
                $("[data-slick-next]").each(function() {
                    $(this).on("click", function(e) {
                        e.preventDefault();
                        $($(this).data("slick-next")).slick("slickNext");
                    });
                });

                $("[data-slick-prev]").each(function() {
                    $(this).on("click", function(e) {
                        e.preventDefault();
                        $($(this).data("slick-prev")).slick("slickPrev");
                    });
                });

                // Check for arrow wrapper
                if (d("arrows") == true) {
                    if (!carouselSlide.closest(".arrow-wrap").length) {
                        carouselSlide.closest(".container").parent().addClass("arrow-wrap");
                    }
                }

                carouselSlide.not('.slick-initialized').slick({
                    dots: d("dots") ? true : false,
                    fade: d("fade") ? true : false,
                    arrows: d("arrows") ? true : false,
                    speed: d("speed") ? d("speed") : 1000,
                    sliderNavfor: d("slidernavfor") ? d("slidernavfor") : false,
                    autoplay: d("autoplay") == false ? false : true,
                    infinite: d("infinite") == false ? false : true,
                    slidesToShow: d("slide-show") ? d("slide-show") : 1,
                    adaptiveHeight: d("adaptive-height") ? true : false,
                    centerMode: d("center-mode") ? true : false,
                    autoplaySpeed: d("autoplay-speed") ? d("autoplay-speed") : 8000,
                    centerPadding: d("center-padding") ? d("center-padding") : "0",
                    focusOnSelect: d("focuson-select") == false ? false : true,
                    pauseOnFocus: d("pauseon-focus") ? true : false,
                    pauseOnHover: d("pauseon-hover") ? true : false,
                    variableWidth: d("variable-width") ? true : false,
                    vertical: d("vertical") ? true : false,
                    verticalSwiping: d("vertical") ? true : false,
                    prevArrow: d("prev-arrow") ?
                        prevButton :
                        '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
                    nextArrow: d("next-arrow") ?
                        nextButton :
                        '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
                    rtl: $("html").attr("dir") == "rtl" ? true : false,
                    responsive: [{
                            breakpoint: 1600,
                            settings: {
                                arrows: d("xl-arrows") ? true : false,
                                dots: d("xl-dots") ? true : false,
                                slidesToShow: d("xl-slide-show") ?
                                    d("xl-slide-show") :
                                    d("slide-show"),
                                centerMode: d("xl-center-mode") ? true : false,
                                centerPadding: "0",
                            },
                        },
                        {
                            breakpoint: 1400,
                            settings: {
                                arrows: d("ml-arrows") ? true : false,
                                dots: d("ml-dots") ? true : false,
                                slidesToShow: d("ml-slide-show") ?
                                    d("ml-slide-show") :
                                    d("slide-show"),
                                centerMode: d("ml-center-mode") ? true : false,
                                centerPadding: 0,
                            },
                        },
                        {
                            breakpoint: 1200,
                            settings: {
                                arrows: d("lg-arrows") ? true : false,
                                dots: d("lg-dots") ? true : false,
                                slidesToShow: d("lg-slide-show") ?
                                    d("lg-slide-show") :
                                    d("slide-show"),
                                centerMode: d("lg-center-mode") ?
                                    d("lg-center-mode") :
                                    false,
                                centerPadding: 0,
                            },
                        },
                        {
                            breakpoint: 992,
                            settings: {
                                arrows: d("md-arrows") ? true : false,
                                dots: d("md-dots") ? true : false,
                                slidesToShow: d("md-slide-show") ?
                                    d("md-slide-show") :
                                    1,
                                centerMode: d("md-center-mode") ?
                                    d("md-center-mode") :
                                    false,
                                centerPadding: 0,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: d("sm-arrows") ? true : false,
                                dots: d("sm-dots") ? true : false,
                                slidesToShow: d("sm-slide-show") ?
                                    d("sm-slide-show") :
                                    1,
                                centerMode: d("sm-center-mode") ?
                                    d("sm-center-mode") :
                                    false,
                                centerPadding: 0,
                            },
                        },
                        {
                            breakpoint: 576,
                            settings: {
                                arrows: d("xs-arrows") ? true : false,
                                dots: d("xs-dots") ? true : false,
                                slidesToShow: d("xs-slide-show") ?
                                    d("xs-slide-show") :
                                    1,
                                centerMode: d("xs-center-mode") ?
                                    d("xs-center-mode") :
                                    false,
                                centerPadding: 0,
                            },
                        },
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ],
                });
            });

            /*----------- 08. Custom Animaiton For Slider ----------*/
            $('[data-ani-duration]').each(function() {
                var durationTime = $(this).data('ani-duration');
                $(this).css('animation-duration', durationTime);
            });

            $('[data-ani-delay]').each(function() {
                var delayTime = $(this).data('ani-delay');
                $(this).css('animation-delay', delayTime);
            });

            $('[data-ani]').each(function() {
                var animaionName = $(this).data('ani');
                $(this).addClass(animaionName);
                $('.slick-current [data-ani]').addClass('slider-animated');
            });

            $('.global-carousel').on('afterChange', function(event, slick, currentSlide, nextSlide) {
                $(slick.$slides).find('[data-ani]').removeClass('slider-animated');
                $(slick.$slides[currentSlide]).find('[data-ani]').addClass('slider-animated');
            })

            // Call On Load
            if ($(".indicator-active").length) {
                $(".indicator-active").indicator();
            }

            /*---------- 17. Default Tab ----------*/
            $.fn.defaultTab = function(options) {
                var opt = $.extend({
                        sliderTab: false,
                        tabButton: "button",
                    },
                    options
                );

                $(this).each(function() {
                    var $menu = $(this);
                    var $button = $menu.find(opt.tabButton);

                    // On Click Button Class Remove and indecator postion set
                    $button.on("click", function(e) {
                        e.preventDefault();
                        var cBtn = $(this);
                        cBtn.addClass("active").siblings().removeClass("active");
                        if (opt.sliderTab) {
                            $(slider).slick("slickGoTo", cBtn.data("slide-go-to"));
                        } else {
                            linePos();
                        }
                    });

                    // Work With slider
                    if (opt.sliderTab) {
                        var slider = $menu.data("slidernavfor"); // select slider

                        // Select All button and set attribute
                        var i = 0;
                        $button.each(function() {
                            var slideBtn = $(this);
                            slideBtn.attr("data-slide-go-to", i);
                            i++;

                            // Active Slide On load > Actived Button
                            if (slideBtn.hasClass("active")) {
                                $(slider).slick(
                                    "slickGoTo",
                                    slideBtn.data("slide-go-to")
                                );
                            }

                            // Change Indicator On slide Change
                            $(slider).on(
                                "beforeChange",
                                function(event, slick, currentSlide, nextSlide) {
                                    $menu
                                        .find(
                                            opt.tabButton +
                                            '[data-slide-go-to="' +
                                            nextSlide +
                                            '"]'
                                        )
                                        .addClass("active")
                                        .siblings()
                                        .removeClass("active");
                                }
                            );
                        });
                    }


                });
            };

            if ($(".testi-slider-controller").length) {
                $(".testi-slider-controller").defaultTab({
                    sliderTab: true,
                    tabButton: ".indicatior-btn",
                });
            }

            /*----------- 23. Indicator ----------*/
            // Indicator
            $.fn.indicator = function() {
                var $menu = $(this),
                    $linkBtn = $menu.find("a"),
                    $btn = $menu.find("button");
                // Append indicator
                $menu.append('<span class="indicator"></span>');
                var $line = $menu.find(".indicator");
                // Check which type button is Available
                if ($linkBtn.length) {
                    var $currentBtn = $linkBtn;
                } else if ($btn.length) {
                    var $currentBtn = $btn;
                }
                // On Click Button Class Remove
                $currentBtn.on("click", function(e) {
                    e.preventDefault();
                    $(this).addClass("active");
                    $(this).siblings(".active").removeClass("active");
                    linePos();
                });

                function linePos() {
                    var $btnActive = $menu.find(".active"),
                        $height = $btnActive.css("height"),
                        $width = $btnActive.css("width"),
                        $top = $btnActive.position().top + "px",
                        $left = $btnActive.position().left + "px";

                    $(window).on('resize', function() {
                        $top = $btnActive.position().top + "px",
                            $left = $btnActive.position().left + "px";
                    });

                    $line.get(0).style.setProperty("--height-set", $height);
                    $line.get(0).style.setProperty("--width-set", $width);
                    $line.get(0).style.setProperty("--pos-y", $top);
                    $line.get(0).style.setProperty("--pos-x", $left);

                }
                linePos();
            };

            // Call On Load
            if ($(".indicator-active").length) {
                $(".indicator-active").indicator();
            }

        };
        elementorFrontend.hooks.addAction('frontend/element_ready/global', GlobalSlider);

        elementorFrontend.hooks.addAction('frontend/element_ready/fitmas_tabs.default', function($scope) {

        });
    });
})(jQuery);