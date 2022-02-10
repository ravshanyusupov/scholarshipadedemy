jQuery(document).ready(function ($) {

    /**
     * select
     */
    $(document).on('afterShow.fb', function (e, instance, slide) {
        $('#offer select').styler();
    });

    $('#about select, #students select').styler();


    //slider
    let $slider = $('#slider-items');
    $slider.slick({
        dots: true,
        appendDots: $('.dots'),
        arrows: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 3,
    });

    $('.prev').on('click', function (e) {
        e.preventDefault();
        $slider.slick('slickPrev');
    });
    $('.next').on('click', function (e) {
        e.preventDefault();
        $slider.slick('slickNext');
    });

    let $slider2 = $('#slider-students');
    $slider2.slick({
        dots: true,
        arrows: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    /**
     * Меню для мобильного
     */
    $('.btn-menu').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('active').next().slideToggle()
    });


    /**
     * Табы
     */
    $('#tabs').on('click', 'li:not(.active)', function () {
        $(this).addClass('active').siblings().removeClass('active').parents().find('.box').eq($(this).index()).fadeIn(150).siblings('.box').hide();
    });

    $('#tabs li:first').addClass('active');
    $('.box:first').addClass('visible');

    /**
     * Форма
     */
    $('.contact-form').on('submit', function (e) {
        // e.preventDefault();
        // let $this = $(this);

        // ajaxs('callback', this, function (res) {
        //     if (res.success) {
        //         $this[0].reset();
        //         $this.prev().text(res.data);
        //     }
        // })
    });

    /**
     * about btn
     */
    $('#about .about .btn').on('click', function (e) {
        e.preventDefault();
        let $offsetTop = $('.benefits').offset().top;

        $('html, body').animate({
            scrollTop: $offsetTop
        }, 300);
    });

});

//# sourceMappingURL=common.js.map
