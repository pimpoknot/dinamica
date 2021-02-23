<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dinamica</title>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha256-4+XzXVhsDmqanXGHaHvgh1gMQKX40OUvDEBTu8JcmNs="crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./public/style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp" crossorigin="anonymous">
</head>
<body>
        <div class="container">
            <div class="menu-bar">
            <img class="logo-img z-index" src="./public/img/logo_inicial.svg" alt="logo-img">
          <nav class="navbar z-index">
            <div class="hamburger-menu z-index">
              <div class="line line1"></div>
              <div class="line line2"></div>
              <div class="line line3"></div>
            </div>

            <ul class="nav-list z-index"></ul>
              <li class="nav-items z-index">
                <a href="#" class="nav-link">A Construtora</a>
                <a href="#" class="nav-link">Imóveis</a>
                <a href="#" class="nav-link">Blog</a>
                <a href="#" class="nav-link">Area do Cliente</a>
                <a href="#" class="nav-link">Contato</a>
              </li>
          </nav>
            </div>
            <div class="immobile-home">
              <img class="mt8 logo-immobile" src="./public/img/logo.svg" alt="logo">
              <div class="mt8 lancamento-container">
                <p>LANÇAMENTO</p>
              </div>
              <p class="mt8">Estar perto para chegar mais longe</p>
              <h3 class="mt8 fw-regular fs-32">Bauru - São Paulo</h3>
              <p class="fw-100 fs-16">
                <i class=" mt8 fas fa-map-marker-alt"></i>
                Jardim Infante Dom Henrique
              </p>
              <div class="mobilles-status">
                <p class="fs-16 uppercase">
                  Sucesso de Vendas
                </p>
              </div>
              <div class="about-more">
                <a href="#" class="text-decoration-n uppercase">saiba mais</a>
              </div>
              
            </div>
            <div class="contact-menu">
              <div class="email-contact">
                <i class="fas fa-envelope"></i><p>E-MAIL</p>
              </div>
              <div class="phone-contact">
                <i class="fas fa-phone-alt"></i><p>(11) 3093-6199</p>
              </div>
              <div class="whatsapp-contact">
                <i class="fab fa-whatsapp"></i><p>WHATSAPP</p>
              </div>
              <div class="about-contact">
                <i class="fas fa-user"></i><p>CHAT<br>ONLINE</p>
            </div>
        </div>
            <div class="container-clone"></div>
        </div>
       
        <!-- CARD HIGHLIGHTS -->
        <div class="immobile-highlights">
          <h2>Imóvel em<span> Destaque</span></h2>
          <div class="carrousel-highlights">
            <div class="carrousel-cards">
              <div class="image-immobile">
                <picture>
                  <source media="(max-width:670px)" srcset="/public/img/5f8607c66bda2-fly-piscina-alta-resolucao-r01-bx.png" sizes="small">
                  <source media="(min-width: 670px )" srcset="/public/img/residente-desktop.png" sizes="">
                  <img src="/public/img/residente-desktop.png" alt="residence" style="width: auto;">
                </picture>
                <div class="about-more"><a href="#" class="text-decoration-n uppercase">saiba mais</a></div>
              </div>
              <div class="card-text-content">
                <div class="immobile-apresentation">
                  <h3 class="uppercase fs-16">Fly Reidence</h3>
                  <p>Estar perto para chegar mais longe</p>
                </div>
                <div class="mt8 lancamento-container"><p>LANÇAMENTO</p></div>
                <p class="mt8 fw-100 color-b">Bauru - São Paulo</p>
                <p class="fw-100 fs-16 color-b"><i class=" mt8 fas fa-map-marker-alt"></i>Jardim Infante Dom Henrique</p>
              </div>
              <div class="immobiles-details">
                <div class="box-details">
                  <div class="suites-details d-flex">
                    <img src="/public/img/bed (4)@2x.png" alt="bed=image">
                    <p class="m-left16">1 e 2 dormitórios com Suítes</p>
                  </div>
                  <div class="space-details d-flex mt16">
                    <img src="/public/img/regua@2x.png" alt="regua-image">
                    <p class="m-left16">35 a 86,5m²</p>
                  </div>
                  <div class="garage-details d-flex mt8">
                    <img src="/public/img/vaga@2x.png" alt="vaga-image">
                    <p>1 Vaga</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- ABOUT CARD -->
        <div class="about-card">
          <img src="./public/img/LOGO_dinamica.png" alt="logo">
          <p>
          Com quase 20 anos de experiência no setor imobiliário, a Construtora Dinâmica atua no segmento de incorporação e construção civil, atendendo aos diversos segmentos do mercado e produzindo, especialmente, empreendimentos que se destacam pela qualidade e inovação arquitetônica.
          </p>
          <div class="about-more">
                <a href="#" class="text-decoration-n uppercase">saiba mais</a>
              </div>
        </div>
        <!-- COUNT CARD -->
        <div class="count-card">
        <div class="count-card-content">
          <div class="delivered-count">
            <img src="./public//img/hook.png" alt="hood-image">
            <div class="text-content-count">
              <p class="counter" data-target="85">0</p>
              <span>Obras Realizadas</span>
            </div>
          </div>
          <div class="apart-delivered">
            <img src="./public//img/skyline.png" alt="">
            <div class="text-content-count">
              <p class="counter" data-target="29">0</p>
              <span>Apartamentos Entregues</span>
            </div>
          </div>
          <div class="client-delivered">
            <img src="./public/img/project.png" alt="">
            <div class="text-content-count">
              <p class="counter" data-target="1588">0</p>
              <span>Clientes com sonhos Realizados</span>
            </div>
          </div>
        </div>
        </div>
        <!-- ACOMPANHE A OBRA -->

        <div class="immobile-radio-list">
          <div class="text-content-radio-list">
            <p>Acompanhe a</p><span>Obra</span>
          </div>
          <p>veja cada detalhe da construção do seu imóvel</p>
          <form  action="#">
            <select name="empreendimentos" id="">Empreendimentos</select>
            <input type="submit" value="Ver obra">
          </form>
          <div class="text-content-radio-list-clone"></div>
        </div>
        <!-- ASSISTÊNCIA TÉCNICA -->
        <div class="technical-assistance">
          <div class="technical-title">
            <p>Assistência</p><span> Técnica</span>
          </div>
          <p>Está com algum problema?</p>
          <div class="button-portal">
            <a href="#">Acessar o Portal</a>
          </div>
        </div>

        <!-- GESTÃO DE QUALIDADE -->
        <div class="quality-container">
          <img src="/public/img/11.png" alt="logo-quality">
          <div class="text-quality-title">
            <p>Gestão de </p><span>Qualidade</span>
          </div>
          <p>Em 2017, o sistema de qualidade da Construtora Dinâmica passou a possuir a aprovação no Programa Brasileiro de Qualidade e Produtividade do Habitat (PBQP-H) nível A, do Governo Federal.</p>
        </div>

        <!-- BLOG -->
        
        <section class="our-blog">
          <div class="container-blog">
            <div class="title-blog">
              <p class="bold">Blog</p> <span class="bold">Dinâmica</span>
            </div>
            <div class="d-flex justify-content-center d-flex-wrap">
              <div class="list-categories mb-4 d-flex justify-content-center row-wrap">
                <img src="/public/img/blog1campanha-de-vacinacao-capa-dinamica.svg" alt="blog-image"> 
                <p>Construtora Dinâmica realiza campanha de vacinação para os funcionários</p> 
                <img src="/public/img/seta.svg" alt="seta">
              </div>
              <div class="list-categories mb-4 d-flex justify-content-center row-wrap">
                <img src="/public/img/blog2@2x.png" alt="blog-image"> 
                <p>Jardins de Higienópolis é o mais novo empreendimento sucesso vendas</p> 
                <img src="/public/img/seta.svg" alt="seta">
              </div>
              <div class="list-categories mb-4 d-flex justify-content-center row-wrap">
                <img src="/public/img/blog3@2x.png" alt="blog-image"> 
                <p>Jardins de Higienópolis: morar bem é morar próximo de tudo</p> 
                <img src="/public/img/seta.svg" alt="seta">
              </div>
            </div>
            <div class="button-blog">
              <a href="#" class="uppercase">Acessar Blog</a>
            </div>
          </div>
        </section>

        <!-- FOOTER -->

      <footer>
        <div class="footer-container d-flex flex-direction-column flex-justify-content-center">
          <img src="/public/img/logo_inicial.svg" alt="logo-inicial">
          <div class="footer-container-text">
            <div class="location-footer">
              <i class="fas fa-map-marker-alt"></i><p>Av. Getúlio Vargas, 18-45, loja 02, Bauru</p>
            </div>
            <div class="phone-footer">
              <i class="fas fa-phone-alt"></i><p>(14) 3010-6150</p>
            </div>
            <div class="email-footer">
              <i class="far fa-envelope"></i><p>contato@construtoradinamica.com.br</p>
            </div>
          </div>
          <img src="/public/img/internit logo@2x.png" alt="Internit-logo">
        </div>
        <div class="social-media-footer">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-youtube"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
        <div class="map-footer">
          <a href="#">Ver mapa do site</a>
          <i class="fas fa-caret-down"></i>

        </div>
      </footer>
                 
            
            
    
</body>

<script src="./public/js/main.js"></script>
<script src="./public/js/menu-mobile/menu-mobile.js"></script>
<script src="./public/js/countNumbers/count.js"></script>
</html>