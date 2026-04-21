function validarDesc(f) {
    let regex = /^[0-9]+(\.[0-9]{1,2})?$/;
    let valor = f.compra.value.trim();
    if (!regex.test(valor) || parseFloat(valor) < 1) {
        alert("Error: Ingrese un monto de compra válido.");
        return false;
    }
    let total = parseFloat(valor);
    let final = total - (total * 0.15);
    document.getElementById("res3").innerText = "Total con 15% desc: $" + final.toFixed(2);
    return false;
}