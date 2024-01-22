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

    // スクロール時の処理
    function handleScrollAnimation(container, fadeIn) {
      $(container).each(function () {
        var pos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > pos - windowHeight + 100) {
          $(this).addClass("scroll");
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
      handleScrollAnimation(".js-fade", ".js-fade");
      handleScrollAnimation(".items-container2", ".fadeIn2");
    });

    // 背景の動き
    $(function () {
      var target1 = $("#contact");
      var targetPosOT1 = target1.offset().top;
      var targetFactor = 0.2;
      var windowH = $(window).height();
      var scrollYStart1 =  windowH - targetPosOT1 ;

      $(window).on('scroll', function () {
          var scrollY = $(this).scrollTop();
          if (scrollY > scrollYStart1) {
              target1.css('background-position-y', (scrollY - targetPosOT1) * targetFactor + 'px');
          }
      });
  });

  });

