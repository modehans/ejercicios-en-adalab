"use strict";

//Ejercicio 1

const array = [];
function get100Numbers() {
    for (let i=0; i<100; i++) {
        array.push(i+1);  //i++ lo hace de 2 en 2
        
        }
        console.log(array);
}


//Ejercicio 2
/*function getReversed100Numbers() {
    get100Numbers();
    const reverse = array.reverse();
   // console.log(reverse);
   document.write(reverse);
}
getReversed100Numbers();
*/

//Ejercicio 2.2
/*function bestLostNumbers() {
    for (let i=0; i<100; i= i+2) {
        array.push(i+2);  //i++ lo hace de 2 en 2
        
        }
        console.log(array);
}

bestLostNumbers();
*/


//Ejercicio 3

/*const array2 = [];
const lostNumbers = [4, 8, 15, 16, 23, 42];
for (let i = 0; i < lostNumbers.length; i++) { let indice = lostNumbers[i] %2;
    if (indice === 0) {
        array2.push(lostNumbers[i]);
    }
    console.log(lostNumbers);
    console.log(array2)
        
    }
*/

const tasks = [
    { name: "Recoger setas en el campo", 
      completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
    },
  ];

        
document.write(`<li>Tenemos ${tasks.length} tareas</li>`);


for(let i=0; i < tasks.length; i++){
    document.write(`<li>${tasks[i].name}</li>`);
}