function validarEdad(f) {
    let input = f.fechaNac.value;
    if (!input) {
        alert("Seleccione una fecha.");
        return false;
    }
    let nacimiento = new Date(input);
    let hoy = new Date();
    
    if (nacimiento > hoy) {
        alert("Error: La fecha no puede ser futura.");
        return false;
    }

    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let m = hoy.getMonth() - nacimiento.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    if (edad < 0 || edad > 120) {
        alert("Error: Edad fuera de rango (0-120 años).");
        return false;
    }

    document.getElementById("res6").innerText = "Edad: " + edad + " años.";
    return false;
}