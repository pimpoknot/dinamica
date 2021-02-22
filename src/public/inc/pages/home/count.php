<section class="count-start count-up numbers-history d-flex align-items-center py-5" id="numbers-history">
    <div class="container">
        <div class="d-flex align-items-center row">
            <div class="item d-flex align-items-center py-3 col-lg-3 col-md-6 col-12 mx-auto">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/hook.png" alt="Obras realizadas">
                <div class="text">
                    <p class="title m-0"><span class="counter" data-count="<?php the_field('area_construida'); ?>"></span></p>
                    <p class="description m-0">m² de área construída</p>
                </div>
            </div>
            <div class="item d-flex align-items-center py-3 col-lg-3 col-md-6 col-12 mx-auto">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/skyline.png" alt="Unidades entregues">
                <div class="text">
                    <p class="title m-0"><span class="counter" data-count="<?php the_field('unidades_entregues'); ?>"></span></p>
                    <p class="description m-0">Unidades entregues</p>
                </div>
            </div>
            <div class="item d-flex align-items-center py-3 col-lg-3 col-md-6 col-12 mx-auto">
                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/project.png" alt="Clientes sastisfeitos">
                <div class="text">
                    <p class="title m-0"><span class="counter" data-count="<?php the_field('anos_de_historia'); ?>"></span></p>
                    <p class="description m-0">Anos de história</p>
                </div>
            </div>
        </div>
    </div>
</section>