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

});