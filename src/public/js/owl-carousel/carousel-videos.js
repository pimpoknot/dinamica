$(document).ready(function(){
    $('.owl-videos').owlCarousel({
        loop: false,
        margin:10,
        dots:true,
        items: 1,
        lazyLoad:true,
    });

    // Ativar o item
    $('.owl-videos .owl-item:nth-child(1)').addClass('active');

    // Faz os icones serem reconhecidos como setas do carousel
    $('.immobile-video .carousel .container-description .arrow-prev').click(function(){
        $('.owl-videos').trigger('prev.owl.carousel');
    });
    $('.immobile-video .carousel .container-description .arrow-next').click(function(){
        $('.owl-videos').trigger('next.owl.carousel');
    });

    const itens_carousel = $('.immobile-video .carousel .owl-item').length;

    if(itens_carousel <= 1) {
        $('.immobile-video .carousel .arrow-prev').addClass('d-none');
        $('.immobile-video .carousel .arrow-next').addClass('d-none');
        $('.owl-videos .owl-dots').addClass('d-none');
    }
});