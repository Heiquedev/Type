
let numeros:number[] = [1,2,3]

const arrayFruits: string[] = ["maçã", "abacaxi", "banana"]
const arraySeries: string[] = ["Berserk, Vagabond, Vilandsaga"]
const arrayLetras: string[] = ["A", "B", "C", "D", "E", "F", "G"]

let mix: (string | number)[] = ["eu", 23, "tu", 22];
let mix2: (string | number | boolean)[] = ["Nos", true, 26, false];

numeros.includes(1);

arraySeries.includes("Naruto");

arrayLetras.splice (2,1)

console.log(arrayFruits[0]);
console.log(arrayFruits[1]);
console.log(arrayFruits[2]);

arrayFruits.push("abacaxi")
console.log(arrayFruits);

arrayFruits.pop()
console.log(arrayFruits);

for (let i = 0; i < arrayFruits.length; i++){
   console.log(arrayFruits[i]);
}

let numero: number[] = [2,1,3,4]
let dobrados: number[] = numero.map( numero => numero *2)

let frutas: string[] = ["Melancia", "Pera", "Goiaba" ]
console.log(frutas);

let frutaComprefixo: string[] = frutas.map(frutas => `Fruta: ${frutas}`)
console.log(frutaComprefixo);



let numero2: string[] = ["1", "2", "3"]
console.log(numero2);

let numeroConvertidos: number[] =  numero2.map(numero => Number(numero))
console.log(numeroConvertidos);


let numero3: number[] = [1 ,2, 3, 4, 5]
console.log(numero3);
let numerosMenores: number[] = numero3.filter(numero => numero < 3)
console.log(numerosMenores);


let numero4: number[] = [1, 2, 3, 4, 5,]

let soma: number = numero4.reduce((acumulador,numero) =>{
    return acumulador + numero
},0)
