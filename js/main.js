// Wow.js
new WOW().init();

$(window).width(function(){

   if ($(window).width() < 769) {
       $('.wow').removeClass('wow');
       $('.animate__animated').removeClass('animate__animated');
   }
});


// Preloader
$( window ).on('load', function() {
   setTimeout(function() {
      $('#preloader').addClass('hide');
      $('#body').addClass('unlock');
   }, 0);
});


// Intro slider
setTimeout(function() {
   $('.intro__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      infinite: true,
      autoplay: true,
      arrows: false,
      dots: true,
      pauseOnFocus: true,
      pauseOnHover: false,
      autoplaySpeed: 10000,
    });
}, 0);

$(".intro__slider").on('beforeChange', function(event, slick, currentSlide, nextSlide) {
   $(".intro__counter").text("0" + (nextSlide + 1) + "/");
   $('.header__inner, .header__nav-link, .header__tel-link, .header__logo, .header__burger').toggleClass('white');
});


// Benefits slider
$(window).width(function(){
   if ($(window).width() < 649) {
       $('#benefits').addClass('benefits__slider');
   }
});

$('.benefits__slider').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   draggable: false,
   infinite: true,
   autoplay: true,
   arrows: false,
   pauseOnFocus: false,
   pauseOnHover: false,
   autoplaySpeed: 5000,
 });


// Form
let btnFormCall = $('button:contains("Оставить заявку")');

$(btnFormCall).click(function(event) {
   $('.form').addClass('active', 50);

   setTimeout (function() {
      $('.form__bg1, .form__bg2, .form__bg3, .form__form').addClass('active');
   }, 50);

   $('.header__logo').addClass('active');
});

$('.form__mask, .form__close').click(function(event) {
   $('.form__bg1, .form__bg2, .form__bg3').removeClass('active');

   setTimeout (function() {
      $('.form').removeClass('active');
   }, 450);

   $('.header__logo').removeClass('active');
});


// Menu
$('.header__burger').click(function(event) {
   $('.header__burger').toggleClass('active');
   $('.menu').toggleClass('active');
});
$('.menu__mask, .menu__nav-link').click(function(event) {
   $('.header__burger').toggleClass('active');
   $('.menu').toggleClass('active');
});


// Accordion
$('.digital__accordion-title-item').click(function() {
   if(!$(this).hasClass('active')) {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
      $('.digital__accordion-desc-item').filter('[id="' + $(this).data('trigger') + '"]').addClass('active');
      $('.digital__accordion-desc-item').filter('[id="' + $(this).data('trigger') + '"]').siblings().removeClass('active');
   }
});


// Parallax
let megaphone = document.getElementById("megaphone");
let linechart = document.getElementById("linechart");
let piechart = document.getElementById("piechart");

window.addEventListener("scroll", function() {
   megaphone.style.transform = "translateY(-"+window.pageYOffset/4+"px)";
   linechart.style.transform = "translateX(-"+window.pageYOffset/20+"px)";
   piechart.style.transform = "translateX("+window.pageYOffset/20+"px)";
});


// Smooth scroll
$(document).ready(function(){
   $('a[href^="#"]').bind ('click.smoothscroll',function (e) {
   e.preventDefault();
   
   var target = this.hash,
   $target = $(target);
   
   $('html, body').stop().animate({
   'scrollTop': $target.offset().top
   }, 600, 'swing', function () {
   window.location.hash = target;
   });
   });
});


// Works
let inActiveWorks = $('.works__item').slice(-4);

$('.works__btn').click(function() {
   $(inActiveWorks).slideToggle();
   $('.works__btn').toggleClass('active');
});


// Modal

const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('active');
    $("body").addClass('lock');

    setTimeout(function() {
        $(modalId).find(".modal").css({
            opacity: '1'
        });
    }, 200);
});


modalClose.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal-mask');

    modalParent.find(".modal").css({
      opacity: '0'
    });

    setTimeout(function() {
        modalParent.removeClass('active');
        $("body").removeClass('lock');
    }, 200);
});


$(".modal-mask").on("click", function(event) {
    let $this = $(this);

    $this.find(".modal").css({
      opacity: '0'
    });

    setTimeout(function() {
        $this.removeClass('active');
        $("body").removeClass('lock');
    }, 200);
});

$(".modal").on("click", function(event) {
    event.stopPropagation();
});