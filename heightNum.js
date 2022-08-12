// Find The Largest Number

function numbers(arrNum) {
    let elem = arrNum[0];
    for (let i = 0; i < arrNum.length; i++) {
        const index = i;
        let element = arrNum[index];
        if (element > elem) {
            elem = element
        }
    }
    return elem
}

const allNumber = [552, 5, 55, 655];
let heighestNum = numbers(allNumber);
console.log('The Height number is :',heighestNum);


// Find the lowest number

function lowestNum(number){
    let lowNumber = number[0];
    for(let i = 0; i < number.length; i++){
        const index = i;
        let element = number[index];
        if(element < lowNumber){
            lowNumber = element
        }
    }
    return lowNumber
}

const mainNumber = [5, 564, 26, 1, 26, -59, 12];
let lowNum = lowestNum(mainNumber);
console.log('The Small Number Is: ',lowNum);
