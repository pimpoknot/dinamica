$(document).ready(function(){

    if('#differentials') {
        $('.owl-differentials').owlCarousel({
            loop: false,
            margin:10,
            nav:false,
            dots:false,
            lazyLoad: true,
            responsive:{
                0: {
                    items: 1,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 4,
                }
            }
        });

        // Faz os icones serem reconhecidos como setas do carousel
        $('.differentials-content .container-description .arrow-prev').click(function(){
            $('.owl-differentials').trigger('prev.owl.carousel');
        });
        $('.differentials-content .container-description .arrow-next').click(function(){
            $('.owl-differentials').trigger('next.owl.carousel');
        });

        // Conta os itens do carousel
        const itens_carousel = $('.owl-differentials .owl-item').length;
        const window_width = $(document).width();

        if((window_width >= 992 && itens_carousel <= 4) || (window_width < 992 && itens_carousel <= 3) || (window_width > 768 && itens_carousel <= 2)) {
            $('.differentials-content .container-description .arrow-prev').addClass('d-none');
            $('.differentials-content .container-description .arrow-next').addClass('d-none');
        }
    }

});