function ejemplo() {
    var a = 10;
    let b = 20;
    const c = 30;

    if (true) {
        var d = 40;
        let e = 50;
        const f = 60;
    }

    console.log(a); // 10
    console.log(b); // 20
    console.log(c); // 30
    console.log(d); // 40 (var tiene ámbito de función)
    console.log(e); // Error: e no está definido (let tiene ámbito de bloque)
    console.log(f); // Error: f no está definido (const tiene ámbito de bloque)
}




/*En este ejemplo, a es accesible en toda la función ejemplo() debido a que fue declarada con var. 
b y c son accesibles solo dentro de la función ejemplo() porque fueron declaradas con let y const, respectivamente. 
d es accesible en toda la función ejemplo() debido a que fue declarada con var y e y f solo son accesibles dentro 
del bloque if donde fueron declaradas con let y const, respectivamente.*/