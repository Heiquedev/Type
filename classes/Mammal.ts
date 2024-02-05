import { Animal } from "./Animal";

export class Mammal extends Animal {
    
    private coat:string

   constructor(name: string,age:number, weight:number,coat : string) {
    super(name, age, weight);
    this.coat = coat
   }


    breastfeed():void{
        console.log("The mammal is well fed");
    
    }

    getCoat(){
        return this.coat
    }

    setCoat(coat:string):void{
        this.coat = coat

    }

}