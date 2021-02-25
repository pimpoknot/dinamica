$(document).ready(function(){

    // Ativar o tab
    $('#nav-plants-immobile a:nth-child(1)').addClass('active');

    $('#nav-album-plants li:nth-child(1) a').addClass('active');
    $('#plants .content .item:nth-child(1)').addClass('active show');
    $('#nav-album-plants li a').on('click', function (e) {
        $('#nav-album-plants li a.active').removeClass('active');
    });

    $('#plants .description-album-div:nth-child(1)').addClass('active show');
    $('.carousel .carousel-item:nth-child(1)').addClass('active show');

    // Faz os icones serem reconhecidos como setas do carousel
    $('.immobile-plants .carousel .container-description-top .arrow-prev').click(function(){
        $('.owl-images-top').trigger('prev.owl.carousel');
    });
    $('.immobile-plants .carousel .container-description-top .arrow-next').click(function(){
        $('.owl-images-top').trigger('next.owl.carousel');
    });

    $('.immobile-plants .carousel .container-description-bottom .arrow-prev').click(function(){
        $('.owl-images-bottom').trigger('prev.owl.carousel');
    });
    $('.immobile-plants .carousel .container-description-bottom .arrow-next').click(function(){
        $('.owl-images-bottom').trigger('next.owl.carousel');
    });

    // Carousel
    for(let i = 0; i < qtd_indices_da_planta; i++) {
        const carousel1 = $("#nav-album-plant-" + i + " .owl-images-top");
        const carousel2 = $("#nav-album-plant-" + i + " .owl-images-bottom");
        const syncedSecondary = true;

        carousel1.owlCarousel({
            loop: false,
            items: 1,
            center: true,
            dots:false,
            lazyLoad: true,
            responsiveRefreshRate: 200,
        }).on('changed.owl.carousel', syncPosition);

        carousel2
        .on('initialized.owl.carousel', function () { 
            carousel2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            loop: false,
            margin:10,
            center: false,
            dots:false,
            smartSpeed: 400,
            slideSpeed: 1000,
            lazyLoad: true,
            responsiveRefreshRate: 100,
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 3,
                },
                992: {
                    items: 5,
                }
            },
        }).on('changed.owl.carousel', syncPosition2);

        function syncPosition(el) {
            let current = el.item.index;

            carousel2.find(".owl-item").removeClass("current center").eq(current).addClass("current center");
            let onscreen = carousel2.find('.owl-item.active').length - 1;
            let start = carousel2.find('.owl-item.active').first().index();
            let end = carousel2.find('.owl-item.active').last().index();

            if (current > end) {
                carousel2.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                carousel2.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }
        
        function syncPosition2(el) {
            if (syncedSecondary) {
            let number = el.item.index;
            carousel1.data('owl.carousel').to(number, 100, true);
            }
        }

        carousel2.on("click", ".owl-item", function (e) {
            e.preventDefault();
            let number = $(this).index();
            carousel1.data('owl.carousel').to(number, 300, true);
        });

        // Conta os itens do carousel
        const itens_carousel_top = $('#nav-album-plant-' + i + ' .owl-images-top .owl-item').length;
        const itens_carousel_bottom = $('#nav-album-plant-' + i + ' .owl-images-bottom .owl-item').length;
        const window_width = $(document).width();
    
        if((window_width >= 992 && itens_carousel_bottom <= 5) || (window_width < 992 && window_width >= 768 && itens_carousel <= 3)) {
            $('#nav-album-plant-' + i + ' .container-description-bottom .arrow-prev').addClass('d-none');
            $('#nav-album-plant-' + i + ' .container-description-bottom .arrow-next').addClass('d-none');
        }

        if(itens_carousel_top <= 1) {
            $('#nav-album-plant-' + i + ' .container-description-top .arrow-prev').addClass('d-none');
            $('#nav-album-plant-' + i + ' .container-description-top .arrow-next').addClass('d-none');
        }
    }

});