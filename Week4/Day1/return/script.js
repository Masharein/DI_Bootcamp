function chooseChocolate(amountMilk){
    let typeChocolate;
    if(amountMilk <= 0) {
        typeChocolate = "dark";
    } else {
        typeChocolate = "white";
    }
    calculatePrice(typeChocolate);
}

function calculatePrice (blablabla) {
    let price = 10;
    if (blablabla === "dark") {
        price += 5;
    } else {
        price += 2;
    }
    return price;
}

chooseChocolate(20)


// OTHER WAY

function chooseChocolateSecond(amountMilk){
    let typeChocolate;
    if(amountMilk <= 0) {
        typeChocolate = "dark";
    } else {
        typeChocolate = "white";
    }
    return typeChocolate;
}

function calculatePriceSecond () {
    let type = chooseChocolateSecond(20); 
    //the variable type is equal to the result of the chooseChocolate function
    //so type is equal to the value of the typeChocolate variable
    //in this situation type is equal to white

    let price = 10;
    if (type === "dark") {
        price += 5;
    } else {
        price += 2;
    }
    console.log("price is ", price);
}

calculatePriceSecond()

function chooseChocolateThird(amountMilk){
    if(amountMilk <= 0) {
        return "dark";
    } else {
        return "white";
    }
}

const result = chooseChocolateThird(0);
//the result of the function is "dark" bc I returned "dark"
// now that the funciton has a result, 
//I just need to call the function to use this result
console.log("the result is ", result);
