const h1 = document.querySelector('h1');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
// const btn1 = document.querySelector('#btnCalcular1');
// const btn2 = document.querySelector('#btnCalcular2');
// const btn3 = document.querySelector('#btnCalcular3');
const result = document.querySelector('#result');

form.addEventListener('submit', sumaInputsValues);
// form.addEventListener('submit', resta);
// form.addEventListener('submit', multiplicacion);
// form.addEventListener('submit', division);



function sumaInputsValues(event) {
    event.preventDefault();
    const sumaInputs = (+input1.value+ +input2.value);
    result.innerText = "el resultado de la suma es " + sumaInputs;
}

// function resta(event) {
//     event.preventDefault();
//     const restaInputs = (+input1.value - +input2.value);
//     result.innerText = "el resultado de la resta es " + restaInputs;
// }

// function multiplicacion(event) {
//     event.preventDefault();
//     const multInputs = (+input1.value * +input2.value);
//     result.innerText = "el resultado de la multiplicacion es " + multInputs;
// }

// // function division(event) {
// //     event.preventDefault();
// //     const diviInputs = (+input1.value / +input2.value);
// //     result.innerText = "el resultado de la division es " + diviInputs;
// // }



