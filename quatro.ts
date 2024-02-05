 let arrayFilmes: string[] = ["Berserk", "Vilandsaga", "Vagabond"]
 let film: string = "Berserk"

 function contemFilme( arrayFilmes:string[], film: string ):boolean{
    return arrayFilmes.includes(film)
 }

 console.log(contemFilme(arrayFilmes,film));