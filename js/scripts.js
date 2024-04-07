const hb = document.querySelector('#hamburgerButton');
const pn = document.querySelector('#primaryNav');

hb.addEventListener('click', () => {
    hb.classList.toggle('open');
    pn.classList.toggle('open');

});

//inject current year in footer
const variableOne = new Date();
document.querySelector('#year').textContent = variableOne.getFullYear();


//new stuff here

// function toggleMenu(){
//     document.getElementById("primaryNav").classList.toggle("open");
// }

// const x = document.getElementById("hamburgerButton")

// x.onclick = toggleMenu;