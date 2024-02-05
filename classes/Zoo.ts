import { Animal } from "./Animal";
import { Bird } from "./Bird";
import { Mammal } from "./Mammal";

const zeMammal = new Mammal("Zé",12,11,"dark");
const falconBird = new Bird("Falcon",10,2.5,3.4);

console.log(zeMammal.getName());
console.log(zeMammal.getAge());
console.log(zeMammal.getCoat());
console.log(zeMammal.getWeight());
console.log(zeMammal.eat(2));
console.log(zeMammal.emitSound("..."));
console.log(zeMammal.breastfeed());
console.log(falconBird.getName());
console.log(falconBird.getAge());
console.log(falconBird.getWingspan());
console.log(falconBird.getWeight());
console.log(falconBird.eat(0.5));
console.log(falconBird.emitSound("hu...hu"));
console.log(falconBird.getWingspan());
console.log(falconBird.fly(7));
