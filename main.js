function validarFormulario() {
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
    var messageDiv = document.getElementById("message");

    if (!isNaN(campoA) && !isNaN(campoB) && campoB > campoA) {
        messageDiv.innerHTML = "Formulário válido: B é maior que A.";
        messageDiv.className = "success";
    } else {
        messageDiv.innerHTML = "Formulário inválido: B deve ser maior que A.";
        messageDiv.className = "error";
    }
}