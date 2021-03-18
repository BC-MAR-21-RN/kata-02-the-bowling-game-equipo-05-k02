let array = ['a','b','c','d','e'];

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    // console.log(element)
}

array.forEach((letra,  index) => {
    // console.log(index, letra)
    if(index === 4){
        console.log(letra)
    }
})