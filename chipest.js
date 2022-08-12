let phones = [
    {name: 'Samsung', color: 'black', price: 80000, storage: '64gb', camera: '12MP'},
    {name: 'Iphone', color: 'white', price: 150000, storage: '64gb', camera: '12MP'},
    {name: 'Nothing', color: 'black', price: 60000, storage: '64gb', camera: '12MP'},
    {name: 'Nokia', color: 'black', price: 20000, storage: '32gb', camera: '12MP'},
    {name: 'xoami', color: 'black', price: 30000, storage: '64gb', camera: '12MP'},
    {name: 'Realme', color: 'silver', price: 32000, storage: '32gb', camera: '12MP'}
]
function chipest(phones) {
    let chipest = phones[0]
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < chipest.price){
            chipest = phone;
        }
    }
    return chipest;
}
let mySelection = chipest(phones);
console.log(mySelection);
