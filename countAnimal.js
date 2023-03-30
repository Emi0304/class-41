function countAnimal (miles) {
    var firstFive = 10;
    var secondTen = 10;
    var last = 10;
    if ( miles <= 5) {
        const seeAnimals = miles * firstFive;
        return seeAnimals;
    }
    else if ( miles <= 10) {
        const firstFiveSeeAnimals = 5 * firstFive;
        const secondTenSeeAnimals = (miles - 5) * secondTen;
        return firstFiveSeeAnimals + secondTenSeeAnimals;
    }
    else {
        const firstFiveAnimals = 5 * firstFive;
        const secondTenAnimals = 5 * secondTen;
        const lastTenAnimals = (miles - 10) * last;
        return firstFiveAnimals + secondTenAnimals + lastTenAnimals;

    }
  
}

const result = countAnimal(200);
console.log(result);