let menuOpen =document.querySelector('.menu-toggle');
let menuWrapper =document.querySelector('.menu-wrapper');

menuOpen.addEventListener('click', function(){
    // console.log(1);
    menuOpen.classList.toggle('bx-x');
    menuOpen.classList.toggle('bxs-grid-alt');
    menuWrapper.classList.toggle('active');
})