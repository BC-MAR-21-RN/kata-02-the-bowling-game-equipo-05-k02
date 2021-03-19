let threws = [];
let score = 0;
let bonus = null;

let allscores = [];
let allbonus = [];

let allThrews = [];

let finalResult = [];
//let scoreAndBonus = [];



const allThrew = () =>{
    let acum = 0;
    let c = 0;
    for (let index = 0; index < 10; index++) {
         
        secondThrew();
        scoreThrew();
        isSpare(score)
        getBonusAndScore(bonus)
        threws = [];
        score = 0;
        bonus = null
    }
    for (let index = 0; index < 20; index++) {
        getFinalResult(index);
        //acum += allThrews[index];
    }
    
}
 const firstThrew = () => {//primer Lanzamiento
    let threw = Math.floor(Math.random() * 11);
        if(threw === 10){
            bonus = 'strik'
            threws.push(threw);
        } else if( bonus != 'strik') {
            threws.push(threw)
        }
    return threw

}
const secondThrew = () => {//Segundo Lanzamiento
    let valueFisrThrew = firstThrew();
    let valueSecondThrew = Math.floor(Math.random() * ( 11 - valueFisrThrew))
    threws.push(valueSecondThrew)

    return valueSecondThrew
}
const scoreThrew = () => {//sumatoria de  los dos lanzamientos de un turno 
   return threws.forEach( numero => {
        score += numero
    })
}
const getBonusAndScore = (bonus) => { //agregamos el primer resultado de los 20 tiros a allscores
    allThrews.push(threws[0]);
    allThrews.push(threws[1]);

    allbonus.push(bonus);
}
const isSpare = (score) => { // vemos si se cumple la opcion de spare
    if(score == 10 && threws[1] != 0){
        bonus = 'spare'
    }
}

const getFinalResult = (index) => {
    
    if(allbonus[index] === 'strik'){//Suma los dos lanzamientos del turno MAS los dos lanzamientos del siguiente
            finalResult.push((allThrews[index] + allThrews[index + 2] + allThrews[index + 3]));
    }else if(allbonus[index] === 'spare'){//Suma los lanzamientos del turno MAS el lanzamiento del siguiente
            finalResult.push((allThrews[index] + allThrews[index + 1] + allThrews[index + 2]));
    } else if(allbonus[index] === null) {//Suma los dos lanzamientos ya que no tiro los 10
            finalResult.push((allThrews[index] + allThrews[index + 1]));
    } 
}

console.log(allThrew())
console.log(allThrews)
console.log(allbonus)
console.log(finalResult)

module.exports = {firstThrew, secondThrew, scoreThrew}