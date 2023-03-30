function woodCalculate(chairQuantity , tableQuantity , bedQuantity){
    let perChairWood = 5;
    let perTableWood = 10;
    let perBedWood = 50;
    
    const totalChayerWood = chairQuantity * perChairWood;
    const totalTableWood = tableQuantity * perTableWood;
    const totalBedWood = bedQuantity * perBedWood;
    
    const totalWood = totalChayerWood + totalTableWood + totalBedWood;

    return totalWood
}

const result = woodCalculate(5,1,1);
console.log(result);
