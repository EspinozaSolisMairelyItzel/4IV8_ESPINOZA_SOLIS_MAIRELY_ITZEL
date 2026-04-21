function validarGen(f) {
    let regex = /^[0-9]+$/;
    if (!regex.test(f.h.value) || !regex.test(f.m.value)) {
        alert("Error: Use números enteros.");
        return false;
    }
    let h = parseInt(f.h.value);
    let m = parseInt(f.m.value);
    let total = h + m;

    if (total === 0) {
        alert("Error: Debe haber al menos un estudiante.");
        return false;
    }
    document.getElementById("res5").innerHTML = `Hombres: ${((h*100)/total).toFixed(1)}%<br>Mujeres: ${((m*100)/total).toFixed(1)}%`;
    return false;
}