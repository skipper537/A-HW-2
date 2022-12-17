"use strict"

document.querySelector('.form__button').addEventListener('click', ()=>{
const N = +document.getElementById('N').value;
const M = +document.getElementById('M').value;
const CHECKBOX_VALUE = document.querySelector('.form__checkbox').checked;
const WITHOUT_PAIRS = document.querySelector('.without__pairs');
const ALL_NUMBERS = document.querySelector('.all__numbers');
let sum = 0;

if (N > M  || N == M){
alert('N ОБОВ’ЯЗКОВО!!! має бути меншим за M')
}  else if(N%1!==0) {
alert('N ОБОВ’ЯЗКОВО!!! має бути ЦІЛИМ ЧИСЛОМ!!!')
} else if(M%1!==0) {
alert('N ОБОВ’ЯЗКОВО!!! має бути ЦІЛИМ ЧИСЛОМ!!!')
} else if(N <= 0 || M <= 0) {
alert('N та М ОБОВ’ЯЗКОВО!!! мають бути більше НУЛЯ!!!') 
} else {
   if(CHECKBOX_VALUE){
      for(let i=N; i<=M; i++){
         if(i%2!=0)
         sum += i;
      }
      WITHOUT_PAIRS.innerHTML = sum + ',';
   } else {
      for(let i=N; i<=M; i++){
         sum += i;
      }
      ALL_NUMBERS.innerHTML = sum + ',';
   }
}
})