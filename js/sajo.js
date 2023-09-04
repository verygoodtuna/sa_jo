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
        $('.moblie_menu').addClass('on');
        $('.wrap').addClass('on');
    })

    $('.moblie_menu.on::before').on('click', function () {
        $('.moblie_menu').removeClass('on');
        $('.wrap').removeClass('on');
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