let threws = [];
let allscores = [];
let score = 0;
let bonus = null;

const allThrew = () =>{
    
    for (let index = 0; index < 10; index++) {
        secondThrew();
        scoreThrew();
        isSpare(score)
        // scores(score, bonus)
        console.log(scores(score))
        console.log(result(bonus))
        threws = [];
        score = 0;
        bonus = null
    }
}
 const firstThrew = () => {
    let threw = Math.floor(Math.random() * 11);
        if(threw === 10){
            bonus = 'strik'
            threws.push(threw);
        } else if( bonus != 'strik') {
            threws.push(threw)
        }
    return threw

}
const secondThrew = () => {
    let valueFisrThrew = firstThrew();
    let valueSecondThrew = Math.floor(Math.random() * ( 11 - valueFisrThrew))
    threws.push(valueSecondThrew)

    return valueSecondThrew
}
const scoreThrew = () => {
   return threws.forEach( numero => {
        score += numero
    })
}
const isSpare = (score) => {
    if(score == 10 && threws[1] != 0){
        bonus = 'spare'
    }
}

const scores = (score, bonus) => {
     let arrayScores = score

     allscores.push(copyscores)
    return arrayScores
}

const results = (bonus) => {
    for (let index = 0; index < allscores.length; index++) {
        
        if(bonus === 'strik'){
            allscores[index + 1]
            
        } else if(bonus === 'spare'){
   
        } else {
   
        }
        
    }

}
console.log(allThrew())
console.log(allscores)
// secondThrew();
// scoreThrew();
//  module.exports = {firstThrew, secondThrew, scoreThrew}