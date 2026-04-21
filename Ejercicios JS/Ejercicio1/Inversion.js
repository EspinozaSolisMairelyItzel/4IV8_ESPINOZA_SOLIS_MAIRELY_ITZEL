function validarInv(f) {
    let regex = /^[0-9]+(\.[0-9]{1,2})?$/;
    let capital = f.capital.value.trim();

    if (capital === "" || !regex.test(capital) || parseFloat(capital) <= 0 || parseFloat(capital) > 1000000) {
        alert("Error: Ingrese un monto numérico positivo (Máx: 1,000,000).");
        return false;
    }
    let ganancia = parseFloat(capital) * 0.02;
    document.getElementById("res1").innerText = "Ganancia estimada: $" + ganancia.toFixed(2);
    return false;
}