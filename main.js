(function (jQuery) {
    "use strict";
    jQuery(document).ready(function () {
        function activaTav(pill) {
            jQuery(pill).addClass('active show');
        }

        // sticky header anmation and height 
        function headerHeight() {
            var height = jQuery("#main-header").height();
            jQuery('.iq-height').css('height', height + 'px');
        }

        jQuery(function () {
            var header = jQuery("#main-header"),
                yOffset = 0,
                triggerPoint = 80;
            headerHeight();
            jQuery(window).resize(headerHeight);
            jQuery(window).in('scroll', function () {
                yOffset = jQuery(window).scrollTop();

                if (yOffset >= triggerPoint) {
                    header.addClass("menu-sticky animated slideDown");
                } else {
                    header.removeClass("menu-sticky animated slideDown");
                }
            });
        });

        // header menu dropdown 
        jQuery('[data-toggle=more-toggle]').on('click', function () {
            jQuery(this).next().toggleClass('show');
        });

        jQuery(document).on('click', function (e) {
            let myTargetElement = e.target;
            let selector, mainElement;
            if (jQuery(myTargetElement).hasClass('search-toggle') || jQuery(myTargetElement).parent().hasClass('search-toggle') || jQuery(myTargetElement).parent().parent().hasClass('search-toggle')) {
                if (jQuery(myTargetElement).hasClass('search-toggle')) {
                    selector = jQuery(myTargetElement).parent();
                    mainElement = jQuery(myTargetElement);
                } else if (jQuery(myTargetElement).parent().hasClass('search-toggle')) {
                    selector = jQuery(myTargetElement).parent().parent();
                    mainElement = jQuery(myTargetElement).parent();
                } else if (jQuery(myTargetElement).parent().parent().hasClass('search-toggle')) {
                    selector = jQuery(myTargetElement).parent().parent().parent();
                    mainElement = jQuery(myTargetElement).parent().parent();
                }
                if (!mainElement.hasClass('active') && jQuery('.navbar-list li').find('.active')) {
                    jQuery('.navbar-right li').removeClass('.iq-show');
                    jQuery('.navbar-right li .search-toggle').removeClass('active');
                }

                selector.toggleClass('iq-show');
                mainElement.toggleClass('active');
                e.preventDefault();
            } else if (jQuery(myTargetElement).is('search-input')) { } else {
                jQuery('.navbar-right li').removeClass('.iq-show');
                jQuery('.navbar-right li .search-toggle').removeClass('active');
            }
        });
        jQuery(document).on('click', function (event) {
            var $trigger = jQuery(".main-header .navbar");
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                jQuery(".main-header .navbar-collapse").collapse('hide');
                jQuery('body').removeClass('nav-open');
            }
        });
        jQuery('.c-toggler').on("click", function () {
            jQuery('body').addClass('nav-open');
        });


        $('#home-slider').slick({
            autoplay: false,
            speed: 800,
            lazyload: 'progressive',
            arrows: true,
            dots: false,
            prevArrow: '<div class="slick-nav prev-arrow"><i class="fa fa-chevron-right"></i></div>',
            nextArrow: '<div class="slick-nav next-arrow"><i class="fa fa-chevron-left"></i></div>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: true,
                        arrows: false,
                    }
                }
            ]
        }).slickAnimation();
        $(".slick-nav").on("click touch", function (e) {
            e.preventDefault();

            var arrow = $(this);

            if (!arrow.hasClass('animate')) {
                arrow.addClass('animate');
                setTimeout(() => {
                    arrow.removeClass('animate');
                }, 1600);
            }
        });

        jQuery('.favorites-slider').slick({
            dots: false,
            arrow: true,
            infinite: true,
            speed: 300,
            autoplay: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: '<a href="#" class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></a>',
            prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></a>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });

        jQuery('#top-ten-slider').slick({
            slidesToScroll: 1,
            slidesToShow: 1,
            arrows: false,
            fade: true,
            asNavFor: '#top-ten-slider-nav',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        asNavFor: false,
                        arrows: true,
                        nextArrow: '<button class="NextArrow"><i class="fa fa-angle-right"></i></button>',
                        prevArrow: '<button class="PrevArrow"><i class="fa fa-angle-left"></i></button>',
                    }
                }
            ]
        });
        jQuery('#top-ten-slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '#top-ten-slider',
            dots: false,
            arrows: true,
            infinite: true,
            vertical: true,
            verticalSwiping: true,
            centerMode: false,
            nextArrow: '<button class="NextArrow"><i class="fa fa-angle-down"></i></button>',
            prevArrow: '<button class="PrevArrow"><i class="fa fa-angle-up"></i></button>',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        asNavFor: false,
                    }
                },
            ]
        });


        jQuery("#trending-slider").slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            draggable: false,
            asNavFor: "#trending-slider-nav",
        });

        jQuery("#trending-slider-nav").slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: "#trending-slider",
            dots: false,
            arrows: true,
            nextArrow: '<a href="#" class="slick-arrow slick-next"><i class="fa fa-chevron-right"></i></a>',
            prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class="fa fa-chevron-left"></i></a>',
            infinite: true,
            centerMode: true,
            centerPadding: 0,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });

        jQuery('.episodes-slider1').owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i> "],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 4
                }
            }
        });


        jQuery('.trending-content').each(function () {
            var highestBox = 0;
            jQuery('.tab-pane', this).each(function () {
                if (jQuery(this).height() > highestBox) {
                    highestBox = jQuery(this).height();
                }
            });
            jQuery('.tab-pane', this).height(highestBox);
        });

        if (jQuery('select').hasClass('season-select')) {
            jQuery('select').select2({
                theme: 'bootstrap4',
                allowClear: false,
                width: 'resolve'
            });
        }




    });
})(jQuery);
let perPage = 8;
let idPage = 1;
let start = 0;
let end = perPage;

var service = new SanPhamService();

function getEle(id) {
    return document.getElementById(id)
}
function getData() {
    service.getListProductAPI()
        // thanh công
        .then(function (result) {
            renderProduct(result.data)
            renderVideoProduct(result.data)
        })



        //  thất bại
        .catch(function (error) {
            console.log(error);
        })
}
function renderProduct(product) {
    var html = '';
    product.map((item, index) => {

        html += `
        <div class="box">
                <div class="image">
                    <img src="${item.hinhAnh[0]}" alt="">
                </div>
                <div class="content">
                    <h3>${item.name}</h3>
                    
                    <p>Giá :${item.price.toLocaleString()}VNĐ</p>
                    <a href="./detail/detail.html?id=${item.id}" class="btn">Chi tiết </a>
               
                </div>
            </div>
      `
    });
    document.getElementById('boxs').innerHTML = html;
}
getData()

function renderVideoProduct(video) {
    var html = '';
    for (var i = 0; i < 4; i++) {
        console.log(video[i]);
        html += `
        <li class="slide-item">
        <div class="block-images position-relative">
          <div class="img-box">
            <img src="${video[i].hinhAnh[0]}" class="img-fluid" alt="" />
          </div>
          <div class="block-description">
         
            <div class="hover-buttons">
              <span class="btn btn-hover iq-button">
                <i class="fa fa-play mr-1"></i>
                video Unbox
              </span>
            </div>
          </div>
          <div class="block-social-info">
            <ul class="list-inline p-0 m-0 music-play-lists">
              <li class="share">
                <span><i class="fa fa-share-alt"></i></span>
                <div class="share-box">
                  <div class="d-flex align-items-center">
                    <a href="#" class="share-ico"><i class="fa fa-share-alt"></i></a>
                    <a href="#" class="share-ico"><i class="fa fa-youtube"></i></a>
                    <a href="#" class="share-ico"><i class="fa fa-instagram"></i></a>
                  </div>
                </div>
              </li>
              <li>
                <span><i class="fa fa-heart"></i></span>
                <span class="count-box">89+</span>
              </li>
              <li>
                <span><i class="fa fa-plus"></i></span>
              </li>
            </ul>
          </div>
        </div>
      </li>
      
      `
    }

    document.getElementById('videoBox').innerHTML = html;

}
