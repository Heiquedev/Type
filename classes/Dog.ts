import { Animal } from "./Animal";

export class Dog extends Animal {
    
   private race:string
   constructor(name: string,age:number, weight:number,race : string) {
    super(name, age, weight);
    this.race = race
   }
 
 bark(): void {
   console.log(`...`);
   
 }
 setRace(race:string):void{
  this.race = race

 }

getRace(){
  return `His race is${this.race}.`
}


 }