function problema1() {
    const selectorInput = document.querySelector('#p1-input');
    const areaSalida = document.querySelector('#p1-output');
    const textoRaw = selectorInput.value.trim();

    // Expresión regular para validar letras y espacios
    const regexAlfabeto = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;

    if (textoRaw === "") {
        areaSalida.textContent = "Por favor, escribe algo.";
        return;
    }

    if (!regexAlfabeto.test(textoRaw)) {
        areaSalida.textContent = "Entrada inválida: usa solo letras.";
        return;
    }

    // Procesamiento: separar, invertir y unir
    const listaInvertida = textoRaw.split(/\s+/).reverse();
    areaSalida.textContent = listaInvertida.join(" ");
}


function calcularMinimoEscalar() {
    const vectorA = [];
    const vectorB = [];
    const output = document.getElementById('res-p2');

    // Recopilación de datos mediante bucle
    for (let i = 1; i <= 5; i++) {
        const inputA = document.getElementById(`vA-${i}`);
        const inputB = document.getElementById(`vB-${i}`);
        
        const valA = parseFloat(inputA.value);
        const valB = parseFloat(inputB.value);

        if (isNaN(valA) || isNaN(valB)) {
            alert("Completa todos los campos con números válidos.");
            return;
        }
        
        if (valA < -1000 || valA > 1000 || valB < -1000 || valB > 1000) {
            alert("Los valores deben estar entre -1000 y 1000.");
            return;
        }

        vectorA.push(valA);
        vectorB.push(valB);
    }

    // Lógica: Para el mínimo, multiplicamos el menor de A por el mayor de B
    vectorA.sort((a, b) => a - b);
    vectorB.sort((a, b) => b - a);

    const resultadoTotal = vectorA.reduce((sum, val, idx) => sum + (val * vectorB[idx]), 0);

    output.textContent = "Resultado del producto escalar mínimo: " + resultadoTotal;
}


function analizarCaracteres() {
    const inputMain = document.getElementById('input-palabras');
    const areaResultado = document.getElementById('res-p3');
    const contenido = inputMain.value.trim();

    // Validación estricta: MAYÚSCULAS y comas
    const regexFormato = /^[A-Z]+(,[A-Z]+)*$/;

    if (!contenido) {
        areaResultado.textContent = "Campo requerido.";
        return;
    }

    if (!regexFormato.test(contenido)) {
        areaResultado.textContent = "Error: Usa MAYÚSCULAS separadas por comas.";
        return;
    }

    const coleccionPalabras = contenido.split(',');
    let ganadora = "";
    let maxUnicos = 0;

    coleccionPalabras.forEach(item => {
        // El Set filtra automáticamente los repetidos
        const unicos = new Set(item.split(''));
        if (unicos.size > maxUnicos) {
            maxUnicos = unicos.size;
            ganadora = item;
        }
    });

    const letrasDeGanadora = Array.from(new Set(ganadora)).join(', ');
    areaResultado.textContent = `Palabra: ${ganadora} | Caracteres únicos: ${maxUnicos} (${letrasDeGanadora})`;
}