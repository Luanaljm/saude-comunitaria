document.getElementById("form-primeiros-socorros").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const primeirosSocorros = document.getElementById("primeiros-socorros").value;
    const intensidade = document.getElementById("intensidade").value;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p><strong>${nome}</strong>, seus primeiros socorros foram registrados.</p>
    <p><strong>Descrição:</strong> ${primeirosSocorros}</p>
    <p><strong>Intensidade:</strong> ${intensidade}</p>`;
});

function setActiveTab(element) {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.classList.remove("active");
    });
    element.classList.add("active");
}
