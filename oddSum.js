function getSumOfArray(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const ined = i;
        const element = numbers[ined];
        sum += element
        console.log(ined , element, sum)
    }
    return sum;
}

function getOdd(numbers) {
    const odd = [];
    for(let i = 0; i < numbers.length; i++){
        const inedx = i;
        const element = numbers[inedx];
        if(element % 2 !== 0){
            console.log(inedx , element);
            odd.push(element);
        }
    }
    return odd;
}

let myNumbers = [21, 45, 3, 6, 4, 58, 51, 54, 5, 15, 78, 95, 36, 14, 86];
let arraySum = getOdd(myNumbers);
console.log(arraySum);
const getSumOfOdd = getSumOfArray(arraySum);
console.log(getSumOfOdd);











// Find lowest number in a array;
// Find height number in a array;
