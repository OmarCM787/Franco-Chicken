const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const carta = document.getElementById('seccionCarta')
const pedidos = document.getElementById('seccionPedidos');
const usuarios = document.getElementById('seccionUsuarios')
const config = document.getElementById('seccionConfiguracion');

menu.addEventListener('click', () => {
    sidebar.classList.toggle('menu-toggle');
    menu.classList.toggle('menu-toggle');
    carta.classList.toggle('menu-toggle')
    pedidos.classList.toggle('menu-toggle');
    usuarios.classList.toggle('menu-toggle');
    config.classList.toggle('menu-toggle');
});

document.getElementById("BtnCarta").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("seccionCarta").style.display = "block";
    document.getElementById("seccionPedidos").style.display = "none";
    document.getElementById("seccionUsuarios").style.display= "none";
    document.getElementById("seccionConfiguracion").style.display = "none";
});

document.getElementById("BtnPedidos").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("seccionPedidos").style.display = "block";
    document.getElementById("seccionCarta").style.display = "none";
    document.getElementById("seccionUsuarios").style.display= "none";
    document.getElementById("seccionConfiguracion").style.display = "none";
});

document.getElementById("BtnUsuarios").addEventListener("click", function(e){
    e.preventDefault();
    document.getElementById("seccionUsuarios").style.display= "block";
    document.getElementById("seccionPedidos").style.display = "none";
    document.getElementById("seccionCarta").style.display = "none";
    document.getElementById("seccionConfiguracion").style.display = "none";
})

document.getElementById("btnSettings").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("seccionConfiguracion").style.display = "block";
    document.getElementById("seccionPedidos").style.display = "none";
    document.getElementById("seccionCarta").style.display = "none";
    document.getElementById("seccionUsuarios").style.display= "none";
})
