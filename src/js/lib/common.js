/* Common JS */
$(document).ready(function () {

  //for IE9
  svg4everybody();

  // Clear placeholder
  (function () {
    var el = $('input, textarea');
    el.focus(function () {
      $(this).data('placeholder', $(this).attr('placeholder'));
      $(this).attr('placeholder', '');
    });
    el.blur(function () {
      $(this).attr('placeholder', $(this).data('placeholder'));
    });
  }());

  (function () {
    var scrollBtn = $('.js-to-top');
    if (scrollBtn.length) {
      if (scrollBtn.is(':visible')) {
        $(window).scroll(function () {
          if ($(this).scrollTop() > 300) {
            scrollBtn.fadeIn();
          } else {
            scrollBtn.fadeOut();
          }
        });
      }

      scrollBtn.on('click', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
      })
    }
  })();

  (function () {
    var uploadBtn = $('.js-upload');
    if (uploadBtn.length) {
      uploadBtn.on('change', function () {
        $(this).siblings('.form__file-name').remove();
        $(this).next().after('<div class="form__file-name">' + $(this).val() + '</div>');
      });
    }
  })();

  (function () {
    var slider = $('.js-about-slider');

    if (slider.length) {
      var textEl = $('.js-about-text'),
        item = $('.js-about-item');
      if ($(window).width() < 767) {
        textEl.each(function () {
          $(this).appendTo($(this).closest(item).find('.js-about-desc'));
        });
      }

      slider.on('init', function () {
        slider.append('<div class="js-slider-info about__info"></div>');
      });
      slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1,
          info = $('.js-slider-info');
        info.text(i + ' из ' + slick.slideCount);
      });

      slider.slick({
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon icon-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>'
      });

      var prev = slider.find('.slick-prev'),
        next = slider.find('.slick-next'),
        info = slider.find('.js-slider-info'),
        height = slider.find('.js-about-img').height() + 30;

      prev.css('top', height);
      next.css('top', height);
      info.css('top', height - 60);
    }
  })();

  (function () {
    if ($(window).width() < 1024) {
      var slider = $('.js-reviews');

      if (slider.length) {
        slider.on('init', function () {
          setTimeout(function () {
            slider.find('.slick-list').attr('style', 'height: auto;');
          }, 0);
        });

        slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          var i = (currentSlide ? currentSlide : 0) + 1,
            info = $('.js-navigations-info');
          info.text(i + ' из ' + slick.slideCount);
        });

        slider.slick({
          infinite: false,
          adaptiveHeight: true,
          prevArrow: '<button type="button" class="slick-prev"><svg class="icon icon-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-left"></use></svg></button>',
          nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>'
        });

        var prev = slider.find('.slick-prev'),
          next = slider.find('.slick-next'),
          nav = $('.js-navigations');

        nav.prepend(next);
        nav.prepend(prev);
      }
    }
  })();

  (function () {
    var slider = $('.js-process');

    if (slider.length) {
      slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1,
          info = $('.js-process-info');
        info.text(i + ' из ' + slick.slideCount);
      });

      slider.slick({
        infinite: false,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon icon-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>'
      });

      var prev = slider.find('.slick-prev'),
        next = slider.find('.slick-next'),
        nav = slider.next('.js-process-nav');

      nav.prepend(next);
      nav.prepend(prev);
    }
  })();

  (function () {
    $('.js-img-popup').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      closeBtnInside: false,
      fixedContentPos: true,
      // mainClass: 'mfp-no-margins mfp-with-zoom',
      image: {
        verticalFit: true
      },
      zoom: {
        enabled: true,
        duration: 300 // don't foget to change the duration also in CSS
      }
    });
  })();

  (function () {
    var slider = $('.js-inform');

    if (slider.length) {

      slider.slick({
        infinite: false,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon icon-arrow-prev"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-prev"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-arrow-next"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-next"></use></svg></button>'
      });
    }
  })();

  (function () {
    var hamburger = $('.js-hamburger'),
      main = $('.js-main'),
      header = $('.js-header'),
      footer = $('.js-footer'),
      menu = $('.js-menu'),
      menus = $('.js-menus'),
      menusCurrent,
      sideInner = $('.js-side-inner'),
      sideParentBtn = $('.js-menu-parent'),
      sideBackBtn = $('.js-side-back'),
      side = $('.js-side');

    if ($(window).width() >= 1024) {
      menu.children('a').on('mouseenter', function () {
        menu.children('a').removeClass('is-hover');
        menus.hide();
        $(this).addClass('is-hover');
      });
      sideParentBtn.on('mouseenter', function () {
        menus.hide();
        var menusIndex = $(this).data('index');
        menusCurrent = menus.filter('[data-child="' + menusIndex + '"]');
        menusCurrent.show();
      });

      side.on('mouseleave', function () {
        menus.hide();
        menu.children('a').removeClass('is-hover');
      });
    }

    if ($(window).width() < 1023) {
      hamburger.on('click', function () {

        $(this).toggleClass('is-active');

        if ($(this).hasClass('is-active')) {

          main.bind('click tap taphold touchstart touchmove scrollstart', function () {
            hamburger.removeClass('is-active');
            $(this).css({transform: 'translateX(0)'});
            $('body').css('overflow', 'auto');
            header.css('transform', 'translateX(0)');
            footer.fadeIn();
          });

          $('body').css('overflow', 'hidden');
          header.css('transform', 'translateX(260px)');
          main.css({transform: 'translateX(260px)'});
          footer.fadeOut(200);

        } else {

          main.unbind('click tap taphold touchstart touchmove scrollstart');
          $('body').css('overflow', 'auto');
          header.css('transform', 'translateX(0)');
          main.css({transform: 'translateX(0)'});
          footer.fadeIn(200);

        }
      })
      sideInner.css({
        'min-height': sideInner.height() + 'px'
      });

      sideParentBtn.on('click', function () {
        var menusIndex = $(this).data('index');
        menusCurrent = menus.filter('[data-child="' + menusIndex + '"]');
        sideBackBtn.addClass('is-active');

        menu.fadeOut(200).promise().done(function () {
          menusCurrent.fadeIn(200);

          sideInner.css({
            'min-height': menusCurrent.height() + 40 + 'px'
          });
        });

      });

      sideBackBtn.on('click', function () {
        $(this).removeClass('is-active');

        menusCurrent.fadeOut(200).promise().done(function () {
          menu.fadeIn(200);

          sideInner.css({
            'min-height': menu.height() + 'px'
          });
        });
      });
    }

  })();

  (function () {
    if ($(window).width() >= 1024) {

      var head = $('.js-head'),
        side = $('.js-side'),
      hamburger = $('.js-hamburger');

      hamburger.on('click', function () {
        $(this).toggleClass('is-active');
        side.toggleClass('is-bottom');
      });

      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          head.addClass('is-scroll');
        } else {
          head.removeClass('is-scroll');
        }
      });

    }
  })();

  (function () {
    if ($(window).width() >= 1024) {
      $('.js-bg-list li').on('mouseenter', function () {
        if (!$(this).hasClass('is-active')) {
          $('.js-bg-list li').removeClass('is-active');
          var index = $(this).index();
          $(this).css('z-index', '2').addClass('is-active').find('.js-for-hidden').show();
          $('.js-bg').fadeOut(function () {
            $(this).css('z-index', '0');
          });
          $('.js-bg').eq(index).css('z-index', '1').fadeIn();
        }
      });
      $('.js-bg-list li').on('mouseleave', function () {
        $(this).removeClass('is-active').css('z-index', '1');
        $('.js-for-hidden').hide();
      });

      $('.js-bg-list li').on('tap', function (event) {
        event.preventDefault();
        $('.js-bg-list li').removeClass('is-active').css('z-index', '1');
        $('.js-for-hidden').hide();
        if (!$(this).hasClass('is-active')) {
          var index = $(this).index();
          $(this).css('z-index', '2').addClass('is-active').find('.js-for-hidden').show();
          $('.js-bg').fadeOut(function () {
            $(this).css('z-index', '0');
          });
          $('.js-bg').eq(index).css('z-index', '1').fadeIn();
        }
      });

    }
  })();

  (function () {
    var slider = $('.js-pf-slider');

    if (slider.length) {
      slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if ($(window).width() < 640) {
          var i = (currentSlide ? currentSlide : 0) + 1,
            info = slider.siblings('.js-navigations').find('.js-navigations-info');
          info.text(i + ' из ' + slick.slideCount);
        } else {
          var i = Math.round(((currentSlide ? currentSlide : 0) + 1) / 2),
            info = slider.siblings('.js-navigations').find('.js-navigations-info');
          info.text(i + ' из ' + Math.round(slick.slideCount / 2));
        }
      });

      slider.slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon icon-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>',
        responsive: [
          {
            breakpoint: 639,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      var prev = slider.find('.slick-prev'),
        next = slider.find('.slick-next'),
        nav = slider.siblings('.js-navigations');

      nav.prepend(next);
      nav.prepend(prev);
    }
  })();

  (function () {
    if ($(window).width() < 1024) {
      var slider = $('.js-bg-list');
      slider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        if ($(window).width() < 640) {
          var i = (currentSlide ? currentSlide : 0) + 1,
            info = slider.siblings('.js-navigations').find('.js-navigations-info');
          info.text(i + ' из ' + slick.slideCount);
        } else {
          var i = Math.round(((currentSlide ? currentSlide : 0) + 1) / 2),
            info = slider.siblings('.js-navigations').find('.js-navigations-info');
          info.text(i + ' из ' + Math.round(slick.slideCount / 2));
        }
      });

      if ($(window).width() < 640) {
        slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
          $('.js-bg').eq(currentSlide).css('z-index', '0').fadeOut();
          $('.js-bg').eq(nextSlide).css('z-index', '1').fadeIn();
        });
      }

      slider.slick({
        infinite: false,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"><svg class="icon icon-arrow-left"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button type="button" class="slick-next"><svg class="icon icon-arrow-right"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="img/sprite.svg#icon-arrow-right"></use></svg></button>',
        responsive: [
          {
            breakpoint: 639,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      var prev = slider.find('.slick-prev'),
        next = slider.find('.slick-next'),
        nav = slider.siblings('.js-navigations');

      nav.prepend(next);
      nav.prepend(prev);
    }
  })();

});