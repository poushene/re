const smallestDivisor = (num) => {
    if (num === 1) {
        return 1
    };
    if (num > 0) {
        const iter = (divisor, acc) => {
            if (acc % divisor === 0) {
                console.log("smallest divisor is " + divisor)
                return divisor
            };
            console.log(divisor)
            return iter(divisor + 1, num)
        };
        iter(2, num)
    };
    console.log("Please, enter an argument wich is > 0")
};

const bigLettersCount = (str) => {
    strUppered = str.toUpperCase()
    let i
    let counter = 0
    for (i = 0; i < str.length; i++) {
        console.log(i)
        if (strUppered[i] === str[i]) {
            counter = counter + 1
        };
    };
    return counter
};


const addDigitsStart = (num) => {
    num = String(num)
    let sum = 0
    for (let i = 0; i < num.length; i = i + 1) {
        sum = Number(sum) + Number(num[i])
    };
    return sum
};
const addDigits = (num) => {
    let sum = addDigitsStart(num)
    while (String(sum).length !== 1) {
        sum = addDigitsStart(sum)
    }
    return sum
}

const positionFinder = (str) => {
    str = str.replace(str[0], str[0].toUpperCase())
    for (let i = 0; i < str.length; i = i + 1) {
        if (str[i] === ' ') {

            console.log(str[i + 1])
            str = str.replace(str[i] + str[i + 1], str[i] + str[i + 1].toUpperCase())
        }
    }
    return str
}
console.log(positionFinder('lllk;k  sss sdkd ad sd asd ads  ds ss'))
let vin = 'dsadsadasd'
vin[0] = vin[0].toUpperCase()
console.log(vin)
console.log('GitTest')
console.log('One more commit')
console.log('Comcom')