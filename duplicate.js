const names = ['Razibul', 'salafi', 'kamrul', 'Rahim', 'samioul', 'Razibul', 'samioul'];

function removeduplicate(names) {
    const unick = []
    for(let i = 0; i < names.length; i++){
        let name = names[i];
        if(unick.includes(name) === false){
            unick.push(name)
        }
    }
    return unick;
}
let unickName = removeduplicate(names);
console.log(unickName);