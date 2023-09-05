$(function () {
    $(window).on('scroll', function(){
        let sct = $(window).scrollTop();
        if(sct>0) { 
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

    $('.gnb .gnb_i').on('click', function () {
        $('.lnb_con').toggleClass('on')
    })

    $('.moblie_btn').on('click', function () {
        $('.moblie_box').addClass('on');
    })

    $('.tuna_box ul>li>a').on('click', function (e) {
        e.preventDefault();
        $(this).next().stop().slideToggle();
        $(this).parent().siblings().find('.tuna').stop().slideUp();
        $(this).find('i').toggleClass('on');
    })

    $('.moblie_box').on('wheel', function (e) {
        if ($('.moblie_box').hasClass('on')) {
          e.preventDefault();
        }
    });

    $('.bottom_menu .list').on('click', function (e) {
        e.preventDefault();
        $('.moblie_box').toggleClass('on')
    })


    $('.moblie_close').on('click', function () {
       $('.moblie_box').removeClass('on');
    })

    $('.moblie_box .back').on('click', function () {
        $('.moblie_box').removeClass('on');
    })

    $('.entrepreneur').on('click', function () {
        $('.ent_box').toggleClass('on')
    })

    $('.family').on('click', function () {
        $('.fa_box').toggleClass('on')
    })

    $('.v_slide').slick ({
        arrows: false,
        dots: true,
        slidesToShow: 1,
        infinite: true,
        centerMode: true,
        centerPadding: '150px',
        //autoplay: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    fade: true,
                    centerMode: false,
                }
            }
        ]
    })

    $('.review_box').slick ({
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                }
            }
        ]
    })

    $('.e_box').slick ({
        slidesToShow: 3,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                }
            }
        ]
    })

    $('.main_visual .btn .prev').on('click', function () {
        $('.v_slide').slick('slickPrev')
    })

    $('.main_visual .btn .next').on('click', function () {
        $('.v_slide').slick('slickNext')
    })
    
    $('.p_slide').slick ({
        slidesToShow: 5,
        arrows: false,
        infinite: true,
        fade: false,
        //autoplay: true,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                }
            }
        ]
    })

    $('.main_product .btn .prev').on('click', function () {
        $('.p_slide').slick('slickPrev')
    })
    $('.main_product .btn .next').on('click', function () {
        $('.p_slide').slick('slickNext')
    })

})