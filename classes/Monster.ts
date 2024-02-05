import { Warrior } from "./Warrior";

export class Monster {
   private name: string;
   private strenght: number;
   private life: number;

  constructor(name: string) {
    this.name = name;
    this.strenght = 50;
    this.life = 10;
  }

  attack(espartano: Warrior): void {
    //ataca o guerreiro
    const damage = this.strenght;
    espartano.damageNoGuerreiro(damage);
    console.log(
      `${this.name} ataca ${this.getName} e inflige ${damage} de dano.`
    );
  }

  damageNoMonstro(damage: number) {
    //recebe dano do guerreiro
    this.life -= damage;
  }

  infoMonster() {
    console.log(`Monster:${this.name} \n\nStrenght: ${this.strenght} \nLife: ${this.life}`);
  }

  getName(){
    return this.name
  }



}
