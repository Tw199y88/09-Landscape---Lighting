const hb = document.querySelector('#hamburgerButton');

hb.addEventListener('click', () => {
    document.querySelector("#primaryNav").classList.toggle("open");
});

//inject current year in footer
const variableOne = new Date();
document.querySelector('#year').textContent = variableOne.getFullYear();

const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect:'slide',
    speed:1500,
    autoplay: {
        delay: 3000,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });