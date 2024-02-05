let arrayJogos: string[] = ["freeFire", "codMobile", "clashRoyale"]

let jogo: string = "clashOfClans"

function addJogos (arrayJogos: string[],jogo: string){
    console.log(arrayJogos);
    return arrayJogos.push(jogo)
};

function removeJogo (arrayJogos: string[]){
    return arrayJogos.pop()
 };

addJogos(arrayJogos,jogo);
console.log(arrayJogos);
removeJogo(arrayJogos);
console.log(arrayJogos);

 