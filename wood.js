/*
 * PerchairWood = 3cft
 * perTableWood = 20cft
 * perBedWood = 50cft
 */

function woodCalculator(chair,table,bed) {
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;

    const chairWood = perChair * chair;
    const tableWood = perTable * table;
    const bedWood = perBed * bed;
    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
const woodNeed = woodCalculator(2, 2, 5);
console.log(woodNeed + 'CFT');