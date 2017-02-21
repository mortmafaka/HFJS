var taxi ={
    make:"Webville motors",
    model:"Taxi",
    year:1953,
    color:"yellow",
    passangers:4,
    convertible:false,
    mileage:281341
};

function prequal(car){
    if(car.mileage > 10000){
        return false;
    } else if(car.year > 1960){
        return false;
    } return true;
    }
    
var worthALook = prequal(taxi);

if(worthALook){
    console.log("You  gotta check out this " +taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}
