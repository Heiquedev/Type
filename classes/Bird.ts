import { Animal } from "./Animal";

export class Bird extends Animal {
    private wingspan:number
   constructor(name: string,age:number,weight:number,wingspan:number) {
    super(name,age,weight);
    this.wingspan = wingspan
}
   
   fly(quantity: number ){
      console.log(`The owl has flown for ${quantity} minutes.`);
      
}

   getWingspan(){
    console.log(`The wingspan of ${this.name} is ${this.wingspan}.`);
    
}

    setWingspan(wingspan:number){
        this.wingspan = wingspan
    }

}
