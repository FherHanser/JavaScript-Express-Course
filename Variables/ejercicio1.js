// La variable es un contenedor de información.

/* Diferencias entre LET y VAR,
Var es una variable global, no tiene un ámbito específico para ser usada,
a diferencia de LET que si tiene ámbito limitado de bloque para ser utilizada.
*/



var pais = "Guatemala";
var continente = "América";
var idioma = "Español";

var dataCompleta  = pais + ', ' + continente;
console.log("Idioma: ", idioma)
alert (dataCompleta);


// en modo objeto

let objetoPais = {
pais: "Guatemala",
continente: "América",
idioma: "Español"
}

alert(objetoPais.pais + ', ' +objetoPais.continente);



let arregloPais = ["Guatemala", "Pedro", "Maiz"];


for (let i = 0; i < arregloPais.length; i++){

    console.log(arregloPais[i]);
}



let arregloPais2 = ["México", "Pedro", "Frijol"];

for (let i = 0; i < arregloPais2.length; i++){

    console.log(arregloPais2[0]);

}