const option1 = document.getElementById('btn1')
const option2 = document.getElementById('btn2')
const option3 = document.getElementById('btn3')
const option4 = document.getElementById('btn4')
const option5 = document.getElementById('btn5')
const button = document.querySelector('.button')

option1.addEventListener ('click', () =>{
  
  console.log ('has dado click 1')
} );
option2.addEventListener ('click', () =>{
  console.log ('has dado click 2')
} );
option3.addEventListener ('click', () =>{
  console.log ('has dado click 3')
} );
option4.addEventListener ('click', () =>{
  console.log ('has dado click 4')
} );
option5.addEventListener ('click', () =>{
  console.log ('has dado click 5')
} );

button.addEventListener ('click', () =>{
  alert ('enviaste')
} );



