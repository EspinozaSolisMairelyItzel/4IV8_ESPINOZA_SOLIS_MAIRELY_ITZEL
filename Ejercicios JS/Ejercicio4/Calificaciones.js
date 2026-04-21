function validarNotas(f) {
    let regex = /^(10(\.0{1,2})?|[0-9](\.[0-9]{1,2})?)$/;
    let notas = [f.p1, f.p2, f.p3, f.ex, f.tf];

    for (let n of notas) {
        if (!regex.test(n.value)) {
            alert("Error: Las notas deben estar en el rango de 0.0 a 10.0.");
            n.focus();
            return false;
        }
    }
    let parciales = (parseFloat(f.p1.value) + parseFloat(f.p2.value) + parseFloat(f.p3.value)) / 3;
    let notaFinal = (parciales * 0.55) + (parseFloat(f.ex.value) * 0.30) + (parseFloat(f.tf.value) * 0.15);

    document.getElementById("res4").innerText = "Resultado Final: " + notaFinal.toFixed(2);
    return false;
}