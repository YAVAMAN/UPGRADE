$('.intro__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: true,
    pauseOnFocus: true,
    pauseOnHover: false,
    autoplaySpeed: 9000,
 });

 $(".intro__slider").on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $("#cp").text("0" + (nextSlide + 1) + "/");
    $(".header__inner").toggleClass( "white" );
 });


const btns = document.querySelectorAll('.btn');
let formBg1 = document.querySelector('.form__bg1');
let formBg2 = document.querySelector('.form__bg2');
let formBg3 = document.querySelector('.form__bg3');

function showForm(event) {
   formBg1.style.left = '0';
   formBg1.style.opacity = '0.6';
   formBg2.style.left = '0';
   formBg2.style.opacity = '0.8';
   formBg3.style.left = '0';
   formBg3.style.opacity = '1';
   event.preventDefault();
}

for (let i = 0; i < btns.length; i++) {
   btns[i].addEventListener('click', showForm)
};
 