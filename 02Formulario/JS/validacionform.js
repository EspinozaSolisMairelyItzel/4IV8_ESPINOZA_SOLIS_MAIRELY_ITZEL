function validar (formulario){

    //vamos a crear una funcion para validar un numero minimo de caracteres en el nombre
    if(formulario.nombre.value.length < 3){
        alert ("por favor un nombre mayor de tres caracteres");
        formulario.nombre.focus();
        return false;
    }

    var abcOK = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz";

    var checkString = formulario.nombre.value;

    var allValid = true; 

    //tenemos que ir comparando y recorriendo la cadena caracter por caracter 

    for(var i = 0; i < checkString.length; i++){
        //necesito pasar la cadena a caracter 
        var caracters = checkString.charAt(i);
        for(var j = 0; j < abcOK.length; j++){
            if(caracters == abcOK.charAt(j)){
                break;
            }
            if(j == abcOK.length - 1){
                allValid = false; 
                break;
            }
        }
        if(!allValid){
            alert("Por favor escriba unicamente letras en el campo nombre");
            formulario.nombre.focus();
            return false;
        }
    }

    var abcOK = "1234567890";

    var checkString = formulario.edad.value;

    var allValid = true; 

    //tenemos que ir comparando y recorriendo la cadena caracter por caracter 

    for(var i = 0; i < checkString.length; i++){
        //necesito pasar la cadena a caracter 
        var caracters = checkString.charAt(i);
        for(var j = 0; j < abcOK.length; j++){
            if(caracters == abcOK.charAt(j)){
                break;
            }
            if(j == abcOK.length - 1){
                allValid = false; 
                break;
            }
        }
        if(!allValid){
            alert("Por favor escriba unicamente numeros en el campo edad");
            formulario.edad.focus();
            return false;
        }
    }

    // algo.algo@algo.algo
    var correoelectronico = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;

    var txt = formulario.email.value;

    alert("Email " + (correoelectronico.test(txt)?" ":" no ") + "valido");

    return true;
}