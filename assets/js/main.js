let menuOpen =document.querySelector('.menu-toggle');
let menuWrapper =document.querySelector('.menu-wrapper');
let btnLeft =document.querySelector('.btn-left');
let btnRight =document.querySelector('.btn-right');

menuOpen.addEventListener('click', function(){
    // console.log(1);
    menuOpen.classList.toggle('bx-x');
    menuOpen.classList.toggle('bxs-grid-alt');
    menuWrapper.classList.toggle('active');
})

btnLeft.addEventListener('mouseover', function(){
  btnLeft.classList.toggle('bx-chevron-left-circle');
  btnLeft.classList.toggle('bxs-chevron-left-circle');
})

btnLeft.addEventListener('mouseout', function(){
  btnLeft.classList.toggle('bx-chevron-left-circle');
  btnLeft.classList.toggle('bxs-chevron-left-circle');
})

btnRight.addEventListener('mouseover', function(){
  btnRight.classList.toggle('bx-chevron-right-circle');
  btnRight.classList.toggle('bxs-chevron-right-circle');
})

btnRight.addEventListener('mouseout', function(){
  btnRight.classList.toggle('bx-chevron-right-circle');
  btnRight.classList.toggle('bxs-chevron-right-circle');
})

var swiper = new Swiper(".mySwiper", {
    // effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    spaceBetween: 30,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 0,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
        nextEl: ".btn-right",
        prevEl: ".btn-left",
      },
  });

  var swiper = new Swiper(".mySwiperTesti", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });