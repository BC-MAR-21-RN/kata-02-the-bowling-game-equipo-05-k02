let threws = [];
let score = 0;
let bonus = null;


const firstThrew = () => {
    let threw = Math.floor(Math.random() * 11);
        if(threw === 10){
            bonus == 'strik'
            threws.push(threw);
        } else if( bonus != 'strick') {
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

// secondThrew();
// scoreThrew();
const fillframe = () => {
    for (let index = 0; index <= 10; index++) {
        
        threwsCopy = threws;

        secondThrew();
        scoreThrew();


        
    }
}