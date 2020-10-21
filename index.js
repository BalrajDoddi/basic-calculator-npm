function add(x,y) {
    return x+y;
}

function substract(x,y) {
    return x-y;
} 

function multiply(x,y) {
    return x*y;
}

function divide(x,y) {
    if(y==0) {
        return "Divide by 0 exception";
    }
    return x/y;
}


module.exports = add, substract, multiply, divide;