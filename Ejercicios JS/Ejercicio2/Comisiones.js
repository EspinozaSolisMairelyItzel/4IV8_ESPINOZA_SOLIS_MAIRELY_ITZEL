function validarCom(f) {
    let regex = /^[0-9]+(\.[0-9]{1,2})?$/;
    let campos = [f.sueldo, f.v1, f.v2, f.v3];

    for (let c of campos) {
        if (c.value.trim() === "" || !regex.test(c.value)) {
            alert("Error: Verifique que todos los montos sean números positivos.");
            c.focus();
            return false;
        }
    }
    let totalVentas = parseFloat(f.v1.value) + parseFloat(f.v2.value) + parseFloat(f.v3.value);
    let comision = totalVentas * 0.10;
    let totalMes = parseFloat(f.sueldo.value) + comision;

    document.getElementById("res2").innerHTML = `Comisiones: $${comision.toFixed(2)}<br>Total Final: $${totalMes.toFixed(2)}`;
    return false;
}