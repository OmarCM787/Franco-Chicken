const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks")
const links = navLinks.querySelectorAll("a")
const portada = document.querySelector(".portada-item.active")

const imagenes = [
    'url("../Imagenes/Buenazo.jpg")',
    'url("../Imagenes/Brasas (1).jpg")',
    'url("../Imagenes/ParrillaParados.jpg")',
    'url("../Imagenes/ParrillaFamiliar.jpg")',
]

let i = 0;

function imagenPortada() {
    portada.style.backgroundImage = imagenes[i];
    i = (i + 1) % imagenes.length
}

setInterval(imagenPortada,3000);
imagenPortada();

menuBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("active");
    if(navLinks.classList.contains("active")){
        menuBtn.innerHTML = "X";
        menuBtn.setAttribute("aria-expanded", "true")
    }else{
        menuBtn.innerHTML = "≣";
        menuBtn.setAttribute("aria-expanded",
        "false")
    }
});

links.forEach(link => {
    link.addEventListener("click", ()=> {
    navLinks.classList.remove("active");
    menuBtn.innerHTML = "≣";
    menuBtn.setAttribute("aria-expanded",
    "false");
    })
})