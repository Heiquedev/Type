import { Monster } from "./Monster";
export class Warrior {
  private name: string;
  private type: string;
  private strenght: number;
  private life: number;

  constructor(name: string, type: string, strenght: number) {
    this.name = name;
    this.type = type;
    this.strenght = strenght;
    this.life = 100;
   
   
  }

attack(tigre:Monster): void{
    const damage = this.strenght;
    tigre.damageNoMonstro(damage)
    console.log(`${this.name} ataca ${this.getName} e inflige ${damage} de dano.`);
   
}

damageNoGuerreiro(damage:number){
    this.life-=damage

}
infoWarrior(){
    console.log(`Warrior:${this.name} \n\nType: ${this.type} \nStrenght: ${this.strenght} \nLife: ${this.life}`)
   
}

getName(){
    return this.name
}

getLife(){
    return this.life
}

setLife(life:number){
    this.life = life
}

}

const espartano = new Warrior("Julius","espartano",100);
console.log(espartano.getName());
console.log(espartano.getLife());
console.log(espartano.setLife(43));




