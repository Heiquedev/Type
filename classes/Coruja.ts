import { Animal } from "./Animal";

export class Owl extends Animal {
    
   constructor(name: string,weight:number,age:number) {
    super(name,weight,age);
 
}

fly(quantity: number ){
console.log(`The owl has flown for ${quantity} minutes`);

}

chirp(): void{
 console.log(`HU     HU`);
 
}

}
const owlMy = new Owl("Vera",2, 2.5)
console.log(owlMy.chirp());
console.log(owlMy.fly(6));
console.log(owlMy);

