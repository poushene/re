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
