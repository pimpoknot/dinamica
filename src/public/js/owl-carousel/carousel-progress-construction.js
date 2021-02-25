$(document).ready(function(){

    // Ativar o tab dos blocos
    $('#nav-blocks-immobile a:nth-child(1)').addClass('active');
    $('#nav-blocks-immobile a').on('click', function (e) {
        $('#nav-blocks-immobile a.active').removeClass('active');
    });

    // Faz os icones serem reconhecidos como setas do carousel
    $('#owl-blocks-month .container-description .arrow-prev').click(function(){
        $('.owl-blocks-month').trigger('prev.owl.carousel');
    });
    $('#owl-blocks-month .container-description .arrow-next').click(function(){
        $('.owl-blocks-month').trigger('next.owl.carousel');
    });

    // Carousel com meses da obra
    $('.owl-blocks-month').owlCarousel({
        loop: false,
        margin:10,
        nav:false,
        dots:false,
        responsive:{
            0: {
                items: 1,
            },
            768: {
                items: 3,
            },
            992: {
                items: 5,
            }
        }
    });

    // Ativar o tab do carousel com meses da obra
    $('.owl-blocks-month .owl-item:nth-child(1) a:nth-child(1)').addClass('active');
    
    // Select nome blocos
    for(let i = 0; i < qtd_blocos; i++) {
        // Faz os icones serem reconhecidos como setas do carousel
        $('#owl-blocks-month-' + i + ' .container-description .arrow-prev').click(function(){
            $('#owl-blocks-month-' + i + ' .owl-blocks-month').trigger('prev.owl.carousel');
        });
        $('#owl-blocks-month-' + i + ' .container-description .arrow-next').click(function(){
            $('#owl-blocks-month-' + i + ' .owl-blocks-month').trigger('next.owl.carousel');
        });

        // Ativar o tab da navegacao do carousel com meses
        $('#owl-blocks-month-' + i + ' a').on('click', function (e) {
            $('#owl-blocks-month-' + i + ' a.active').removeClass('active');
        });

        // Conta os itens do carousel
        const itens_carousel = $('#owl-blocks-month-' + i + ' .owl-item').length;
        const window_width = $(document).width();

        if((window_width >= 992 && itens_carousel <= 4) || (window_width < 992 && window_width >= 768 && itens_carousel <= 3)) {
            $('#owl-blocks-month-' + i + '  .container-description .arrow-prev').addClass('d-none');
            $('#owl-blocks-month-' + i + '  .container-description .arrow-next').addClass('d-none');
        }

        // Ativar o primeiro item do carousel de cada bloco
        $('.tab-content .tab-pane:nth-child(1)').addClass('active');

        // Funcao de ativar o item do carousel pelo select
        $('#select-follow-up-month-' + i).change(function(){
            let id_carousel_selected = $(this).children("option:selected").val();
            $('#immobile-blocks #nav-block-' + i + ' .album-stage-build .content-stage-build .tab-pane.active').removeClass('active');
            $('#nav-block-' + i + ' #' + id_carousel_selected).addClass('active');
        });
    }

    // Carousel com album de imagens
    $('.owl-album-stage-build').owlCarousel({
        loop: false,
        margin:10,
        nav:false,
        dots:true,
        responsive:{
            0: {
                items: 1,
            }
        }
    });
  
});