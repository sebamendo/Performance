
// FUNCTION LIGTHBOX
const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');
const hamburger1 = document.querySelector(".hamburger");

imagenes.forEach(imagen => {
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
})

contenedorLight.addEventListener('click', (e) =>{
    if (e.target !== imagenesLight){
        contenedorLight.classList.toggle('show');
        imagenesLight.classList.toggle('showImagen');
        hamburger1.style.opacity = '1';
    }
}) 

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImagen');
    hamburger1.style.opacity = '0';
} 

// FUNCTION MENU
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-navegacion");

hamburger.addEventListener("click", () =>{
    menu.classList.toggle("spread");
})

window.addEventListener("click", e=>{
    if(menu.classList.contains("spread") && e.target != menu && e.target != hamburger){
        menu.classList.toggle("spread");
    }
})