let digitString = digit => {
    let stringBackwards = []
    for(let i = digit.length-1; i>=0; i--){
         stringBackwards.push(digit.split('')[i])
    }
    console.log(stringBackwards.join(''))
}

digitString("213") // prints 312
digitString("1") // prints 1
digitString("314") // prints 413
digitString("123") //prints 321