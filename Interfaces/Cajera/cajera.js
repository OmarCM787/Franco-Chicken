const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const pedidos = document.getElementById('seccionPedidos');

menu.addEventListener('click', () => {
    sidebar.classList.toggle('menu-toggle');
    menu.classList.toggle('menu-toggle');
    pedidos.classList.toggle('menu-toggle');
});
/*
document.getElementById("BtnPedidos").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("seccionPedidos").style.display = "block";
    document.getElementById("seccionCarta").style.display = "none";
    document.getElementById("seccionUsuarios").style.display= "none";
    document.getElementById("seccionConfiguracion").style.display = "none";
});*/