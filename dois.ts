let a: number = 10
let b:number = 10 


console.log(b);
b = 5
console.log(a,b);

//1ºSera impresso os números 10, depois o valor de "b" sera alterado para 5 e imprimido junto do 10.
//2º Os valores impressos seram todos iguais, portanto "10".
//3º Para inverter os valores teremos que criar uma terceira variavel para armazenar o primeiro valor, para que o primeiro seja igual
//ao segundo e depois trocar o segundo valor pelo terceiro.

let pri: number = 2 
let seg: number = 1
let ter= pri
 pri = seg
 seg = ter

 console.log(pri,seg,ter);

console.log(`O antigo valor de "pri" era 2 agora é: ${pri}`);
console.log(`O antigo valor de "seg" era 1 agora é: ${seg}`);

let um:number = 10
let dois:number = 20
let tres = um

dois =  tres
um = dois

console.log(um, dois, tres);



const arrayFruits:string[]= ["maçã", "abacaxi", "banana"]

console.log(arrayFruits[0]);
console.log(arrayFruits[1]);
console.log(arrayFruits[2]);

arrayFruits.push("abacaxi")
console.log(arrayFruits);

arrayFruits.pop()
console.log(arrayFruits);



