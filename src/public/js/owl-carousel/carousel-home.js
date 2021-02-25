$(document).ready(function(){

    // Carousel
    if($('#carousel-immobiles-home')) {
        $(".owl-immobiles-home").owlCarousel({
            loop: false,
            margin:0,
            nav:false,
            dots:true,
            autoplay: true,
            autoplayTimeout: 10000,
            autoplayHoverPause: true,
            lazyLoad: true,
            responsive:{
                0: {
                    items: 1
                }
            }
        }).on('translated.owl.carousel', changeCarouselDescription);
        // Quando passar o slider vai chamar a função changeCarouselDescription

        // Pega os nomes dos imóveis sem cópias
        let names =
        $('#carousel-immobiles-home').find('.name-immobile').map(function(index, elem) {
            return $(elem).text();
        });

        // botões de dot que desejamos adicionar o tooltip
        const dot = $('.intro #carousel-immobiles-home .owl-dots button.owl-dot');

        // Cria os tooltips
        for (let i = 0; i < names.length; i++) {
            const spanElement = document.createElement('span');
            spanElement.setAttribute('class', 'tooltiptext');
            spanElement.append(document.createTextNode(names[i]));
            $(dot[i]).append(spanElement);
        }

        // Quando passar o slider vai chamar a função addFadeOut
        $(".owl-immobiles-home").on('translate.owl.carousel', addFadeOut);

        // Copia o conteúdo da descrição do carousel para #carousel-description-copy
        $('.owl-item.active .item .container .carousel-description').clone().appendTo('#carousel-description-copy');
        $('.intro #carousel-immobiles-home .owl-dots').clone().appendTo('.owl-dots-copy');

        // Faz os itens serem reconhecidos pelo carousel
        $('.intro #carousel-immobiles-home .owl-dots button.owl-dot').click(function () {
            $('.owl-immobiles-home').trigger('to.owl.carousel', [$(this).index(), 300]);
        });

        // Remove o conteúdo copiado anteriormente e copia o item atual assim que o slide é passado
        function changeCarouselDescription() {
            $('#carousel-description-copy .carousel-description').remove();
            $('.owl-dots-copy .owl-dots').remove();

            $('.owl-item.active .item .container .carousel-description').clone().appendTo('#carousel-description-copy');
            $('.intro #carousel-immobiles-home .owl-dots').clone().appendTo('.owl-dots-copy');

            // Faz os itens serem reconhecidos pelo carousel
            $('.intro #carousel-immobiles-home .owl-dots button.owl-dot').click(function () {
                $('.owl-immobiles-home').trigger('to.owl.carousel', [$(this).index(), 300]);
            });
        }

        // Adiciona classe fade out aos itens do carousel
        function addFadeOut() {
            $('#carousel-description-copy .location').removeClass('fadeInUp');
            $('#carousel-description-copy .location').addClass('fadeOutUp');

            $('#carousel-description-copy .name').removeClass('fadeInDown');
            $('#carousel-description-copy .name').addClass('fadeOutDown');

            $('#carousel-description-copy .item-release').removeClass('fadeInDown');
            $('#carousel-description-copy .item-release').addClass('fadeOutDown');
        }

        // Verifica se banner é de imovel ou nao
        function verifyBanner() {
            const data = $('.owl-item.active').children().attr('data-count');

            if(data == 'Sim'){
                $("#container-description .status-immobile").show();
                $("#container-description .description-immobile").show();
                $("#container-description .show-more").show();
            }else{
                $("#container-description .status-immobile").hide();
                $("#container-description .description-immobile").hide();
                $("#container-description .show-more").hide();
            }
        }
    }

});