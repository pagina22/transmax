function suma(){
    //La variable a es para capturar el primer valor de la suma
    //La Variable b es para capturar el segundo valor de la suma
    //La varible S es la que guarda el resultado de la suma
    let a =0; 
    let b =0;
    let S =0;

    a= parseInt(prompt("Por favor ingrese el primer valor"));
    b= parseInt(prompt("Por favor ingrese el segundo valor"));
    S= a+b;
    alert("La suma es: " +S);
}

function opBasicas(){
    //v1 y v2 capturan los valores para las operaciones
    let v1= 0;
    let v2= 0;
    let resultado_suma = 0;
    let resultado_resta= 0;
    let resultado_multi= 0;
    let resultado_divi= 0;
    let uni= 0;

    v1=parseInt(prompt("Ingrse el primer valor para las operaciones"));
    v2=parseInt(prompt("Ingrese el segundo valor para las operaciones"));

    resultado_suma= v1+v2;
    resultado_resta=v1-v2;
    resultado_multi=v1*v2;
    resultado_divi=v1/v2;
    alert("La suma es " +resultado_suma);
    alert("La resta es " +resultado_resta);
    alert("La multiplicación es " +resultado_multi);
    alert("La divicion es " +resultado_divi); 
}

function cuadrado(){

    let N=0;
    let C=0;

    N=parseInt(prompt("Ingrese el numero"));

    C = N * N;

    alert("El cuadrado del numero ingresado es " +C);
}

// function areaTriangulo(){
//     const d = 2;
//     let b = 0;
//     let h = 0;
    
//     b = Number(prompt('Ingrese la base del triangulo: '));
//     h = Number(prompt('Ingrese la altura del triangulo: '));

//     r = b * h / d;

//     alert('El area del triangulo es: ' + r);


// }

areaTriangulo = () => {
    let b = 0;
    let h = 0;

    b = Number(prompt('ingrese base'));
    h = Number(prompt('ingrese altura'));

    r = b * h / 2;

    alert('Area: ' + r)
}

function inversionCapital(){
//Un individuo desea invertir su capital en un banco y requiere un sistema que le permita saber cuanto dinero ganara despues de N numero de años 
//Teniendo en cuenta que el banco paga un interes del 1,7% mensual.

    let cap=0;
    let meses=0;
    let total=0;

    cap = parseFloat(prompt("Ingrese la capital a ingresar al banco"));
    meses = parseFloat(prompt("Ingrese la cantidad de meses que va a estar en el banco"));

    total = cap * 1.7 * (meses / 12);

    alert('total: ' + Math.trunc(total))

    
}

/* realizar un algoritmo que permita saber el año de nacimiento de un individuo 
ingresando su edad y el año actual. */

function calcularEdad(){
    let edad = 0;

    edad = parseInt(prompt('Ingrese su edad: '));

    añoNacimiento = edad - -2023;

    alert('Año de nacimineto: ' + añoNacimiento);
}
 
function mayor(){
    let mayor = 0;
    let num1 = 0;
    let num2 = 0;

    num1 = parseInt(prompt('Ingrese el primer valor: '));
    num2 = parseInt(prompt('ingrese el segundo balor:'));
    if(num1>num2){
        mayor = num1;
    }
    else{
        mayor = num2;
    }

    alert('el resultado es:' + mayor);
}

function menor(){
    let menor = 0;
    let num1 = 0;
    let num2 = 0;
    let num3 = 0;

    num1 = parseInt(prompt('Ingrese el primer valor: '));
    num2 = parseInt(prompt('ingrese el segundo balor:'));
    num3 = parseInt(prompt('ingrese el terser valor:'));
    if(num1 <= num2 && num1 <= num3){
        menor = num1;
      
    }
    else if(num2 <= num1 && num2 <= num3){
            menor = num2;
    }
    else{
        menor = num3;
    }

    

    alert('el resultado es:' + menor);
}

function descuento(){
    //La variable a es para capturar el primer valor de la suma
    //La Variable b es para capturar el segundo valor de la suma
    //La varible S es la que guarda el resultado de la suma
    let a =0; 

    let S =0;

    let f =0;
    let z =0;

    a= parseInt(prompt("ingrese el valor"));
    z= parseInt(prompt("ingrese el precio del producto"));
    S= a/100;
    f= S * z;
    alert("su descuento es apagar %: " +f);
}
function convercion(){
    //La variable a es para capturar el primer valor de la suma
    //La Variable b es para capturar el segundo valor de la suma
    //La varible S es la que guarda el resultado de la suma
    let a =0; 
    let s =0;
    a= parseInt(prompt("ingresa el valor a convertir"));
    s= a*100;
    alert("la convercon de kilogramos a gramos es: " +s);
}
