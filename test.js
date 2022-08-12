function sum(i){
    if(i === 1){
        return 1
    }
    return i + sum(i-1)
}
const result = sum(5);
console.log(result);


function facturial(f){
    if(f == 1){
        return 1
    }
    return f * facturial(f-1)
}
const fo = facturial(5);
console.log(fo);