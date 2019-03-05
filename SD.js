const stringReverse = (str) => {
    let newString = str[str.length - 1]
    while (str.length !== newString.length) {
        newString = newString + str[str.length - newString.length - 1]
    }
    return newString
};

const isPrime = (num) => {
    if (num <= 1) {
        console.log('false')
        return false
    };
    for (let check = 2; check < num - 1; check = check + 1) {
        if (num % check === 0) {
            console.log('false')
            return false
        };
    };
    console.log('true')
    return true
};
isPrime(4)

const square = (n) => {
    return n ** 2
}
console.log(square(12))

const sumOfSquares = (n) => {
    return square(n) * 2
}

console.log(sumOfSquares(12))

const squareSumOfSquares = (n) => {
    return sumOfSquares(num) ** 2
}
console.log(squareSumOfSquares())


console.log('some new recentrly made code')