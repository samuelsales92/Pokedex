/* função somando multiplos */
var a = parseInt(gets(3));
var N = parseInt(gets(18));

let numeroA = a;
let numeroB = N;

function calculate_sum(numeroA, numeroB)
{
    m = N / a;
    sum = m * (m + 1) / 2;
    ans = a * sum;
    return ans;
}

let res = calculate_sum();
console.log(res);



/* Função triangulo de moedas altura maxima */

 let N = 12; 

function alturaMaxima(N) {
  let inicio = 1;
  let fim = N;
  while (inicio <= fim) {
    let meio = Math.floor((inicio + fim) / 2);
    let moedas = (meio * (meio + 1)) / 2;
    if (moedas <= N) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }
  return inicio - 1;
}


console.log(alturaMaxima(N)); 

/* função soma de pares consecutivos */

let x = parseInt(gets());
let n = x;

function numeros() {

  for (let i = 0; i < 4; i++){
    x += 2  
    n += x
  }
    return n;
}



while (x == 0){
  
   console.log("digite um valor");
}
   if (x %  2 !== 0) {
     x = x + 1
     n = x
   }
    
  

    
console.log(numeros(n));

let x2 = parseInt(gets());
let n2 = x2;

function numeros2(n2) {
  
  for (let i = 0; i < 4; i++){
    x2 += 2  
    n2 += x2
  }
    return n2
}



while (x2 == 0){
  
   console.log("digite um valor");
}
   if (x2 %  2 !== 0) {
     x2 = x2 + 1
     n2 = x
   }


console.log(numeros2(n2));


/* função permetro de um triangulo equilatero */

let pi = 3.14159265358979323846;
 
let a = 9;

function area_circumscribed(a)
{
 
  let valor1 =(a * a * (pi / 3));
  let arredondado = parseFloat(valor1.toFixed(2));

  return arredondado;

}

console.log("A area da circuferencia eh: " + area_circumscribed(a));