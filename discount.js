function ticketPrice(ticketQuantity){
    const first100 = 100;
    const second100 = 90;
    const rest200 = 70;

    if(ticketQuantity <= 100){
        const price = first100 * ticketQuantity
        return price
    } else if(ticketQuantity <= 200){
        const first100price = 100 * first100;
        const restTicketCount = ticketQuantity - 100;
        const restTicketPrice = restTicketCount * second100;
        const secprice = first100price + restTicketPrice;
        return secprice;
    } else{
        const first100price = 100 * first100;
        const second100price = 100 * second100;
        const restTicketCount = ticketQuantity - 200;
        const restTicketPrice = restTicketCount * rest200;
        const restPrice = first100price + second100price + restTicketPrice;
        return restPrice;
    }
}

const ticket = ticketPrice(220);
console.log(ticket);