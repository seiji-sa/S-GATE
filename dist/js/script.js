$(function () {
    $('.load-fadeIn').each(function (i, e) {
        $(e).delay(i * 500).queue(function () {
          $(this).addClass("active");
        });
      });
    // ハンバーガーメニュー
    $("#h-menu").on("click", function () {
      $(".navigation").slideToggle();
      $(".h-menu").toggleClass("h-menu--open");
    });

    // アコーディオン
    $("#slide-item").on("click", function () {
      $(".slide-wrapper").slideToggle();
      $(this).toggleClass("close");
    });
    // ヒーロー画像を一定時間後に切り替える
  //   $(function () {
  //     // Initialize Slick slider
  //     $('.hero-img__images').slick({
  //         fade: true,
  //         dots: false,
  //         infinite: true,
  //         speed: 1000,
  //         slidesToShow: 1,
  //         adaptiveHeight: false,
  //         arrows: false,
  //         autoplay: true,
  //         autoplaySpeed: 4000,
  //         pauseOnFocus: false,
  //         pauseOnHover: false
  //     })
  //     .on({
  //         beforeChange: function (event, slick, currentSlide, nextSlide) {
  //             $(".slick-slide", this).eq(nextSlide).addClass("animation");
  //             $(".slick-slide", this).eq(currentSlide).addClass("rm-animation");
  //         },
  //         afterChange: function () {
  //             $(".rm-animation", this).removeClass("rm-animation animation");
  //         },
  //     });
  // });


    // スクロール時の処理
    function handleScrollAnimation(container, fadeIn) {
      $(container).each(function () {
        var pos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > pos - windowHeight + 100) {
          $(fadeIn).each(function (i, e) {
            $(e).delay(i * 500).queue(function () {
              $(e).addClass("active");
            });
          });
        }
      });
    }

    $(window).on("scroll", function () {
      handleScrollAnimation(".items-container", ".fadeIn1");
      handleScrollAnimation(".top-txt", ".top-txt");
      handleScrollAnimation(".news-fade", ".news-fade");
      handleScrollAnimation(".contact-fade", ".contact-fade");
      handleScrollAnimation(".items-container2", ".fadeIn2");
    });

    // top-btnのアニメーション
    $(".top-btn").hide();
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 100) {
        $(".top-btn").slideDown(200);
      } else {
        $(".top-btn").slideUp(200);
      }
    });




    // 背景の動き
    $(function () {
      var target1 = $("#contact");
      var targetPosOT1 = target1.offset().top;
      var targetFactor = 0.2;

      $(window).on('scroll', function () {
          var scrollY = $(this).scrollTop();
          target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
      });
  });

  });

