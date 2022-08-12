function isLeapYear(year) {
    const reminder = year % 4;
    if(reminder == 0){
        console.log(year, ' is a leapyear')
    } else{
        console.log(year, 'is not a leapyear');
    }
}
isLeapYear(2016)


