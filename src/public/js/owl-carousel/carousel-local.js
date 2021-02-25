$(document).ready(function(){
    $('.owl-local').owlCarousel({
        loop: false,
        margin:10,
        nav:false,
        dots:false,
        lazyLoad: true,
        responsive:{
            0: {
                items: 1,
            },
            670: {
                items: 3,
            }
        }
    });

    // Faz os icones serem reconhecidos como setas do carousel
    $('.local .carousel .container-description .arrow-prev').click(function(){
        $('.owl-local').trigger('prev.owl.carousel');
    });
    $('.local .carousel .container-description .arrow-next').click(function(){
        $('.owl-local').trigger('next.owl.carousel');
    });

    // Conta os itens do carousel
    const itens_carousel = $('.owl-local .owl-item').length;
    const window_width = $(document).width();

    if((window_width >= 992 && itens_carousel <= 4) || (window_width < 992 && window_width >= 768 && itens_carousel <= 3)) {
        $('.local .container-description .arrow-prev').addClass('d-none');
        $('.local .container-description .arrow-next').addClass('d-none');
    }
});