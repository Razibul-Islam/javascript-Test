let shopping = [
    {name: 'Shart', price: 1200, quantity: 5},
    {name: 't-shart', price: 700, quantity: 4},
    {name: 'pant', price: 1000, quantity: 3},
    {name: 'shoe', price: 2000, quantity: 2},
    {name: 'belt', price: 600, quantity: 3},
]

function totalCost(products) {
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i]
        const totalprice = product.price * product.quantity
        sum += totalprice

    }
    return sum;
}
let main = totalCost(shopping);
console.log(main);