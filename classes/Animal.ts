export class Animal {
   name: string;
   age: number;
   weight: number
  constructor(name: string,age:number,weight:number) {
    this.name = name
    this.age = age
    this.weight = weight
}

eat(quantity: number): void {
  console.log(`The animal has eaten ${quantity} grams of food`);

}
  
emitSound(sound: string):void{
console.log(sound);

}

getName(){
  return `He/She is called ${this.name}.`
}

 getAge(){
  return `He/she is ${this.age}.age years old.`
}

getWeight() {
  return `He/she weighs ${this.weight} kilos`
}

setName(name:string):void{
  this.name = name
}

setAge(age:number): void{
   this.age = age
}

setWeight(weight:number):void{
  this.weight = weight
}

}