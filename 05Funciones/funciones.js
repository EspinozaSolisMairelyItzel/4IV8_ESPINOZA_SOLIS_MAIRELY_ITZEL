//Vamos a programar todo bajo el esquema ES6
/*
Para jacascript ya conocemos el concepto de variable 

var 

Se sustituye por las nuevas variables: 
let --> es una variable de tipo comillas "rotejidas" ,ya que solo funciona dentro de un fragmento de codigo 

const --> si es constante 
*/

/*
if(true){
    const x = "x";
    console.log(x);
}
let x = "y";
console.log(x);
*/

//Una funcion flecha en JS a diferencia de una funcion normal, no genera su propio contexto (this), necesita ser declarada antes de ser usada y no necesita un return 

//funcion cosa (String hola) { String cosa; this.cosa = hola}

/*

//Vamos a hacer una funcion que sume dos numeros 
function sumarnumeros(n1, n2){
    return n1+n2;
}

const sumarDosNumeros = (n1,n2) => n1+n2;

console.log(`la suma de la funion es: (2,3): ${sumarnumeros(2,3)}`);
console.log(`la suma de la funion es: (4,3): ${sumarDosNumeros(2,3)}`); 

//para armar una funcion flecha debemos entender su estructura: 
//"cadena" (el tipo de variable, nombre de la funcion y los argumentos) => operacion 

*/

const razaDePerros = [
    "Gran Danes",
    "Doverman",
    "Chihuahua",
    "Pastor Aleman",
    "Pitbull",
    "San Bernardo",
    "Xoloscuincle"
];

/*

for(let i = 0; i < razaDePerros.length; i++){
    console.log(razaDePerros[i]);
}
for(const raza of RazaDePerros){
    console.log(raza);
}
for(const indice in razaDePerros){
    console.log(razaDePerros[indice]);
}
forEach
Iterar sobre elemento de arreglo que devuelven nada

razaDePerros.forEach(raza => console.log(raza));

Por ejemplo necesitamos una funcion para buscar la raza chihuahua y si no existe agregarla 

//funcion map esta funcion intera sobre los elementos del arreglo y regresa un arreglo diferente con el podemos hacer lo que queramos sin necesidad de modificar el arreglo original 

const razasDePerrosEnMayusculas = razaDePerros.map((razaDePerros, indice, arregloOriginal) =>
console.log(razaDePerros.toUpperCase()));
*/

if(razaDePerros.find(raza => raza === "Chihuahua")){
    console.log("La raza si se encontro y es Chihuahua")
    console.log(razaDePerros);
}else {
    razaDePerros.push("Chihuahua");
    console.log("Se agrego Chihuahua al arreglo");
    console.log(razaDePerros);
}
