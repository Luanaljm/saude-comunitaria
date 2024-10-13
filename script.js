document.getElementById("form-sintomas").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const sintomas = document.getElementById("sintomas").value;
    const intensidade = document.getElementById("intensidade").value;

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<p><strong>${nome}</strong>, seus sintomas foram registrados.</p>
    <p><strong>Sintomas:</strong> ${sintomas}</p>
    <p><strong>Intensidade:</strong> ${intensidade}</p>`;
});