let shopping = [
    {name: 'Shart', price: 1200},
    {name: 't-shart', price: 700},
    {name: 'pant', price: 1000},
    {name: 'shoe', price: 2000},
    {name: 'belt', price: 600},
    {name: 'Shart', price: 1200},
    {name: 't-shart', price: 700},
    {name: 'pant', price: 1000},
    {name: 'shoe', price: 2000},
    {name: 'belt', price: 600}
]

function totalCost(products) {
    // let item = products[0]
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i]
        // if(product.price < item.price){
        //     item = product
        // }
        sum += product.priceb

    }
    return sum;
}
let main = totalCost(shopping);
console.log(main);