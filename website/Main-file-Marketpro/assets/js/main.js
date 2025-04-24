(function ($) {========= CSS Index Here =======================*/
  "use strict";
  . Abstracts
  // ==========================================
  //      Start Document Ready function
  // ==========================================
  $(document).ready(function () {
    1.5. Variable
  // ============== Mobile Menu Sidebar & Offcanvas Js Start ========
  $('.toggle-mobileMenu').on('click', function () {
    $('.mobile-menu').addClass('active');
    $('.side-overlay').addClass('show');
    $('body').addClass('scroll-hide-sm');
  }); 3. Typography

  $('.close-button, .side-overlay').on('click', function () {
    $('.mobile-menu').removeClass('active');
    $('.side-overlay').removeClass('show');
    $('body').removeClass('scroll-hide-sm');
  }); 4. Pagination
  // ============== Mobile Menu Sidebar & Offcanvas Js End ========
  
  // ============== Mobile Nav Menu Dropdown Js Start =======================
  var windowWidth = $(window).width(); 
    4.2. Breadcrumb
  $('.has-submenu').on('click', function () {
    var thisItem = $(this); 
    4.5. Header Top
    if(windowWidth < 992) {
      if(thisItem.hasClass('active')) {
        thisItem.removeClass('active')
      } else {on Heading
        $('.has-submenu').removeClass('active')
        $(thisItem).addClass('active')
      }
      ==================== CSS Index End ======================*/
      var submenu = thisItem.find('.nav-submenu');
      vert to Rem End */
      $('.nav-submenu').not(submenu).slideUp(300);=================== */
      submenu.slideToggle(300);ctions Css End ======================= */
    }nt Family*/
    ort url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Exo:ital,wght@0,100..900;1,100..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&family=Quicksand:wght@300..700&display=swap");
  });======================= Variable Css Start ======================== */
  // ============== Mobile Nav Menu Dropdown Js End =======================
     Font Family Variable */
  // ===================== Scroll Back to Top Js Start ======================
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();33rem + 6.3692vw, 4.5rem);
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function () {0.3353rem + 2.1661vw, 3rem);
    var scroll = $(window).scrollTop();9rem + 1.444vw, 2.5rem);
    var height = $(document).height() - $(window).height();m);
    var progress = pathLength - (scroll * pathLength / height);;
    progressPath.style.strokeDashoffset = progress;92vw, 12.5rem);
  } --display-one: clamp(2.5rem, -0.0733rem + 6.3692vw, 7.5rem);
  updateProgress();*/
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on('scroll', function() {
    if (jQuery(this).scrollTop() > offset) {--main-l);
      jQuery('.progress-wrap').addClass('active-progress');
    } else {wo-h: 25;
      jQuery('.progress-wrap').removeClass('active-progress');
    }-main-two-l: 49%;
  });-main-two: var(--main-two-h) var(--main-two-s) var(--main-two-l);
  jQuery('.progress-wrap').on('click', function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false; 51%;
  })--heading-color: var(--black);
  // ===================== Scroll Back to Top Js End ======================
    --body-bg: var(--gray);
  // ========================== add active class to ul>li top Active current page Js Start =====================
  function dynamicActiveMenuClass(selector) {
    let FileName = window.location.pathname.split("/").reverse()[0];
    --bg-color-three: #F1F1F1;
    // If we are at the root path ("/" or no file name), keep the activePage class on the Home item
    if (FileName === "" || FileName === "index.html") {
      // Keep the activePage class on the Home link
      selector.find("li.nav-menu__item.has-submenu").eq(0).addClass("activePage");
    } else {: 0.1875rem;
      // Remove activePage class from all items first
      selector.find("li").removeClass("activePage");
    --size-6: 0.375rem;
      // Add activePage class to the correct li based on the current URL
      selector.find("li").each(function () {
        let anchor = $(this).find("a");
        if ($(anchor).attr("href") == FileName) {
          $(this).addClass("activePage");
        }e-12: 0.75rem;
      });e-13: 0.8125rem;
    --size-14: 0.875rem;
      // If any li has activePage element, add class to its parent li
      selector.children("li").each(function () {
        if ($(this).find(".activePage").length) {
          $(this).addClass("activePage");
        }e-24: 1.5rem;
      });e-26: 1.625rem;
    }-size-28: 1.75rem;
  } --size-30: 1.875rem;
    --size-32: 2rem;
  if ($('ul').length) {
    dynamicActiveMenuClass($('ul'));
  } --size-44: 2.75rem;
  // ========================== add active class to ul>li top Active current page Js End =====================
    --size-52: 3.25rem;
    --size-56: 3.5rem;
  // ========================== Select2 Js Start =================================
  $(document).ready(function() {
    $('.js-example-basic-single').select2();
}); --size-72: 4.5rem;
  // ========================== Select2 Js End =================================
    --size-80: 5rem;
    --size-90: 5.625rem;
  // ========================== Select2 Js End =================================
  $('.search-icon').on('click', function () {
    $('.search-box').addClass('active'); 
  }); size-160: 10rem;
  $('.search-box__close').on('click', function () {lc(var(--main-l) + (100% - var(--main-l)) * 0.9));
    $('.search-box').removeClass('active'); n-s), calc(var(--main-l) + (100% - var(--main-l)) * 0.8));
  }); main-200: hsl(var(--main-h), var(--main-s), calc(var(--main-l) + (100% - var(--main-l)) * 0.7));
  // ========================== Select2 Js End =================================ar(--main-l)) * 0.6));
    --main-400: hsl(var(--main-h), var(--main-s), calc(var(--main-l) + (100% - var(--main-l)) * 0.5));
    --main-500: hsl(var(--main-h), var(--main-s), calc(var(--main-l) + (100% - var(--main-l)) * 0.4));
  // ========================== Category Dropdown Responsive Js Start =================================
  $('.responsive-dropdown .has-submenus-submenu').on('click', function () {--main-l) * 0.1));
    --main-800: hsl(var(--main-h), var(--main-s), calc(var(--main-l) - var(--main-l) * 0.2));
    var windowWidth = $(window).width(); main-s), calc(var(--main-l) - var(--main-l) * 0.3));
    if(windowWidth < 992) { -main-two-h), var(--main-two-s), calc(var(--main-two-l) + (100% - var(--main-two-l)) * 0.9));
      if ($(this).hasClass('active')) {h), var(--main-two-s), calc(var(--main-two-l) + (100% - var(--main-two-l)) * 0.8));
        $(this).removeClass('active');-h), var(--main-two-s), calc(var(--main-two-l) + (100% - var(--main-two-l)) * 0.7));
        $(this).children('.submenus-submenu').slideUp();o-s), calc(var(--main-two-l) + (100% - var(--main-two-l)) * 0.6));
      } else {-400: hsl(var(--main-two-h), var(--main-two-s), calc(var(--main-two-l) + (100% - var(--main-two-l)) * 0.5));
        $('.responsive-dropdown .has-submenus-submenu').removeClass('active');two-l) + (100% - var(--main-two-l)) * 0.4));
        $('.responsive-dropdown .has-submenus-submenu').children('.submenus-submenu').slideUp();
    --main-two-700: hsl(var(--main-two-h), var(--main-two-s), calc(var(--main-two-l) - var(--main-two-l) * 0.1));
        $(this).addClass('active');two-h), var(--main-two-s), calc(var(--main-two-l) - var(--main-two-l) * 0.2));
        $(this).children('.submenus-submenu').slideDown();s), calc(var(--main-two-l) - var(--main-two-l) * 0.3));
      }eutral-50: #ECF1F9;
    }-neutral-100: #E6E6E6;
  });-neutral-200: #CCCCCC;
  // ========================== Category Dropdown Responsive Js End =================================
    --neutral-400: #999999;
  // ========================== On Click Category menu show Js Start =================================
  $('.category__button').on('click', function () {    
    $('.responsive-dropdown').addClass('active'); 
    $('.side-overlay').addClass('show');
    $('body').addClass('scroll-hide-sm');
  }); gray-50: #F1F1F1;
  $('.side-overlay, .close-responsive-dropdown').on('click', function () {    
    $('.responsive-dropdown').removeClass('active'); 
    $('.side-overlay').removeClass('show');
    $('body').removeClass('scroll-hide-sm');
  }); gray-500: #808080;
  // ========================== On Click Category menu show Js End =================================
    --gray-700: #4D4D4D;
    --gray-800: #333333;
  // ========================== Set Language in dropdown Js Start =================================
  $('.selectable-text-list li').each(function () {
    var thisItem = $(this); 
    --light-600: #E4F1FF;
    thisItem.on('click', function () {
      const listText = thisItem.text(); 
      var item = thisItem.parent().parent().find('.selected-text').text(listText); 
    }); imary-100: #BFDCFF;
  }); primary-200: #95C7FF;
  // ========================== Set Language in dropdown Js End =================================
    --primary-400: #519FFF;
    --primary-500: #458EFF;
  // ========================= Banner Slider Js Start ==============
  $('.banner-slider').slick({
    slidesToShow: 1,4759D6;
    slidesToScroll: 1,36B6;
    autoplay: false,F2F2;
    autoplaySpeed: 2000,2;
    speed: 1500,: #FECACA;
    dots: false,: #FCA5A5;
    pauseOnHover: true,71;
    arrows: true, #EF4444;
    draggable: true,C2626;
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,0: #991B1B;
    infinite: true,7F1D1D;
    nextArrow: '#banner-next',
    prevArrow: '#banner-prev',
  });  uccess-200: #BBF7D0;
    --success-300: #86EFAC;
  $('.banner-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.wow').css('visibility', 'hidden').removeClass('animated'); 
  });-success-600: #27AE60;
    --success-700: #15803D;
  $('.banner-slider').on('afterChange', function(event, slick, currentSlide) {
    new WOW().init();4532D;
    $('.wow').css('visibility', 'visible'); 
  });-warning-100: #FEF9C3;
    --warning-200: #FEF08A;
  // ========================= Banner Slider Js End ===================
    --warning-400: #FACC15;
  // ========================= Banner Three Slider Js Start ==============
  $('.banner-three-slider').slick({
    slidesToShow: 1,f39016;
    slidesToScroll: 1,8209;
    autoplay: false,d77907;
    autoplaySpeed: 2000,
    speed: 1500,#DBEAFE;
    dots: false,#BFDBFE;
    pauseOnHover: true,;
    arrows: true,60A5FA;
    draggable: true,2F6;
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900, #1D4ED8;
    infinite: true,40AF;
    nextArrow: '#banner-three-next',
    prevArrow: '#banner-three-prev',
  });  ertiary-100: #c2b6ff;
    --tertiary-600: #3C23B5;
  $('.banner-three-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.wow').css('visibility', 'hidden').removeClass('animated'); 
  });-font-md: 1rem;
    --font-lg: 1.125rem;
  $('.banner-three-slider').on('afterChange', function(event, slick, currentSlide) {
    new WOW().init();m;
    $('.wow').css('visibility', 'visible'); 
  });-font-4xl: 2.25rem;
  // ========================= Banner Three Slider Js End ===================
    --font-6xl: 3.75rem;
   // ========================= hot deals Slider Js Start ==============
   $('.feature-item-wrapper').slick({
    slidesToShow: 8,======== Variable Css End ======================== */
    slidesToScroll: 1,========= Mixins Css Start ============================ */
    autoplay: true, for Each Device Start */
    autoplaySpeed: 3000,Each Device End */
    speed: 800,================ Mixins Css End ============================ */
    dots: false,============== Accordion Css start ============================= */
    pauseOnHover: true,rdion-item {
    arrows: true,olid var(--border-color);
    draggable: true,: hsl(var(--white)) !important;
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    infinite: true,n;
    nextArrow: '#feature-item-wrapper-next',
    prevArrow: '#feature-item-wrapper-prev',
    responsive: [ .accordion-item:not(:last-child) {
        {n-block-end: 20px;
            breakpoint: 1699,
            settings: {
                slidesToShow: 7ader {
            }ht: 1;
        },
        {
            breakpoint: 1399,body {
            settings: {
                slidesToShow: 6
            }
        },
        {reen and (max-width: 575px) {
            breakpoint: 1199,ion-body {
            settings: {0px;
                slidesToShow: 5
            }
        },
        {
            breakpoint: 991,ype .accordion-button.collapsed {
            settings: {
                slidesToShow: 4
            }
        },cordion:last-of-type .accordion-button.collapsed {
        {r-radius: 5px;
            breakpoint: 767,
            settings: {
                slidesToShow: 3tton {
            }r(--heading-color);
        },g: 20px 30px;
        {ng-inline-end: 46px;
            breakpoint: 575,
            settings: {em, 0.696rem + 0.634vw, 1.25rem);
                slidesToShow: 2font);
            }
        }
    ]a screen and (max-width: 575px) {
  });  mmon-accordion .accordion-button {
  // ========================= hot deals Slider Js End ===================
        padding-inline-end: 36px;
   // ========================= hot deals Slider Js Start ==============
   $('.feature-three-item-wrapper').slick({
    slidesToShow: 6,
    slidesToScroll: 1,ordion-button::after {
    autoplay: true,e: none;
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,n .accordion-button:focus {
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,color: transparent !important;
    infinite: true,e;
    nextArrow: '#feature-item-wrapper-next',
    prevArrow: '#feature-item-wrapper-prev',
    responsive: [
      {-accordion .accordion-button:not(.collapsed)::after {
        breakpoint: 1599,e;
        settings: {--main));
          slidesToShow: 5,
        }
      },accordion .accordion-button[aria-expanded=true]::after, .common-accordion .accordion-button[aria-expanded=false]::after {
      {t-family: "Phosphor";
        breakpoint: 1399,
        settings: {";
          slidesToShow: 4,);
        }ay: inline-block;
      },tion: absolute;
      {et-block-start: 50%;
        breakpoint: 992,Y(-50%);
        settings: {d: 30px;
          slidesToShow: 3,
        }align: center;
      },
      {
        breakpoint: 768,idth: 575px) {
        settings: {on .accordion-button[aria-expanded=true]::after, .common-accordion .accordion-button[aria-expanded=false]::after {
          slidesToShow: 3,20px;
        }
      },
      {
        breakpoint: 575,dion-button[aria-expanded=false]::after {
        settings: {";
          slidesToShow: 2,ng-color));
        }
      },
      {============================= Accordion Css End =========================== */
        breakpoint: 424,============ Button Css Start =========================== */
        settings: {+ .btn, .btn.active, .btn.show, .btn:first-child:active, :not(.btn-check) + .btn:active {
          slidesToShow: 2,
        }round-color: none;
      },er-color: none;
      {
        breakpoint: 359,
        settings: {
          slidesToShow: 1,
        }r-radius: 5px;
      },er: 1px solid transparent;
    ]ont-weight: 500;
  });  t-family: var(--body-font);
  // ========================= hot deals Slider Js End ===================
    z-index: 1;
    line-height: 1;
  // ========================= Banner Slider Js Start ==============
  $('.banner-item-two__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,, .btn:focus-visible {
    autoplay: false, !important;
    autoplaySpeed: 2000,
    speed: 1500,
    dots: true,nd (max-width: 1399px) {
    pauseOnHover: true,
    arrows: true,10px 20px;
    draggable: true,.875rem;
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true,
    nextArrow: '#banner-next',
    prevArrow: '#banner-prev',ant;
    responsive: [
      {
        breakpoint: 767,
        settings: {e(1.01);
          slidesToShow: 1,
        }
      }in {
    ]ackground-color: hsl(var(--main)) !important;
  });  der-color: hsl(var(--main)) !important;
  $('.banner-item-two__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.wow').css('visibility', 'hidden').removeClass('animated'); 
  });main:hover {
    background-color: var(--main-800) !important;
  $('.banner-item-two__slider').on('afterChange', function(event, slick, currentSlide) {
    new WOW().init();
    $('.wow').css('visibility', 'visible'); 
  });outline-main {
  // ========================= Banner Slider Js End ===================
    border-color: hsl(var(--main)) !important;
    color: hsl(var(--main)) !important;
  // ========================= flash Sale Four Slider Js Start ==============
  $('.flash-sales__slider').slick({
    slidesToShow: 2,ver {
    slidesToScroll: 1,hsl(var(--main)/0.15) !important;
    autoplay: true,sl(var(--main)/0.4) !important;
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,
    pauseOnHover: true,sl(var(--main-two)) !important;
    arrows: true, hsl(var(--main-two)) !important;
    draggable: true,-white)) !important;
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true, {
    nextArrow: '#flash-next',ain-two-800) !important;
    prevArrow: '#flash-prev',two-800) !important;
    responsive: [
      {
        breakpoint: 991,
        settings: {r: transparent !important;
          slidesToShow: 1,--main-two)) !important;
          arrows: false,n-two)) !important;
        }
      }
    ]outline-main-two:hover {
  });  kground-color: hsl(var(--main-two)/0.15) !important;
  // ========================= flash Sale Four Slider Js End ==================
    
  // ========================= hot deals Slider Js Start ==============
  $('.hot-deals-slider').slick({
    slidesToShow: 4,: hsl(var(--white)) !important;
    slidesToScroll: 1,var(--white)) !important;
    autoplay: true,--heading-color)) !important;
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false, {
    pauseOnHover: true,sl(var(--white)/0.9) !important;
    arrows: true, hsl(var(--white)/0.9) !important;
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,ite {
    infinite: true,r: transparent !important;
    nextArrow: '#deals-next',hite)) !important;
    prevArrow: '#deals-prev',!important;
    responsive: [
      {
        breakpoint: 1399,{
        settings: {r: hsl(var(--white)) !important;
          slidesToShow: 3,--white)) !important;
          arrows: false,ding-color)) !important;
        }
      },
      {ack {
        breakpoint: 1199,(var(--black)) !important;
        settings: {sl(var(--black)) !important;
          slidesToShow: 2,)) !important;
          arrows: false,
        }
      },ck:hover {
      {kground-color: hsl(var(--black)/0.8) !important;
        breakpoint: 575,r(--black)/0.8) !important;
        settings: {
          slidesToShow: 1,
          arrows: false,
        }round-color: transparent !important;
      },er-color: hsl(var(--black)) !important;
    ]olor: hsl(var(--black)) !important;
  });  
  // ========================= hot deals Slider Js End ===================
    -outline-black:hover {
    background-color: hsl(var(--black)) !important;
  // ========================= hot deals Slider Js Start ==============
  $('.deals-week-slider').slick({ortant;
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,================= Button Css End =========================== */
    autoplaySpeed: 2000,============ Form Css Start =========================== */
    speed: 1500,/
    dots: false,
    pauseOnHover: true,
    arrows: true,400;
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,px 24px;
    infinite: true,r: transparent !important;
    nextArrow: '#deal-week-next',100);
    prevArrow: '#deal-week-prev',
    responsive: [1;
      {
        breakpoint: 1599,
        settings: {-two {
          slidesToShow: 5,var(--white)) !important;
          arrows: false,ck));
        }
      },
      {screen and (max-width: 991px) {
        breakpoint: 1399,
        settings: {px 24px;
          slidesToShow: 3,
          arrows: false,
        }
      },creen and (max-width: 767px) {
      {mmon-input {
        breakpoint: 1199,x;
        settings: {
          slidesToShow: 2,
          arrows: false,
        }nput::placeholder {
      },r: var(--gray-500);
      {nsition: 0.2s linear;
        breakpoint: 575,
        settings: {0;
          slidesToShow: 1,
          arrows: false,
        }nput--md {
      },ing: 13px 16px;
    ]
  });  
  // ========================= hot deals Slider Js End ===================
    padding: 23px 24px;
}
  // ========================= hot deals Slider Js Start ==============
  $('.top-selling-product-slider').slick({
    slidesToShow: 4,g {
    slidesToScroll: 1,24px;
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,cus {
    pauseOnHover: true,ar(--main));
    arrows: true,one;
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,ocus::placeholder {
    infinite: true,den;
    nextArrow: '#top-selling-next',
    prevArrow: '#top-selling-prev',
    responsive: [
      {-input:disabled, .common-input[readonly] {
        breakpoint: 1399,(var(--black)/0.2);
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },input[type=password] {
      {or: hsl(var(--black)/0.5);
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,d]:focus {
          arrows: false,ck));
        }
      },
      {-input[type=file] {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },input[type=file]::file-selector-button {
    ]order: 1px solid hsl(var(--black)/0.08);
  });  ding: 4px 6px;
  // ========================= hot deals Slider Js End ===================
    background-color: hsl(var(--main)) !important;
    transition: 0.2s linear;
  // ========================= hot deals Slider Js Start ==============
  $('.organic-food__slider').slick({
    slidesToShow: 6,art: 15px;
    slidesToScroll: 1,ody-color)) !important;
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,pe=file]::file-selector-button:hover {
    dots: false,olor: hsl(var(--main));
    pauseOnHover: true,sl(var(--main));
    arrows: true,r(--black));
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,withIcon {
    infinite: true,end: 50px !important;
    nextArrow: '#organic-next',
    prevArrow: '#organic-prev',
    responsive: [thLeftIcon {
      {ding-inline-start: 50px !important;
        breakpoint: 1599,
        settings: {
          slidesToShow: 6,
          arrows: false,
        }on {
      },tion: absolute;
      {et-inline-end: 24px;
        breakpoint: 1399,%;
        settings: {slateY(-50%);
          slidesToShow: 4,ng-color));
          arrows: false,
        }
      },con--left {
      {et-inline-start: 20px;
        breakpoint: 992,to;
        settings: {
          slidesToShow: 3,
          arrows: false,
        }-block-start: 15px;
      },sform: translateY(0);
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }n-block-end: 6px;
      },r: hsl(var(--heading-color));
      {t-weight: 500;
        breakpoint: 424,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }ion: relative;
      },
    ]
  });  -has-icon::before {
  // ========================= hot deals Slider Js End ===================
    content: "\f107";
    inset-inline-end: 20px;
  // ========================= New arrival Slider Js Start ==============
  $('.new-arrival__slider').slick({
    slidesToShow: 6,osphor";
    slidesToScroll: 1,
    autoplay: false,-main));
    autoplaySpeed: 2000,ear;
    speed: 1500,ts: none;
    dots: false,ar(--black)) !important;
    pauseOnHover: true,
    arrows: true,
    draggable: true,n-black::before {
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true,
    nextArrow: '#new-arrival-next',
    prevArrow: '#new-arrival-prev',
    responsive: [rance: none;
      {ding: 20px 24px;
        breakpoint: 1599,
        settings: {
          slidesToShow: 6,
          arrows: false,idth: 991px) {
        }ct-has-icon select {
      },padding: 15px 24px;
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 4,th: 767px) {
          arrows: false,ect {
        }adding: 12px 16px;
      },
      {
        breakpoint: 992,
        settings: {ommon-input {
          slidesToShow: 3,px !important;
          arrows: false,
        }
      },{
      {or: hsl(var(--black)/0.6) !important;
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          arrows: false,idth: 991px) {
        }ct {
      },padding: 11px 24px;
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 1,th: 767px) {
          arrows: false,
        }adding: 9px 24px;
      },
    ]
  });  
  // ========================= New arrival Slider Js End ===================
    border-color: hsl(var(--main));
    color: hsl(var(--black)) !important;
  // ========================= hot deals Slider Js Start ==============
  $('.short-product-list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,r: hsl(var(--white));
    autoplaySpeed: 2000,ding-color));
    speed: 1500,
    dots: false,
    pauseOnHover: true,
    arrows: true,nput {
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true,max-width: 767px) {
    prevArrow: '<button type="button" class="slick-prev border border-gray-100 w-30 h-30 bg-transparent rounded-pill position-absolute hover-bg-main-600 hover-text-white hover-border-main-600 transition-1"><i class="ph ph-caret-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next border border-gray-100 w-30 h-30 bg-transparent rounded-pill position-absolute hover-bg-main-600 hover-text-white hover-border-main-600 transition-1"><i class="ph ph-caret-right"></i></button>',
  });  
  
// ========================= hot deals Slider Js End ===================
input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active,
  xtarea:-webkit-autofill, textarea:-webkit-autofill:hover, textarea:-webkit-autofill:focus, textarea:-webkit-autofill:active {
  // ========================= hot deals Slider Js Start ==============
  $('.brand-slider').slick({olor 5000s ease-in-out 0s;
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,ill, textarea:-webkit-autofill, select:-webkit-autofill, textarea:-webkit-autofill, textarea:-webkit-autofill, textarea:-webkit-autofill {
    autoplaySpeed: 2000,0 0 0px 1000px transparent inset;
    speed: 1500,-fill-color: hsl(var(--heading-color)) !important;
    dots: false, hsl(var(--heading-color));
    pauseOnHover: true,
    arrows: true,
    draggable: true,*/
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,word, input#confirm-password {
    infinite: true,end: 50px;
    nextArrow: '#brand-next',
    prevArrow: '#brand-prev',
    responsive: [de {
      {ition: absolute;
        breakpoint: 1599,x;
        settings: {
          slidesToShow: 7,
          arrows: false,0%;
        }form: translateY(-50%);
      },r: hsl(var(--black)/0.4);
      {
        breakpoint: 1399,
        settings: {e */
          slidesToShow: 6,button,
          arrows: false,n-button {
        }it-appearance: none;
      },
      {
        breakpoint: 992,
        settings: {: textfield;
          slidesToShow: 5,
          arrows: false,
        } Checkbox & Radio Css Start */
      },check {
      {gin-block-end: 16px;
        breakpoint: 575,
        settings: {
          slidesToShow: 4,
          arrows: false,
        }
      },
      {-check a {
        breakpoint: 424,
        settings: {
          slidesToShow: 3,
          arrows: false,io .form-check-input {
        }r-radius: 50%;
      },
      {
        breakpoint: 359,io .form-check-input:checked {
        settings: {r: transparent !important;
          slidesToShow: 2,
          arrows: false,
        }heck.common-radio .form-check-input:checked::after {
      },bility: visible;
    ]pacity: 1;
  });  bkit-transform: translate(-50%, -50%) scale(1);
  // ========================= hot deals Slider Js End ===================
}
  
  // ========================= Category Dropdown Two Js Start ===============================
  $('.category-two .category__button').on('click', function () {
    $('.category-two .category__button').toggleClass('active')
    $('.responsive-dropdown.style-two').addClass('active').slideToggle(400); 
  }); x-shadow: none !important;
  // ========================= Category Dropdown Two Js End ===============================
    position: relative;
    border-radius: 3px;
  // ========================= Featured Products Slider Js Start ==============
  $('.featured-product-slider').slick({
    slidesToShow: 2,d hsl(var(--black)/0.4);
    slidesToScroll: 1,
    autoplay: true,s linear;
    autoplaySpeed: 2000,0;
    speed: 1500,
    dots: false,
    pauseOnHover: true,ck-input::before {
    arrows: true,olute;
    draggable: true,;
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,: 900;
    infinite: true,--white));
    nextArrow: '#featured-products-next',
    prevArrow: '#featured-products-prev',
    responsive: [start: 50%;
      {nsform: translate(-50%, -50%);
        breakpoint: 991,ear;
        settings: {den;
          slidesToShow: 1,
          arrows: false,
        }
      }-check .form-check-input::after {
    ]osition: absolute;
  });  tent: "";
  // ========================= Featured Products Slider Js End ==================
    inset-inline-start: 50%;
    -webkit-transform: translate(-50%, -50%) scale(0.2);
  // ========================= hot deals Slider Js Start ==============
  $('.recommended-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,hsl(var(--main));
    autoplay: true,50%;
    autoplaySpeed: 2000,ear;
    speed: 1500,
    dots: false,hidden;
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,color: hsl(var(--main)) !important;
    infinite: true,sl(var(--main)) !important;
    nextArrow: '#recommended-next',
    prevArrow: '#recommended-prev',
    responsive: [
      {-check .form-check-input:checked[type=checkbox] {
        breakpoint: 1399,e;
        settings: {
          slidesToShow: 3,
          arrows: false,k-input:checked::before {
        }ility: visible;
      },ity: 1;
      {
        breakpoint: 1199,
        settings: {-check-label {
          slidesToShow: 2,
          arrows: false,8px);
        }ng-inline-start: 12px;
      },or: pointer;
      {or: hsl(var(--heading-color));
        breakpoint: 575,oppins-font);
        settings: {
          slidesToShow: 1,
          arrows: false,ck-input {
        }r: 1px solid hsl(var(--black));
      },
    ]
  });  d-black .form-check-input::after {
  // ========================= hot deals Slider Js End ===================
  
  // ========================= hot deals Slider Js Start ==============
  $('.vendor-card__list.style-two').slick({
    slidesToShow: 4,: hsl(var(--black)) !important;
    slidesToScroll: 1,var(--black)) !important;
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500, .form-check-input {
    dots: false,solid var(--primary-600);
    pauseOnHover: true,
    arrows: true,
    draggable: true,rm-check-input::after {
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true,
    nextArrow: '#vendor-next',nput:checked {
    prevArrow: '#vendor-prev',imary-600) !important;
  });  der-color: var(--primary-600) !important;
  // ========================= hot deals Slider Js End ===================
  
  hecked-gray .form-check-input {
  // ========================= hot deals Slider Js Start ==============
  $('.top-brand__slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,eck-input::after {
    autoplay: true,r: var(--gray-600);
    autoplaySpeed: 2000,
    speed: 1500,
    dots: false,orm-check-input:checked {
    pauseOnHover: true,ar(--gray-600) !important;
    arrows: true, var(--gray-600) !important;
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,s .form-check-input {
    infinite: true,id var(--success-600);
    nextArrow: '#topBrand-next',
    prevArrow: '#topBrand-prev',
    responsive: [.form-check-input::after {
      {kground-color: var(--success-600);
        breakpoint: 1599,
        settings: {
          slidesToShow: 7,ck-input:checked {
          arrows: false,r(--success-600) !important;
        }r-color: var(--success-600) !important;
      },
      {
        breakpoint: 1399,ck-input {
        settings: {id var(--danger-600);
          slidesToShow: 6,
          arrows: false,
        }danger .form-check-input::after {
      },ground-color: var(--danger-600);
      {
        breakpoint: 992,
        settings: {rm-check-input:checked {
          slidesToShow: 5,--danger-600) !important;
          arrows: false,danger-600) !important;
        }
      },
      {d-purple .form-check-input {
        breakpoint: 575,r(--tertiary-600);
        settings: {
          slidesToShow: 4,
          arrows: false,eck-input::after {
        }round-color: var(--tertiary-600);
      },
      {
        breakpoint: 424,eck-input:checked {
        settings: {r: var(--tertiary-600) !important;
          slidesToShow: 3,rtiary-600) !important;
          arrows: false,
        }
      },-white .form-check-input {
      {der: 1px solid var(--gray-100);
        breakpoint: 359,
        settings: {
          slidesToShow: 2,-input::after {
          arrows: false,r(--gray-100);
        }
      },
    ]ked-white .form-check-input:checked {
  });  kground-color: var(--gray-100) !important;
  // ========================= hot deals Slider Js End ===================
}
  
  // ========================= Product Details Thumbs Slider Js Start ===================
  $('.product-details__thumb-slider').slick({
    slidesToShow: 1, !important;
    slidesToScroll: 1,
    arrows: false,
    fade: true,===================== Form Css End =========================== */
    asNavFor: '.product-details__images-slider' Css Start =========================== */
  });nation {
    margin-block-start: 64px;
  $('.product-details__images-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,-width: 1199px) {
    asNavFor: '.product-details__thumb-slider',
    dots: false,lock-start: 48px;
    arrows: false,
    focusOnSelect: true
  });
  // ========================= Product Details Thumbs Slider Js End ===================
    .pagination {
        margin-block-start: 40px;
  // ========================= Increment & Decrement Js Start ===================
  var minus = $('.quantity__minus');
  var plus = $('.quantity__plus');
@media screen and (max-width: 767px) {
  $(plus).on('click', function () {
    var input = $(this).siblings('.quantity__input');
    var value = input.val(); 
    value++;
    input.val(value); 
  }); ation .page-item.active .page-link {
    background-color: var(--main-600) !important;
  $(minus).on('click', function () {mportant;
    var input = $(this).siblings('.quantity__input');
    var value = input.val(); 
    if(value > 1) {
      value--;age-item .page-link {
    }ox-shadow: none !important;
    input.val(value); 
  }); 
  // ========================= Increment & Decrement Js End ===================ve, .pagination .page-item .page-link:focus {
    color: var(--main-600) !important;
    background-color: var(--main-100) !important;
  // ========================= Color List Js Start ===================
  $('.color-list__button').on('click', function () {
    $('.color-list__button').removeClass('border-gray-900'); 
/* ================================= Pagination Css End =========================== */
    if(!$(this).hasClass('border-gray-900')) {tart =========================== */
      $(this).addClass('border-gray-900');
      $(this).removeClass('border-gray-50');
    } else {;
      $(this).removeClass('border-gray-900');
      $(this).addClass('border-gray-50');
    };n-tab .nav-item {
  }); rder-bottom: 0;
  // ========================= Color List Js End ===================

  // ========================== Range Slider Js Start =====================
  $(function() {-gray-500);
    $( "#slider-range" ).slider({
        range: true,: transparent;
        min: 0, 0.2s linear;
        max: 25,solid var(--border-color);
        values: [ 0, 25 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }r-radius: 50px;
    });t-size: 16px;
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  });a screen and (max-width: 1399px) {
  // ========================== Range Slider Js End =====================
        padding: 6px 16px !important;
        font-size: 0.875rem;
  // ========================== List Grid Js Start ================================
  $('.list-btn').on('click', function () {
    $('.grid-btn').addClass('border-gray-100'); 
    $('.grid-btn').removeClass('border-main-600 text-white bg-main-600'); 
    $('.list-grid-wrapper').removeClass('list-view'); 
    border-color: var(--main-600) !important;
    $(this).removeClass('border-gray-100'); tant;
    $(this).addClass('border-main-600 text-white bg-main-600'); 
    $('.list-grid-wrapper').addClass('list-view'); 
  }); n-tab .nav-item .nav-link:hover {
    color: var(--main-600);
  $('.grid-btn').on('click', function () {
    $('.list-btn').addClass('border-gray-100'); 
    $('.list-btn').removeClass('border-main-600 text-white bg-main-600'); 
    $('.list-grid-wrapper').removeClass('list-view'); 
    color: var(--neutral-600);
    $(this).removeClass('border-gray-100'); 
    $(this).addClass('border-main-600 text-white bg-main-600'); 
  }); n-tab.style-two .nav-link.active {
  // ========================== List Grid Js End ================================
    border-color: var(--main-two-600) !important;
    background-color: var(--main-two-600) !important;
  // ========================== Shop Sidebar Js Start ================================
  $('.sidebar-btn').on('click', function () {
    $(this).addClass('bg-main-600 text-white');
    $('.shop-sidebar').addClass('active');
    $('.side-overlay').addClass('show');
    $('body').addClass('scroll-hide-sm'); 
  }); ============================== Tab Css End =========================== */
/* ======================= Common Table Css Start ======================= */
  $('.side-overlay, .shop-sidebar__close').on('click', function () {
    $('.sidebar-btn').removeClass('bg-main-600 text-white');
    $('.shop-sidebar').removeClass('active');
    $('.side-overlay').removeClass('show');6vw, 2.25rem);
    $('body').removeClass('scroll-hide-sm');
  }); 
  // ========================== Shop Sidebar Js End ================================
    color: hsl(var(--white));
    margin-block-end: 0;
  // ========================== Remove Tr Js Start ================================
  $('.remove-tr-btn').on('click', function () {
    $(this).closest('tr').addClass('d-none')
  });  > :not(caption) > * > * {
  // ========================== Remove Tr Js End ================================
}
  
  // ========================== Checkout Payment Method Js Start ================================
  $('.payment-item .form-check-input:checked').closest('.payment-item').find('.payment-item__content').show();
    padding: 32px;
  $('.payment-item .form-check-input').on('change', function () {
      $('.payment-item__content').hide();
      $(this).closest('.payment-item').find('.payment-item__content').show();
  });adding-inline-start: 0;
  // ========================== Checkout Payment Method Js End ================================

  // ================== Password Show Hide Js Start ==========
  $(".toggle-password").on('click', function() {
    $(this).toggleClass("active");
    var input = $($(this).attr("id"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {-align: middle;
      input.attr("type", "password");
    }
  });e tr th:first-child, .table tr td:first-child {
  // ========================= Password Show Hide Js End ===========================
}
  // ========================= Background Image Js Start ===================
    $(".bg-img").css('background-image', function () {
      var bg = 'url(' + $(this).data("background-image") + ')';
      return bg;ne-end: 0;
    });
  // ========================= Background Image Js End ===================
.table thead tr {
  // ========================== Text Slide Js Start =====================
    $('.text-slider').marquee({
      pauseOnHover: true,
      allowCss3Support: true,
      css3easing: 'linear',
      easing: 'linear',em, 0.696rem + 0.634vw, 1.25rem);
      delayBeforeStart: 1000,
      duration: 7000,: clamp(1rem, -0.065rem + 2.219vw, 1.875rem);
      gap: 20,
      pauseOnCycle: false,
      startVisible: false
    });der-bottom: 1px solid hsl(var(--white)/0.2);
    // ========================== Text Slide Js End =====================

.table tbody tr:last-child {
    // ========================== Trending Products Js Strt =====================
    $('.expand-btn').on('click', function () {
      $(this).toggleClass('bg-main-two-600 text-white');
      $(this).parent().find('.expand-icons').toggleClass('d-flex');
    padding-block-end: 0;
      if($(this).children('i').hasClass('ph ph-plus')) {
        $(this).children('i').removeClass('ph ph-plus')
        $(this).children('i').addClass('ph ph-x')
      } else { clamp(0.875rem, 0.723rem + 0.317vw, 1rem);
        $(this).children('i').removeClass('ph ph-x')
        $(this).children('i').addClass('ph ph-plus')em) 0;
      }
    });
.table.style-two {
    $('.wishlist-btn').on('click', function () {
      if($(this).children('i').hasClass('ph ph-heart')) {
        $(this).children('i').removeClass('ph ph-heart')
        $(this).children('i').addClass('ph-fill ph-heart text-main-two-600')
      } else {tom: 1px solid hsl(var(--black)/0.1);
        $(this).children('i').removeClass('ph-fill ph-heart text-main-two-600')
        $(this).children('i').addClass('ph ph-heart')
      }style-two thead tr th {
    });ding-block-end: 16px;
    // ========================== Trending Products Js End =====================
}
    // ========================== Instagram Slider Js Start =====================
    $('.instagram-slider').slick({
      slidesToShow: 4, solid var(--gray-100);
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,r:last-child {
      speed: 1500,
      dots: false,
      pauseOnHover: true,
      arrows: true,tbody tr td:first-child {
      draggable: true,rt: 0;
      rtl: $('html').attr('dir') === 'rtl' ? true : false,
      speed: 900,
      infinite: true,ody tr td:last-child {
      nextArrow: '#instagram-next',
      prevArrow: '#instagram-prev',
      responsive: [
        {yle-three tbody tr td {
          breakpoint: 1299,0.283rem + 2.536vw, 2.5rem) 24px;
          settings: {
            slidesToShow: 3,
            arrows: false, Common Table Css End ======================= */
          }========= Common Card Css Start ========================= */
        },rd {
        {r: 0;
          breakpoint: 992,
          settings: {
            slidesToShow: 3,common-card .card-footer {
            arrows: false,
          }und-color: transparent;
        },-bottom: 1px solid var(--border-color);
        {
          breakpoint: 768,
          settings: {x-width: 424px) {
            slidesToShow: 2,r, .common-card .card-footer {
            arrows: false,;
          }
        },
        {
          breakpoint: 424,{
          settings: { hsl(var(--black));
            slidesToShow: 1,
            arrows: false,
          }d .card-header .title {
        }, hsl(var(--white));
      ]gin-block-end: 0;
    });  
    // ========================== Instagram Slider Js End =====================
    mon-card .card-body {
    padding: 24px;
    // ========================== Testimonials Thumbs Slider Js Start =====================
    $('.testimonials-slider').slick({
      slidesToShow: 1,-width: 424px) {
      slidesToScroll: 1,ody {
      asNavFor: '.testimonials-thumbs-slider',
      dots: true,
      centerMode: true,
      focusOnSelect: true,
      fade: true,d-footer {
      cssEase: 'linear',d var(--border-color);
      dots: false, 0;
      arrows: false,
    });
/* ================= Common Card Css End ========================= */
    $('.testimonials-thumbs-slider').slick({t =========================== */
      slidesToShow: 4,fault .select2-selection--single {
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      speed: 1500,--default.select2-container--open .select2-selection--single .select2-selection__arrow b {
      dots: false,
      pauseOnHover: true,
      arrows: true,
      draggable: true,
      rtl: $('html').attr('dir') === 'rtl' ? true : false,lect2-selection__arrow b::before {
      speed: 900,ative;
      infinite: true,
      nextArrow: '#testi-next',
      prevArrow: '#testi-prev',
      asNavFor: '.testimonials-slider',);
      responsive: [s linear;
        {
          breakpoint: 1299,
          settings: {pen.select2-container--default .select2-selection--single .select2-selection__arrow b::before {
            slidesToShow: 3,ant;
            arrows: false,
          }
        },ontainer--default .select2-selection--single .select2-selection__arrow b {
        {r: 0 !important;
          breakpoint: 992,
          settings: {: 0 !important;
            slidesToShow: 3,mportant;
            arrows: false,portant;
          }
        },
        {container {
          breakpoint: 768,tant;
          settings: {rtant;
            slidesToShow: 2,
            arrows: false,
          }lection.select2-selection--single {
        },: inherit !important;
        {r: 1px solid var(--gray-200) !important;
          breakpoint: 424,sparent !important;
          settings: {portant;
            slidesToShow: 2,!important;
            arrows: false,mportant;
          }
        },
      ]-end-0 .select2-selection.select2-selection--single {
    });  r-start-start-radius: 50px !important;
    // ========================== Testimonials Thumbs Slider Js End =====================
    
  // ========================= Wow Js Start ===================
  new WOW().init();select2-selection--single {
  // ========================= Wow Js End ===================
}
  // ========================= AOS Animation Js Start ===================
  AOS.init({tainer .selection {
    offset: 40,erit;
    duration: 1000,
    // once: true,
    easing: 'ease',_arrow {
  });ight: 16px !important;
  // ========================= AOS Animation Js End ===================
    transform: translateY(-50%) !important;
    width: unset !important;
  });
  // ==========================================
  //      End Document Ready function {
  // ==========================================
        right: 6px !important;
  // ========================= Preloader Js Start =====================
    $(window).on("load", function(){
      $('.preloader').fadeOut(); 
    })t2-container .select2-selection--single .select2-selection__rendered {
    // ========================= Preloader Js End=====================
    padding-inline-end: 40px !important;
    // ========================= Header Sticky Js Start ==============
    $(window).on('scroll', function() {
      if ($(window).scrollTop() >= 260) {
        $('.header').addClass('fixed-header');gle .select2-selection__rendered {
      } padding-inline-start: 10px !important;
      else {ing-inline-end: 24px !important;
          $('.header').removeClass('fixed-header');
      }
    }); 
    // ========================= Header Sticky Js End===================
    border-inline-end: 0 !important;
    async function loadCategories() {
      try {.select2-dropdown {    border: 1px solid var(--gray-100) !important;    padding: 10px !important;    border-radius: 6px !important;    min-width: 200px;}@media screen and (max-width: 767px) {    .select2-dropdown {        min-width: 170px;    }}@media screen and (max-width: 424px) {    .select2-dropdown {        min-width: 150px;    }}.select2-search--dropdown {    padding: 0 !important;}.select2-container--default .select2-search--dropdown .select2-search__field {    border: 1px solid var(--gray-100) !important;    border-radius: 6px !important;    padding: 4px 10px;}.select2-container--default .select2-search--dropdown .select2-search__field:focus-visible {    outline: 1px solid var(--main-200);}.select2-results {    margin-block-start: 8px !important;}.select2-results__option.select2-results__option--selectable {    border-radius: 6px !important;    padding: 6px 12px !important;    color: var(--gray-500);    font-size: 14px !important;}@media screen and (max-width: 767px) {    .select2-results__option.select2-results__option--selectable {        padding: 4px 10px !important;        font-size: 12px !important;    }}.select2-container--default .select2-results__option--highlighted.select2-results__option--selectable {    background-color: var(--main-600) !important;    color: white !important;}.select2-results__option.select2-results__option--selectable:hover {    background-color: var(--main-100) !important;    color: var(--main-600) !important;}.select2-container--default .select2-results__option--selected, .select2-container--default .select2-results__option--selected:hover {    background-color: var(--main-600) !important;    color: #fff !important;}.select2-container--default .select2-results > .select2-results__options {    padding-inline-end: 8px;}.select2-container--default .select2-results > .select2-results__options::-webkit-scrollbar {    width: 6px;}.select2-container--default .select2-results > .select2-results__options::-webkit-scrollbar-track {    background: #e4e4e4;}.select2-container--default .select2-results > .select2-results__options::-webkit-scrollbar-thumb {    background: #a2a2a2;    border-radius: 50px;}.select2-container--default .select2-results > .select2-results__options::-webkit-scrollbar-thumb:hover {    background: #6d6d6d;}.select2-container--open.select2-container--default .select2-selection--single .select2-selection__rendered {    color: var(--main-600) !important;}.select2-container--open.select2-container--default .select2-selection--single .select2-selection__arrow b::before {    color: var(--main-600) !important;}/* Location Box Css  */.location-box .select2-container .select2-selection--single .select2-selection__rendered {    padding-inline-start: 0px !important;    padding-inline-end: 50px !important;}.location-box .select2-selection__arrow {    right: 0px !important;    inset-block-start: 10% !important;}.location-box .select2-selection.select2-selection--single {    border: 0 !important;}.location-box .select2-container--default .select2-selection--single .select2-selection__rendered {    line-height: 14px;    color: var(--gray-900);    font-weight: 700;    font-family: var(--heading-font-two);}@media screen and (max-width: 991px) {    .select2-container--open .select2-dropdown {        left: -74px;    }}@media screen and (max-width: 424px) {    .select2-container--open .select2-dropdown {        left: -40px;    }}@media screen and (max-width: 991px) {    .location-box, .search-category.h-48 {        height: 40px !important;    }    .location-box .select2-selection__rendered, .search-category.h-48 .select2-selection__rendered {        font-size: 12px;    }}/* ======================= Select 2 Css End =========================== *//* ========================== Count Down Css Start =============================== */.countdown-list {    gap: 20px;}@media screen and (max-width: 1399px) {    .countdown-list {        gap: 6px;    }}.countdown-list__item {    background-color: hsl(var(--white));    padding: clamp(0.375rem, -2.248rem + 3vw, 0.75rem) clamp(0.5rem, -2.998rem + 4vw, 1rem);    border-radius: 8px;    position: relative;}@media screen and (max-width: 1399px) {    .countdown-list__item {        font-size: 0.75rem !important;    }}.countdown-list__item:last-child::before {    display: none;}.countdown-list__item::before {    position: absolute;    content: ":";    inset-block-start: 50%;    inset-inline-end: -10px;    transform: translateY(-50%);    font-weight: 700;}@media screen and (max-width: 1399px) {    .countdown-list__item::before {        display: none;    }}.countdown-list__item.colon-white::before {    color: #fff;}.countdown-list.style-two .countdown-list__item {    background-color: var(--main-600);    color: #fff !important;}.countdown-list.style-two .countdown-list__item::before {    color: var(--main-600) !important;}.countdown-list.style-three {    gap: 12px;}.countdown-list.style-three .countdown-list__item {    background-color: var(--main-50);    font-size: 11px !important;    padding: 6px;    color: #1A1A1A !important;}.countdown-list.style-four .countdown-list__item {    width: 64px;    height: 64px;    align-items: center;    padding: 2px;    justify-content: center;}.countdown-list.style-four .countdown-list__item::before {    color: var(--neutral-600);}/* ========================== Count Down Css End =============================== */.badge-notification {    margin-bottom: 6px;    position: absolute;    inset-block-start: -18px;    inset-inline-start: 0;    animation: notification 0.8s infinite;}.badge-notification::before {    position: absolute;    content: "";    width: 11px;    height: 6px;    background-color: inherit;    top: calc(100% - 1px);    clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 0% 100%);}.badge-style-two::before {    position: absolute;    content: "";    width: 12px;    height: 12px;    background: var(--main-two-600);    border-radius: 2px;    inset-inline-start: -4px;    transform: translateY(-50%) rotate(45deg);    top: 50%;}@keyframes notification {    0%, 100% {        opacity: 1;    }    50% {        opacity: 0.3;    }}/* ================================= Range Slider Css Start =========================== */.custom--range #slider-range {    height: 4px;    border: 0;    background: var(--gray-200);    margin: 8px;}.custom--range #slider-range .ui-slider-handle {    width: 16px !important;    height: 16px !important;    background-color: var(--main-600) !important;    border-radius: 50%;    top: 50%;    transform: translateY(-50%);    border: 0 !important;    outline: 0 !important;    transition: 0.2s linear;}.custom--range #slider-range .ui-slider-handle:hover, .custom--range #slider-range .ui-slider-handle.ui-state-active {    transform: translateY(-50%) scale(1.3);}.custom--range #slider-range .ui-slider-handle.ui-state-active {    box-shadow: 0px 0px 12px 4px #95959541 !important;}.custom--range #slider-range .ui-widget-header {    background-color: var(--main-600);    transition: 0.2s linear;}.custom--range #slider-range span:focus {    background-color: var(--main-600);}.custom--range__prices {    width: 58px;}.custom--range input {    border: 0;    color: hsl(var(--body-color));    font-weight: 500;    outline: 0;}/* ================================= Range Slider Css End =========================== *//* ================================= Typography Css Start =========================== */* {    margin: 0;    padding: 0;    box-sizing: border-box;}html {    scroll-behavior: smooth;}body {    font-family: var(--body-font);    color: hsl(var(--body-color));    word-break: break-word;    background-color: hsl(var(--white));    min-height: 100vh;    display: flex;    flex-direction: column;    position: relative;}html, body {    overflow-x: hidden;}p {    font-weight: 400;    margin: 0;    line-height: 1.6;}span {    display: inline-block;}h1,h2,h3,h4,h5,h6 {    margin: 0 0 16px 0;    font-family: var(--heading-font);    color: hsl(var(--heading-color));    line-height: 1.2;    font-weight: 700;}h1, .h1 {    font-size: var(--heading-one);}h2, .h2 {    font-size: var(--heading-two);}h3, .h3 {    font-size: var(--heading-three);}h4, .h4 {    font-size: var(--heading-four);}h5, .h5 {    font-size: var(--heading-five);}h6, .h6 {    font-size: var(--heading-six);}h1 > a,h2 > a,h3 > a,h4 > a,h5 > a,h6 > a {    font-weight: inherit;    font-size: inherit;    color: inherit;    transition: 0.2s linear;    line-height: inherit;}h1 > a:hover,h2 > a:hover,h3 > a:hover,h4 > a:hover,h5 > a:hover,h6 > a:hover {    color: hsl(var(--main));}a {    display: inline-block;    transition: 0.2s linear;    text-decoration: none;    color: #0661e9;}a:hover {    color: #1d72f2;}img {    max-width: 100%;    height: auto;}select {    cursor: pointer;}ul,ol {    padding: 0;    margin: 0;    list-style: none;}button {    border: 0;    background-color: transparent;}button:focus {    outline: none;    box-shadow: none;}.form-select:focus {    outline: 0;    box-shadow: none;}input:focus-visible {    outline: 0;}/* ================================= Typography Css End =========================== *//* ================================= Margin Css Start =========================== */.m-2 {    margin: var(--size-2) !important;}.m-3 {    margin: var(--size-3) !important;}.m-4 {    margin: var(--size-4) !important;}.m-5 {    margin: var(--size-5) !important;}.m-6 {    margin: var(--size-6) !important;}.m-7 {    margin: var(--size-7) !important;}.m-8 {    margin: var(--size-8) !important;}.m-9 {    margin: var(--size-9) !important;}.m-10 {    margin: var(--size-10) !important;}.m-11 {    margin: var(--size-11) !important;}.m-12 {    margin: var(--size-12) !important;}.m-13 {    margin: var(--size-13) !important;}.m-14 {    margin: var(--size-14) !important;}.m-16 {    margin: var(--size-16) !important;}.m-18 {    margin: var(--size-18) !important;}.m-20 {    margin: var(--size-20) !important;}.m-22 {    margin: var(--size-22) !important;}.m-24 {    margin: var(--size-24) !important;}.m-26 {    margin: var(--size-26) !important;}.m-28 {    margin: var(--size-28) !important;}.m-30 {    margin: var(--size-30) !important;}.m-32 {    margin: var(--size-32) !important;}.m-36 {    margin: var(--size-36) !important;}.m-40 {    margin: var(--size-40) !important;}.m-44 {    margin: var(--size-44) !important;}.m-48 {    margin: var(--size-48) !important;}.m-52 {    margin: var(--size-52) !important;}.m-56 {    margin: var(--size-56) !important;}.m-60 {    margin: var(--size-60) !important;}.m-64 {    margin: var(--size-64) !important;}.m-68 {    margin: var(--size-68) !important;}.m-72 {    margin: var(--size-72) !important;}.m-76 {    margin: var(--size-76) !important;}.m-80 {    margin: var(--size-80) !important;}.m-90 {    margin: var(--size-90) !important;}.m-110 {    margin: var(--size-110) !important;}.m-120 {    margin: var(--size-120) !important;}.m-144 {    margin: var(--size-144) !important;}.m-160 {    margin: var(--size-160) !important;}.mx-2 {    margin-inline: var(--size-2) !important;}.mx-3 {    margin-inline: var(--size-3) !important;}.mx-4 {    margin-inline: var(--size-4) !important;}.mx-5 {    margin-inline: var(--size-5) !important;}.mx-6 {    margin-inline: var(--size-6) !important;}.mx-7 {    margin-inline: var(--size-7) !important;}.mx-8 {    margin-inline: var(--size-8) !important;}.mx-9 {    margin-inline: var(--size-9) !important;}.mx-10 {    margin-inline: var(--size-10) !important;}.mx-11 {    margin-inline: var(--size-11) !important;}.mx-12 {    margin-inline: var(--size-12) !important;}.mx-13 {    margin-inline: var(--size-13) !important;}.mx-14 {    margin-inline: var(--size-14) !important;}.mx-16 {    margin-inline: var(--size-16) !important;}.mx-18 {    margin-inline: var(--size-18) !important;}.mx-20 {    margin-inline: var(--size-20) !important;}.mx-22 {    margin-inline: var(--size-22) !important;}.mx-24 {    margin-inline: var(--size-24) !important;}.mx-26 {    margin-inline: var(--size-26) !important;}.mx-28 {    margin-inline: var(--size-28) !important;}.mx-30 {    margin-inline: var(--size-30) !important;}.mx-32 {    margin-inline: var(--size-32) !important;}.mx-36 {    margin-inline: var(--size-36) !important;}.mx-40 {    margin-inline: var(--size-40) !important;}.mx-44 {    margin-inline: var(--size-44) !important;}.mx-48 {    margin-inline: var(--size-48) !important;}.mx-52 {    margin-inline: var(--size-52) !important;}.mx-56 {    margin-inline: var(--size-56) !important;}.mx-60 {    margin-inline: var(--size-60) !important;}.mx-64 {    margin-inline: var(--size-64) !important;}.mx-68 {    margin-inline: var(--size-68) !important;}.mx-72 {    margin-inline: var(--size-72) !important;}.mx-76 {    margin-inline: var(--size-76) !important;}.mx-80 {    margin-inline: var(--size-80) !important;}.mx-90 {    margin-inline: var(--size-90) !important;}.mx-110 {    margin-inline: var(--size-110) !important;}.mx-120 {    margin-inline: var(--size-120) !important;}.mx-144 {    margin-inline: var(--size-144) !important;}.mx-160 {    margin-inline: var(--size-160) !important;}.my-2 {    margin-block: var(--size-2) !important;}.my-3 {    margin-block: var(--size-3) !important;}.my-4 {    margin-block: var(--size-4) !important;}.my-5 {    margin-block: var(--size-5) !important;}.my-6 {    margin-block: var(--size-6) !important;}.my-7 {    margin-block: var(--size-7) !important;}.my-8 {    margin-block: var(--size-8) !important;}.my-9 {    margin-block: var(--size-9) !important;}.my-10 {    margin-block: var(--size-10) !important;}.my-11 {    margin-block: var(--size-11) !important;}.my-12 {    margin-block: var(--size-12) !important;}.my-13 {    margin-block: var(--size-13) !important;}.my-14 {    margin-block: var(--size-14) !important;}.my-16 {    margin-block: var(--size-16) !important;}.my-18 {    margin-block: var(--size-18) !important;}.my-20 {    margin-block: var(--size-20) !important;}.my-22 {    margin-block: var(--size-22) !important;}.my-24 {    margin-block: var(--size-24) !important;}.my-26 {    margin-block: var(--size-26) !important;}.my-28 {    margin-block: var(--size-28) !important;}.my-30 {    margin-block: var(--size-30) !important;}.my-32 {    margin-block: var(--size-32) !important;}.my-36 {    margin-block: var(--size-36) !important;}.my-40 {    margin-block: var(--size-40) !important;}.my-44 {    margin-block: var(--size-44) !important;}.my-48 {    margin-block: var(--size-48) !important;}.my-52 {    margin-block: var(--size-52) !important;}.my-56 {    margin-block: var(--size-56) !important;}.my-60 {    margin-block: var(--size-60) !important;}.my-64 {    margin-block: var(--size-64) !important;}.my-68 {    margin-block: var(--size-68) !important;}.my-72 {    margin-block: var(--size-72) !important;}.my-76 {    margin-block: var(--size-76) !important;}.my-80 {    margin-block: var(--size-80) !important;}.my-90 {    margin-block: var(--size-90) !important;}.my-110 {    margin-block: var(--size-110) !important;}.my-120 {    margin-block: var(--size-120) !important;}.my-144 {    margin-block: var(--size-144) !important;}.my-160 {    margin-block: var(--size-160) !important;}.ms-2 {    margin-inline-start: var(--size-2) !important;}.ms-3 {    margin-inline-start: var(--size-3) !important;}.ms-4 {    margin-inline-start: var(--size-4) !important;}.ms-5 {    margin-inline-start: var(--size-5) !important;}.ms-6 {    margin-inline-start: var(--size-6) !important;}.ms-7 {    margin-inline-start: var(--size-7) !important;}.ms-8 {    margin-inline-start: var(--size-8) !important;}.ms-9 {    margin-inline-start: var(--size-9) !important;}.ms-10 {    margin-inline-start: var(--size-10) !important;}.ms-11 {    margin-inline-start: var(--size-11) !important;}.ms-12 {    margin-inline-start: var(--size-12) !important;}.ms-13 {    margin-inline-start: var(--size-13) !important;}.ms-14 {    margin-inline-start: var(--size-14) !important;}.ms-16 {    margin-inline-start: var(--size-16) !important;}.ms-18 {    margin-inline-start: var(--size-18) !important;}.ms-20 {    margin-inline-start: var(--size-20) !important;}.ms-22 {    margin-inline-start: var(--size-22) !important;}.ms-24 {    margin-inline-start: var(--size-24) !important;}.ms-26 {    margin-inline-start: var(--size-26) !important;}.ms-28 {    margin-inline-start: var(--size-28) !important;}.ms-30 {    margin-inline-start: var(--size-30) !important;}.ms-32 {    margin-inline-start: var(--size-32) !important;}.ms-36 {    margin-inline-start: var(--size-36) !important;}.ms-40 {    margin-inline-start: var(--size-40) !important;}.ms-44 {    margin-inline-start: var(--size-44) !important;}.ms-48 {    margin-inline-start: var(--size-48) !important;}.ms-52 {    margin-inline-start: var(--size-52) !important;}.ms-56 {    margin-inline-start: var(--size-56) !important;}.ms-60 {    margin-inline-start: var(--size-60) !important;}.ms-64 {    margin-inline-start: var(--size-64) !important;}.ms-68 {    margin-inline-start: var(--size-68) !important;}.ms-72 {    margin-inline-start: var(--size-72) !important;}.ms-76 {    margin-inline-start: var(--size-76) !important;}.ms-80 {    margin-inline-start: var(--size-80) !important;}.ms-90 {    margin-inline-start: var(--size-90) !important;}.ms-110 {    margin-inline-start: var(--size-110) !important;}.ms-120 {    margin-inline-start: var(--size-120) !important;}.ms-144 {    margin-inline-start: var(--size-144) !important;}.ms-160 {    margin-inline-start: var(--size-160) !important;}.me-2 {    margin-inline-end: var(--size-2) !important;}.me-3 {    margin-inline-end: var(--size-3) !important;}.me-4 {    margin-inline-end: var(--size-4) !important;}.me-5 {    margin-inline-end: var(--size-5) !important;}.me-6 {    margin-inline-end: var(--size-6) !important;}.me-7 {    margin-inline-end: var(--size-7) !important;}.me-8 {    margin-inline-end: var(--size-8) !important;}.me-9 {    margin-inline-end: var(--size-9) !important;}.me-10 {    margin-inline-end: var(--size-10) !important;}.me-11 {    margin-inline-end: var(--size-11) !important;}.me-12 {    margin-inline-end: var(--size-12) !important;}.me-13 {    margin-inline-end: var(--size-13) !important;}.me-14 {    margin-inline-end: var(--size-14) !important;}.me-16 {    margin-inline-end: var(--size-16) !important;}.me-18 {    margin-inline-end: var(--size-18) !important;}.me-20 {    margin-inline-end: var(--size-20) !important;}.me-22 {    margin-inline-end: var(--size-22) !important;}.me-24 {    margin-inline-end: var(--size-24) !important;}.me-26 {    margin-inline-end: var(--size-26) !important;}.me-28 {    margin-inline-end: var(--size-28) !important;}.me-30 {    margin-inline-end: var(--size-30) !important;}.me-32 {    margin-inline-end: var(--size-32) !important;}.me-36 {    margin-inline-end: var(--size-36) !important;}.me-40 {    margin-inline-end: var(--size-40) !important;}.me-44 {    margin-inline-end: var(--size-44) !important;}.me-48 {    margin-inline-end: var(--size-48) !important;}.me-52 {    margin-inline-end: var(--size-52) !important;}.me-56 {    margin-inline-end: var(--size-56) !important;}.me-60 {    margin-inline-end: var(--size-60) !important;}.me-64 {    margin-inline-end: var(--size-64) !important;}.me-68 {    margin-inline-end: var(--size-68) !important;}.me-72 {    margin-inline-end: var(--size-72) !important;}.me-76 {    margin-inline-end: var(--size-76) !important;}.me-80 {    margin-inline-end: var(--size-80) !important;}.me-90 {    margin-inline-end: var(--size-90) !important;}.me-110 {    margin-inline-end: var(--size-110) !important;}.me-120 {    margin-inline-end: var(--size-120) !important;}.me-144 {    margin-inline-end: var(--size-144) !important;}.me-160 {    margin-inline-end: var(--size-160) !important;}.mt-2 {    margin-block-start: var(--size-2) !important;}.mt-3 {    margin-block-start: var(--size-3) !important;}.mt-4 {    margin-block-start: var(--size-4) !important;}.mt-5 {    margin-block-start: var(--size-5) !important;}.mt-6 {    margin-block-start: var(--size-6) !important;}.mt-7 {    margin-block-start: var(--size-7) !important;}.mt-8 {    margin-block-start: var(--size-8) !important;}.mt-9 {    margin-block-start: var(--size-9) !important;}.mt-10 {    margin-block-start: var(--size-10) !important;}.mt-11 {    margin-block-start: var(--size-11) !important;}.mt-12 {    margin-block-start: var(--size-12) !important;}.mt-13 {    margin-block-start: var(--size-13) !important;}.mt-14 {    margin-block-start: var(--size-14) !important;}.mt-16 {    margin-block-start: var(--size-16) !important;}.mt-18 {    margin-block-start: var(--size-18) !important;}.mt-20 {    margin-block-start: var(--size-20) !important;}.mt-22 {    margin-block-start: var(--size-22) !important;}.mt-24 {    margin-block-start: var(--size-24) !important;}.mt-26 {    margin-block-start: var(--size-26) !important;}.mt-28 {    margin-block-start: var(--size-28) !important;}.mt-30 {    margin-block-start: var(--size-30) !important;}.mt-32 {    margin-block-start: var(--size-32) !important;}.mt-36 {    margin-block-start: var(--size-36) !important;}.mt-40 {    margin-block-start: var(--size-40) !important;}.mt-44 {    margin-block-start: var(--size-44) !important;}.mt-48 {    margin-block-start: var(--size-48) !important;}.mt-52 {    margin-block-start: var(--size-52) !important;}.mt-56 {    margin-block-start: var(--size-56) !important;}.mt-60 {    margin-block-start: var(--size-60) !important;}.mt-64 {    margin-block-start: var(--size-64) !important;}.mt-68 {    margin-block-start: var(--size-68) !important;}.mt-72 {    margin-block-start: var(--size-72) !important;}.mt-76 {    margin-block-start: var(--size-76) !important;}.mt-80 {    margin-block-start: var(--size-80) !important;}.mt-90 {    margin-block-start: var(--size-90) !important;}.mt-110 {    margin-block-start: var(--size-110) !important;}.mt-120 {    margin-block-start: var(--size-120) !important;}.mt-144 {    margin-block-start: var(--size-144) !important;}.mt-160 {    margin-block-start: var(--size-160) !important;}.mb-2 {    margin-block-end: var(--size-2) !important;}.mb-3 {    margin-block-end: var(--size-3) !important;}.mb-4 {    margin-block-end: var(--size-4) !important;}.mb-5 {    margin-block-end: var(--size-5) !important;}.mb-6 {    margin-block-end: var(--size-6) !important;}.mb-7 {    margin-block-end: var(--size-7) !important;}.mb-8 {    margin-block-end: var(--size-8) !important;}.mb-9 {    margin-block-end: var(--size-9) !important;}.mb-10 {    margin-block-end: var(--size-10) !important;}.mb-11 {    margin-block-end: var(--size-11) !important;}.mb-12 {    margin-block-end: var(--size-12) !important;}.mb-13 {    margin-block-end: var(--size-13) !important;}.mb-14 {    margin-block-end: var(--size-14) !important;}.mb-16 {    margin-block-end: var(--size-16) !important;}.mb-18 {    margin-block-end: var(--size-18) !important;}.mb-20 {    margin-block-end: var(--size-20) !important;}.mb-22 {    margin-block-end: var(--size-22) !important;}.mb-24 {    margin-block-end: var(--size-24) !important;}.mb-26 {    margin-block-end: var(--size-26) !important;}.mb-28 {    margin-block-end: var(--size-28) !important;}.mb-30 {    margin-block-end: var(--size-30) !important;}.mb-32 {    margin-block-end: var(--size-32) !important;}.mb-36 {    margin-block-end: var(--size-36) !important;}.mb-40 {    margin-block-end: var(--size-40) !important;}.mb-44 {    margin-block-end: var(--size-44) !important;}.mb-48 {    margin-block-end: var(--size-48) !important;}.mb-52 {    margin-block-end: var(--size-52) !important;}.mb-56 {    margin-block-end: var(--size-56) !important;}.mb-60 {    margin-block-end: var(--size-60) !important;}.mb-64 {    margin-block-end: var(--size-64) !important;}.mb-68 {    margin-block-end: var(--size-68) !important;}.mb-72 {    margin-block-end: var(--size-72) !important;}.mb-76 {    margin-block-end: var(--size-76) !important;}.mb-80 {    margin-block-end: var(--size-80) !important;}.mb-90 {    margin-block-end: var(--size-90) !important;}.mb-110 {    margin-block-end: var(--size-110) !important;}.mb-120 {    margin-block-end: var(--size-120) !important;}.mb-144 {    margin-block-end: var(--size-144) !important;}.mb-160 {    margin-block-end: var(--size-160) !important;}.mt-0 {    margin-block-start: 0 !important;}.mb-0 {    margin-block-end: 0 !important;}.ms-0 {    margin-inline-start: 0 !important;}.me-0 {    margin-inline-end: 0 !important;}.my-120 {    margin-block-start: 60px !important;    margin-block-end: 60px !important;}@media (min-width: 576px) {    .my-120 {        margin-block-start: 80px !important;        margin-block-end: 80px !important;    }}@media (min-width: 992px) {    .my-120 {        margin-block-start: 120px !important;        margin-block-end: 120px !important;    }}.mt-120 {    margin-block-start: 60px !important;}@media (min-width: 576px) {    .mt-120 {        margin-block-start: 80px !important;    }}@media (min-width: 992px) {    .mt-120 {        margin-block-start: 120px !important;    }}.mb-120 {    margin-block-end: 60px !important;}@media (min-width: 576px) {    .mb-120 {        margin-block-end: 80px !important;    }}@media (min-width: 992px) {    .mb-120 {        margin-block-end: 120px !important;    }}.my-60 {    margin-block-start: 30px !important;    margin-block-end: 30px !important;}@media (min-width: 576px) {    .my-60 {        margin-block-start: 40px !important;        margin-block-end: 40px !important;    }}@media (min-width: 992px) {    .my-60 {        margin-block-start: 60px !important;        margin-block-end: 60px !important;    }}.mt-60 {    margin-block-start: 30px !important;}@media (min-width: 576px) {    .mt-60 {        margin-block-start: 40px !important;    }}@media (min-width: 992px) {    .mt-60 {        margin-block-start: 60px !important;    }}.mb-60 {    margin-block-end: 30px !important;}@media (min-width: 576px) {    .mb-60 {        margin-block-end: 40px !important;    }}@media (min-width: 992px) {    .mb-60 {        margin-block-end: 60px !important;    }}/* ================================= Margin Css End =========================== *//* ================================= Padding Css Start =========================== */.p-2 {    padding: var(--size-2) !important;}.p-3 {    padding: var(--size-3) !important;}.p-4 {    padding: var(--size-4) !important;}.p-5 {    padding: var(--size-5) !important;}.p-6 {    padding: var(--size-6) !important;}.p-7 {    padding: var(--size-7) !important;}.p-8 {    padding: var(--size-8) !important;}.p-9 {    padding: var(--size-9) !important;}.p-10 {    padding: var(--size-10) !important;}.p-11 {    padding: var(--size-11) !important;}.p-12 {    padding: var(--size-12) !important;}.p-13 {    padding: var(--size-13) !important;}.p-14 {    padding: var(--size-14) !important;}.p-16 {    padding: var(--size-16) !important;}.p-18 {    padding: var(--size-18) !important;}.p-20 {    padding: var(--size-20) !important;}.p-22 {    padding: var(--size-22) !important;}.p-24 {    padding: var(--size-24) !important;}.p-26 {    padding: var(--size-26) !important;}.p-28 {    padding: var(--size-28) !important;}.p-30 {    padding: var(--size-30) !important;}.p-32 {    padding: var(--size-32) !important;}.p-36 {    padding: var(--size-36) !important;}.p-40 {    padding: var(--size-40) !important;}.p-44 {    padding: var(--size-44) !important;}.p-48 {    padding: var(--size-48) !important;}.p-52 {    padding: var(--size-52) !important;}.p-56 {    padding: var(--size-56) !important;}.p-60 {    padding: var(--size-60) !important;}.p-64 {    padding: var(--size-64) !important;}.p-68 {    padding: var(--size-68) !important;}.p-72 {    padding: var(--size-72) !important;}.p-76 {    padding: var(--size-76) !important;}.p-80 {    padding: var(--size-80) !important;}.p-90 {    padding: var(--size-90) !important;}.p-110 {    padding: var(--size-110) !important;}.p-120 {    padding: var(--size-120) !important;}.p-144 {    padding: var(--size-144) !important;}.p-160 {    padding: var(--size-160) !important;}.px-2 {    padding-inline: var(--size-2) !important;}.px-3 {    padding-inline: var(--size-3) !important;}.px-4 {    padding-inline: var(--size-4) !important;}.px-5 {    padding-inline: var(--size-5) !important;}.px-6 {    padding-inline: var(--size-6) !important;}.px-7 {    padding-inline: var(--size-7) !important;}.px-8 {    padding-inline: var(--size-8) !important;}.px-9 {    padding-inline: var(--size-9) !important;}.px-10 {    padding-inline: var(--size-10) !important;}.px-11 {    padding-inline: var(--size-11) !important;}.px-12 {    padding-inline: var(--size-12) !important;}.px-13 {    padding-inline: var(--size-13) !important;}.px-14 {    padding-inline: var(--size-14) !important;}.px-16 {    padding-inline: var(--size-16) !important;}.px-18 {    padding-inline: var(--size-18) !important;}.px-20 {    padding-inline: var(--size-20) !important;}.px-22 {    padding-inline: var(--size-22) !important;}.px-24 {    padding-inline: var(--size-24) !important;}.px-26 {    padding-inline: var(--size-26) !important;}.px-28 {    padding-inline: var(--size-28) !important;}.px-30 {    padding-inline: var(--size-30) !important;}.px-32 {    padding-inline: var(--size-32) !important;}.px-36 {    padding-inline: var(--size-36) !important;}.px-40 {    padding-inline: var(--size-40) !important;}.px-44 {    padding-inline: var(--size-44) !important;}.px-48 {    padding-inline: var(--size-48) !important;}.px-52 {    padding-inline: var(--size-52) !important;}.px-56 {    padding-inline: var(--size-56) !important;}.px-60 {    padding-inline: var(--size-60) !important;}.px-64 {    padding-inline: var(--size-64) !important;}.px-68 {    padding-inline: var(--size-68) !important;}.px-72 {    padding-inline: var(--size-72) !important;}.px-76 {    padding-inline: var(--size-76) !important;}.px-80 {    padding-inline: var(--size-80) !important;}.px-90 {    padding-inline: var(--size-90) !important;}.px-110 {    padding-inline: var(--size-110) !important;}.px-120 {    padding-inline: var(--size-120) !important;}.px-144 {    padding-inline: var(--size-144) !important;}.px-160 {    padding-inline: var(--size-160) !important;}.py-2 {    padding-block: var(--size-2) !important;}.py-3 {    padding-block: var(--size-3) !important;}.py-4 {    padding-block: var(--size-4) !important;}.py-5 {    padding-block: var(--size-5) !important;}.py-6 {    padding-block: var(--size-6) !important;}.py-7 {    padding-block: var(--size-7) !important;}.py-8 {    padding-block: var(--size-8) !important;}.py-9 {    padding-block: var(--size-9) !important;}.py-10 {    padding-block: var(--size-10) !important;}.py-11 {    padding-block: var(--size-11) !important;}.py-12 {    padding-block: var(--size-12) !important;}.py-13 {    padding-block: var(--size-13) !important;}.py-14 {    padding-block: var(--size-14) !important;}.py-16 {    padding-block: var(--size-16) !important;}.py-18 {    padding-block: var(--size-18) !important;}.py-20 {    padding-block: var(--size-20) !important;}.py-22 {    padding-block: var(--size-22) !important;}.py-24 {    padding-block: var(--size-24) !important;}.py-26 {    padding-block: var(--size-26) !important;}.py-28 {    padding-block: var(--size-28) !important;}.py-30 {    padding-block: var(--size-30) !important;}.py-32 {    padding-block: var(--size-32) !important;}.py-36 {    padding-block: var(--size-36) !important;}.py-40 {    padding-block: var(--size-40) !important;}.py-44 {    padding-block: var(--size-44) !important;}.py-48 {    padding-block: var(--size-48) !important;}.py-52 {    padding-block: var(--size-52) !important;}.py-56 {    padding-block: var(--size-56) !important;}.py-60 {    padding-block: var(--size-60) !important;}.py-64 {    padding-block: var(--size-64) !important;}.py-68 {    padding-block: var(--size-68) !important;}.py-72 {    padding-block: var(--size-72) !important;}.py-76 {    padding-block: var(--size-76) !important;}.py-80 {    padding-block: var(--size-80) !important;}.py-90 {    padding-block: var(--size-90) !important;}.py-110 {    padding-block: var(--size-110) !important;}.py-120 {    padding-block: var(--size-120) !important;}.py-144 {    padding-block: var(--size-144) !important;}.py-160 {    padding-block: var(--size-160) !important;}.ps-2 {    padding-inline-start: var(--size-2) !important;}.ps-3 {    padding-inline-start: var(--size-3) !important;}.ps-4 {    padding-inline-start: var(--size-4) !important;}.ps-5 {    padding-inline-start: var(--size-5) !important;}.ps-6 {    padding-inline-start: var(--size-6) !important;}.ps-7 {    padding-inline-start: var(--size-7) !important;}.ps-8 {    padding-inline-start: var(--size-8) !important;}.ps-9 {    padding-inline-start: var(--size-9) !important;}.ps-10 {    padding-inline-start: var(--size-10) !important;}.ps-11 {    padding-inline-start: var(--size-11) !important;}.ps-12 {    padding-inline-start: var(--size-12) !important;}.ps-13 {    padding-inline-start: var(--size-13) !important;}.ps-14 {    padding-inline-start: var(--size-14) !important;}.ps-16 {    padding-inline-start: var(--size-16) !important;}.ps-18 {    padding-inline-start: var(--size-18) !important;}.ps-20 {    padding-inline-start: var(--size-20) !important;}.ps-22 {    padding-inline-start: var(--size-22) !important;}.ps-24 {    padding-inline-start: var(--size-24) !important;}.ps-26 {    padding-inline-start: var(--size-26) !important;}.ps-28 {    padding-inline-start: var(--size-28) !important;}.ps-30 {    padding-inline-start: var(--size-30) !important;}.ps-32 {    padding-inline-start: var(--size-32) !important;}.ps-36 {    padding-inline-start: var(--size-36) !important;}.ps-40 {    padding-inline-start: var(--size-40) !important;}.ps-44 {    padding-inline-start: var(--size-44) !important;}.ps-48 {    padding-inline-start: var(--size-48) !important;}.ps-52 {    padding-inline-start: var(--size-52) !important;}.ps-56 {    padding-inline-start: var(--size-56) !important;}.ps-60 {    padding-inline-start: var(--size-60) !important;}.ps-64 {    padding-inline-start: var(--size-64) !important;}.ps-68 {    padding-inline-start: var(--size-68) !important;}.ps-72 {    padding-inline-start: var(--size-72) !important;}.ps-76 {    padding-inline-start: var(--size-76) !important;}.ps-80 {    padding-inline-start: var(--size-80) !important;}.ps-90 {    padding-inline-start: var(--size-90) !important;}.ps-110 {    padding-inline-start: var(--size-110) !important;}.ps-120 {    padding-inline-start: var(--size-120) !important;}.ps-144 {    padding-inline-start: var(--size-144) !important;}.ps-160 {    padding-inline-start: var(--size-160) !important;}.pe-2 {    padding-inline-end: var(--size-2) !important;}.pe-3 {    padding-inline-end: var(--size-3) !important;}.pe-4 {    padding-inline-end: var(--size-4) !important;}.pe-5 {    padding-inline-end: var(--size-5) !important;}.pe-6 {    padding-inline-end: var(--size-6) !important;}.pe-7 {    padding-inline-end: var(--size-7) !important;}.pe-8 {    padding-inline-end: var(--size-8) !important;}.pe-9 {    padding-inline-end: var(--size-9) !important;}.pe-10 {    padding-inline-end: var(--size-10) !important;}.pe-11 {    padding-inline-end: var(--size-11) !important;}.pe-12 {    padding-inline-end: var(--size-12) !important;}.pe-13 {    padding-inline-end: var(--size-13) !important;}.pe-14 {    padding-inline-end: var(--size-14) !important;}.pe-16 {    padding-inline-end: var(--size-16) !important;}.pe-18 {    padding-inline-end: var(--size-18) !important;}.pe-20 {    padding-inline-end: var(--size-20) !important;}.pe-22 {    padding-inline-end: var(--size-22) !important;}.pe-24 {    padding-inline-end: var(--size-24) !important;}.pe-26 {    padding-inline-end: var(--size-26) !important;}.pe-28 {    padding-inline-end: var(--size-28) !important;}.pe-30 {    padding-inline-end: var(--size-30) !important;}.pe-32 {    padding-inline-end: var(--size-32) !important;}.pe-36 {    padding-inline-end: var(--size-36) !important;}.pe-40 {    padding-inline-end: var(--size-40) !important;}.pe-44 {    padding-inline-end: var(--size-44) !important;}.pe-48 {    padding-inline-end: var(--size-48) !important;}.pe-52 {    padding-inline-end: var(--size-52) !important;}.pe-56 {    padding-inline-end: var(--size-56) !important;}.pe-60 {    padding-inline-end: var(--size-60) !important;}.pe-64 {    padding-inline-end: var(--size-64) !important;}.pe-68 {    padding-inline-end: var(--size-68) !important;}.pe-72 {    padding-inline-end: var(--size-72) !important;}.pe-76 {    padding-inline-end: var(--size-76) !important;}.pe-80 {    padding-inline-end: var(--size-80) !important;}.pe-90 {    padding-inline-end: var(--size-90) !important;}.pe-110 {    padding-inline-end: var(--size-110) !important;}.pe-120 {    padding-inline-end: var(--size-120) !important;}.pe-144 {    padding-inline-end: var(--size-144) !important;}.pe-160 {    padding-inline-end: var(--size-160) !important;}.pt-2 {    padding-block-start: var(--size-2) !important;}.pt-3 {    padding-block-start: var(--size-3) !important;}.pt-4 {    padding-block-start: var(--size-4) !important;}.pt-5 {    padding-block-start: var(--size-5) !important;}.pt-6 {    padding-block-start: var(--size-6) !important;}.pt-7 {    padding-block-start: var(--size-7) !important;}.pt-8 {    padding-block-start: var(--size-8) !important;}.pt-9 {    padding-block-start: var(--size-9) !important;}.pt-10 {    padding-block-start: var(--size-10) !important;}.pt-11 {    padding-block-start: var(--size-11) !important;}.pt-12 {    padding-block-start: var(--size-12) !important;}.pt-13 {    padding-block-start: var(--size-13) !important;}.pt-14 {    padding-block-start: var(--size-14) !important;}.pt-16 {    padding-block-start: var(--size-16) !important;}.pt-18 {    padding-block-start: var(--size-18) !important;}.pt-20 {    padding-block-start: var(--size-20) !important;}.pt-22 {    padding-block-start: var(--size-22) !important;}.pt-24 {    padding-block-start: var(--size-24) !important;}.pt-26 {    padding-block-start: var(--size-26) !important;}.pt-28 {    padding-block-start: var(--size-28) !important;}.pt-30 {    padding-block-start: var(--size-30) !important;}.pt-32 {    padding-block-start: var(--size-32) !important;}.pt-36 {    padding-block-start: var(--size-36) !important;}.pt-40 {    padding-block-start: var(--size-40) !important;}.pt-44 {    padding-block-start: var(--size-44) !important;}.pt-48 {    padding-block-start: var(--size-48) !important;}.pt-52 {    padding-block-start: var(--size-52) !important;}.pt-56 {    padding-block-start: var(--size-56) !important;}.pt-60 {    padding-block-start: var(--size-60) !important;}.pt-64 {    padding-block-start: var(--size-64) !important;}.pt-68 {    padding-block-start: var(--size-68) !important;}.pt-72 {    padding-block-start: var(--size-72) !important;}.pt-76 {    padding-block-start: var(--size-76) !important;}.pt-80 {    padding-block-start: var(--size-80) !important;}.pt-90 {    padding-block-start: var(--size-90) !important;}.pt-110 {    padding-block-start: var(--size-110) !important;}.pt-120 {    padding-block-start: var(--size-120) !important;}.pt-144 {    padding-block-start: var(--size-144) !important;}.pt-160 {    padding-block-start: var(--size-160) !important;}.pb-2 {    padding-block-end: var(--size-2) !important;}.pb-3 {    padding-block-end: var(--size-3) !important;}.pb-4 {    padding-block-end: var(--size-4) !important;}.pb-5 {    padding-block-end: var(--size-5) !important;}.pb-6 {    padding-block-end: var(--size-6) !important;}.pb-7 {    padding-block-end: var(--size-7) !important;}.pb-8 {    padding-block-end: var(--size-8) !important;}.pb-9 {    padding-block-end: var(--size-9) !important;}.pb-10 {    padding-block-end: var(--size-10) !important;}.pb-11 {    padding-block-end: var(--size-11) !important;}.pb-12 {    padding-block-end: var(--size-12) !important;}.pb-13 {    padding-block-end: var(--size-13) !important;}.pb-14 {    padding-block-end: var(--size-14) !important;}.pb-16 {    padding-block-end: var(--size-16) !important;}.pb-18 {    padding-block-end: var(--size-18) !important;}.pb-20 {    padding-block-end: var(--size-20) !important;}.pb-22 {    padding-block-end: var(--size-22) !important;}.pb-24 {    padding-block-end: var(--size-24) !important;}.pb-26 {    padding-block-end: var(--size-26) !important;}.pb-28 {    padding-block-end: var(--size-28) !important;}.pb-30 {    padding-block-end: var(--size-30) !important;}.pb-32 {    padding-block-end: var(--size-32) !important;}.pb-36 {    padding-block-end: var(--size-36) !important;}.pb-40 {    padding-block-end: var(--size-40) !important;}.pb-44 {    padding-block-end: var(--size-44) !important;}.pb-48 {    padding-block-end: var(--size-48) !important;}.pb-52 {    padding-block-end: var(--size-52) !important;}.pb-56 {    padding-block-end: var(--size-56) !important;}.pb-60 {    padding-block-end: var(--size-60) !important;}.pb-64 {    padding-block-end: var(--size-64) !important;}.pb-68 {    padding-block-end: var(--size-68) !important;}.pb-72 {    padding-block-end: var(--size-72) !important;}.pb-76 {    padding-block-end: var(--size-76) !important;}.pb-80 {    padding-block-end: var(--size-80) !important;}.pb-90 {    padding-block-end: var(--size-90) !important;}.pb-110 {    padding-block-end: var(--size-110) !important;}.pb-120 {    padding-block-end: var(--size-120) !important;}.pb-144 {    padding-block-end: var(--size-144) !important;}.pb-160 {    padding-block-end: var(--size-160) !important;}.p--24 {    padding: 24px;}.p-56-px {    padding: clamp(0.5rem, -9.243rem + 12vw, 3.5rem);}.pt-0 {    padding-block-start: 0 !important;}.pb-0 {    padding-block-end: 0 !important;}.ps-0 {    padding-inline-start: 0 !important;}.pe-0 {    padding-inline-end: 0 !important;}.py-80 {    padding-block-start: 60px !important;    padding-block-end: 60px !important;}@media (min-width: 992px) {    .py-80 {        padding-block-start: 80px !important;        padding-block-end: 80px !important;    }}.pt-80 {    padding-block-start: 60px !important;}@media (min-width: 992px) {    .pt-80 {        padding-block-start: 80px !important;    }}.pb-80 {    padding-block-end: 60px !important;}@media (min-width: 992px) {    .pb-80 {        padding-block-end: 80px !important;    }}.py-60 {    padding-block-start: 30px !important;    padding-block-end: 30px !important;}@media (min-width: 576px) {    .py-60 {        padding-block-start: 40px !important;        padding-block-end: 40px !important;    }}@media (min-width: 992px) {    .py-60 {        padding-block-start: 60px !important;        padding-block-end: 60px !important;    }}.pt-60 {    padding-block-start: 30px !important;}@media (min-width: 576px) {    .pt-60 {        padding-block-start: 40px !important;    }}@media (min-width: 992px) {    .pt-60 {        padding-block-start: 60px !important;    }}.pb-60 {    padding-block-end: 30px !important;}@media (min-width: 576px) {    .pb-60 {        padding-block-end: 40px !important;    }}@media (min-width: 992px) {    .pb-60 {        padding-block-end: 60px !important;    }}/* ================================= Padding Css End =========================== *//* ================================= Classes Css Start =========================== *//* Section Background */.bg-color-one {    background-color: var(--bg-color-one) !important;}.bg-color-two {    background-color: var(--bg-color-two) !important;}.bg-color-three {    background-color: var(--bg-color-three) !important;}.bg-color-neutral {    background-color: var(--neutral) !important;}.container-lg {    max-width: 1680px;}/* Column Extra Small Screen */@media screen and (min-width: 425px) and (max-width: 575px) {    .col-xs-6 {        width: 50%;    }}@media (min-width: 424px) {    .d-xs-flex {        display: flex !important;    }}.opacity-6 {    opacity: 0.06 !important;}/* Transition */.transition-1 {    transition: 0.1s linear;}.transition-2 {    transition: 0.2s linear;}.transition-3 {    transition: 0.3s linear;}.display-200 {    font-size: var(--display-200);}.display-one {    font-size: var(--display-one);}.min-width-max-content {    min-width: max-content;}.inset-inline-start-0 {    inset-inline-start: 0 !important;}.inset-inline-start-100 {    inset-inline-start: 100% !important;}.inset-inline-start-auto {    inset-inline-start: auto !important;}.inset-inline-end-0 {    inset-inline-end: 0 !important;}.inset-inline-end-auto {    inset-inline-end: auto !important;}.inset-block-start-0 {    inset-block-start: 0 !important;}.inset-block-end-0 {    inset-block-end: 0 !important;}.start-auto {    inset-inline-start: auto !important;}.end-auto {    inset-inline-end: auto !important;}.line-height-0 {    line-height: 0;}.line-height-1 {    line-height: 1;}.line-height-73 {    line-height: 0.73;}/* Text Color */.hover-text-decoration-underline:hover {    text-decoration: underline;}.hover-text-decoration-none:hover {    text-decoration: none;}.font-heading {    font-family: var(--heading-font);}.font-heading-two {    font-family: var(--heading-font-two);}.font-heading-four {    font-family: var(--heading-font-four);}.font-body {    font-family: var(--body-font);}/* Bg Image Css */.bg-img {    background-size: cover !important;    background-repeat: no-repeat !important;    background-position: center center !important;    width: 100%;    height: 100%;}.list-inside {    list-style: inside !important;}.aspect-ratio-1 {    aspect-ratio: 1;}.cursor-pointer {    cursor: pointer;}.bg-blur {    backdrop-filter: blur(90px);    background-color: hsl(var(--white)/0.3) !important;    transition: 0.2s linear;}.bg-blur:hover {    transform: scale(1.2);}.rotate-10 {    transform: rotate(-10deg);}/* ================================= Classes Css End =========================== *//* ============================ Extend Css Start ======================== *//* Cover image Css */.cover-img {    width: 100%;    height: 100%;    object-fit: cover;}/* Display Flex Css Start */.flex-align, .common-check {    display: flex;    align-items: center;}.flex-center {    display: flex;    justify-content: center;    align-items: center;}.flex-between {    display: flex;    justify-content: space-between;    align-items: center;}/* Display Flex Css End *//* ============================ Extend Css End ======================== */.w-2 {    width: 0.125rem !important;}.w-3 {    width: 0.1875rem !important;}.w-4 {    width: 0.25rem !important;}.w-5 {    width: 0.3125rem !important;}.w-6 {    width: 0.375rem !important;}.w-7 {    width: 0.4375rem !important;}.w-8 {    width: 0.5rem !important;}.w-9 {    width: 0.5625rem !important;}.w-10 {    width: 0.625rem !important;}.w-11 {    width: 0.6875rem !important;}.w-12 {    width: 0.75rem !important;}.w-13 {    width: 0.8125rem !important;}.w-14 {    width: 0.875rem !important;}.w-16 {    width: 1rem !important;}.w-18 {    width: 1.125rem !important;}.w-20 {    width: 1.25rem !important;}.w-22 {    width: 1.375rem !important;}.w-24 {    width: 1.5rem !important;}.w-26 {    width: 1.625rem !important;}.w-28 {    width: 1.75rem !important;}.w-30 {    width: 1.875rem !important;}.w-32 {    width: 2rem !important;}.w-36 {    width: 2rem !important;}.w-40 {    width: 2.5rem !important;}.w-44 {    width: 2.75rem !important;}.w-48 {    width: 3rem !important;}.w-52 {    width: 3.25rem !important;}.w-56 {    width: 3.5rem !important;}.w-60 {    width: 3.75rem !important;}.w-64 {    width: 4rem !important;}.w-68 {    width: 4.25rem !important;}.w-72 {    width: 4.5rem !important;}.w-76 {    width: 4.75rem !important;}.w-80 {    width: 5rem !important;}.w-90 {    width: 5.625rem !important;}.w-110 {    width: 6.875rem !important;}.w-120 {    width: 7.5rem !important;}.w-144 {    width: 9rem !important;}.w-160 {    width: 10rem !important;}.w-300 {    width: 300px !important;}.w-265 {    width: 265px !important;}.w-unset {    width: unset !important;}.h-2 {    height: 0.125rem !important;}.h-3 {    height: 0.1875rem !important;}.h-4 {    height: 0.25rem !important;}.h-5 {    height: 0.3125rem !important;}.h-6 {    height: 0.375rem !important;}.h-7 {    height: 0.4375rem !important;}.h-8 {    height: 0.5rem !important;}.h-9 {    height: 0.5625rem !important;}.h-10 {    height: 0.625rem !important;}.h-11 {    height: 0.6875rem !important;}.h-12 {    height: 0.75rem !important;}.h-13 {    height: 0.8125rem !important;}.h-14 {    height: 0.875rem !important;}.h-16 {
          const [categoriesRes, countsRes] = await Promise.all([
              fetch(`${API_CUSTOMER_URL}/api/product-categories`),    height: 1rem !important;
              fetch(`${API_CUSTOMER_URL}/api/product-counts`)}
          ]);
  .h-18 {
          if (!categoriesRes.ok || !countsRes.ok) {    height: 1.125rem !important;
              throw new Error('Failed to fetch categories or product counts');}
          }
  
          const { categories } = await categoriesRes.json();
          const { categoryCounts } = await countsRes.json();
  
          const swiperWrapper = document.querySelector('.category-slider-container .swiper-wrapper');
          if (!swiperWrapper) {
              console.error('Swiper wrapper not found!');
              return;
          }
          swiperWrapper.innerHTML = '';
  
          categories.forEach((category) => {
              const productCount = (categoryCounts.find(item => item.category === category.name)?.product_count) || 0;
              const imagePath = category.image_path ? category.image_path.replace(/\\/g, '/') : 'uploads/default.png';
  
              const swiperSlideHTML = `
                  <div class="swiper-slide">
                      <div class="category-slide-item">
                          <div class="category-slide-thumb">
                              <a href="shop.html?category=${encodeURIComponent(category.name)}" class="w-100 h-100 flex-center">
                                  <img src="${API_ADMINGRAB_URL}/${imagePath}" alt="${category.name}" loading="lazy">
                              </a>
                          </div>
                          <div class="category-slide-content">
                              <h6 class="mb-0">
                                  <a href="shop.html?category=${encodeURIComponent(category.name)}" class="text-inherit">
                                      ${category.name} <span class="text-muted small">(${productCount})</span>
                                  </a>
                              </h6>
                          </div>
                      </div>
                  </div>
              `;
              swiperWrapper.insertAdjacentHTML('beforeend', swiperSlideHTML);
          });
  
          const swiper = new Swiper('.category-slider-container', {
              slidesPerView: 'auto',
              centeredSlides: false,
              spaceBetween: 10,
              loop: true,
              navigation: {
                  nextEl: '.category-slider-next',
                  prevEl: '.category-slider-prev',
              },
              breakpoints: {
                  1400: { slidesPerView: 8, spaceBetween: 12 },
                  1200: { slidesPerView: 7, spaceBetween: 10 },
                  992: { slidesPerView: 6, spaceBetween: 10 },
                  768: { slidesPerView: 5, spaceBetween: 8 },
                  576: { slidesPerView: 4, spaceBetween: 8 },
                  320: { slidesPerView: 3, spaceBetween: 6 }
              },
              speed: 400,
              observer: true,
              observeParents: true,
              resistanceRatio: 0.5
          });
  
          swiper.update();
      } catch (error) {
          console.error('Error loading categories:', error);
          const errorElement = document.createElement('div');
          errorElement.className = 'alert alert-danger text-center';
          errorElement.textContent = 'Failed to load categories. Please try again later.';
          document.getElementById('categorySliderSection').appendChild(errorElement);
      }
  }
  