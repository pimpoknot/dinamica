$(document).ready(function(){

    // Carousel
    if($('#carousel-about-us')) {
        $(".owl-immobiles-about-us").owlCarousel({
            loop: false,
            margin:10,
            nav:false,
            dots:true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            lazyLoad: true,
            responsive:{
                0: {
                    items: 1
                }
            }
        });

        // Faz os icones serem reconhecidos como setas do carousel
        $('#carousel-about-us .container-description .arrow-prev').click(function(){
            $('.owl-immobiles-about-us').trigger('prev.owl.carousel');
        });
        $('#carousel-about-us .container-description .arrow-next').click(function(){
            $('.owl-immobiles-about-us').trigger('next.owl.carousel');
        });

        const itens_carousel = $('.owl-immobiles-about-us .owl-item').length;

        if(itens_carousel <= 1) {
            $('#carousel-about-us .container-description .arrow-prev').addClass('d-none');
            $('#carousel-about-us .container-description .arrow-next').addClass('d-none');
        }
    }

});