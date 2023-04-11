let menuOpen =document.querySelector('.menu-toggle');
let menuWrapper =document.querySelector('.menu-wrapper');

menuOpen.addEventListener('click', function(){
    // console.log(1);
    menuOpen.classList.toggle('bx-x');
    menuOpen.classList.toggle('bxs-grid-alt');
    menuWrapper.classList.toggle('active');
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