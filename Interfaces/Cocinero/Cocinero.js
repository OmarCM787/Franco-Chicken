const menu = document.getElementById('menu');
const sidebar = document.getElementById('sidebar');
const pedidos = document.getElementById('seccionPedidos');
const historial = document.getElementById('seccionHistorial');

menu.addEventListener('click', () => {
    sidebar.classList.toggle('menu-toggle');
    menu.classList.toggle('menu-toggle');
    pedidos.classList.toggle('menu-toggle');
    historial.classList.toggle('menu-toggle');
});

document.getElementById("btnPedidos").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("seccionPedidos").style.display = "block";
    document.getElementById("seccionHistorial").style.display = "none";
});

document.getElementById("btnHistorial").addEventListener("click", function(e) {
    e.preventDefault();
    document.getElementById("seccionPedidos").style.display = "none";
    document.getElementById("seccionHistorial").style.display = "block";
});

