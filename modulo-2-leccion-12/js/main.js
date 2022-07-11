'use strict';
//==== Ejercicio 1.1
const text1=document.querySelector('.js_text1');
const marks = [5, 4, 6, 7, 9];
const inflatedMarks = marks.map((value)=>value+1);
;
inflatedMarks.forEach((element) => {text1.innerHTML += (`<li>La nota incrementada es ${element}</li>`)});


//==== Ejercicio 1.2
const text2=document.querySelector('.js_text2');
const users = [
  { name: "María", isPremium: false },
  { name: "Lucía", isPremium: true },
  { name: "Susana", isPremium: true },
  { name: "Rocío", isPremium: false },
  { name: "Inmaculada", isPremium: false },
];

// EJERCICIO SEGÚN EXPLICACIONES DE PROGRAMACIÓN HASTA AHORA

const messages=users.map((userData)=>{
  if (userData.isPremium===true){
    return {saludo: (`Bienvenida ${userData.name}. Gracias por confiar en nosotros.`)};

  }else{
        return {saludo:(`Bienvenida ${userData.name}.`)};
  }
});

console.log(messages);

 messages.forEach((data)=>{text2.innerHTML += `<li> ${data.saludo}</li>`}); //También se puede hacer un for ... of o un for clásico


// EJERCICIO CON DESESTRUCTURACIÓN

 /* 
const messages=users.map(({name, isPremium})=>{
  if (isPremium===true){
    return {saludo: (`Bienvenida ${name}. Gracias por confiar en nosotros.`)};

  }else{
        return {saludo:(`Bienvenida ${name}.`)};
  }
});

console.log(messages);

messages.forEach(({saludo})=>{text2.innerHTML += `<li> ${saludo}</li>`});  */